
var Type2 = Type2;
var Mask = Mask;
var PageNo = PageNo;
var OB = OB;
var CharsAt = CharsAt;
var counter = 0;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AM(Unread, For, From, PictureID, MDate, Subject, MID, mes) {
counter = counter + 1
var bg = ''
var Color = LITE;
if ((counter / 2) == Math.round(counter / 2)) {bg = BGCOLOR}

if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, Unread, For, From, PictureID, MDate, Subject, MID, mes, bg);
//m="' + Subject + '" md="' + MDate + '" f="' + For + '" fm="' + From + '" v=' + MID + '
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" ' + (bg != '' ? 'style="background-color: ' + bg + '"' : '') + '><td><img src="' + IPath + PictureID + '" width=10 height=10></td><td width="200">' + (Unread == 1 ? '<b>' : '') + Subject + (Unread == 1 ? '</b>' : '') + '</td><td width="160">' + MDate + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, Unread, For, From, PictureID, MDate, Subject, MID, mes, bg) {
this.color = Color;
this.p = PictureID;
this.bg = bg;
this.mes = mes;
this.m = Subject;
this.md = MDate;
this.f = For;
this.fm = From;
this.v = MID;
}


function ColumnHeaders() {
	document.write('<tr width="600" class=\'boldcell\' style="width: 600;"><td width="20"></td><td width="500">' + CH('Subject', 'Subject') + '</td><td width="100">' + CH('Date', 'Dby') + '</td></tr>');
}

function CH(strdisplay, ob1) {
	return '<a href="?Type=' + Type2 + '&OB=' + ob1 + (ob1 == OB && OB.indexOf('DESC') == -1 ? ' DESC' : '') + '">' + strdisplay + '</a>';
}


function GoP(PageNo) {
window.location.replace('?Mask=' + Mask + '&CharsAt=' + CharsAt + '&OB=' + OB + '&Type=' + Type2 + '&P=' + PageNo + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = 'For: ' + Infos[v].f + '<br>From: ' + Infos[v].fm + '<br><div style=\'height: 180; width: 260; overflow: auto\'>' + Infos[v].mes + '</div>';
	getObj('Buttons').innerHTML = ''
}


function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor=Infos[v].bg;
}

function PC(v) {
window.top.InfoTip(IPath + Infos[v].p,Infos[v].m);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}