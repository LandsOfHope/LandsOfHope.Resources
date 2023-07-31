var PageNo = PageNo;
var Processing = 0;
var CharsAt = CharsAt;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Infos[v].i);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Level: ' + Infos[v].l + '<br>Racename: ' + Infos[v].r + '<br>Profession: ' + Infos[v].p2 + '' + (Infos[v].t == 0 ? '<br>Not Stabled' : '<br>Stabled');
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	if (Processing == 0) {
		if (Infos[v].t == 0) {
			getObj('Buttons').innerHTML = '' + Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt=' + CharsAt + '&P=' + PageNo + '&ItemID=' +Infos[v].value + '&Type=1\');}','Stable ' + Infos[v].i,'Stable');
		} else {
			getObj('Buttons').innerHTML = '' + Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt=' + CharsAt + '&P=' + PageNo + '&ItemID=' +Infos[v].value + '&Type=2\');}','Unstable ' + Infos[v].i,'Unstable');
		}
	} else {
		getObj('Buttons').innerHTML = '';
	}
}

function AC(Special, value, r, p2, l, PictureID, Itty) {
var Color = LITE;
if (Special != 0) {Color = 'red'}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, Special, value, r, p2, l, PictureID, Itty);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' +  Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + Itty + '</tr>');
IC = IC + 1;
}

function newInfo(Color, Special, value, r, p2, l, PictureID, Itty) {
this.c = Color;
this.t = Special;
this.p = PictureID;
this.i = Itty;
this.value = value;
this.l = l;
this.r = r;
this.p2 = p2;
}

function GoP(newP) {
	window.location.replace('?P=' + newP + '&CharsAt=' + CharsAt);
}