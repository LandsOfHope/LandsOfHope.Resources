var IC = 0;
var Infos = 0;
var IPath = window.top.FHIPR;
var IPath2 = window.top.FHIPI;
var Processing = 0;
var ItemCount = 1;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC( ItemName, PictureID) {
if (PictureID == '0') {PictureID = ''}
var Color = LITE;
document.write('<tr><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\' style="color: ' +  Color + '; padding-left: 5px;">' + ItemName + '</td><td></tD><td></td></tr>');
}


function DC(v) {
	if (Math.abs(getObj('CharsAt').value) == 0) {
		if (ItemCount == 0 || (ItemCount > 0 && ItemCount <= Math.round(Infos[v].ic))) {
			confirm('Trade pet to ' + Infos[v].i + ', they have room for ' + Infos[v].ic + ' pets?', v)
		} else if (ItemCount > 0 && ItemCount > Math.round(Infos[v].ic)) {
			alert('You can not trade to ' + Infos[v].i + ', they can not own anymore pets.');
		}
	}
}

function AC2(PictureID, ItemName, ItemID, ICX) {
if (PictureID == '0') {PictureID = ''}
if (IC < ItemCount) {
	var Color = '#ff6666';
} else {
	var Color = LITE;
}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, PictureID, ItemName, ItemID, ICX);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\' style="color: ' +  Color + '; padding-left: 5px;">' + ItemName + '</td><td width=\'25\'>' + ICX + '</td></tr>');
IC = IC + 1;
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Infos[v].i);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function newInfo(Color, PictureID, ItemName, ItemID, IC) {
this.c = Color;
this.v = ItemID;
this.p = PictureID;
this.i = ItemName;
this.ic = IC;
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			if (pb > 0 && Processing == 0) {
				Processing = 1;
				getObj('CharsAt').value = Infos[pb].v;
				getObj('Trade').submit();
			}
		}
	}
}