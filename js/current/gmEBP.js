var ItemID = ItemID;
var IPath = window.top.FHIPI;
var Processing = 0;
var IC = 0;
var Infos = new Array();

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(pn, pv) {
var PictureID = 'na.gif';
var Color = LITE;
if (pv != 0) {
	Color = 'gold'
}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, pn, pv, PictureID);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\' style="color: ' +  Color + '; padding-left: 5px;">' + pn + '</td><td>' + pv + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, pn, pv, PictureID) {
this.c = Color;
this.v = pv;
this.p = PictureID;
this.i = pn;
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>';
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = '' + '<form method=\'post\' action=\'gmEBP.asp\' id=EditStat name=EditStat style=\'margin: 0px;\'><input type=\'hidden\' name=\'PropertyName\' value=\'' + Infos[v].i + '\'>' + (Math.abs(Infos[v].v) == 0 ? '<input type=\'hidden\' name=\'New\' value=\'1\'>' : '') + '<input type=\'hidden\' name=\'CharsAt\' value=\'' + ItemID + '\'><input name=PropertyValue value=\'' + Infos[v].v + '\'>' + Adr('this.form.submit();','Save changes','Save') + '</form>'
}


function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + Infos[v].p,Infos[v].i);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}