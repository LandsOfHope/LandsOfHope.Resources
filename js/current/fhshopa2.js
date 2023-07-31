var LD = LD;
var PageNo = PageNo;
var Processing2 = 0;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
getObj('P').value = PageNo;
getObj('CharsAt').value = 0;
getObj('Buttons').innerHTML = '';
getObj('editform').submit();
}

function DC3(v) {
	if (Processing2!= 1) {
		confirm('Appraise these items at a cost of ' + window.top.BSGM2(LD) + '?', v);
	}
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && Processing2 == 0) {
			Processing2 = 1;
			getObj('editform').submit();
		}
	}

}

function DC(v) {
	getObj('CharsAt').value = Infos[v].z;
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].n + '</b><br>Skill: ' + Infos[v].m + '<br>Cost: ' + window.top.BSGM2(LD) + '</b>';
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('DC3(' + v + ');','Appraise','Appraise');
}

function AM(z, m, Picture, Named) {
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, z, m, Picture, Named);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (Picture == '' || Picture == '0' ? 'na.gif' : Picture) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px">' + Named + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, z, m, Picture, Named) {
this.c = Color;
this.z = z;
this.p = Picture;
this.n = Named;
this.m = m;
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Infos[v].n);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}
