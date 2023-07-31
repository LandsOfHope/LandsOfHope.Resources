var PageNo = PageNo;
var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPI;
var Processing = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(BejewelName, SkillValue, PictureID, Extra, RequireItemName, RequireQuantity, RequirePictureID) {
if (PictureID == '' || PictureID == '0') {PictureID = 'na.gif'};
var Color = 'cyan';
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, BejewelName, SkillValue, PictureID, Extra, RequireItemName, RequireQuantity, RequirePictureID);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td style="color: ' +  Color + '">' + BejewelName + '</td><td>' + SkillValue + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, BejewelName, SkillValue, PictureID, Extra, RequireItemName, RequireQuantity, RequirePictureID) {
this.c = Color;
this.sv = SkillValue;
this.p = PictureID;
this.rin = RequireItemName;
this.rip = RequirePictureID;
this.riq = RequireQuantity;
this.m = BejewelName;
this.e = Extra;
}

function GoP(PageNo) {
window.location.replace('?P=' + PageNo);
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + Infos[v].p,Tipsfor(v));
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function Tipsfor(v) {
return '<b>' + Infos[v].m + '</b><br>Required Skill: ' + Infos[v].sv + ' Bejeweling<br>' + Infos[v].e + '<br>' + (Infos[v].riq > 0 ? '<center><b>Ingredients</b></center><ul><li>' + Infos[v].riq + ' * ' + Infos[v].rin + '</li></ul>' : '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v)
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = ''; //
}
