
var CharsAt = CharsAt;
var SL = SL;
var EL = EL;
var SN = SN;
var SP = SP;
var EP = EP;
var PageNo = PageNo;
var IPath = window.top.FHIPB;
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
window.location.replace('?SN=' + SN + '&SL=' + SL + '&SP=' + SP + '&EP=' + EP + '&CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function ShowSearch() {
	document.write('<table class=\'weakcell\' cellpadding=0 cellspacing=0><input type=hidden id=CharsAt name=CharsAt value=\'' + CharsAt + '\'><tr><td>Building Name/Type:</td><td><input id=SN name=SN value=\'' + SN + '\' onblur=\'fx1()\' title=\'The name or keyword to look for.\'></td><td>Min Rooms:</td><td><input title=\'The minimum number of rooms it must have\' id=SL name=SL value=\'' + SL + '\' size=3 maxlength=3 onkeypress=\'return fxkp(event);\' onpaste=\'event.returnValue = false;\'></td><td>Max Rooms:</td><td><input title=\'The maximum number of rooms it must have\' id=EL name=EL value=\'' + EL + '\' size=3 maxlength=3 onkeypress=\'return fxkp(event);\' onpaste=\'event.returnValue = false;\'></td><td>' + Adr('if (Processing == 0) {Processing = 1; fx1(); fxn(getObj(\'SL\'));fxn(getObj(\'EL\'));getObj(\'search\').submit();}','Find Buildings in the Marketplace', 'Find') + '</td></tr><tr><td>Min Price:</td><td colspan=2><input name=SP id=SP value=\'' + SP + '\' type=hidden>' + FormMoney('SP', SP) + '</td><td>to</td><td colspan=2><input id=EP name=EP value=\'' + EP + '\' type=hidden>' +FormMoney('EP', EP) + '</td></tr></table>');
}

function DC(v) {
getObj('Stuff2').innerHTML = Tipz(v);
getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
getObj('Buttons').innerHTML = Adr('window.location.replace(\'fhshopmb.asp?C2=' + Infos[v].i + '&ItemID=' + Infos[v].z + '&SP=' + SP + '&EP=' + EP  +'&P=' + PageNo + '&SN=' + SN + '&SL=' + SL + '&CharsAt=' + CharsAt + '\');','Buy ' + Infos[v].t,'Buy') + Adr('window.parent.loadwindow2(\'fhblmi.asp?CharsAt=' + Infos[v].z + '&Bonus=0&Material=\',350,200,\'iwindow\',\'' + Infos[v].t + '\');','Info','Info');
}

function Tipz(v) {
	return '<b>' + Infos[v].t + '</b><br>Type: ' + Infos[v].r + ' (' + Infos[v].rc + '/' + Infos[v].rt + ')<br>Location: ' + Infos[v].n + '<br>Sale Price: ' + window.top.BSGM(Infos[v].v);
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

function AC(z, i, v, r,n,l, PictureID, ItemName, rt, rc) {
if (PictureID == '0') {PictureID = ''}
var Color = LITE;
if (i == -1) {Color = 'red';}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, z, i, v, r,n,l, PictureID, ItemName, rt, rc);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' +  Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + ItemName + '</td><td>' + rc + '/' + rt + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, z, i, v, r,n,l, PictureID, ItemName, rt, rc) {
this.c = Color;
this.p = PictureID;
this.t = ItemName;
this.v = v;
this.rt = rt;
this.rc = rc;
this.i = i;
this.z = z;
this.l = l;
this.r = r;
this.n = n;
}