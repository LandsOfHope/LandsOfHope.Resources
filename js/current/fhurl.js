var UC = 0;
var URLS = new Array();
var SN = SN;
var PageNo = PageNo;
var MT = MT;
var Processing = 0;

var IPath = window.top.FHIPI;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function fx1(stuff) {
var re = /^\$|,|'|"|%|@|#/g;
stuff.value = stuff.value.replace(re, "");
if (stuff.value == '' || stuff.value == null) {
	stuff.value = 0;
	}
}

function ShowSearch(strword) {
	var strTest = '';

	strTest = strTest + '<table class=\'weakcell\' cellpadding=0 cellspacing=0 width=300 valign=top><input type=hidden name=MT id=MT value=' + MT + '><input type=hidden name=CharsAt id=CharsAt value=\'1\'><tr><td>URL:</td><td><input name=SN id=SN value=\'' + SN + '\' title=\'The URL to add.\' size=40 maxlength=255></td><td><input type=checkbox title=\'With this option checked the URL will be private, only your account can see it.\' name=aa id=aa checked value=1 style=\'width: 12px; height: 12px\'></td></tr>';
	strTest = strTest + '<tr><td>Url Name:</td><td colspan=2><input name=UN id=UN value=\'\' size=40 maxlength=255></td></tr>';
	strTest = strTest + '<tr><td>Description:</td><td colspan=2><input name=UD id=UD value=\'\' size=40 maxlength=1024></td></tr>';
	strTest = strTest + '<tr><td colspan=3>' + Adr('if (Processing == 0) {Processing = 1; getObj(\'CharsAt\').value = 1; this.form.submit()};','Add new URL', 'Add') + '</td></tr>';
	strTest = strTest + '<tr><td colspan=3 id=Buttons2></td></tr>';
	strTest = strTest + '</table>';
	document.write(strTest);
}


function GoP(PageNo) {
window.location.replace('?SN=' + SN + '&MT=' + MT + '&P=' + PageNo + '');
}

function RC(stuff) {
stuff.style.cursor = '';
stuff.style.backgroundColor='';
}

function PC(v) {
getObj('U' + v).style.cursor = 'pointer';
getObj('U' + v).style.backgroundColor=BGCOLOR_S
}

function AM(Color, z, ud, PictureID, Itty, u, a, p) {
if (PictureID == '') {PictureID = 'na.gif'}
if (URLS[UC] == null) {
	URLS[UC] = new Array();
}
URLS[UC] = new newUrl(Color, z, ud, PictureID, Itty, u, a, p);
document.write('<tr width="300" id="U' + UC + '"  onclick="DC(' + UC + ')" onmouseover="PC(' + UC + ')" onmouseout="RC(this)"><td width="315" style="padding-left: 5px"><b style="color: ' + Color + ';">' + Itty + '</b>' + (ud != '' ? '<br>' + ud : '') + '<br>Url: <a href=\'' + u + '\' target=\'_new\'>' + u + '</a></td></tr>');
UC = UC + 1;
}


function newUrl(Color, z, ud, PictureID, Itty, u, a, p) {
this.c = Color;
this.p = p;
this.z = z;
this.ud = ud;
this.t = Itty;
this.u = u;
this.a = a;
}

function DC(v) {
	getObj("SN").value = URLS[v].u;
	getObj("UN").value = URLS[v].t;
	getObj("UD").value = URLS[v].ud;
	if (Math.abs(URLS[v].p) != 0) {
		getObj("aa").checked = true;
	} else {
		getObj("aa").checked = false;
	}
	getObj('Buttons2').innerHTML = '' + (Math.abs(URLS[v].a) > 0 ? Adr('if (Processing == 0) {Processing = 1; getObj(\'CharsAt\').value = -' + URLS[v].z + ';this.form.submit()};','Edit URL', 'Edit') + Adf2('if (Processing == 0) {Processing = 1; getObj(\'SN\').value = \'\';getObj(\'CharsAt\').value = -' + URLS[v].z + ';this.form.submit()};','Delete URL', 'Delete') : '');
}
