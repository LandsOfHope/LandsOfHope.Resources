var CharsAt = CharsAt;
var lt = lt;
var IPath = window.top.FHIPI;
var Processing = 0;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '');
}

function AvC(Itty, PictureID, v, uses, unlocked) {
if (PictureID == '0') {PictureID = ''}
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, Itty, PictureID, v, uses, unlocked);
document.write('<tr id="I' + IC + '" onmouseover="PC2(' + IC + ')" onmouseout="RC2(' + IC + ')" onclick="DC2(' + IC + ')" style="color: ' +  Color + '; padding-left: 5px;"><td width=20><img width=15 height=15 src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\'></td><td width=\'150\'>' + Itty + '</td><td width=\'100\'>' + uses +'remaining</td></tr>');
IC = IC + 1;
}

function newInfo(Color, Itty, PictureID, v, uses, unlocked) {
this.c = Color;
this.uses = uses;
this.p = PictureID;
this.unlocked = unlocked;
this.i = Itty;
this.v = v;
}

function RC2(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC2(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Tipsfor(v));
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function Tipsfor(v) {
 return '<b>' + Infos[v].i + '</b><br>Items remaining: ' + Infos[v].uses + '<br>Unlocked: ' + Infos[v].unlocked;
}

function DC2(v) {
	getObj('Stuff3').innerHTML = Tipsfor(v)
	getObj('Pic3').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'imi.asp?Test=' + Infos[v].v + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].i + '\');','Info','Info') + Adr('confirm(\'Are you sure you wish to take ' + Infos[v].i + '?<br><br>You will have ' + (Infos[v].uses - 1) + ' of theses items remaining.\', ' + v + ');','Take','Take'); 
}


function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			window.top.Interface.location.replace('fhaccountitem.asp?CharsAt=' + CharsAt + '&ItemID=' + Infos[pb].v + '');
		}
	}
}