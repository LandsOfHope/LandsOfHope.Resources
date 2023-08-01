var ID = ID;
var PageNo = PageNo;
var Timers = 0;
var Timers2 = new Array();
var strOut = '';
Timers2[0] = new Array();
var Processing = 0;
var Queue = new Array();
var QC = 0;

var IPath = window.top.FHIPI;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

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

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = '' + Queue[v].i + (Queue[v].s != '' ? '<Br>For: ' + Queue[v].s : '') + '<br>Level: ' + Queue[v].l + '<br>Race: ' + Queue[v].r + '<br>Profession: ' + Queue[v].n + '<Br>Xp: ' + getObj('Q' + v).cells[5].innerHTML + '' + (Queue[v].can != 0 ? '' : '<br>Can not be cancelled');
	getObj('Pic').innerHTML = "<img src='" + IPath + (Queue[v].p == '' ? 'na.gif' : Queue[v].p) + "'>";
	getObj('Buttons').innerHTML = (getObj('Q' + v).cells[2].innerHTML == 'Done' ? '<' + strClicky3 + ' onclick="if (Processing ==0) {Processing = 1; this.disabled = true; window.location.replace(\'' + (Queue[v].n == 'Player Vendor' ? 'fhmqp.asp' : '') + '?Type=2&P=' + PageNo + '&InventoryItemID=' + Queue[v].value + '\')}" style=\'width: 65\'>' + (Queue[v].n == 'Player Vendor' ? 'Hatch to Shop' : 'Hatch') + '</button><br>' + (Queue[v].n == 'Player Vendor' ? '<' + strClicky3 + ' onclick="if (Processing ==0) {Processing = 1; this.disabled = true; window.location.replace(\'fhmqps.asp?Type=2&InventoryItemID=' + Queue[v].value + '&P=' + PageNo + '\')}" style=\'width: 65\'>Hatch to PV</button><br>' : '') : '') + (Queue[v].can != 0 ? '<' + strClicky3 + ' onclick="if (Processing == 0) {Processing = 1; this.disabled = true; window.location.replace(\'?InventoryItemID=' + Queue[v].value + '&P=' + PageNo + '\')}" style=\'width: 65\'>Cancel</button>' : '');
}

function RC(v) {
	getObj('Q' + v).style.cursor = '';
	getObj('Q' + v).style.backgroundColor = ''
}

function PC(v) {
	window.top.InfoTip('' + IPath + (Queue[v].p == null ? 'na.gif' : Queue[v].p), Tipz(v));
	getObj('Q' + v).style.cursor = 'pointer';
	getObj('Q' + v).style.backgroundColor = BGCOLOR_S
}

function Tipz(v) {
	return '' + Queue[v].i + '<br>Level: ' + Queue[v].l + '<br>Race: ' + Queue[v].r + '<br>Profession: ' + Queue[v].n + (getObj('Q' + v).cells[4].innerHTML == 'None' ? '<br>Being Delivered' : '<Br>Xp: ' + getObj('Q' + v).cells[5].innerHTML + '') + (Queue[v].can != 0 ? '' : '<br>Can not be cancelled')
}

function AC(Color, value, l, r, n, s, PictureID, Note1, ItemName, Note2, Xp, can) {
	if (PictureID == '0') { PictureID = '' }
	// can=' + can +' t=' + Note2 + ' value=' + value + ' l='+ l + ' r="' + r + '" n="' + n + '" s="' + s + '"
	if (Queue[QC] == null) {
		Queue[QC] = new Array();
	}
	Queue[QC] = new newQueue(Color, value, l, r, n, s, PictureID, Note1, ItemName, Note2, Xp, can);

	document.write('<tr id=Q' + Timers + ' onmouseover="PC(' + QC + ')" onmouseout="RC(' + QC + ')"  onclick="DC(' + QC + ')" style="color: ' + Color + '; padding-left: 5px;"><td></td><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td>' + Note1 + '</td><td>' + ItemName + '</td><td>' + (Note2 <= 0 ? 'Done' : window.top.HSM(Note2) + '') + '</td><td>' + (Xp < 0 ? 'None' : Xp) + '</td></tr>');
	Timers2[Timers] = setTimeout(() => RuF(Timers), 5000);
	Timers = Timers + 1;
	QC = QC + 1;
}

function newQueue(Color, value, l, r, n, s, PictureID, Note1, ItemName, Note2, Xp, can) {
	this.c = Color;
	this.value = value;
	this.can = can;
	this.t = Note2;
	this.l = l;
	this.r = r;
	this.n = n;
	this.s = s;
	this.p = PictureID;
	this.i = ItemName;
}
