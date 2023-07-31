var SkillName = SkillName;
var Skill = Skill;
var CharsAt = CharsAt;
var PetID = PetID;
var SkillValue = SkillValue;
var IPath = window.top.FHIPI;
var Processing = 0;
var carexp = carexp;
var s = s;
var IC = 0;
var Infos = new Array();

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function DC(v) {
getObj('Stuff2').innerHTML = '<b>' + Infos[v].y + '</b><br>' + (Infos[v].d == 0 ? 'Repeatable' : '<font id=tred>Kills/Destroys Animal</font>') + '<br>Material Type: ' + Infos[v].m + '<br><b>' + Infos[v].t + '</b><br>Skill Required: ' + Skill + ' ' + SkillName + '<br>Current Skill: ' + SkillValue + ' ' + SkillName + '<br>Experience: ' + carexp;
getObj('Pic').innerHTML = "<img src='" + IPath + Infos[v].p + "'>";
if (Processing == 0) {
	getObj('Buttons').innerHTML = '' + (Skill <= SkillValue ? '<' + strClicky3 + ' onclick="' + (Infos[v].d == 1 ? 'confirm(\'This will kill the animal are you sure you wish to continue ?\', ' + Infos[v].value + ');' : 'if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt=' + CharsAt + '&PetID=' + PetID + '&ItemID=' +Infos[v].value + '\')}') + '" style=\'width: 85\'>' + Infos[v].y +'</button>' : '');
} else {
	getObj('Buttons').innerHTML = '';
}
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			if (pb != 0 && Processing == 0) {
				Processing = 1;
				window.top.Interface.location.replace('fhcare.asp?CharsAt=' + CharsAt + '&PetID=' + PetID + '&ItemID=' + pb);
			}
		}
	}
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + Infos[v].p,Infos[v].y);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function AC(m, value, PictureID, t, Itty, d) {
var Color = LITE;
if (d == 1) {
	Color = '#ff6666';
}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, m, value, PictureID, t, Itty, d);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=40 height=40 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="315" style="color: ' + Color + '; padding-left: 5px;"><b>' + Itty + '</b><br>' + t + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, m, value, PictureID, t, Itty, d) {
this.c = Color;
this.m = m;
this.p = PictureID;
this.d = d;
this.y = Itty;
this.t = t;
this.value = value;
}