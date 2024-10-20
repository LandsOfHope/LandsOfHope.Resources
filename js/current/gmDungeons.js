var Mask = Mask;
var PageNo = PageNo;
var IPath = window.top.FHIPB;
var OPath = window.top.FHIPO;
var IC = 0;
var Infos = new Array();
var Processing = 0;
var LastV = -1;

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '&Mask=' + Mask + '');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + Infos[v].p, Infos[v].i + '<br>Rooms: ' + Infos[v].r + '<br>Level: ' + Infos[v].lv + '<br>Location: ' + Infos[v].x + ', ' + Infos[v].y + ' ' + GetRealm(Infos[v].g));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function GS(in3, in2) {
	if (Processing == 0) {
		Processing = 1;
		window.top.Interface.location.replace('/gm/gmDungeons.asp?CharsAt=' + in2 + '&P=' + PageNo + '&Type=' + in3 + '&Mask=' + Mask)
	}
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb > 0 && LastV >= 0) {
			GS(pb, Infos[LastV].v);
		}
	}
}

function DC(v) {
	LastV = v;

	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Rooms: ' + Infos[v].r + '<br>Level: ' + Infos[v].lv + '<br>Location: ' + Infos[v].x + ', ' + Infos[v].y + ' ' + GetRealm(Infos[v].g) + '<br>' + (Infos[v].a != 0 ? 'You own this ' : 'You manage this ') + 'Building' + (Infos[v].h != 0 ? '<br><i>Stealthed</i>' : '') + (Math.round(Infos[v].f) < 0 ? '<br><font id=tred>Collapsing, insert funds</font>' : '') + (Infos[v].hd == 0 ? '<br><font id=tred>Can not be Locked</font>' : '<br>Lockable');
	getObj("Buttons").innerHTML = (Infos[v].hd != 0 ? (Infos[v].l == 0 ? Adir("GS(1, " + Infos[v].v + ");", "Lock this building", "lock", "Lock") : Adir("confirm(\"Are you sure you wish to unlock " + Infos[v].i + " as this could allow anyone to enter the building?\", 2);", "Unlock this building", "lock_open", "Unlock")) : "") + Adir("if (Processing == 0) {Processing = 1; window.location.replace(\"fh.asp?Redraw=1&BuildingID=" + Infos[v].v + "\");}", "Recall to this location", "house_go", "Recall") + Adir("confirm(\"Are you sure you wish to destroy " + Infos[v].i + "?\\n\\nAny NPCs inside will be deleted as will any furnishings.\", 4);", "Destroy this building", "delete", "Destroy") + Adir("confirm(\"Are you sure you wish to transfer ownership of the building and all rooms to you??\", 15);", "Take ownership of the building", "house_link", "Reclaim") + (Infos[v].d == 0 ? Adir("if (Processing == 0) {Processing = 1; window.location.replace(\"fhBgT2.asp?InventoryItemID=" + Infos[v].v + ";\");}", "Trade this building to someone else", "user_go", "Trade") : "") + Adir("window.location.replace(\"fh" + (Infos[v].d < 0 ? "EDF" : "BF") + ".asp?CharsAt=" + Infos[v].v + "\");", "Manage building friends list", "user_edit", "Friend") + (Math.abs(Infos[v].h != 0) ? Adir("confirm(\"Are you sure you wish to unstealth " + Infos[v].i + "?\", 8);", "Unstealth this building", "eye", "Un-stealth") : "") + (Infos[v].a == 1 ? Adir("if (Processing == 0) {Processing = 1; window.location.replace(\"fhbmrc.asp?CharsAt=" + Infos[v].v + "\");}", "Check who has a recall marker to this building", "house", "Recall Check") : "") + Adir("if (Processing == 0) {Processing = 1; window.location.replace(\"fhblm.asp?CharsAt=" + Infos[v].v + "\");}", "Rennovate this building", "brick", "Renovate") + "<br>" + Adir("GS(6, " + Infos[v].v + ");", "", "heart_delete", "No Stats") + Adir("GS(7, " + Infos[v].v + ");", "", "heart_add", "Stats") + Adir("GS(16, " + Infos[v].v + ");", "", "witch_16", "Dungeon");
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'" + (Infos[v].h != 0 ? " style='filter: Alpha(opacity=45)'" : "") + ">";
}

function AB(PictureID, ItemName, ItemID, Color, h, l, x, y, v, g, c, f, d, hd, r, lv) {
	if (PictureID == '0') { PictureID = '' }
	if (d != 0) {
		Color = '#ff6666'
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(PictureID, ItemName, ItemID, Color, h, l, x, y, v, g, c, f, d, hd, r, lv);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=40><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=40 height=40></td><td width=\'100%\' style="color: ' + Color + '; padding-left: 5px;"><b>' + ItemName + '</b><br>Location: ' + x + ', ' + y + ' ' + GetRealm(g) + '</td></tr>');
	IC = IC + 1;
}

function newInfo(PictureID, ItemName, ItemID, Color, h, l, x, y, v, g, c, f, d, hd, r, lv) {
	this.color = Color;
	this.i = ItemName;
	this.v = ItemID;
	this.p = PictureID;
	this.lv = lv;
	this.r = r;
	this.z = v;
	this.hd = hd;
	this.d = d;
	this.h = h;
	this.f = f;
	this.a = c;
	this.l = l;
	this.g = g;
	this.x = x;
	this.y = y;
}

