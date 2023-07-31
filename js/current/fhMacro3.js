var IC = 0;
var Infos = new Array();
var Processing = 0;
var MT = MT;
var MTS = MTS;
var PageNo = PageNo;
var IPath = window.top.FHIP;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNO) {
	window.location.replace('?MTS=' + MTS + '&MT=' + MT + '&P=' + PageNO);
}

function SV2(v) {
	window.location.replace('?MTS=' + Infos[v].v + '&MT=' + MT + '&P=' + PageNo);
}

function SV(v) {
	prompt('Please enter a caption for this shortcut ?', v, '' + Infos[v].t);
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			window.top.Interface.location.replace('fhmacro.asp?Slot=' + window.parent.n2 + '&ID=' + Infos[pb].v + '&a=' + window.parent.a2 + '&Cap=' + returnVal + '&Type=' + window.parent.panein + '');
		}
	}
}


function AM(v, Picture, Named) {
	var Picture2 = (Picture == '' || Picture == '0' ? 'na.gif' : Picture);
	if (Picture2.indexOf('.') == -1) {
		Picture2 = 's/' + Picture2 + '.png'
	} else {
		if (MT == 6) {
			Picture2 = 'r/' + Picture2;
		} else {
			Picture2 = 'i/' + Picture2;
		}
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(v, Picture2, Named);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="SV(' + IC + ')"><td><img width=15 height=15 src="' + IPath + Picture2 + '"></td><td width="300" style="padding-left: 5px;">' + Named + '</td></tr>');
	IC = IC + 1;
}

function newInfo(v, Picture2, Named) {
	this.v = v;
	this.p = Picture2;
	this.t = Named;
}

function AMS(v, Picture, Named) {
	var Picture2 = (Picture == '' || Picture == '0' ? 'na.gif' : Picture);
	if (Picture2.indexOf('.') == -1) {
		Picture2 = 's/' + Picture2 + '.gif'
	} else {
		if (MT == 6) {
			Picture2 = 'r/' + Picture2;
		} else {
			Picture2 = 'i/' + Picture2;
		}
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(v, Picture2, Named);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="SV2(' + IC + ')"><td><img width=15 height=15 src="' + IPath + Picture2 + '"></td><td width="300" style="padding-left: 5px;">' + Named + '</td></tr>');
	IC = IC + 1;
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + Infos[v].p, Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}