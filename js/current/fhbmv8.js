var Filter = Filter;
var PageNo = PageNo;
var SystemUser = SystemUser;
var IPath = window.top.FHIPB;
var OPath = window.top.FHIPO;
var IC = 0;
var Infos = new Array();
var Processing = 0;
var LastV = -1;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '&Filter=' + Filter +'');
}

function RC(v) {
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('' + IPath + Infos[v].p, '<b>' + Infos[v].i + '</b><br>' + Infos[v].x + ', ' + Infos[v].y + ' ' + GetRealma(Infos[v].g) + '<br>' + (Infos[v].l == 0 ? '<font id=tred>Unlocked</font>' : '<font id=tgreen>Locked</font>'));
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function GS(in3, in2) {
	if (Processing == 0) {
		Processing = 1;
		getObj('invc').innerHTML = '<tr><td><center>Loading ....</center></td></tr>';
		window.top.Interface.location.replace('fhbm.asp?CharsAt=' + in2 + '&Filter=' + Filter +'&P=' + PageNo + '&Type=' + in3)
	}
}

function DC(v) {
	
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb > 0 && LastV >= 0) {
			GS(pb, Infos[LastV].v);
		}
	}
}

function AB(PictureID, ItemName, ItemID, Color, h, l, x, y, v, g, c, d, hd, rl, rt, nd, lsr, pea, hap) {
if (PictureID == '0') {PictureID = ''}
if (d != 0) {
	Color = '#ff6666'
}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(PictureID, ItemName, ItemID, Color, h, l, x, y, v, g, c, d, hd, rl, rt, nd, lsr, pea, hap);
v = IC;
//Adir("window.location.replace(\"fh" + (Infos[v].d < 0 ? "EDF" : "BF") + ".asp?CharsAt=" + Infos[v].v + "\");","Manage building friends list", "user_edit","Friend")
var strb = (Infos[v].hd != 0 ? (Infos[v].l == 0 ? Adir("GS(1, " + Infos[v].v + ");","Lock this building", "lock","Lock") : Adir("LastV = " + v + "; confirm(\"Are you sure you wish to unlock " + Infos[v].i + " as this could allow anyone to enter the building?\", 2);", "Unlock this building", "lock_open", "Unlock")) : "") + Adir("if (Processing == 0) {Processing = 1; window.location.replace(\"fh.asp?Redraw=1&BuildingID=" + Infos[v].v + "\");}", "Recall to this location", "house_go", "Recall") + (Infos[v].nd == 0 ? Adir("LastV = " + v + "; confirm(\"Are you sure you wish to destroy " + Infos[v].i + "?\\n\\nAny NPCs inside will be deleted as will any furnishings.\", 4);", "Destroy this building", "delete", "Destroy") : "") + (Infos[v].nd == 0 ? Adir("GS(16, " + Infos[v].v + ");","Disable building destroy", "error_delete","Disable") : Adir("GS(17, " + Infos[v].v + ");", "Enable building destroy", "error_add", "Enable")) + Adir("LastV = " + v + "; confirm(\"Are you sure you wish to transfer ownership of the building and all rooms to you??\", 15);", "Take ownership of the building", "house_link", "Reclaim") + (Infos[v].d == 0 ? Adir("if (Processing == 0) {Processing = 1; window.location.replace(\"fhBgT2.asp?InventoryItemID=" + Infos[v].v + ";\");}","Trade this building to someone else", "user_go", "Trade") : "") + (Math.abs(Infos[v].h != 0) ? Adir("LastV = " + v + ";confirm(\"Are you sure you wish to unstealth " + Infos[v].i + "?\", 8);","Unstealth this building", "eye", "Un-stealth") : "") + (Infos[v].a == 1 ? Adir("if (Processing == 0) {Processing = 1; window.location.replace(\"fhbmrc.asp?CharsAt=" + Infos[v].v + "\");}","Check who has a recall marker to this building","house", "Recall Check") : "") + (Infos[v].d != 3 ? Adir("if (Processing == 0) {Processing = 1; window.location.replace(\"fhblm.asp?CharsAt=" + Infos[v].v + "\");}","Rennovate this building","brick", "Renovate") : '') + (Infos[v].lsr != 0 || Infos[v].pea != 0 ? Adir("if (Processing == 0) {Processing = 1; window.location.replace(\"fhlordship2.asp?CharsAt=" + Infos[v].v + "\");}","Lordship functions", "coins", "Lordship") : '') + (SystemUser != 0 ? Adir("GS(6, " + Infos[v].v + ");", "", "heart_delete", "No Stats") : "");
// + Adir("GS(7, " + Infos[v].v + ");", "", "heart_add", "Stats")

var strf = '' + (Infos[v].h != 0 ? '<b title=\'Stealthed\'>S</b>' : '') + (Infos[v].hd == 0 ? '' : '<b title=\'Lockable\' style=\'color: gold;\'>L</b>') + (Infos[v].nd != 0 ? '' : '<b title=\'Can be destroyed\' style=\'color: red;\'>X</b>' );
var income = Infos[v].pea * 1000;
if (hap != 100) {
	income = Math.round((income / 100)) * hap;
}
var strl = (Infos[v].lsr == 0 ? (Infos[v].rl > 0 ? 'Rooms: ' + Infos[v].rt  + ' of ' + Infos[v].rl : '') : '<table cellpadding=1 cellspacing=0 class="weakercell"><tr><td width=\'33%\'>' + (Infos[v].lsr != 0 ? '<img src=\'https://res.landsofhope.com/game/icons/chart_curve.png\' title=\'' +  Infos[v].lsr + 'rating\'>: ' + Infos[v].lsr : '')  + '</td><td width=\'33%\' align=center>' + GetHap(hap) + '</td><td width=\'33%\'>' + (Infos[v].pea != 0 ? '<img src=\'https://res.landsofhope.com/game/icons/user_green.png\' title=\'' +  Infos[v].pea + 'peasants\'>: ' + Infos[v].pea : '') + '</td></tr><tr><td colspan=3><img src=\'https://res.landsofhope.com/game/icons/coins.png\' title=\'Weekly income\'>: ' + window.top.BSGM(income) + '</td></tr></table>');
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')"><td width=40><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=40 height=40' + (h != 0 ? ' style=\'filter: Alpha(opacity=45)\'' : '') + '></td><td width=\'280px\' style="color: ' +  Color + '; padding-left: 5px;"><b>' + ItemName + '</b><br>Location: ' + x + ', ' + y + ' ' + GetRealm(g) + '<br>' + (l == 0 ? '<font id=tred>Warning building is <b>Unlocked</b></font>' : '<font id=tgreen>Building is <b>Locked</b></font>')  + '</td><td width=60>' + strf + '</td><td width=140>' + strl + '</td><td width=150>' + strb + '</td></tr>');
IC = IC + 1;
}

function GetHap(h) {
	var strh = '';
	if (h < 30) {
		strh = '<img src=\'https://res.landsofhope.com/game/icons/emoticon_unhappy.png\' title=\'' + h + '% happy\'>';
	} else if (h < 70) {
		strh = '<img src=\'https://res.landsofhope.com/game/icons/emoticon_waii.png\' title=\'' + h + '% happy\'>';
	} else {
		strh = '<img src=\'https://res.landsofhope.com/game/icons/emoticon_happy.png\' title=\'' + h + '% happy\'>';
	}
	return strh;
}

function newInfo(PictureID, ItemName, ItemID, Color, h, l, x, y, v, g, c, d, hd, rl, rt, nd, lsr, pea, hap) {
this.c = Color;
this.v = ItemID;
this.p = PictureID;
this.i = ItemName;
this.nd = nd;
this.rl = rl;
this.rt = rt;
this.hd = hd;
this.d = d;
this.h = h;
this.a = c;
this.l = l;
this.g = g;
this.x = x;
this.y = y;
this.z = v;
this.lsr = lsr;
this.pea = pea;
}
