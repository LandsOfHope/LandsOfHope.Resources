var CharsAt = CharsAt;
var C2 = C2;
var PageNo = PageNo;
var counter = 0;
var IPath = window.top.FHIPI;

document.write('<script src="js/formatting.js" language="JavaScript"></script>');


function KP(stuff) {

}

function CH(strdisplay, ob1) {
	return '<a href="?Type=' + Type2 + '&CharsAt=' + CharsAt +'&OB=' + ob1 + (ob1 == OB && OB.indexOf('DESC') == -1 ? ' DESC' : '') + '">' + strdisplay + '</a>';
}

function GoP(PageNo) {
window.location.replace('?C2=' + C2 + '&CharsAt=' + CharsAt +'&P=' + PageNo + '');
}

function AM(n, ct, Message) {
var BID = C2;
counter = counter + 1
var bg = ''
var PictureID = 'fl1.gif';
var Color = '#' + ct;
var ctt = '';
if (ct == '6666ff') {
	PictureID = 'fl3.gif';
	ctt = ' - Support Member'
}
if ((counter / 2) == Math.round(counter / 2)) {bg = BGCOLOR_S}
document.write('<tr width="400" style="color: ' + Color + ';font-weight: bold"><td><img src="' + IPath + PictureID + '" width=10 height=10></td><td width=\'100%\'>' +n + ctt + '</td></tr>');
document.write('<tr width="400" style="color: white;background-color: ' + bg + ';"><td></td><td>' + Message + '</td></tr>');
document.write('<tr height=1 width="400" style="background-color: white;"><td colspan=2></td></tr>');
}

function DC(stuff) {
}

function DCN(stuff) {
}

function DB(stuff) {
}


function PC(stuff) {
	stuff.style.cursor = 'pointer';
	stuff.style.backgroundColor=BGCOLOR_S
}

function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor='';
}

function sendLink(v, t) {
	window.top.sendRequest('fhlink.asp?Type=X&CharsAt=' + v + '&Name=' + t + '&c=pink&l1=i&l2=na.gif');
	
}