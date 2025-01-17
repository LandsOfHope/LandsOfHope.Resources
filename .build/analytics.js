const { WebTracerProvider, BatchSpanProcessor } = require("@opentelemetry/sdk-trace-web");
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');
const { CompositePropagator, W3CTraceContextPropagator } = require('@opentelemetry/core');
const { getWebAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-web');
const { ZoneContextManager } = require('@opentelemetry/context-zone');
const { Resource } = require('@opentelemetry/resources');
const { registerInstrumentations } = require('@opentelemetry/instrumentation');
const { ATTR_SERVICE_NAME, ATTR_SERVICE_VERSION } = require('@opentelemetry/semantic-conventions');
const { OTLPLogExporter } = require('@opentelemetry/exporter-logs-otlp-proto');
const { LoggerProvider, BatchLogRecordProcessor } = require('@opentelemetry/sdk-logs');

if (!window.TRACING_URL) {
    console.error('TRACING_URL is required for analytics');
    return;
}

const serviceName = window.TRACING_SERVICE_NAME ?? 'landsofhope-play-frontend';
const serviceVersion = window.TRACING_SERVICE_VERSION ?? 'v0';

const corsUrlPattern = new RegExp("https:\/\/((?!data).*\.)?landsofhope\.(com|dev|local)(\/.*)?$");
const isDebugMode = localStorage.getItem('DEBUG_ANALYTICS') === 'true';

let provider = null;
let loggerProvider = null;
let logger = null;
let isShuttingDown = false;

const initializeProviders = () => {
    if (provider || isShuttingDown) return;

    provider = new WebTracerProvider({
        resource: new Resource({
            [ATTR_SERVICE_NAME]: serviceName,
            [ATTR_SERVICE_VERSION]: serviceVersion,
            environment: window.location.hostname
        }),
        spanProcessors: [
            new BatchSpanProcessor(new OTLPTraceExporter({ url: `${window.TRACING_URL}/v1/traces` }))
        ]
    });

    provider.register({
        contextManager: new ZoneContextManager(),
        propagator: new CompositePropagator({
            propagators: [
                new W3CTraceContextPropagator(),
            ],
        })
    });

    registerInstrumentations({
        instrumentations: [
            getWebAutoInstrumentations({
                '@opentelemetry/instrumentation-document-load': {
                    propagateTraceHeaderCorsUrls: [corsUrlPattern]
                },
                '@opentelemetry/instrumentation-user-interaction': {
                    propagateTraceHeaderCorsUrls: [corsUrlPattern]
                },
                '@opentelemetry/instrumentation-xml-http-request': {
                    propagateTraceHeaderCorsUrls: [corsUrlPattern]
                },
                '@opentelemetry/instrumentation-fetch': {
                    propagateTraceHeaderCorsUrls: [corsUrlPattern]
                }
            })
        ],
    });

    loggerProvider = new LoggerProvider();
    const logExporter = new OTLPLogExporter({ 
        url: `${window.TRACING_URL}/v1/logs`,
        timeoutMillis: 5000
    });
    loggerProvider.addLogRecordProcessor(new BatchLogRecordProcessor(logExporter));
    logger = loggerProvider.getLogger(`${serviceName}-logger`);

    setupConsoleOverrides();
};

const setupConsoleOverrides = () => {
    if (!logger) return;

    const consoleOverrides = {
        log: { severity: 'INFO', original: console.log },
        error: { severity: 'ERROR', original: console.error },
        warn: { severity: 'WARN', original: console.warn }
    };

    Object.entries(consoleOverrides).forEach(([method, config]) => {
        console[method] = function (...args) {
            if (isDebugMode) {
                config.original.apply(console, ['[Analytics]', ...args]);
            }
            
            try {
                const body = args.map(arg => 
                    typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
                ).join(' ');
                
                logger.emit({
                    body,
                    severityText: config.severity,
                    attributes: {
                        url: window.location.href,
                        timestamp: new Date().toISOString()
                    }
                });
            } catch (e) {
                config.original.call(console, '[Analytics Error]', e);
            }
            
            config.original.apply(console, args);
        };
    });
};

const performCleanup = async () => {
    if (isShuttingDown || !provider) return;
    isShuttingDown = true;
    
    try {
        await provider.shutdown();
        await loggerProvider.shutdown();
        provider = null;
        loggerProvider = null;
        logger = null;
        
        if (isDebugMode) {
            console.log('Analytics shutdown complete');
        }
    } catch (e) {
        console.error('Error shutting down analytics:', e);
    } finally {
        isShuttingDown = false;
    }
};

window.addEventListener('pagehide', performCleanup, { capture: true });

window.addEventListener('error', (event) => {
    console.error('Uncaught Error', event.error);
});

initializeProviders();

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        initializeProviders();
    }
}, { capture: true });