var SN = SN;
var CharsAt = CharsAt;
var Processing = 0;
var PageNo = PageNo;
var IPath = window.top.FHIPI;
var FHIPO = window.top.FHIPO;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
window.location.replace('?SN=' + SN + '&CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function DC(v) {
getObj('Stuff2').innerHTML = '<b style="color: ' + Infos[v].c + ';"><img src="' + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + '" align=left>' + Infos[v].n + '</b><br>' +  (Math.abs(Infos[v].u) != 0 ? 'Completed' : Infos[v].ti);
getObj('Stuff3').innerHTML = '' + (Math.abs(Infos[v].u) == 0 ? '<table class="itemText" cellspacing=1 cellpadding=1 border=0>' + CStatus(Infos[v].gtid, Infos[v].tid, Infos[v].in1, Infos[v].inp1, Math.abs(Infos[v].iaq1), Math.abs(Infos[v].iq1), Infos[v].il1, Infos[v].in2, Infos[v].inp2, Math.abs(Infos[v].iaq2), Math.abs(Infos[v].iq2), Infos[v].il2, Infos[v].in3, Infos[v].inp3, Math.abs(Infos[v].iaq3), Math.abs(Infos[v].iq3), Infos[v].il3) + '</table>' : '');
getObj('Buttons').innerHTML = (Infos[v].iid != 0 ? Adr('window.parent.loadwindow2(\'' + (Infos[v].iid < 0 ? 'mr.asp?ItemID=' + Math.abs(Infos[v].iid) : 'im' + (Infos[v].tt == 4 ? 'iv' : '3') + '.asp?Test=' + Infos[v].iid + '&Bonus=0&Material=') + '\',300,300,\'iwindow\',\'Trophy Reward\');','Reward Info','Reward Info') : '') + (Math.abs(Infos[v].u) != 0 ? '' : Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'fhntrophyi.asp?ID=' + (Infos[v].gtid == 0 ? '-' + Infos[v].tid : ''  +Infos[v].gtid) + '&CharsAt=' + CharsAt + '\');}','Give Items','Give Items'));
}

function AM(tt, gtid, iid, tid, Picture, Named,in1, inp1, iid1, iq1, iaq1, il1,in2, inp2, iid2, iq2, iaq2, il2,in3, inp3, iid3, iq3, iaq3, il3, u, rep, ti) {
var Color = '#6464FF';
if (rep != 0) {
	Color = 'orange';
}
var stuff = '';
if (u == 0) {
	stuff = '<table class="itemText" cellspacing=1 cellpadding=1 border=0>' + CStatus(gtid, tid, in1, inp1, iaq1, iq1, il1, in2, inp2, iaq2, iq2, il2, in3, inp3, iaq3, iq3, il3) + '</table>';
} else {
	stuff = OtherStuff(u, gtid);
}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(tt, Color, gtid, iid, tid, Picture, Named,in1, inp1, iid1, iq1, iaq1, il1,in2, inp2, iid2, iq2, iaq2, il2,in3, inp3, iid3, iq3, iaq3, il3, u, rep, ti);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td valign=top><img width=40 height=40 src="' + IPath + (Picture == '' || Picture == '0' ? 'na.gif' : Picture) + '"></td><td width="260" style="padding-left: 5px"><b style="color: ' + Color + ';">' + Named + '</b><br>' + stuff + '</td></tr>');
IC = IC + 1;
}

function newInfo(tt, Color, gtid, iid, tid, Picture, Named,in1, inp1, iid1, iq1, iaq1, il1,in2, inp2, iid2, iq2, iaq2, il2,in3, inp3, iid3, iq3, iaq3, il3, u, rep, ti) {
this.c = Color;
this.tt = tt;
this.rep = rep;
this.ti = ti;
this.il1 = il1;
this.il2 = il2;
this.il3 = il3;
this.iid = iid;
this.tid = tid;
this.iid3 = iid3;
this.iq3 = iq3;
this.iaq3 = iaq3;
this.in3 = in3;
this.inp3 = inp3;

this.iid2 = iid2;
this.iq2 = iq2;
this.iaq2 = iaq2;
this.in2 = in2;
this.inp2 = inp2;

this.iid1 = iid1;
this.iq1 = iq1;
this.iaq1 = iaq1;
this.in1 = in1;
this.inp1 = inp1;
this.u = u;
this.gtid = gtid;
this.n = Named;
this.p = Picture;
}

function OtherStuff(u, gtid) {
	return 'You have already completed this trophy.';
}

function CStatus(v, v2, an1, apx1, a1, ta1, il1, an2, apx2, a2, ta2, il2,an3, apx3, a3, ta3, il3) {
	var strout = '';
	var ap1 = window.parent.GetPerc(ta1, a1)
	var ap1t = window.top.PercentBoxR(ap1,'cyan','' + a1 + ' / ' + ta1 + ' (' + ap1 + '%)')
	strout = '<tr><td width=15><img width=15 height=15 src="' + IPath + (apx1 == '' || apx1 == '0' ? 'na.gif' : apx1) + '"></td><td width="100%">' + (il1 > 0 ? 'Level ' + il1 + ' ' : '') + an1 + '</td><td width="100">' + ap1t + '</td></tr>';

	if (Math.abs(ta2) > 0) {
		var ap2 = window.parent.GetPerc(ta2, a2)
		var ap2t = window.top.PercentBoxR(ap2,'green','' + a2 + ' / ' + ta2 + ' (' + ap2 + '%)')
		strout += '<tr><td width=15><img width=15 height=15 src="' + IPath + (apx2 == '' || apx2 == '0' ? 'na.gif' : apx2) + '"></td><td width="100%">' + (il2 > 0 ? 'Level ' + il2 + ' ' : '') + an2 + '</td><td width="100">' + ap2t + '</td></tr>';
	}

	if (Math.abs(ta3) > 0) {
		var ap3 = window.parent.GetPerc(ta3, a3)
		var ap3t = window.top.PercentBoxR(ap3,'orange','' + a3 + ' / ' + ta3 + ' (' + ap3 + '%)')
		strout += '<tr><td width=15><img width=15 height=15 src="' + IPath + (apx3 == '' || apx3 == '0' ? 'na.gif' : apx3) + '"></td><td width="100%">' + (il3 > 0 ? 'Level ' + il3 + ' ' : '') + an3 + '</td><td width="100">' + ap3t + '</td></tr>';
	}

	return strout;
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
