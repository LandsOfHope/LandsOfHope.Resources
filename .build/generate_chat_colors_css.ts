import { mkdirSync, writeFileSync } from 'fs';
import { env } from 'process';

const dataURL = env['HTTP_DATA_URL'] ?? "https://data.landsofhope.com";

const chatColorResponse = await fetch(`${dataURL}/schemas/v1/chat/chat-color.json`);
const chatColors = await chatColorResponse.json();
const enumValues = chatColors.enum as string[];

const mappedValues = enumValues.flatMap(
    (color: string) => {
        return [
            `.chat-color-${color} { color: #${color}; }`,
            `.bg-chat-color-${color} { background-color: #${color}; }`
        ];
    }
);
const css = mappedValues.join('\n');

mkdirSync('css/chat', { recursive: true });
writeFileSync('css/chat/chat-colors.css', css);