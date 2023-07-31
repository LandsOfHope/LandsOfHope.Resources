var IPath2 = window.top.FHIPI;
var IPath = window.top.FHIPR;
var Processing = 0;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(ItemID, PictureID, Itty, q) {
	if (PictureID == '0') { PictureID = '' }
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, ItemID, PictureID, Itty, q);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + Itty + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, ItemID, PictureID, Itty, q) {
	this.c = Color;
	this.q = q;
	this.p = PictureID;
	this.t = Itty;
	this.value = ItemID;
}

function DC(v) {
	if (Processing == 0) {
		confirm('Send these items to ' + Infos[v].t + '?, they will not be able to send them back if they do not have a Carrier Pidgeon. Items will be sent to their Trade Bag!', v);
	}
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && Processing == 0) {
			Processing = 1;
			getObj('Note').value = tinyMCE.get('Note').getContent();;
			getObj('Dest').value = Infos[pb].value;
			getObj('editform').submit();
		}
	}
}

function AI(ItemName, nsp, sp, PictureID) {
	if (PictureID == '0') { PictureID = '' }
	var Color = LITE;
	document.write('<tr class="ss" style="color: ' + Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath2 + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + ItemName + '</td></tr>');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}