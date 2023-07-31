
var FHIPI = window.top.FHIPI;
var FHIPB = window.top.FHIPB;

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(PictureID, n, v, pp) {
    var tmppath = window.top.FHIP + pp + '/';
    if (PictureID == '0') { PictureID = '' }
    //v=' + v + ' n="' + n + '" 
    document.write('<div style="float: left; width: 38px; height: 38px; padding: 1px; margin: 1px;" class="it" onmouseover="IC(this)" onmouseout="O(this)"  onclick="I(' + v + ')"><img src=\'' + (PictureID == 'q.gif' ? FHIPB : tmppath) + '' + (PictureID != '' ? PictureID : 'na.gif') + '\' width=38 height=38></div>');
}

function I(v) {
    window.location.replace('fhwuse.asp?CharsAt=' + v);
}

function IC(stuff) {
    stuff.style.cursor = 'pointer';
    stuff.style.backgroundColor = BGCOLOR_S
}

function O(stuff) {
    stuff.style.cursor = '';
    stuff.style.backgroundColor = '';
}