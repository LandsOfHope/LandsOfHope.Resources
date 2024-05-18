const { WebTracerProvider, BatchSpanProcessor } = require("@opentelemetry/sdk-trace-web");
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');
const { B3Propagator, B3InjectEncoding } = require('@opentelemetry/propagator-b3');
const { CompositePropagator, W3CTraceContextPropagator } = require('@opentelemetry/core');
const { getWebAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-web');
const { ZoneContextManager } = require('@opentelemetry/context-zone');
const { Resource } = require('@opentelemetry/resources');
const { registerInstrumentations } = require('@opentelemetry/instrumentation');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');

const provider = new WebTracerProvider({
    resource: new Resource({
        [SemanticResourceAttributes.SERVICE_NAME]: 'landsofhope-play-frontend',
        [SemanticResourceAttributes.SERVICE_VERSION]: 'v0',
    }),
});
provider.addSpanProcessor(new BatchSpanProcessor(new OTLPTraceExporter({ url: TRACING_URL })));

provider.register({
    contextManager: new ZoneContextManager(),
    propagator: new CompositePropagator({
        propagators: [
            new B3Propagator({ injectEncoding: B3InjectEncoding.MULTI_HEADER }),
            new W3CTraceContextPropagator(),
        ],
    })
});
registerInstrumentations({
    instrumentations: [
        getWebAutoInstrumentations(
            {
                '@opentelemetry/instrumentation-document-load': {
                    propagateTraceHeaderCorsUrls: [new RegExp("https:\/\/((?!data).*\.)?landsofhope\.(com|dev|local)(\/.*)?$")]
                },
                '@opentelemetry/instrumentation-user-interaction': {
                    propagateTraceHeaderCorsUrls: [new RegExp("https:\/\/((?!data).*\.)?landsofhope\.(com|dev|local)(\/.*)?$")]
                },
                '@opentelemetry/instrumentation-xml-http-request': {
                    propagateTraceHeaderCorsUrls: [new RegExp("https:\/\/((?!data).*\.)?landsofhope\.(com|dev|local)(\/.*)?$")]
                },
                '@opentelemetry/instrumentation-fetch': {
                    propagateTraceHeaderCorsUrls: [new RegExp("https:\/\/((?!data).*\.)?landsofhope\.(com|dev|local)(\/.*)?$")]
                }
            }
        )
    ],
});