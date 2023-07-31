
var PageNo = PageNo;
var Skill = Skill;
var Level = Level;
var IPath = window.top.FHIPI;
var InventoryItemID = InventoryItemID;
var IC = 0;
var Processing = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(v,PictureID, Itty, PV, d) {
var Color = LITE;
var Race = '';
var mod2 = 1;
var mod3 = 5;
if (Itty.indexOf('lesser')> 0) {
	mod2 = 1
} else if (Itty.indexOf('master')> 0) {
	mod2 = 1.3
} else if (Itty.indexOf('greater')> 0) {
	mod2 = 1.2
} else {
	mod2 = 1.1
}

if (Skill < (d * mod3)) {Color = '#ff6666'} else {Color = '#66ff66'}
Race = Itty.substr(0, Itty.indexOf(' soul')) 
if (Race.indexOf(' lesser') > 0) {
	Race = Race.substr(0, Race.indexOf(' lesser')) 
} else if (Race.indexOf(' greater') > 0) {
	Race = Race.substr(0, Race.indexOf(' greater')) 
} else if (Race.indexOf(' master') > 0) {
	Race = Race.substr(0, Race.indexOf(' master')) 
}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, v,PictureID, Itty, PV, d, Race, mod2, mod3);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px;">' + Itty + ' * ' + PV  + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, v,PictureID, Itty, PV, d, Race, mod2, mod3) {
this.c = Color;
this.l = Math.round(d * mod2);
this.p = PictureID;
this.t = Itty;
this.d = Math.round(d * mod3);
this.q = PV;
this.r = Race;
this.value = v;
}

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '');
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

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Race: ' + Infos[v].r + '<br>Level Spawn: ' + Infos[v].l + '<br>Skill Needed: ' + Infos[v].d + '<br>Actual Skill: ' + Skill + '<br><b>Soul gem is Destroyed</b>';
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = (Infos[v].d <= Skill ? Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?P=' + PageNo + '&InventoryItemID=' + Infos[v].value  + '&Race=' + Infos[v].r + '&D=' + Infos[v].d + '&L=' + Infos[v].l + '\');}','Release','Release') : '');
}

