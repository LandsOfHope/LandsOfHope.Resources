var SN = SN;
var Processing = 0;
var PageNo = PageNo;
var IPath = window.top.FHIPI;
var FHIPO = window.top.FHIPO;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?SN=' + SN + '&CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b style="color: ' + Infos[v].c + ';">' + Infos[v].n + '</b><br>' + (Math.abs(Infos[v].u) == 0 ? (Math.abs(Infos[v].ud) < 4 ? 'Active again in <b>' + (4 - Math.abs(Infos[v].ud)) + ' hours</b>' : 'Reset the Trophy quest using the button to the left.') : '<table class="itemText" cellspacing=1 cellpadding=1 border=0>' + CStatus(Infos[v].gtid, Infos[v].tid, Infos[v].in1, Infos[v].inp1, Math.abs(Infos[v].iaq1), Math.abs(Infos[v].iq1), Infos[v].in2, Infos[v].inp2, Math.abs(Infos[v].iaq2), Math.abs(Infos[v].iq2), Infos[v].in3, Infos[v].inp3, Math.abs(Infos[v].iaq3), Math.abs(Infos[v].iq3)) + '</table>');
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.parent.loadwindow2(\'imi.asp?Test=' + Infos[v].iid + '&Bonus=0&Material=\',300,300,\'iwindow\',\'Trophy Reward\');', 'Info', 'Info') + (Math.abs(Infos[v].u) == 0 && Math.abs(Infos[v].ud) >= 4 ? '' : (Math.abs(Infos[v].u) == 0 ? '' : Adr('Processing = 1; window.location.replace(\'fhgtrophyi.asp?ID=' + Infos[v].gtid + '\');', 'Give Items', 'Give Items')))
}

function AM(gtid, iid, tid, Picture, Named, in1, inp1, iid1, iq1, iaq1, in2, inp2, iid2, iq2, iaq2, in3, inp3, iid3, iq3, iaq3, u, ud) {
	var Color = '#6464FF';
	var stuff = '';
	if (u != 0) {
		stuff = '<table class="itemText" cellspacing=1 cellpadding=1 border=0>' + CStatus(gtid, tid, in1, inp1, iaq1, iq1, in2, inp2, iaq2, iq2, in3, inp3, iaq3, iq3) + '</table>';
	} else {
		stuff = OtherStuff(u, ud, gtid);
	}

	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, gtid, iid, tid, Picture, Named, in1, inp1, iid1, iq1, iaq1, in2, inp2, iid2, iq2, iaq2, in3, inp3, iid3, iq3, iaq3, u, ud);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td valign=top><img width=40 height=40 src="' + IPath + (Picture == '' || Picture == '0' ? 'na.gif' : Picture) + '"></td><td width="260" style="padding-left: 5px"><b style="color: ' + Color + ';">' + Named + '</b><br>' + stuff + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, gtid, iid, tid, Picture, Named, in1, inp1, iid1, iq1, iaq1, in2, inp2, iid2, iq2, iaq2, in3, inp3, iid3, iq3, iaq3, u, ud) {
	this.c = Color;
	this.ud = ud;
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

function OtherStuff(u, ud, gtid) {
	return (Math.abs(u) == 0 ? (Math.abs(ud) < 4 ? '<b>NOT CURRENTLY AVAILABLE</b><br>Active again in <b>' + (4 - Math.abs(ud)) + ' hours</b>' : 'Reset the Trophy quest using the button below<br><' + strClicky2 + ' onclick="if (Processing == 0) {Processing = 1; window.location.replace(\'?SN=' + SN + '&P=' + PageNo + '&ID=' + gtid + '&Type=-1\');}" style=\'width: 85\'>Reset</button>') : '');
}

function CStatus(v, v2, an1, apx1, a1, ta1, an2, apx2, a2, ta2, an3, apx3, a3, ta3) {
	var strout = '';
	var ap1 = window.parent.GetPerc(ta1, a1)
	var ap1t = window.top.PercentBoxR(ap1, 'cyan', '' + a1 + ' / ' + ta1 + ' (' + ap1 + '%)')
	strout = '<tr><td width=15><img width=15 height=15 src="' + IPath + (apx1 == '' || apx1 == '0' ? 'na.gif' : apx1) + '"></td><td width="130">' + an1 + '</td><td width="100">' + ap1t + '</td></tr>';

	if (Math.abs(ta2) > 0) {
		var ap2 = window.parent.GetPerc(ta2, a2)
		var ap2t = window.top.PercentBoxR(ap2, 'green', '' + a2 + ' / ' + ta2 + ' (' + ap2 + '%)')
		strout += '<tr><td width=15><img width=15 height=15 src="' + IPath + (apx2 == '' || apx2 == '0' ? 'na.gif' : apx2) + '"></td><td width="130">' + an2 + '</td><td width="100">' + ap2t + '</td></tr>';
	}

	if (Math.abs(ta3) > 0) {
		var ap3 = window.parent.GetPerc(ta3, a3)
		var ap3t = window.top.PercentBoxR(ap3, 'orange', '' + a3 + ' / ' + ta3 + ' (' + ap3 + '%)')
		strout += '<tr><td width=15><img width=15 height=15 src="' + IPath + (apx3 == '' || apx3 == '0' ? 'na.gif' : apx3) + '"></td><td width="130">' + an3 + '</td><td width="100">' + ap3t + '</td></tr>';
	}

	return strout;
}


function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Infos[v].n);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}