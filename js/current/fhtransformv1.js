var PageNo = PageNo;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();
var Processing = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '');
}

function AC(v, PictureID, dn, rnp, Itty, sv, db) {
if (PictureID == '0') {PictureID  = ''}
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, v, PictureID, dn, rnp, Itty, sv, db);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' +  Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'300\'>' + dn + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, v, PictureID, dn, rnp, Itty, sv, db) {
this.c = Color;
this.v = v;
this.p = PictureID;
this.t = Itty;
this.db = db;
this.sv = sv;
this.dn = dn;
this.rnp = rnp;
}


function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), '<b>' + Infos[v].dn + '</b><br>Transformation: ' + Infos[v].sv);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}


function DC(v) {
	getObj('Logo').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Info').innerHTML = '<b>' + Infos[v].dn +  '</b><br>Transform into <b>' + Infos[v].rnp + '</b><br>Bonus Effect: ' + Infos[v].dn + '<br>' + Infos[v].db;
	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1; window.top.FHIPP = \'' + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + '\'; window.location.replace(\'?ID=' + Infos[v].v + '&P=' + PageNo + '\');}','Transform','Transform');
}
