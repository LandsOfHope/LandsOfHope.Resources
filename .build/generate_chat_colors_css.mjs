import { mkdirSync, writeFileSync } from 'fs';
import fetch from 'node-fetch'

const main = async () => {
    const chatColorResponse = await (await fetch("https://data.landsofhope.com/schemas/v1/chat/chat-color.json")).json();
    const enumValues = chatColorResponse.enum;

    let css = "";
    for (var i = 0; i < enumValues.length; ++i) {
        const color = enumValues[i];

        css += `\r.chat-color-${color} { color: #${color}; }\r.bg-chat-color-${color} { background-color: #${color}; }`;
    }

    mkdirSync('css/chat', { recursive: true });
    writeFileSync('css/chat/chat-colors.css', css);
}

main();