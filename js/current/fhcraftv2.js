var CharsAt = CharsAt;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AH(ShopC, SkillGroup, SkillID, total, v, l, b) {
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(ShopC, SkillGroup, SkillID, total, v, l, b);
	document.write('<div onclick="DC(' + SkillID + ');" id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')"><table class="weakcell" cellpadding=1 cellspacing=1 width="100%"><tr><td width="50%"><b>' + SkillGroup + '</b> (' + total + ')</td><td width="50%">' + (v) + (b > 0 ? ' (' + b + ')' : '') + ' of ' + l + '</td></tr></table></div>');
	IC = IC + 1;
}

function newInfo(ShopC, SkillGroup, SkillID, total, v, l, b) {
	this.color = LITE;
	this.i = SkillGroup;
	this.shop = ShopC;
	this.total = total;
	this.v = v;
	this.s = SkillID;
	this.l = l;
	this.b = b;
}

function DC(v) {
	window.location.replace('fhmake2.asp?SkillID=' + v + '&CharsAt=' + CharsAt);
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('', '<b>' + Infos[v].i + '</b><br>Known plans: ' + Infos[v].total + '<br>Current skill: ' + (Infos[v].v) + (Infos[v].b > 0 ? ' (' + Infos[v].b + ')' : '') + ' of ' + Infos[v].l);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}