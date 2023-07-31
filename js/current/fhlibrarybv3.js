var PageNo = PageNo;
var IPath = window.top.FHIPB;
var Processing = 0;
var ItemID= ItemID;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(mt, m, PictureID, r, rt, l, pl, sn, sv, bia) {
var Color = LITE;
if (pl != 0) {
	Color = '#ff66ff';
} else if (bia != 0) {
	Color = '#6666ff';
}
if (ItemID == -27 && r == 0) {
	Color = '#ff6666';
}
if (PictureID == '') {PictureID = 'na.gif'}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, mt, m, PictureID, r, rt, l, pl, sn, sv, bia);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td style="color: ' + Color + ';">' + mt + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, mt, m, PictureID, r, rt, l, pl, sn, sv, bia) {
this.c = Color;
this.bia = bia;
this.p = PictureID;
this.sn = sn;
this.sv = sv;
this.r = r;
this.rt = rt;
this.l = l;
this.pl = pl;
this.m = m;
this.mt = mt;
}

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '&ItemID=' + ItemID);
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
return '<b>' + Infos[v].mt + '</b><br>' + Infos[v].sn + ' ' + Infos[v].sv + '<br>' + (Infos[v].r != 0 ? 'Type: Room' : (ItemID == -27 ? 'Type: Dungeon' : 'Type: Building')) + (ItemID != 1936 ? '<br>Room Limit: ' + Infos[v].rt : '<br>Limit Per Building: ' + (Infos[v].rt == 0 ? 'Unlimited' : Infos[v].rt)) + (Infos[v].pl > 0 ? '<br><font id=tmagenta>Vendors Allowed: ' + Infos[v].pl + '<br>This building/room allows you to setup a shop and sell items to other players directly or through the marketeer system.</font>' : '') + (Infos[v].bia != 0 ? '<br><font id=tblue><b>Automation</b><br>This type of building/room can have a special furnish (craftable) item placed in it to automate the production of a resource.</font>' : '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v)
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {window.location.replace(\'bz.asp?CharsAt=' + Infos[v].m + '\');}', 'View floor plan', 'View');
}
