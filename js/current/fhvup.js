var IC = 0;
var Infos = new Array();
var InventoryItemID = InventoryItemID;
var CharsAt = CharsAt;
var H = H;
var PageNo = PageNo;
var BuildingID = BuildingID;
var IPath = window.top.FHIPR;
var Processing = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AM(z, v, o, l, m, f, t, s, e, b,Named, Picture, g, tok, u) {
if (u < 200) {
	var Color = LITE;
} else {
	var Color = 'gold';
}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, z, v, o, l, m, f, t, s, e, b,Named, Picture, g, tok, u);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (Picture == '' || Picture == '0' ? 'na.gif' : Picture) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px;">' + Named + '</td><td style="color: ' + (e < b ? '#66ff66' : '#ff6666') + '">' + e + '</td><td>' + (b - e) + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, z, v, o, l, m, f, t, s, e, b,Named, Picture, g, tok, u) {
this.c = Color;
this.u = u;
this.p = Picture;
this.n = Named;
this.z = z;
this.tok = tok;
this.g = g;
this.v = v;
this.o = o;
this.l = l;
this.m = m;
this.t = t;
this.f = f;
this.s = s;
this.e = e;
this.b = b;
}

function GoP(PageNo) {
window.location.replace('?H=' + H + '&CharsAt=' + CharsAt + '&P=' + PageNo);
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Infos[v].n);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function DC(v) {
getObj('Stuff2').innerHTML = '<b>' + Infos[v].n + '</b>' + (Infos[v].f ==1 ? '<br>Following You' : '<br>Location: '+ Infos[v].s + ' ' + GetRealm(Infos[v].g)) + '<br>Level: ' + Infos[v].l + '<br>Items Held :' + Infos[v].e + ' of ' + Infos[v].b + (Infos[v].z == 1 ? '<br>Being Ridden/Mount' : (Infos[v].t ==1 ? '<br>Invisible/Hidden' : ''));
getObj('Pic').innerHTML = '' + '<img src=\'' + IPath + Infos[v].p + '\'>';
getObj('Buttons').innerHTML = (Math.abs(Infos[v].u) < 200 ? Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?H=' + H + '&P=' + PageNo + '&CharsAt=' + Infos[v].v + '&Type=1\');}','Upgrade','Upgrade') : '') + Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'fhrt.asp?CharsAt=' + Infos[v].v + '\');}','Take Items','Take Items') + (Infos[v].tok != 0 ? Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'fhtrade.asp?CharsAt=' + Infos[v].v + '\');}','Trade','Trade') : '');
}
