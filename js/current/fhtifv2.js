var MapID = MapID;
var Processing = 0;
var Following= Following;
var BN = BN;
var PageNo = PageNo;
var LastV = -1;
var Infos = new Array();
var IC = 0;
var IPath = window.top.FHIPR;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GS(how, stuff) {
	if (Processing == 0) {
		Processing = 1;

		window.location.replace('fhtif.asp?Type=' + how + '&P=' + PageNo + '&MapID=' + MapID + '&Who=' + Infos[LastV].t + '&CharsAt2=' + stuff + '');
	}
}

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '&MapID=' + MapID);
}

function DC(v) {
LastV = v;
getObj('Stuff2').innerHTML = '<input type=hidden id=MapID name=MapID value=' + MapID + '><b>' + Infos[v].t + '</b>' + (Infos[v].at != 0 ? '<br>Admin Town - Can use the Town functions.' : '') + '' + (Infos[v].ab != 0 ? '<br>Admin Buildings - Can use the Building functions.' : '') + '' + (Infos[v].an != 0 ? '<br>Admin NPCs - Can use the NPC functions.' : '') + '' + (Infos[v].ai != 0 ? '<br>Admin Items - Can use the Item functions.' : '') + '<form method=\'get\'><input type=hidden name=CharsAt2 value=\'' + Infos[v].v + '\'><input type=hidden name=Type value=5><table class="weakcell"><tr><td>Town Admin:</td><td><input type=checkbox name=AdminTown value=1 ' + (Infos[v].at == 1 ? 'checked ' : '') + '></td><td rowspan=3>' + Adr('this.form.submit()','Save changes','Save') + '</td></tr><tr><td>Admin Buildings:</td><td><input type=checkbox name=AdminBuildings value=1 ' + (Infos[v].ab == 1 ? 'checked ' : '') + '></td><td></td></tr><tr><td>Admin NPCs:</td><td><input type=checkbox name=AdminNPCs value=1 ' + (Infos[v].an == 1 ? 'checked ' : '') + '></td><td></td></tr><tr><td>Admin Items:</td><td><input type=checkbox name=AdminItems value=1 ' + (Infos[v].ai == 1 ? 'checked ' : '') + '></td><td></td></tr></table>' + Adr('confirm(\'Are you sure you wish to delete ' + Infos[v].t + ' from the friend list?\', 1);','Delete this friend from the tile', 'Delete') + Adr('confirm(\'Are you sure you wish to give your tile to the selected person?\', 3);', 'Give tile to ' + Infos[v].t, 'Give Tile') + '</form>';
getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
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

function DD(v) {
	LastV = v;
	confirm('Add ' + Infos[v].t + ' to the ' + BN + ' friends list?', 6);
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && LastV >= 0) {
			var v = LastV
			GS(pb, Infos[v].v);
		}
	}
}

function AvC(v, at, ab, an, ai, Itty, PictureID) {
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color,v, at, ab, an, ai, Itty, PictureID);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" onclick="DC(this)" onmouseover="PC(this)" onmouseout="RC(this)"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="260" style="color: ' + Color + '; padding-left: 5px;">' + Itty + '</td><td width=65><b>' + (at != 0 ? 'T ' : '') + (ab != 0 ? 'B ' : '') + (an != 0 ? 'N ' : '') + (ai != 0 ? 'T ' : '') + '<b></td></tr>');
IC = IC + 1;
}

function newInfo(Color, v, at, ab, an, ai, Itty, PictureID) {
this.c = Color;
this.v = v;
this.p = PictureID;
this.at = at;
this.ab = ab;
this.an = an;
this.ai = ai;
this.t = Itty;
}