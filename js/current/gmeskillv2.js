var Processing = 0;
var PageNo = PageNo;
var Mask = Mask;
var Type = Type;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function KP(stuff) {
	return false;
}

function AvC(Color, v, Itty, d) {
if (Color == 'gold') {Itty = '<b>' + Itty + '</b>'}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, v, Itty, d);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width="150" style="color: ' + Color + '; padding-left: 5px;">' + Itty + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, v, Itty, d) {
this.c = Color;
this.t = Itty;
this.d = d;
this.v = v;
}

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '&Mask=' + Mask + '&Type=' + Type);
}


function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('',Infos[v].t);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}


function DC(v) {
window.setTimeout(function() {tinyMCE.get('SkillDescription').setContent(Infos[v].d);}, 0);
getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1; getObj(\'SkillDescription\').value = tinyMCE.get(\'SkillDescription\').getContent();getObj(\'Type\').value = ' + Infos[v].v + ';getObj(\'Flag\').value = 1; getObj(\'eskill\').submit()};','Save', 'Save') 
}