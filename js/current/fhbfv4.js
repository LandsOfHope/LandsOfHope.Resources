var Flag = Flag;
var Processing = 0;
var Following = Following;
var BN = BN;
var ItemID = ItemID;
var PageNo = PageNo;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();
var LastV = -1;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GS(how, stuff) {
	if (Processing == 0) {
		Processing = 1;
		window.location.replace('fhbf.asp?Type=' + how + '&CharsAt=' + ItemID + '&P=' + PageNo + '&Who=' + Infos[LastV].t + '&CharsAt2=' + stuff + '');
	}
}

function GoP(PageNo) {
	window.location.replace('?CharsAt=' + ItemID + '&P=' + PageNo + '');
}

function DC(v) {
	LastV = v;
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b>' + (Flag == 2 ? '<br>Banning is prohibited on this Server' : '') + (Infos[v].c == '#66ff66' ? '<br>Friend - Can access this room' + (Infos[v].aa != 0 ? '<br>Can lock, trap, upgrade, furnish, stealth, spawn' : '') + (Infos[v].a != 0 ? '<br>Can use Property > Manage screen for this building' : '') : (Infos[v].c == '#ff6666' ? '<br>Banned - Can not access this room' : '<br>Sieger - Sieging this building')) + '<form method=\'get\'><input type=hidden name=CharsAt value=\'' + ItemID + '\'><input type=hidden name=CharsAt2 value=\'' + Infos[v].v + '\'><input type=hidden name=Type value=5><table class="weakcell"><tr><td>Building Admin:</td><td><input type=checkbox name=AllowAdmin value=1 ' + (Infos[v].aa == 1 ? 'checked ' : '') + '></td><td rowspan=3>' + Adr('this.form.submit()', 'Save changes', 'Save') + '</td></tr><tr><td>Building Manager:</td><td><input type=checkbox name=AllowManagementAccess value=1 ' + (Infos[v].a == 1 ? 'checked ' : '') + '></td><td></td></tr><tr><td>Key Crafter:</td><td><input type=checkbox name=AllowKey value=1 ' + (Infos[v].ak == 1 ? 'checked ' : '') + '></td><td></td></tr></table>' + Adr('confirm(\'Do you wish to delete this friend from the current room ?\', 1);', 'Delete friend from froom', 'Delete') + Adr('confirm(\'Do you wish to delete this friend from your entire Building Friends list?\', 8);', 'Delete this friend from all rooms in this building', 'Global Delete') + Adr('GS(2, ' + Infos[v].v + ');', 'Kick this friend from the room if they are inside it', 'Kick') + (Flag != 2 ? (Infos[v].c == '#66ff66' ? Adr('GS(3, ' + Infos[v].v + ');', 'Ban this user from the room', 'Ban') : Adr('GS(4, ' + Infos[v].v + ');', 'Unban this user from the room', 'Unban')) : '') + Adr('confirm(\'Copy the settings for this person in this room to all the rooms in this building?\', 7);', 'Copy the selected friend settings to all rooms in this building', 'Global') + '</form>';
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + Infos[v].p, Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
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

function AvC(v, aa, a, b, s, pi, Itty, PictureID, ak) {
	var Color = LITE;
	if (b != 0) { Color = '#ff6666' } else { Color = '#66ff66' }
	if (s != 0) { Color = 'orange' }
	if (pi != 0) { Color = 'orange' }
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, aa, a, b, s, pi, Itty, PictureID, ak);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" onclick="DC(this)" onmouseover="PC(this)" onmouseout="RC(this)"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="270" style="color: ' + Color + '; padding-left: 5px;">' + Itty + '</td><td width=50><b>' + (Color == '#ff6666' ? 'B ' : (s != 0 ? 'S ' : (pi != 0 ? 'L ' : '')) + (a != 0 ? 'M ' : '') + (aa != 0 ? 'A ' : '') + (ak != 0 ? 'K ' : '')) + '<b></td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, aa, a, b, s, pi, Itty, PictureID, ak) {
	this.c = Color;
	this.v = v;
	this.p = PictureID;
	this.ak = ak;
	this.pi = pi;
	this.aa = aa;
	this.a = a;
	this.b = b;
	this.s = s;
	this.t = Itty;
}