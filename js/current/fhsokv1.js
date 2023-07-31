var CharsAt = CharsAt;
var lt = lt;
var IPath = window.top.FHIPI;
var SPath = window.top.FHIPS;
var Processing = 0;
var PageNo = PageNo;
var PageNo2 = PageNo2;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoPx(PageNo) {
window.location.replace('?ItemID=' + CharsAt + '&P=' + PageNo + '');
}

function GoP(PageNox) {
window.location.replace('?ItemID=' + CharsAt + '&P=' + PageNo + '&P2=' + PageNox + '');
}

function AC(v,PictureID, d, Itty) {
if (PictureID == '0') {PictureID = ''}
var Color = LITE;
document.write('<td width="200"><table width="200" cellpadding=0 cellspacing=0 class="weakcell"><tr onmouseover="PCS(this)" onmouseout="RCS(this)"  onclick="GoPx(' + v + ');" style="color: ' +  Color + '; padding-left: 5px;"><td width=\'100%\'><b>' + Itty + '</b><br>' + d +'</td></tr></table></td>');
}

function AvC(PictureID, Itty, sn, v, sv, iid) {
if (PictureID == '0') {PictureID = ''}
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, PictureID, Itty, sn, v, sv, iid);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' +  Color + '; padding-left: 5px;"><td width=20><img width=15 height=15 src=\'' + (PageNo != 2 ? IPath : SPath) + (PictureID == '' ? 'na.gif' : PictureID) + '\'></td><td width=\'200\'>' + Itty + '</td><td width=\'180\'>' + sv + ' ' + sn +'</td></tr>');
IC = IC + 1;
}

function newInfo(Color, PictureID, Itty, sn, v, sv, iid) {
this.c = Color;
this.iid = iid;
this.p = PictureID;
this.i = Itty;
this.sv = sv;
this.v = v;
this.sn = sn;
}

function RCS(stuff) {
stuff.style.cursor = '';
stuff.style.backgroundColor='';
}

function PCS(stuff) {
stuff.style.cursor = 'pointer';
stuff.style.backgroundColor=BGCOLOR_S
}

function Tipsfor(v) {
 return '<b>' + Infos[v].i + '</b><Br>Skill: ' + Infos[v].sv + ' ' + Infos[v].sn;
}

function DC(v) {
	getObj('Stuff3').innerHTML = Tipsfor(v)
	
	getObj('Pic3').innerHTML = "<img src='" + (PageNo != 2 ? IPath : SPath) + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = (PageNo == 1 ? Adr('window.top.loadwindow2(\'imi.asp?Test=' + Infos[v].iid + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].i + '\');','Info','Info') + Adr('window.top.loadwindow2(\'mr.asp?ItemID=' + Infos[v].v + '\',300,300,\'iwindow\',\'' + Infos[v].i + '\');','Craft Info','Other')  :  Adr('window.top.loadwindow2(\'mz.asp?Test=' + Infos[v].v + '\',300,300,\'iwindow\',\'' + Infos[v].i + '\');','Info','Info')) + Adr('if (Processing == 0) {confirm(\'Are you sure you wish to use a Charge to learn ' + Infos[v].i + '?<br><i>You will have ' + (lt - 1) + ' charges remaining after use.</i>\',' + v + ');}','Learm ' + Infos[v].i,'Learn'); 
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && Processing == 0) {
			//
			window.top.Interface.location.replace('fhsok.asp?ItemID=' + CharsAt + '&Type=' + Infos[pb].v + '&P2=' + PageNo2 + '&P=' + PageNo);
		}
	}
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('' + (PageNo != 2 ? IPath : SPath) + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Tipsfor(v));
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}