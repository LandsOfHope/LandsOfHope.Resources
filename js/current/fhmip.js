var skill = skill;
var GoPage = GoPage;
var Processing = 0;
var Su = Su;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(pagein) {
	window.location.replace('?P=' + pagein);
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Location: '+ Infos[v].s + '<br>Level: ' + Infos[v].l + ' (' + Infos[v].e + ')<br>Skill: ' +  skill + '/' + (Infos[v].l * 5) + '<br>Race: ' + Infos[v].r + '<br>Profession: ' + Infos[v].n;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = (Infos[v].l * 5 <= skill ? Adr('if (Processing == 0) {Processing = 1; Posess(' + Infos[v].l + ',' + Infos[v].v + ');};','Possess the body of ' + Infos[v].t, 'Possess') : '');
}

function Posess(l, v) {
	getObj('Stuff2').innerHTML = '<b>Loading Correct Menu - Please wait.</b>'
	window.top.MdrawToolbar(Su, 2);
	window.top.refreshTime();
	window.location.replace('?Type=9&P=' + GoPage + '&L=' + l + '&CharsAt=' + v + '');
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + Infos[v].p,Infos[v].t);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function AC(ItemID, Color, l, n, s, r, e, PictureID, ItemName) {
if (PictureID == '0') {PictureID = ''}
if (Color == 0) {Color = '#66ff66'} else {Color = 'orange';}
if (l * 5 > skill) {Color = '#ff6666'}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(ItemID, Color, l, n, s, r, e, PictureID, ItemName);
// v=' + ItemID + ' l=' + l + ' n="' + n + '" s="' + s + '" r="' + r + '" e="' + e + '" p="' + (PictureID == '' ? 'na.gif' : PictureID) + '"
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\' style="color: ' +  Color + '; padding-left: 5px;">' + ItemName + '</td></tr>');
IC = IC + 1;
}

function newInfo(ItemID, Color, l, n, s, r, e, PictureID, ItemName) {
this.c = Color;
this.v = ItemID;
this.p = PictureID;
this.l = l;
this.n = n;
this.s = s;
this.r = r;
this.e = e;
this.t = ItemName;
}
