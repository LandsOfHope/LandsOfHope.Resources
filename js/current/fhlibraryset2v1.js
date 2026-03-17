
var IPath = window.top.FHIPI;
var CDN_RESOURCES_URL = new URL(document.currentScript.src).origin;
document.write(`<script src="${CDN_RESOURCES_URL}/js/current/formatting.js" language="JavaScript"></script>`);

function AM(Value, PictureID, Named, l) {
    var Color = LITE;
    document.write('<tr  style="color: ' + Color + '"><td width=15><img border=0 title="' + Named + '" width=15 height=15 src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\'></td><td><a href="imi.asp?test=' + Value + '">' + Named + '</a></td><td>Level: ' + l + '</td></tr>');
}