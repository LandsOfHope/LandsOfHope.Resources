var ItemID = ItemID;
var CharsAt = CharsAt;
var PageNo = PageNo;
var Processing = 0;
var IC = 0;
var Infos = new Array();
var PN = PN;
var PB = PB;
var IPath = window.top.FHIPI;
var LastPatchClick = -1;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(v, PictureID, Itty, e, pv) {
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, PictureID, Itty, e, pv);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, PictureID, Itty, e, pv) {
	this.c = Color;
	this.v = v;
	this.p = PictureID;
	this.i = Itty;
	this.e = e;
	this.pv = pv;
}

function GoP(PageNo) {
	window.location.replace('?CharsAt=' + CharsAt + '&ItemID=' + ItemID + '&P=' + PageNo + '');
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

function DC(v) {
	LastPatchClick = v;
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Patched: ' + (Math.abs(Infos[v].e) != 0 ? 'Yes' : 'No') + (Math.round(Infos[v].pv) == -1 ? '' : '<br>Bonus: <b>+' + Infos[v].pv + ' ' + PN + ' (' + PB + '%)</b>');
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'im.asp?Test=' + Infos[v].v + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].i + '\');', 'Info', 'Info') + (Processing == 0 ? (Math.abs(Infos[v].e) != 0 ? Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'fhinvpatch.asp?CharsAt=-' + Infos[v].v + '&ItemID=' + ItemID + '&P=' + PageNo + '\')};', '>Uninstall', 'Uninstall') : '') + (ItemID != 0 ? Adr('if (Processing == 0) {confirm(\'Are you sure you wish to fit the Patch into this item, once an item has been patched it can not be Sold to another player, Traded or put into storage. Please click OK if you are 100% sure you wish to do this.\', 1)};', 'Install', 'Install') : '') : '');
}

function PromptReturn(returnVal, pb) {
	var v = LastPatchClick;
	if (PromptReturn != null && Processing == 0) {
		if (pb != null) {
			Processing = 1;
			window.top.Interface.location.replace('fhinvpatch.asp?CharsAt=' + Infos[v].v + '&ItemID=' + ItemID + '&P=' + PageNo);
		}
	}
}