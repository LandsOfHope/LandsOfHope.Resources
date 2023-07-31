var Level = Level;
var CharsAt = CharsAt;
var SN = SN;
var PageNo = PageNo;
var AT = AllowedArmor;
var SearchMode = SearchMode;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?SN=' + SN + '&CharsAt=' + CharsAt + '&SearchMode=' + SearchMode + '&P=' + PageNo + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Craft Skill: ' + Infos[v].v + ' ' + Infos[v].m + (Infos[v].l > 0 ? '<br>Item Level: ' + Infos[v].l + (Infos[v].l > Level ? '<br><font id=tred>You need to be level ' + Infos[v].l + ' or higher to get this item.</font>' : '') : '');
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = (Math.abs(Infos[v].l) <= Level ? Adr('window.location.replace(\'fhshopmc2.asp?CharsAt=' + Infos[v].z + '\');', 'Select components to use', 'Components') : '') + Adr('window.parent.loadwindow2(\'im3.asp?Test=' + Infos[v].z2 + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].t + '\');', 'Info', 'Info');
}

function AM(v, z, z2, m, Picture, Named, l, aa, dpr) {
	var Color = LITE;
	if (l > Level) {
		Color = '#ff6666';
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, z, z2, m, Picture, Named, l, aa, dpr);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (Picture == '' || Picture == '0' ? 'na.gif' : Picture) + '"></td><td width="300" style="color: ' + Color + '' + (l > Level || aa > AT ? ';border: 1px dotted red' : '') + '; padding-left: 5px;">' + Named + '</td><td style="' + (aa > 0 ? (aa <= AT ? 'color: #66ff66' : 'color: #ff6666') : '') + '">' + (aa > 0 ? GetAT(aa) : '') + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, z, z2, m, Picture, Named, l, aa, dpr) {
	this.c = Color;
	this.p = Picture;
	this.t = Named;
	this.aa = aa;
	this.l = l;
	this.z2 = z2;
	this.z = z;
	this.z = z;
	this.v = v;
	this.m = m;
	this.dpr = dpr;
}

function GetAT(aa) {
	return (aa > 0 ? (aa == 1 ? 'Cloth' : (aa == 2 ? 'Leather' : (aa == 3 ? 'Mail' : 'Plate'))) : '');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + IPath + Infos[v].p, '<b>' + Infos[v].t + '</b><br>Craft Skill: ' + Infos[v].v + ' ' + Infos[v].m + (Infos[v].l > 0 ? '<br>Item Level: ' + Infos[v].l : '') + (Infos[v].aa > 0 ? '<br>Armor Type: <b>' + GetAT(Infos[v].aa) + '</b>' : ''));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}
