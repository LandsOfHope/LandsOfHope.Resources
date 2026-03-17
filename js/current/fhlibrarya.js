var PageNo = PageNo;
var IPath = window.top.FHIPI;
var Processing = 0;
var MT = MT;
var CDN_RESOURCES_URL = new URL(document.currentScript.src).origin;

document.write(`<script src="${CDN_RESOURCES_URL}/js/current/formatting.js" language="JavaScript"></script>`);

function AvC(m, v, d) {
    var Color = LITE;
    document.write('<div style="float: left; width: 280px; height: 100px;"><table cellpadding=1 cellspacing=1 class="weakcell"><tr><td><b>' + m + '</b></td></tr><tr><td>' + d + '<br>' + Adr('window.location.replace(\'fhlibrarya2.asp?Type=' + v + '\');', 'View available armor', 'View') + '</td></tr></table></div>');
}