var Infos = new Array();
var IC = 0;
var CharsAt = CharsAt;
var IPath = window.top.FHIPR;

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(PictureID, ItemName, ItemID, s, t, l, b, g) {
if (PictureID == '0') {PictureID = ''}
var Color = 'white'
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, PictureID, ItemName, ItemID, s, t, l, b, g);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\' style="color: ' +  Color + '; padding-left: 5px;">' + ItemName + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, PictureID, ItemName, ItemID, s, t, l, b, g) {
this.c = Color;
this.v = ItemID;
this.p = PictureID;
this.s = s;
this.g = g;
this.t = t;
this.l = l;
this.b = b;
this.t = ItemName;
}

function DC(v) {
	getObj('Stuff2').innerHTML = "<b>" + Infos[v].t + "</b><br>Sex: " + Infos[v].s + "<br>Title: " + Infos[v].t + "<br>Location: " + Infos[v].l + " " + GetRealm(Infos[v].g) + "<br>" + (Math.round(Infos[v].b) != 0 ? "Inside a Building" : "Outside a Building") + "<input type='hidden' name=IID value='" + Infos[v].v + "'>";
	getObj('Butt').innerHTML = Adr('confirm(\'Are you sure you wish to Move this NPC?\',' + v + ');','Move the selected NPC', 'Move');
	getObj('Pic').style.backgroundColor=Infos[v].c;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			getObj('MoveNPC').submit();
		}
	}
}

function GoP(PageNo) {
window.location.replace('?CharsAt=' + CharsAt + '&P=' + PageNo + '');
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