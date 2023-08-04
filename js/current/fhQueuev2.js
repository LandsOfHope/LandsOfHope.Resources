var PageNo = PageNo;
var CharsAt = CharsAt;
var ID = ID;
var Timers = 0;
var Timers2 = new Array();
var strOut = '';
Timers2[0] = new Array();
var IPath = window.top.FHIPI;
var QC = 0;
var Queue = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function RC(v) {
	getObj('Q' + v).style.cursor = '';
	getObj('Q' + v).style.backgroundColor = ''
}

function DDC() {
	getObj('Inv').innerHTML = strOut;
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '&CharsAt=' + CharsAt);
}

function AC(qn, Quality, Color, MakeID, QueueID, Material, Expr2, PictureID, ItemName, Xp, Quantity, Expr4, Other, can, tl, rl) {
	if (PictureID == '0') { PictureID = '' };
	if (Queue[QC] == null) {
		Queue[QC] = new Array();
	}
	Queue[QC] = new newQueue(qn, Quality, Color, MakeID, QueueID, Material, Expr2, PictureID, ItemName, Xp, Quantity, Expr4, Other, can, tl, rl);

	//qn=' + qn + ' tl=' + tl + ' rl=' + rl + ' can=' + can + ' s="' + Expr2 + '" t=' + Expr4 + ' p="' + (PictureID == '' ? 'na.gif' : PictureID) + '"
	//l="' + Material + '" v=' + MakeID + ' value=' + QueueID  + ' q="' + (Quality == 'U' ? 'Useless' :(Quality == 'N' ? 'Uncommon' :(Quality == 'C' ? 'Common' :(Quality == 'U' ? 'Unique' : (Quality == 'V' ? 'Very Rare' :(Quality == 'R' ? 'Rare' :(Quality == 'A' ? 'Artifact' :'Unknown'))))))) + '" class="it" 

	const timerIdx = Timers++;
	document.write('<tr id="Q' + timerIdx + '" onmouseover="PC(' + QC + ')" onmouseout="RC(' + QC + ')"  onclick="DC(' + QC + ')" style="color: ' + Color + '; padding-left: 5px"><td width=20 class=\'weakercell\' style=\'background-color:' + BGCOLOR_S + '; color: white;\'><b>' + qn + '</b>.</td><td><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td>' + (Other == 1 ? 'Making' : 'Queued') + '</td><td>' + Material + ' ' + ItemName + (Quantity > 1 ? ' * ' + Quantity : '') + '</td><td>' + (Expr4 < 0 ? 'Done' : window.top.HSM(Expr4) + '') + '</td><td>' + (Xp < 0 ? 'None' : Xp) + '</td></tr>');
	Timers2[timerIdx] = setTimeout(() => RuF(timerIdx), 5000);

	//document.write('<tr id="M' + QC + '" onclick="DC(' + MC  + ')" onmouseout="RC(' + MC  + ')" onmouseover="PC(' + MC  + ')"><td width=40><img width=40 height=40 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td valign=top width=250><b style="color: ' + Color + '">' + fn + '</b><br>Leader: ' + fln + '<br><center>' + ft + '</center></td></tr>');
	QC = QC + 1;
}

function newQueue(qn, Quality, Color, MakeID, QueueID, Material, Expr2, PictureID, ItemName, Xp, Quantity, Expr4, Other, can, tl, rl) {
	this.c = Color;
	this.qn = qn;
	this.tl = tl;
	this.rl = rl;
	this.can = can;
	this.s = Expr2;
	this.t = Expr4;
	this.p = PictureID;
	this.l = Material;
	this.v = MakeID;
	this.value = QueueID;
	this.q = (Quality == 'U' ? 'Useless' : (Quality == 'N' ? 'Uncommon' : (Quality == 'C' ? 'Common' : (Quality == 'U' ? 'Unique' : (Quality == 'V' ? 'Very Rare' : (Quality == 'R' ? 'Rare' : (Quality == 'A' ? 'Artifact' : 'Unknown')))))));
	this.Other = Other;
	this.ItemName = ItemName;
	this.Xp = Xp;
	this.Quantity = Quantity;
}

function RuF(v) {
	var Ref2 = getObj('Q' + v);
	if ((Math.round(Queue[v].t) - 5) <= 0) {
		Ref2.cells[2].innerHTML = 'Done';
		Ref2.cells[4].innerHTML = 'Done';
		clearTimeout(Timers2[v]);
	}
	else {
		Queue[v].t = Math.abs(Queue[v].t) - 5;
		Ref2.cells[4].innerHTML = window.top.HSM(Queue[v].t);
		clearTimeout(Timers2[v]);
		Timers2[v] = setTimeout(() => RuF(v), 5000);
	}
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipz(v);
	getObj('Pic').innerHTML = "<img src='" + IPath + (Queue[v].p == null ? 'na.gif' : Queue[v].p) + "' width=20 height=20>";
	getObj('Buttons').innerHTML = '<' + strClicky + ' onclick="window.parent.loadwindow2(\'im3.asp?Test=' + Queue[v].v + '&Bonus=0&Material=' + Queue[v].l + '\',300,300,\'iwindow\',\'' + Queue[v].ItemName + '\');" style=\'width: 65\'>Info</button>' + (Queue[v].can != 0 ? '<' + strClicky + ' onclick="window.location.replace(\'fhqueue.asp?P=' + PageNo + '&CharsAt=' + CharsAt + '&InventoryItemID=' + Queue[v].value + '\');" style=\'width: 65\'>Cancel</button>' : '');
}

function PC(v) {
	window.top.InfoTip('' + IPath + (Queue[v].p == null ? 'na.gif' : Queue[v].p), Tipz(v));
	getObj('Q' + v).style.cursor = 'pointer';
	getObj('Q' + v).style.backgroundColor = BGCOLOR_S
}

function Tipz(v) {
	return '' + getObj('Q' + v).cells[2].innerHTML.replace(' * ', '<br>Rarity: ' + Queue[v].q + '<br>Quantity: ') + '<br>Queue Slot: ' + Queue[v].qn + '<br>Level: ' + Queue[v].rl + '' + (Queue[v].c == 'orange' ? '<br><b>Recipient</b>' : '<br><b>Maker</b>') + (Queue[v].s != '' ? '<Br>For: ' + Queue[v].s : '') + (getObj('Q' + v).cells[4].innerHTML == 'None' ? '<br>Being Delivered' : '<Br>Xp: ' + getObj('Q' + v).cells[5].innerHTML + '') + (Queue[v].can != 0 ? '' : '<br>Can not be cancelled')
}