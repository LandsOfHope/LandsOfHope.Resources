
var CharsAt = CharsAt;
var PageNo = PageNo;
var Type2 = Type2;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AM(v, PictureID, l2, b, Named) {
var Color = '#66ff66';
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, v, PictureID, l2, b, Named);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px;">' + Named + '</td><td><input type=checkbox id=ItemID style=\'width: 12px; height: 12px;\' name=ItemID value=\'' + v + '\'></td></tr>');
IC = IC + 1;
}

function newInfo(Color, v, PictureID, l2, b, Named) {
this.c = Color;
this.value = v;
this.p = PictureID;
this.t = Named;
this.l2 = l2;
this.v = b;
}

function SA(how) {
var x = 0;
var totala = 0;
if (getObj("ItemID") != null) 
{
	if (IC <= 1) {
		getObj("ItemID").checked = how;
	} else {
		for (x = 0; x < IC; x++) {
			getObj("ItemID")[x].checked = how;
		}
	}
}
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b>' + '<br>Level: ' + Infos[v].l2 + '<br>Value: ' + window.top.BSGM(Infos[v].v);
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = '' + Adr('window.location.replace(\'?Type=' + Type2 + '&CharsAt=' + CharsAt + '&ItemID=' +Infos[v].value + '\');','Bail','Bail');
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

function GoP(PageNo) {
window.location.replace('?CharsAt=' + CharsAt + '&P=' + PageNo);
}
