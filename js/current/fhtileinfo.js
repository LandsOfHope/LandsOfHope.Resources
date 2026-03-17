var FHIPPER = window.top.FHIP;

var CPath = FHIPPER + "r/"
var IPath = FHIPPER + "i/"
var BPath = FHIPPER + "b/"

var CDN_RESOURCES_URL = new URL(document.currentScript.src).origin;
document.write(`<script src="${CDN_RESOURCES_URL}/js/current/formatting.js" language="JavaScript"></script>`);

function RC(stuff) {
    stuff.style.cursor = '';
    stuff.style.backgroundColor = '';
}

function PC(stuff) {
}

function DC(stuff) {
}
