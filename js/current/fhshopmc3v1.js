var L2 = L2;
var CharsAt = CharsAt;
var CharsAt2 = CharsAt2;
var SN = SN;
var MD = MD;
var LD = LD;
var IN = IN;
var PageNo = PageNo;
var Processing2 = 0;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	getObj('P').value = PageNo;
	getObj('Buttons').innerHTML = '';
	getObj('craft').submit();
}

function DC3(stuff) {
	if (Processing2 != 1) {
		confirm('Make 1 ' + IN + ', using level ' + L2 + ' resource at a cost of ' + window.top.BSGM2(Math.round(1 * (LD * 5))) + '?', 1)
	}
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			Processing2 = 1;
			getObj('craft').submit();
		}
	}

}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Allegiance: ' + window.top.GetAName(Infos[v].a) + '<br>Skill: ' + Infos[v].m + '<br>Minimum Needed: ' + LD + '<br>Cost: <b>' + window.top.BSGM2(Math.round(LD * 5)) + '</b>';
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = '<input type=\'hidden\' name=Maker value=\'' + Infos[v].z + '\'><input type=\'hidden\' name=SV value=\'' + Infos[v].m + '\'>' + Adr('DC3();', 'Make', 'Make');
}

function AM(z, m, Picture, Named, a) {
	var Color = window.top.GetAColor(a);
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, z, m, Picture, Named, a);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (Picture == '' || Picture == '0' ? 'na.gif' : Picture) + '"></td><td width="300" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px">' + Named + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, z, m, Picture, Named, a) {
	this.c = Color;
	this.p = Picture;
	this.t = Named;
	this.a = a;
	this.z = z;
	this.m = m;
}

function GetAT(aa) {
	return (aa > 0 ? (aa == 1 ? 'Cloth' : (aa == 2 ? 'Leather' : (aa == 3 ? 'Mail' : 'Plate'))) : '');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + IPath + Infos[v].p, '<b>' + Infos[v].t + '</b>');
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}
