var IC = 0;
var Infos = new Array();
var BW = BW;
var PageNo = PageNo;
var skill = skill;
var lpl = lpl;
var IPath = window.top.FHIPB;
var Processing = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(v, l , s, PictureID, Itty, on, oa) {
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, v, l , s, PictureID, Itty, on, oa);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="100%" style="color: ' + Color + '; padding-left: 5px;">' + Itty + ' (' + on + ')</td></tr>');
IC = IC + 1;
}

function newInfo(Color, v, l , s, PictureID, Itty, on, oa) {
this.c = Color;
this.on = on;
this.p = PictureID;
this.t = Itty;
this.oa = oa;
this.v = v;
this.l = l;
this.s = s;
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Direction: ' + Infos[v].on + '<br>Lockpicking needed: ' + (Infos[v].l) + '<br>Current: ' + skill;
	if (skill >= Math.abs(Infos[v].l)) {
		if (BW == 0) {
			getObj('Buttons').innerHTML = Adr('if (Processing == 0) {confirm(\'Breaking into ' + Infos[v].t + ' will make you a criminal, continue?\', ' + v + ');}', 'Pick Lock','Pick Lock');
		} else {
			getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?Type=1&L=' + Infos[v].l + '&P=' + PageNo + '&BuildingID=' + Infos[v].v + '\');};','Pick Lock','Pick Lock');
		}
	} else {
		getObj('Buttons').innerHTML = '';
	}
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == "" ? "na.gif" : Infos[v].p) + "'>";
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && Processing == 0) {
			window.top.Interface.location.replace('fhlp.asp?Type=1&L=' + Infos[pb].l + '&P=' + PageNo + '&BuildingID=' + Infos[pb].v)
		}
	}
}

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '');
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