var Search = Search;
var Type2 = Type2
var CharsAt = CharsAt;
var PageNo = PageNo;
var PageNo2 = PageNo2;
var counter = 0;
var IPath = window.top.FHIPR;

document.write('<script src="js/formatting.js" language="JavaScript"></script>');


function GoP(PageNox) {
window.location.replace('?CharsAt=' + CharsAt + '&Type=' + Type2 + '&P=' + PageNo + '&P2=' + PageNox + '&Search=' + Search);
}


function AM(v, n, ct, Message, PictureID) {
var BID = CharsAt;
counter = counter + 1
var bg = ''
var Color = ct;
var ctt = '';
if (ct == '6666ff') {
	Color = '#' + ct;
	ctt = ' - Support Member'
}
if ((counter / 2) == Math.round(counter / 2)) {bg = BGCOLOR_S}
document.write('<tr width="400" class="weakcell" style="color: ' + Color + '; background-color: ' + bg + ';font-weight: bold"><td width=\'100%\'>' +n + ctt + (window.top.SystemUser != 0 ? Adr('window.location.replace(\'?CharsAt=' + CharsAt + '&Type=' + Type2 + '&P=' + PageNo + '&P2=' + PageNo2 + '&D=' + v + '&Search=' + Search + '\');','Delete','Delete') + Adr('window.location.replace(\'?CharsAt=' + CharsAt + '&Type=' + Type2 + '&P=' + PageNo + '&P2=' + PageNo2 + '&D=-' + v + '&Search=' + Search + '\');','Pick','Pick') : '') + '</td></tr>');
document.write('<tr width="400" class="weakcell" style="color: white;background-color: ' + bg + ';padding-bottom: 2px;"><td valign=top style="border-bottom: 1px dashed ' + Color + '"><img src="' + IPath + PictureID + '" align=left>' + Message + '</td></tr>');
}