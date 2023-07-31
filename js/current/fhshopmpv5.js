
var CharsAt = CharsAt;
var SL = SL;
var SN = SN;
var SP = SP;
var EP = EP;
var PageNo = PageNo;
var EL = EL;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();
var Processing = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function fx1() {
var re = /^\$|,|'|"|%|@|#/g;

getObj('SN').value = getObj('SN').value.replace(re, "");
if (getObj('SN').value == '' || getObj('SN').value == null) {
	getObj('SN').value = 0;
	}
}

function GoP(PageNo) {
window.location.replace('?SN=' + SN + '&SP=' + SP + '&EP=' + EP + '&SL=' + SL + '&EL=' + EL + '&CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function ShowSearch() {
	document.write('<table class=\'weakcell\' cellpadding=0 cellspacing=0><input type=hidden id=CharsAt name=CharsAt value=\'' + CharsAt + '\'><tr><td>Name/Race/Prof.:</td><td><input name=SN id=SN value=\'' + SN + '\' onblur=\'fx1()\' title=\'The name or keyword to look for.\'></td><td>Min Level:</td><td><input title=\'The minimum level number.\' id=SL name=SL value=\'' + SL + '\' size=4 maxlength=4 onkeypress=\'return fxkp(event);\' onpaste=\'event.returnValue = false;\'></td><td>Max Level:</td><td><input title=\'The maximum level number.\' id=EL name=EL value=\'' + EL + '\' size=4 maxlength=4 onkeypress=\'return fxkp(event);\' onpaste=\'event.returnValue = false;\'></td><td>' + Adr('if (Processing == 0) {Processing = 1; fx1(); fxn(getObj(\'SL\'));fxn(getObj(\'EL\'));getObj(\'search\').submit();}','Find pets in the Marketplace', 'Find') + '</td></tr><td>Min Price:</td><td colspan=2><input name=SP id=SP value=\'' + SP + '\' type=hidden>' + FormMoney('SP', SP) + '</td><td>to</td><td colspan=2><input id=EP name=EP value=\'' + EP + '\' type=hidden>' +FormMoney('EP', EP) + '</td></tr></table>');
}

function DC(v) {
getObj('Stuff2').innerHTML = Tipz(v);
getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
getObj('Buttons').innerHTML = Adr('window.location.replace(\'fhshopmp.asp?C2=' + Infos[v].i + '&ItemID=' + Infos[v].z + '&P=' + PageNo + '&SP=' + SP + '&EP=' + EP  +'&SN=' + SN + '&SL=' + SL + '&EL=' + EL + '&CharsAt=' + CharsAt + '\');','Buy ' + Infos[v].t,'Buy') + Adr('PopupMonsterInfo(\'' + Infos[v].z + '\');','Info','Info') + (Infos[v].ride != 0 ? Adr('window.top.loadwindow2(\'fhlibraryrmb.asp?CharsAt=' + Infos[v].rid + '\',300,300,\'iwindow\',\'' + Infos[v].t + ' Mount Bonuses\');','View available mount bonuses for this race','Mount Info') : '');
}

function Tipz(v) {
	return '<b>' + Infos[v].t + '</b>' + (Infos[v].ep == 1 ? '<br><center><b style=\'color: #339966;\'>Jurassic Wars Race</b></center>' : (Infos[v].ep == 2 ? '<br><center><b style=\'color: #9966FF;\'>Uncharted Waters Race</b></center>' : (Infos[v].ep == 3 ? '<br><center><b style=\'color: #CC0000;\'>Dragons of the East Race</b></center>' : ''))) + '<br>Race: ' + Infos[v].r + '<br>Prof: ' + Infos[v].n + '<br>Sex: ' + Infos[v].s + '<br>Level: ' + Infos[v].l + '<br>Breedable: ' + (Infos[v].b != 0 ? 'Yes' : 'No') + '<br>Mountable: ' + (Infos[v].ride != 0 ? 'Yes' : 'No') + '<br>Sale Price: ' + window.top.BSGM(Infos[v].v);
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('' + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Tipz(v));
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function AC(z, i, v, r,n,l, PictureID, ItemName, s, ep, b, ride, rid) {
if (PictureID == '0') {PictureID = ''}
var Color = LITE;
if (i == -1) {Color = 'red';}
if (ep == 1) {Color = '#339966';}
if (ep == 2) {Color = '#9966FF';}
if (ep == 3) {Color = '#CC0000';}
if (ep == 4) {Color = '#FFFFCC';}
if (ep == 5) {Color = '#666633';}

if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, z, i, v, r,n,l, PictureID, ItemName, s, ep, b, ride, rid);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' +  Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'240px\'>' + ItemName + '</td><td width=30 align=right>' + (ep > 0 ? (ep == 1 ? 'JW' : (ep == 3 ? 'DE' : (ep == 4 ? 'TA' : (ep == 5 ? 'DD' : 'UW'))) ) : '') + '</td><td width=30 align=right>' + (ride > 0 ? '[M]' : '') + (b > 0 ? '[B]' : '') + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, z, i, v, r,n,l, PictureID, ItemName, s, ep, b, ride, rid) {
this.c = Color;
this.p = PictureID;
this.t = ItemName;
this.v = v;
this.s = s;
this.ep = ep;
this.i = i;
this.z = z;
this.l = l;
this.r = r;
this.n = n;
this.rid = rid;
this.b = b;
this.ride = ride;
}
