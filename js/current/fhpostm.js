var Processing = 0;
var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPI;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

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
confirm('Are you sure you wish to turn ' + Infos[v].i + ' back into money?', v);
}

function GoP(p) {
	window.location.replace('fhpostm.asp?P=' + p);
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && Processing == 0) {
			Processing = 1;
			getObj('trademoney').value = -Infos[pb].v;
			getObj('postm').submit();
		}
	}
}

function AI(PictureID, ItemName, ItemID, money) {
if (PictureID == '0') {PictureID = ''}
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, PictureID, ItemName, ItemID, money);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' +  Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + ItemName + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, PictureID, ItemName, ItemID, money) {
this.c = Color;
this.m = money;
this.p = PictureID;
this.i = ItemName;
this.v = ItemID;
}