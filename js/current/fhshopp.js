var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPR;
var Processing = 0;
var CharsAt = CharsAt;
var PageNo = PageNo;

document.write('<script src="js/formatting.js" language="JavaScript"></script>');


function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Level: ' + Infos[v].l + '<br>Racename: ' + Infos[v].r + '<br>Profession: ' + Infos[v].p2 + '<br>Value: ' + window.top.BSGM(Infos[v].v);
	getObj('Pic').innerHTML = "<img src='" + IPath + Infos[v].p + "'>";
	getObj('Buttons').innerHTML = '' + (Processing == 0 ? '<' + strClicky3 + ' onclick="this.disabled = true; Processing = 1;window.location.replace(\'?CharsAt=' + CharsAt + '&P=' + PageNo + '&ItemID=' +Infos[v].value + '\')" style=\'width: 85\'>Sell</button>' : '');

}

function GoP(PageNo) {
window.location.replace('?CharsAt=' + CharsAt + '&P=' + PageNo + '');
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

function AC(value, v, r, p2, l, PictureID, Itty) {
var Color = 'gold';
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, value, v, r, p2, l, PictureID, Itty);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="315" style="color: ' + Color + '; padding-left: 5px;">' + Itty + '</td><td><input type=checkbox id=ItemID style=\'width: 12px; height: 12px;\' name=ItemID value=\'' + value + '\'></td></tr>');
IC = IC + 1;
}

function newInfo(Color, value, v, r, p2, l, PictureID, Itty) {
this.c = Color;
this.v = v;
this.r = r;
this.p2 = p2;
this.l = l;
this.p = PictureID;
this.t = Itty;
this.value = value;
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