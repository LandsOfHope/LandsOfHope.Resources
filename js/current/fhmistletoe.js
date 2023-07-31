var IC = 0;
var Infos = new Array();
var whatwhat = what;
var PageNo = PageNo;
var id4 = id4;
var IPath = window.top.FHIPR;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '&id4=' + id4 + '&ID3=' + whatwhat);
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
confirm('Kiss ' + Infos[v].i + ' under the mistletoe?', v);
}

function ADC(v, Itty, PictureID) {
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, v, Itty, PictureID);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="600" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, v, Itty, PictureID) {
this.c = Color;
this.value = v;
this.p = PictureID;
this.i = Itty;
}


function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			var v = pb;
			window.top.Interface.location.replace('fhmistletoe.asp?ID=' + Infos[v].value + '&id4=' + id4 + '&P=' + PageNo + '&ID3=' + whatwhat);
		}
	}
}