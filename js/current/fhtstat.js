var IPath = window.top.FHIPR;
var CharsAt = CharsAt;
var Mask = Mask;
var Processing = 0;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(PictureID, ItemName, ItemID, s) {
if (PictureID == '0') {PictureID = ''}
var Color = 'white'
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, PictureID, ItemName, ItemID, s);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' +  Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + ItemName + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, PictureID, ItemName, ItemID, s) {
this.c = Color;
this.v = ItemID;
this.p = PictureID;
this.t = ItemName;
this.s = s;
}

function DC(v) {
	getObj('Stuff2').innerHTML = "<b>" + Infos[v].t + "</b><br>Sex: " + Infos[v].s + "";
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	if (Processing == 0) {
		getObj('Buttons').innerHTML = Adr('if (Processing == 0) {confirm(\'Erect a statue of ' + Infos[v].t + ' on this tile. Continue ?\',' + v + ');}','Erect a statue of ' + Infos[v].t,'Erect');
	} else {
		getObj('Buttons').innerHTML = "";
	}
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && Processing == 0) {
			Processing = 1;
			window.top.Interface.location.replace('fhtstat.asp?Action=1&Mask=' + Mask + '&CharsAt=' + CharsAt + '&Type=' + Infos[pb].v);
		}
	}
}

function GoP(PageNo) {
window.location.replace('?CharsAt=' + CharsAt + '&Mask=' + Mask + '&P=' + PageNo + '');
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Infos[v].t);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}