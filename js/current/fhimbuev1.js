var CharsAt = CharsAt;
var PageNo = PageNo;
var Processing = 0;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(Color, v, PictureID, Itty, s, q) {
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, v, PictureID, Itty, s, q);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px">' + (s != 0 ? '(#) ' : '') + Itty + (q > 1 ? ' * ' + q : '') + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, v, PictureID, Itty, s, q) {
this.c = Color;
this.s = s;
this.p = PictureID;
this.i = Itty;
this.v = v;
this.q = q;
}


function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '');
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Infos[v].i);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Quantity: ' + Infos[v].q + (Infos[v].s != 0 ? '<br><i>Already Inscribed, Poisoned or Imbued</i>' : '') + '<br>Imbuement cost: ' +  window.top.BSGM(5000000) ;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'im4.asp?Test=' + Infos[v].v + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].i + '\');','Info','Info') + (Processing == 0 ?  Adr('if (Processing == 0) {ImbuePicker(\'Choose the imbuement to apply to the item:\',' + v + ',null,\'Imbue ' + Infos[v].i + '\',\'i/' + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + '\')};', 'Select', 'Select') : '');
}

function ImbuePicker(message, pb, defaultvalue, title, icon, style) {
	if (title == undefined) {
		title = '';
	}
	if (icon == undefined) {
		icon = '';
	}
	if (style == undefined) {
		style = '';
	}
	window.top.showPopWin("imbuepicker.asp?message=" + message + "&defaultvalue=" + defaultvalue + "&title=" + title + "&icon=" + icon + "&style=" + style, 300, 280, PromptReturn, null, title, pb);
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && Processing == 0) {
			Processing = 1;
			var v = pb;
			window.location.replace('fhimbue.asp?ItemTypeID=' + returnVal + '&InventoryItemID=' + Infos[v].v +'&CharsAt=' + CharsAt);
		}
	}
}