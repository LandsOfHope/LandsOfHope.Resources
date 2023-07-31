var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPI;
var Processing = 0;
var PageNo = PageNo;
var Dest = Dest;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(Color, ItemID, PictureID, Itty, q) {
if (PictureID == '0') {PictureID = ''}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, ItemID, PictureID, Itty, q);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' +  Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + Itty + (q > 1 ? ' * ' + q : '') + '</td><td><input type=checkbox id=ItemID style=\'width: 12px; height: 12px;\' name=ItemID value=' + ItemID + '></td></tr>');
IC = IC + 1;
}

function newInfo(Color, ItemID, PictureID, Itty, q) {
this.c = Color;
this.q = q;
this.p = PictureID;
this.t = Itty;
this.value = ItemID;
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Quantity: ' + Infos[v].q + '';
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = '' + (Processing == 0 ?  Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'fhcpf.asp?Dest=' + Dest + '&ItemID=' +Infos[v].value + '\');}','Fetch ' + Infos[v].t,'Fetch') : '') + (Infos[v].t.indexOf('?') == -1 ? Adr('window.top.loadwindow2(\'im4.asp?Test=' + Infos[v].value + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].t + '\');','Info','Info') : '');
}

function GoP(PageNo) {
	window.location.replace('?Dest=' + Dest + '&P=' + PageNo);
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

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Infos[v].t);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}