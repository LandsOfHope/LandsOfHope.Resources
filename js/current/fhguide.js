
const CDN_RESOURCES_URL_fhguide = new URL(document.currentScript.src).origin;
const FHIPB_fhguide = `${CDN_RESOURCES_URL_fhguide}/game/b/`;

function AC(PictureID, n, v, pp) {
    var tmppath = window.top.FHIP + pp + '/';
    if (PictureID == '0') { PictureID = '' }
    document.write('<div style="float: left; width: 38px; height: 38px; padding: 1px; margin: 1px;" class="it" onmouseover="IC(this)" onmouseout="O(this)"  onclick="I(' + v + ')"><img src=\'' + (PictureID == 'q.gif' ? FHIPB_fhguide : tmppath) + '' + (PictureID != '' ? PictureID : 'na.gif') + '\' width=38 height=38></div>');
}

function I(v) {
    window.location.replace(`fhwuse.asp?CharsAt=${v}`);
}

function IC(stuff) {
    stuff.style.cursor = 'pointer';
    stuff.style.backgroundColor = BGCOLOR_S
}

function O(stuff) {
    stuff.style.cursor = '';
    stuff.style.backgroundColor = '';
}