var PageNo = PageNo;
var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPR;
var Processing = 0;
var Type2 = Type2;

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(adt, m, mt, PictureID, cn, ad, fc, sp, accepted) {
	var Color = '#66ff66';
	if (accepted == -1) {
		//Not accepted
		Color = 'red';
	} else if (accepted == 0) {
		//Not yet viewed
		Color = 'yellow';
	} else if (adt == 0 && ad == '') {
		Color = '#6666ff';
	} else if (adt == 0) {
		Color = 'white';
	} else if (adt < 0) {
		Color = '#ff6666';
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	if (sp != 0) {
		Color = 'gold';
		Infos[IC] = new newInfo(1, Color, adt, m, mt, PictureID, cn, ad, fc, accepted);
		document.write('<tr style="color: ' + Color + ';' + (fc > 0 ? 'font-weight: bold;' : '') + '" id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width=\'300\'>' + m + '</td><td width=\'125\' colspan=3>' + cn + '</td></tr>');
	} else {
		Infos[IC] = new newInfo(0, Color, adt, m, mt, PictureID, cn, ad, fc, accepted);
		document.write('<tr style="color: ' + Color + ';' + (fc > 0 ? 'font-weight: bold;' : '') + '" id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width=\'300\'>' + m + '</td><td width=\'125\'>' + cn + '</td><td width=\'150\'>' + (accepted == -1 ? 'Not Accepted' : (accepted == 0 ? 'Pending Approval' : (adt < 0 ? 'Not Implementing' : (adt == 0 && ad == '' ? 'Not Reviewed' : (adt == 0 ? 'Reviewed' : 'Added ' + ad))))) + '</td><td>' + fc + '</td></tr>');
	}
	IC = IC + 1;
}

function newInfo(sp, Color, adt, m, mt, PictureID, cn, ad, fc, accepted) {
	this.c = Color;
	this.cn = cn;
	this.p = PictureID;
	this.sp = sp;
	this.fc = fc;
	this.adt = adt;
	this.ad = ad;
	this.m = m;
	this.mt = mt;
	this.accepted = accepted;
}

function DB(stuff) {
	window.location.replace('?P=' + PageNo + '&Type=' + stuff);
}


function ColumnHeaders() {
	document.write('<tr class=\'boldcell\'><td></td><td>Idea</td><td>Poster</td><td>Status</td><td>Comments</td></tr>');
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '&Type=' + Type2);
}

function Tipsfor(v) {
	return '<b>' + Infos[v].m + '</b>';
}

function DC(v) {
	window.location.replace('fhfeaturev.asp?CharsAt=' + Infos[v].mt + '&Type=' + Type2 + '&S=' + Infos[v].sp + '&P=' + PageNo)
}


function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Tipsfor(v));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}