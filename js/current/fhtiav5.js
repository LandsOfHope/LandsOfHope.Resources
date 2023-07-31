var MapID = MapID;
var P = P;
var IPath = window.top.FHIPI;
var Infos = new Array();
var IC = 0;
var Processing = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(pq, IID, PictureID, Itty, aq, ad, ep, d) {
var Color = LITE;
if (pq > 0) {
	Color = 'red';
	IID = -IID;
} else if (aq != 0) {
	Color = 'green';
}
if (pq > 0) {aq = 1};
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, pq, IID, PictureID, Itty, aq, ad, ep, d);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=40><img width=40 height=40 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="100%" valign=top><b style="color: ' + Color + '; padding-left: 5px;">' + Itty + '</b><br>' + d + '</td><td>' + (ep == 1 ? 'JW' : (ep == 2 ? 'UW' : (ep == 3 ? 'DE' : (ep == 4 ? 'TA' : (ep == 5 ? 'DD' : ''))))) + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, pq, IID, PictureID, Itty, aq, ad, ep,d) {
this.c = Color;
this.d = ad;
this.p = PictureID;
this.q = aq;
this.v = IID;
this.t = Itty;
this.ep = ep;
this.d2 = d;
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b>' + (Infos[v].ep == 1 ? '<br>Expansion: <b>Jurassic Wars</b>' : (Infos[v].ep == 2 ? '<br>Expansion: <b>Uncharted Waters</b>' : (Infos[v].ep == 3 ? '<br>Expansion: <b>Dragons of the East</b>' : (Infos[v].ep == 4 ? '<br>Expansion: <b>The Afterlife</b>' : (Infos[v].ep == 5 ? '<br>Expansion: <b>Dark Depths</b>' : ''))))) + '' + (Infos[v].v > 0 ? '<br>Held Quantity: ' + Infos[v].q + '' + (Infos[v].q == 0 ? '<br>You do not have any in your inventory.' : '<br>Place this item on the tile?') : (Infos[v].v < 0 ? '<br>Placed Quantity: 1<br>Remove this item from the tile?' : ''));
	getObj('Pic').innerHTML = '<img src=\'' + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + '\'>';
	getObj('Buttons').innerHTML = (Infos[v].q > 0 ? Adr('if (Processing ==0) {Processing = 1; window.location.replace(\'?P=' + P + '&MapID=' + MapID + '&Type=' + Infos[v].v + '\');}', '', (Infos[v].v > 0 ? 'Place' : 'Remove')) : '') + (Infos[v].v < 0 ? '<input name=Type id=Type value=\'' + Math.abs(Infos[v].v) + '\' type=\'hidden\'><input name=T id=T value=\'1\' type=\'hidden\'><input type=\'hidden\' name=p id=p value=\'' + P + '\'><input type=\'hidden\' name=MapID id=MapID value=\'' + MapID + '\'><br>Rename: <br><input type=\'text\' id=ldn name=ldn size=\'35\' maxlength=\'35\' value=\'' + Infos[v].t + '\'><br>Description: <br><input type=\'text\' id=ld name=ld size=\'35\' maxlength=\'300\' value=\'' + Infos[v].d  + '\'><br><input type=submit onclick=\'this.enabled = false;\' id=\'button\' value=\'Change\' ' + strClicks + '>' : '');
}


function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '&MapID=' + MapID);
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + Infos[v].p,Infos[v].t);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}