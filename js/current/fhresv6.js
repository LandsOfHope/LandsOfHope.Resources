var IC = 0;
var Infos = new Array();
var CharsAt = CharsAt;
var LevelR = LevelR;
var ID = ID;
var PetID = PetID;
var s2 = s2;
var lngtemp = lngtemp;
var s = lngtemp;
var Timer = Timer;
var PageNo = PageNo;
var ECT = ECT;
var strword = strword;
var IPath = window.top.FHIPI;
var Processing = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(Level, PictureID, ItemName, ItemID, Special, Quantity) {
if (PictureID == '0') {PictureID = ''}
var pp = p;
var Color = LITE;
if (p != '' && PictureID == '') {PictureID = p}
if (Special != 0) {Color = 'gold';}
if ((Math.abs(Level) * 5) > Math.abs(lngtemp)) {Color = '#ff6666'}

if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, Level, PictureID, ItemName, ItemID, Special, Quantity);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(this)" onclick="DC(' + IC + ')" style="color: ' +  Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + ItemName + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, Level, PictureID, ItemName, ItemID, Special, Quantity) {
this.c = Color;
this.a = Special;
this.p = PictureID;
this.t = ItemName;
this.q = Quantity;
this.l = Level;
}

function GoP(PageNo) {
window.location.replace('?CharsAt=' + CharsAt + '&PetID=' + PetID + '&P=' + PageNo + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Level: ' + Infos[v].l + '<br>Xp: ' + (200 + (Infos[v].l * (Infos[v].l >= 1000 ? 35 : 20))) + '<br>Needs: <b>' + (Infos[v].l * 5) + ' ' + s2 + '</b><br>Current: <b>' + (s) + ' ' + s2 + '</b><br>ECT: ' + ECT + 'secs<br>' + (Infos[v].q == null ? '0' : Infos[v].q) + ' attempts remaining';
	getObj('Buttons').innerHTML = (LevelR <= s && Infos[v].q > 0 ? (Infos[v].c == '#ff6666' ? '<font id=tred>Skill not high enough, ' + (Infos[v].l * 5) + ' ' + s2 + ' needed.</font>' : Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'fhres.asp?CharsAt=' + CharsAt+ '&PetID=' + PetID + '&Material=&Spam=' +Timer + '&A=2&P=1&L=' + (Math.round(Infos[v].l) == 0 ? '1' : Infos[v].l) + '\');}',strword,strword) + Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'fhres.asp?CharsAt=' + CharsAt+ '&PetID=' + PetID + '&Material=&Spam=' +Timer + '&A=3&P=1&L=' + (Math.round(Infos[v].l) == 0 ? '1' : Infos[v].l) + '\');}','All','All') + '<br>Using the All button will get you the resources with less clicking but you will only gain 1skill up chance for the whole pile and each item will take <b>20 seconds</b>. If you do it individually you will get 1skill up chance for each click of the ' + strword + ' button') : '<font id=tred>Skill not high enough, ' + (Infos[v].l * 5) + ' ' + s2 + ' needed.</font>');
	getObj('Pic').innerHTML = "<img src='" + IPath + (p == '' ? 'na.gif' : p) + "'>";
}


function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor='';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), '' + '<b>' + Infos[v].t + '</b><br>Level: ' + Infos[v].l + '<br>Xp: ' + (200 + (Infos[v].l * (Infos[v].l >= 1000 ? 35 : 20))) + '<br>Skill: ' + (Infos[v].l * 5) + ' ' + s2 + '<br>ECT: ' + 15 + 'secs' + '');
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function PC2(stuff, p, n, l) {
	window.top.InfoTip(IPath + (p == '' ? 'na.gif' : p), '' + 'Tool: <b>' + n + '</b><br>Level: ' + l + '');
}


function AH2(v, p, itty, l) {
//	p="' + (p == '' ? 'na.gif' : p) + '" l=' + l + ' n="' + itty + '" v=v
	document.write('<div style="height: 40px; width: 40px; padding: 1px; margin: 1px; float: left;" onmouseover="PC2(this, \'' +p + '\', \'' + itty + '\',' + l + ');" onmouseout="RC(this);" align=center><img width=40 height=40 src="' + IPath + '' + (p != '' ? p : 'na.gif') + '"></td>')

}
