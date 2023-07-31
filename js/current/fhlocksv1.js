var IPath = window.top.FHIPM;
var IPath2 = window.top.FHIPI;
var Processing = 0;
var PageNo = PageNo;
var strWord = strWord;
var strLocks = '';
var LastBuilding = -1;
var IC = 0;
var Infos = new Array();
var LC = 0;
var Locks = new Array();

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(ItemID, e, l, PictureID, Itty) {
	if (PictureID == '0') { PictureID = '' }
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, ItemID, e, l, PictureID, Itty);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + Itty + '</td><td>' + l + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, ItemID, e, l, PictureID, Itty) {
	this.c = Color;
	this.e = e;
	this.p = PictureID;
	this.t = Itty;
	this.l = l;
	this.z = ItemID;
}

function AC2(ItemID, l, PictureID, Itty) {
	if (PictureID == '0') { PictureID = '' }
	var Color = 'white'
	if (Locks[LC] == null) {
		Locks[LC] = new Array();
	}
	Locks[LC] = new newLock(Color, ItemID, l, PictureID, Itty);
	strLocks += '<tr id="L' + LC + '" onmouseover="PC2(' + LC + ')" onmouseout="RC2(' + LC + ')" onclick="DC2(' + LC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath2 + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + Itty + '</td><td>' + l + '</td></tr>';
	LC = LC + 1;
}

function newLock(Color, ItemID, l, PictureID, Itty) {
	this.c = Color;
	this.p = PictureID;
	this.t = Itty;
	this.l = l;
	this.z = ItemID;
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}

function DC(v) {
	LastBuilding = v;
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Lock Level: ' + Infos[v].l + '<br>Lockpick Level To Pick: ' + Math.abs(Infos[v].l) + '<br>Lockpicking Skill to Pick: ' + Math.round(Infos[v].l * 5);
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
	if (strLocks == '') {
		strLocks = '<tr><td id=tred>To lock a Room you need to have a tinker crafted lock in your inventory.<br><br>It will then show up here !</td></tr>'
	}
	getObj('Buttons').innerHTML = '<table class="weakcell">' + strLocks + '</table>'
}

function DC2(v) {
	if (Processing == 0) {
		confirm('Do you wish to fit the ' + Locks[v].t + ' level ' + Locks[v].l + ' lock into ' + Infos[LastBuilding].t + ' ?', v);
	}
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && Processing == 0) {
			Processing = 1;
			window.top.Interface.location.replace('fhlocks.asp?Type=1&ItemID=' + Infos[LastBuilding].z + '&L=' + Locks[pb].l + '&ID=' + Locks[pb].z);
		}
	}

}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), '<b>' + Infos[v].t + '</b><br>Current Lock Level: ' + Infos[v].l);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function RC2(v) {
	getObj('L' + v).style.cursor = '';
	getObj('L' + v).style.backgroundColor = '';
}

function PC2(v) {
	window.top.InfoTip(IPath2 + (Locks[v].p == '' ? 'na.gif' : Locks[v].p), '<b>' + Locks[v].t + '</b><br>Lock Level: ' + Locks[v].l);
	getObj('L' + v).style.cursor = 'pointer';
	getObj('L' + v).style.backgroundColor = BGCOLOR_S
}