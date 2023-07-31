var SN = SN;
var PageNo = PageNo;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?SN=' + SN + '&CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Guild Fame Needed: ' + Infos[v].gf + '<br>Quest Level: ' + Infos[v].ql + '<br>If you wish to take this quest go to <b>' + Infos[v].cn + '</b> at <b>' + Infos[v].x + ', ' + Infos[v].y + ' in ' + window.top.GetRealm(Infos[v].g) + '</b>' + (Math.abs(Infos[v].b) != 0 ? ' and look inside the buildings, you may need to explore a building if you can not find the NPC immediately' : '') + '.';
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = '';
}

function AM(ql, gf, v, x, y, g, Named, Picture, CN, b) {
	Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, ql, gf, v, x, y, g, Named, Picture, CN, b);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '"><td><img width=15 height=15 src="' + IPath + (Picture == '' || Picture == '0' ? 'na.gif' : Picture) + '"></td><td width="*" style="color: ' + Color + '; padding-left: 5px">' + Named + '</td><td>' + gf + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, ql, gf, v, x, y, g, Named, Picture, CN, b) {
	this.c = Color;
	this.g = g;
	this.p = Picture;
	this.b = b;
	this.cn = CN;
	this.t = Named;
	this.ql = ql;
	this.gf = gf;
	this.x = x;
	this.y = y;
	this.v = v;
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + Infos[v].p, Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}