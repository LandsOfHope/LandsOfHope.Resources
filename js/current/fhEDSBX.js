var IC = 0;
var Infos = new Array();
var CharsAt = CharsAt;
var IPath = window.top.FHIPI;
var Processing = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function TA() {
	var x = 0;
	var totala = 0;
	if (getObj("ItemID") != null) {
		if (IC <= 1) {
			if (getObj("ItemID").checked == true && getObj("ItemID").disabled == false) {
				totala = Math.abs(totala) + Math.abs(Infos[x].v)
			}
		} else {
			for (x = 0; x < IC; x++) {
				if (getObj("ItemID")[x].checked == true && getObj("ItemID")[x].disabled == false) {
					totala = Math.abs(totala) + Math.abs(Infos[x].v)
				}
			}
		}
	}
	return Math.round(totala);
}

function SA(how) {
	var x = 0;
	if (getObj("ItemID") != null) {
		if (IC <= 1) {
			if (getObj("ItemID").disabled == false) {
				getObj("ItemID").checked = how;
			}
		} else {
			for (x = 0; x < IC; x++) {
				if (getObj("ItemID")[x].disabled == false) {
					getObj("ItemID")[x].checked = how;
				}
			}
		}
	}
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			if (pb == 1) {
				Processing = 1;
				window.top.PGS('money.wav');
				getObj('editform').submit();
			} else if (pb == 2) {
				Processing = 1;
				window.top.Interface.location.replace('fhedsbx.asp?CharsAt=' + CharsAt + '&ItemID=-1');;
			}
		}
	}
}

function DC(v) {
	getObj('Stuff2').innerHTML = Infos[v].t + '<br>Quantity: ' + Infos[v].q2 + '<br>Value: ' + window.top.BSGM(Infos[v].v) + ' (<b>ea</b>' + (window.top.BSGM(Math.round(Infos[v].v / Infos[v].q2))) + ')';
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'fhEDSBX.asp?CharsAt=' + CharsAt + '&ItemID=' + Infos[v].z + '\');}', 'Sell', 'Sell') + (Infos[v].t.indexOf('(?)') == -1 ? Adr('window.top.loadwindow2(\'im4.asp?Test=' + Infos[v].z + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].t + '\');', 'Info', 'Info') : '');
}


function AM(Color, Named, ShopID, value, q2, Picture) {
	var q3 = q2;
	//z=' + ShopID + ' c="' + Color + '" style="color: ' + Color + '" onclick="DC(this)" onmouseover="PC(this)" onmouseout="RC(this)"
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, Named, ShopID, value, q2, Picture);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img src="' + IPath + (Picture == '' ? 'na.gif' : Picture) + '" width=15 height=15></td><td>' + Named + (q2 > 1 ? ' * ' + q2 : '') + '</td><td><input type=checkbox' + (Math.abs(q2) > 1000 ? ' disabled' : '') + ' id=ItemID name=ItemID value="' + ShopID + '" style="width: 12px; height: 12px;"></td></tr>');
	IC = IC + 1;
}

function newInfo(Color, Named, ShopID, value, q2, Picture, Level, at) {
	this.c = Color;
	this.t = Named;
	this.p = Picture;
	this.q2 = q2;
	this.v = value;
	this.z = ShopID;
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + IPath + Infos[v].p, ' ' + Infos[v].t + '<br>Value: ' + window.top.BSGM(Infos[v].v) + (Infos[v].q2 > 1 ? '<br>Each: ' + (window.top.BSGM(Math.round(Infos[v].v / Infos[v].q2))) + '' : ''));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}