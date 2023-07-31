var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPR;
var IPath2 = window.top.FHIPI;
var ItemCount = ItemCount;
var Processing = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(ItemName, PictureID) {
	if (PictureID == '0') { PictureID = '' }
	var Color = LITE;
	document.write('<tr style="color: ' + Color + '; padding-left: 5px"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + ItemName + '</td><td></tD><td></td></tr>');
}

function AI(ItemName, nsp, sp, PictureID, ep) {
	if (PictureID == '0') { PictureID = '' }
	var Color = LITE;
	var wwidth = 150;
	if (nsp == sp) {
		wwidth = 200;
	}
	document.write('<tr style="color: ' + Color + '; padding-left: 5px"><td width=15><img src=\'' + IPath2 + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'' + wwidth + '\'>' + ItemName + '</td><td width=30 style=\'color: gold\'>' + (ep > 0 ? (ep == 3 ? 'DE' : (ep == 2 ? 'UW' : (ep == 4 ? 'TA' : (ep == 5 ? 'DD' : 'JW')))) : '') + '</td>' + (sp == nsp ? '<td width=100>' + window.top.BSGM(nsp) + '</td>' : '<td width=75>' + window.top.BSGM(nsp) + '</td><td width=75>' + window.top.BSGM(sp) + '</td></tr>'));
}

function DC(v) {
	if (Math.abs(getObj('CharsAt').value) == 0) {
		if (ItemCount == 0 || (ItemCount > 0 && ItemCount <= Math.round(Infos[v].ic))) {
			confirm('Trade goods to ' + Infos[v].i + ', they have room for ' + Infos[v].ic + ' items?', v)
		} else if (ItemCount > 0 && ItemCount > Math.round(Infos[v].ic)) {
			alert('You can not trade to ' + Infos[v].i + ', you are trying to trade ' + ItemCount + ' items, they only have room for ' + Infos[v].ic);
		}
	}
}

function AC2(PictureID, ItemName, ItemID, ICX, pv) {
	if (PictureID == '0') { PictureID = '' }
	if (ICX < ItemCount || pv != 0) {
		var Color = '#ff6666';
	} else {
		var Color = LITE;
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, PictureID, ItemName, ItemID, ICX, pv);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" ' + (pv == 0 ? 'onclick="DC(' + IC + ')"' : '') + '><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\' style="color: ' + Color + '; padding-left: 5px">' + ItemName + '</td><td width=\'25\'>' + (pv == 0 ? ICX : 'OFF') + '</td></tr>');
	IC = IC + 1;
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Infos[v].i);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function newInfo(Color, PictureID, ItemName, ItemID, IC, pv) {
	this.c = Color;
	this.v = ItemID;
	this.p = PictureID;
	this.i = ItemName;
	this.ic = IC;
	this.pv = pv;
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			if (pb > 0 && Processing == 0) {
				Processing = 1;
				getObj('CharsAt').value = Infos[pb].v;
				getObj('Trader').submit();
			} else {
				if (pb < 0 && Processing == 0) {
					Processing = 1;
					getObj('Trader').submit();
				}
			}
		}
	}
}