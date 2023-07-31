var IPath = window.top.FHIPI;
var IPath2 = window.top.FHIPI;
var Processing = 0;
var PageNo = PageNo;
var strWord = 'Test';
var strLocks = '';
var LastBuilding = -1;
var IC = 0;
var Infos = new Array();
var LC = 0;
var Locks = new Array();

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(ItemID, e, l, PictureID, Itty) {
if (PictureID == '0') {PictureID = ''}
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, ItemID, e, l, PictureID, Itty);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' +  Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + Itty + '</td><td>' + l + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, ItemID, e, l, PictureID, Itty) {
this.c = Color;
this.z = ItemID;
this.p = PictureID;
this.t = Itty;
this.e = e;
this.l = l;
}

function AC2(ItemID, l, PictureID, Itty) {
if (PictureID == '0') {PictureID = ''}
var Color = LITE;
strLocks += '<tr id="L' + LC + '" onmouseover="PC2(' + LC + ')" onmouseout="RC2(' + LC + ')" onclick="DC2(' + LC + ')" c="' + Color + '" style="color: ' +  Color + '; padding-left: 5px"><td width=15><img src=\'' + IPath2 + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + Itty + '</td><td>' + l + '</td></tr>';
if (Locks[LC] == null) {
	Locks[LC] = new Array();
}
Locks[LC] = new newLock(Color, ItemID, l, PictureID, Itty);
LC = LC + 1;
}

function newLock(Color, ItemID, l, PictureID, Itty) {
this.c = Color;
this.z = ItemID;
this.p = PictureID;
this.t = Itty;
this.l = l;
}

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '');
}

function DC(v) {
	LastBuilding = v;
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>' + (Infos[v].l == 0 ? 'Not Locked' : 'Lock Level: ' + Infos[v].l + '<br>Lockpick Level To Pick: ' + Math.abs(Infos[v].l) + '<br>Lockpicking Skill to Pick: ' + Math.round(Infos[v].l * 5)) + (Infos[v].l > 0 ? '<br><' + strClicky3 + ' onclick="if (Processing == 0) {Processing = 1; this.disabled=true; window.location.replace(\'?Type=0&ItemID=' +Infos[v].z + '\');}" style=\'width: 85\'>Unlock</button>' : '') ;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
	if (strLocks == '' && Infos[v].l == 0) {
		strLocks = '<tr><td id=tred>To lock an Item you need to have a tinker crafted lock in your inventory.<br><br>It will then show up here !</td></tr>'
	}
	getObj('Buttons').innerHTML = '<table class="weakcell">' + strLocks + '</table>'
}

function DC2(v) {
	if (Processing == 0) {
		Processing = 1;
		window.location.replace('?Type=1&ItemID=' + Infos[LastBuilding].z + '&L=' + Locks[v].l + '&ID=' + Locks[v].z);
	}
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
	window.top.InfoTip('' + IPath + Infos[v].p, '<b>' + Infos[v].t + '</b><br>Current Lock Level: ' + Infos[v].l);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function RC2(v) {
	getObj('L' + v).style.cursor = '';
	getObj('L' + v).style.backgroundColor='';
}

function PC2(v) {
	window.top.InfoTip('' + IPath2 + Locks[v].p, '<b>' + Locks[v].t + '</b><br>Lock Level: ' + Locks[v].l);
	getObj('L' + v).style.cursor = 'pointer';
	getObj('L' + v).style.backgroundColor=BGCOLOR_S
}
