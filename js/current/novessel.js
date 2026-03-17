var CDN_RESOURCES_URL = new URL(document.currentScript.src).origin;
document.write(`<script src="${CDN_RESOURCES_URL}/js/current/formatting.js" language="JavaScript"></script>`);

function DrawHeaders(hn, pc) {
    return "<table cellpadding=1 cellspacing=1 border=0 height='25px'><tr><td width=240 class=title>" + hn + "</td><td valign=bottom></td></tr></table>";
}

function DrawFooters(vn, p) {
    var strTest = '';
    strTest = `<td valign=bottom></td><td style='background-image: URL(${CDN_RESOURCES_URL}/game/pirate/piratetab.png); background-position: bottom; background-color: transparent; width:100px' align=center><a class='tab' href=\"?Type=R&CharsAt=${CharsAt}&l2=${p}&name=${vn}\">Link</a></td>`;
    return `<table cellpadding=1 cellspacing=1 border=0 height='25px'><tr><td width=240>&nbsp;</td>${strTest}<td valign=bottom></td></tr></table>`;
}