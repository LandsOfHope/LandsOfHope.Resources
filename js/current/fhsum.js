var IPath = window.top.FHIPB;
var FHIPO = window.top.FHIPO;
var IC = 0;
var Infos= new Array();
var Processing = 0;
var CharsAt = CharsAt;
var PageNo = PageNo;

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Ammo Status: ' + Infos[v].q + ' * ' + Infos[v].inx + '<br>' + (Math.abs(Infos[v].q) <= 200 ? 'Critical' : (Math.abs(Infos[v].q) <= 500 ? 'Low' : (Math.abs(Infos[v].q) < 1000 ? 'Okay' : 'Full'))) + (Infos[v].a == 0 ? '<br>Building Type: ' + Infos[v].r + '<br>Location: ' + Infos[v].p2 + '' : '<br><font id=tred>In Enemy Hands</font>');
	getObj('Pic').innerHTML = "<img src='" + IPath + Infos[v].p + "'>";
	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt=' + CharsAt + '&P=' + PageNo + '&ItemID=' + Infos[v].value + '\');}','Take Supplies to ' + Infos[v].t,'Take Supplies');
}

function GoP(PageNo) {
window.location.replace('?CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Infos[v].t);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function AC(a, value, r, p2, PictureID, Itty, inx, q) {
if (a == 0) {
	var Color = LITE;
} else {
	var Color = 'red';
}
var app = window.parent.GetPerc2(1000, q)
var apt = window.top.PercentBoxR(app,'purple','' + q + ' / ' + 1000)

if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, a, value, r, p2, PictureID, Itty, inx, q, app, apt);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="170" style="color: ' + Color + '; padding-left: 5px;">' + Itty + '</td><td width=40>' + app + '%</td><td width=\'100\'><b>' + apt + '</b></td></tr>');
IC = IC + 1;
}

function newInfo(Color, a, value, r, p2, PictureID, Itty, inx, q, app, apt) {
this.c = Color;
this.inx = inx;
this.p = PictureID;
this.t = Itty;
this.q = q;
this.a = a;
this.value = value;
this.r = r;
this.p2 = p2;
}