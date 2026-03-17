var CDN_RESOURCES_URL = new URL(document.currentScript.src).origin;
document.write(`<script src="${CDN_RESOURCES_URL}/js/current/formatting.js" language="JavaScript"></script>`);

function Adix(Itty, PictureID, Itty2, Automation) {
    var Color = LITE;
    document.write(`<tr width="325"><td width="15" style="color: ${Color}; padding-left: 5px"><img src="${CDN_RESOURCES_URL}/game/i/${PictureID}"></td><td width="310" colspan=3>${Automation != '' ? `<font id=tblue>${Itty}<br>Automation: ${Itty2}<br>Produces 1 * ${Automation} every 10mins</font>` : Itty}</td></tr>`);
}

function Adix2(Itty) {
    document.write(`<tr width="325"><td width="325" colspan=4 class="navmenu">${Itty}</td></tr>`);
}

function RC(stuff) {
    stuff.style.cursor = '';
    stuff.style.backgroundColor = '';
}

function PC(stuff) {
    stuff.style.cursor = 'pointer';
    stuff.style.backgroundColor = BGCOLOR_S
}

function DC(stuff) {
}
