var IC = 0;
var Infos = new Array();
var PageNo = PageNo;
var Split = Split;
var Processing = 0;
var LastSplitClick = -1;
var ItemID = ItemID;
var IPath = window.top.FHIPI;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AVC(value, q, PictureID, Itty, l) {
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, value, q, PictureID, Itty, l);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px">' + Itty + (q > 1 ? ' * ' + q : '') + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, value, q, PictureID, Itty, l) {
this.c = Color;
this.v = value;
this.p = PictureID;
this.n = Itty;
this.q = q;
this.l = l;
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('' + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), '' + Infos[v].n + '<br>Level: ' + Infos[v].l + '<br>Quantity: ' + Infos[v].q);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function DC(v) {
	LastSplitClick  = v;
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].n + '</b><br>Level: ' + Infos[v].l + '<br>Quantity: ' + Infos[v].q;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'im.asp?Test=' + Infos[v].v + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].n + '\');','Info','Info') + Adr('if (Processing == 0) {prompt(\'How much do you wish to put into the new stack?\',1,1,\'Split\',\'\',3);}','Split','Split') + Adr('if (Processing == 0) {prompt(\'How many stacks do you wish to make (max of 5)?\',2,1,\'Split\',\'\',3);}', 'Big Split', 'Big');
}

function GoP(PageNo) {
window.location.replace('?P=' + PageNo);
}

function PromptReturn(returnVal, pb) {
	var v = LastSplitClick;
	if (returnVal != null) {
		if (pb != null) {
			Processing = 1;
			if (pb == 1) {
				window.top.Interface.location.replace('fhsplit.asp?P=' + PageNo + '&Type2=1&Type=' + returnVal + '&ItemID=' + Infos[v].v);
			} else {
				window.top.Interface.location.replace('fhsplit.asp?P=' + PageNo + '&Type=' + Math.floor(Infos[v].q / returnVal) + '&Type2=' + returnVal + '&ItemID=' + Infos[v].v);

			}
		}
	}
}