var PageNo = PageNo;
var CharsAt = CharsAt;
var IPath = window.top.FHIPR;
var Processing = 0;
var Targets = new Array();
var TC = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('fhhealer.asp?CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = Targets[v].n + '<br>Level: ' + Targets[v].l2 + '<br>Dead: ' + (Targets[v].l != '0' ? 'Yes' : 'No') + '<br>Value: ' + window.top.BSGM(Targets[v].v);
	getObj('Pic').innerHTML = "<img src='" + IPath + (Targets[v].p == '' ? 'na.gif' : Targets[v].p) + "' class='trans'>";
	getObj('Buttons').innerHTML = '<' + strClicky2 + ' onclick="if (Processing == 0) {Processing = 1; window.location.replace(\'fhhealer.asp?CharsAt=' + CharsAt + '&ItemID=' + Targets[v].value + '&P=' + PageNo + '\');}">Resurrect</button>';
}

function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + IPath + (Targets[v].p == '' ? 'na.gif' : Targets[v].p), ' ' + Targets[v].n + ', ' + window.top.BSGM2(Targets[v].v));
	getObj('T' + v).style.cursor = 'pointer';
	getObj('T' + v).style.backgroundColor = BGCOLOR_S
}

function AC(value, PictureID, l, l2, v, Named) {
	var Color = LITE;

	if (Targets[TC] == null) {
		Targets[TC] = new Array();
	}
	Targets[TC] = new newTarget(value, PictureID, l, l2, v, Named, Color);

	document.write('<tr width="100%" id="T' + TC + '" style="color: ' + Color + ';" onclick="DC(' + TC + ');" onmouseover="PC(' + TC + ');" onmouseout="RC(this);"><td><img src="' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '" width=15 height=15></td><td width="100%">' + Named + '</td></tr>');
	TC = TC + 1;
}

function newTarget(value, PictureID, l, l2, v, Named, Color) {
	this.value = value;
	this.c = Color;
	this.value = value;
	this.v = v;
	this.p = PictureID;
	this.l = l;
	this.l2 = l2;
	this.n = Named;
}

function Finish() {
	if (TC > 0) {
		DC(0);
	}
}