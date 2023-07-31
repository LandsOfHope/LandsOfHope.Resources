var Type2 = Type;
var a = a;
var m = m;
var PageNo = PageNo;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();
var Processing = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AVC(value, ic, PictureID, Itty) {
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, value, ic, PictureID, Itty);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px">' + Itty + ' * ' + ic + '</td><td><input type=checkbox id=ItemID2 name=ItemID2 onclick="return DCC(' + IC + ')" style="width:12;height:12" value="' + value + '"></td></tr>');
	//
	IC = IC + 1;
}

function newInfo(Color, value, ic, PictureID, Itty) {
	this.c = Color;
	this.v = value;
	this.p = PictureID;
	this.t = Itty;
	this.q = ic;
}

function DCC(v) {
	var x = 0;
	var totala = 0;
	var tt = 0;
	if (getObj("ItemID2") != null) {
		for (x = 0; x < IC; x++) {
			if (v == x) {
				tt = Math.abs(Infos[x].q);
			}
			if (getObj("ItemID2")[x].checked == true) {
				totala = Math.abs(totala) + Math.abs(Infos[x].q)
			}
		}
	}
	//alert(tt);
	if (totala > 1000 && ((totala - tt) >= 1000)) {
		return false
	} else {
		return true
	}
}

function DCC2() {
	var x = 0;
	var totala = 0;
	if (getObj("ItemID2") != null) {
		for (x = 0; x < IC; x++) {
			if (getObj("ItemID2")[x] == true) {
				totala = Math.abs(totala) + Math.abs(Infos[x].q)
			}
		}
	}
	return totala
}

function SA(how) {
	var x = 0;
	var totala = 0;
	if (getObj("ItemID2") != null) {
		for (x = 0; x < IC; x++) {
			if ((totala < 1000 && Math.abs(totala) + Math.abs(Infos[x].q <= 1000)) || how == 0) {
				getObj("ItemID2")[x].checked = how;
			} else {
				getObj("ItemID2")[x].checked = 0;
			}
			if (getObj("ItemID2")[x].checked == true) {
				totala = Math.abs(totala) + Math.abs(Infos[x].q)
			}
		}
	}
}

function S2(how) {
	var x = 0;
	var totala = 0;
	if (getObj("ItemID2") != null) {
		for (x = IC - 1; x >= 0; x--) {
			if ((totala < 1000 && Math.abs(totala) + Math.abs(Infos[x].q <= 1000)) || how == 0) {
				getObj("ItemID2")[x].checked = how;
			} else {
				getObj("ItemID2")[x].checked = 0;
			}
			if (getObj("ItemID2")[x].checked == true) {
				totala = Math.abs(totala) + Math.abs(Infos[x].q)
			}
		}
	}
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	var tt = DCC2();
	window.top.InfoTip('' + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), '' + Infos[v].t + '' + (tt > 0 ? ', selected stack ' + tt + (tt > 1000 ? ' (will be split)' : '') : ''));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Quantity: ' + Infos[v].q;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = '';
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '&ItemID=' + Type2 + '&a=' + a + '&m=' + m);
}
