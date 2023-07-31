var SN = SN;
var PageNo = PageNo;
var AccountID = AccountID;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
window.location.replace('?SN=' + SN + '&CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function GetSColor(s) {
	if (s == 0) {
		return 'yellow';
	} else if (s == 1) {
		return 'gold';
	} else {
		return '#66ff66';
	}
}

function GetSName(s) {
	if (s == 0) {
		return 'Public';
	} else if (s == 1) {
		return 'Paid Account Survey';
	} else {
		return 'Private Survey';
	}
}


function DC(v) {
getObj('Stuff2').innerHTML = '<b>' + Infos[v].n + '</b>' + (Infos[v].a != 0 ? '<br><b>Already Completed</b>' : '') + '<br>Type: ' + GetSName(Infos[v].sat) + '<br>Created: ' + Infos[v].sd + '<br>' + Infos[v].sdd;
getObj('Buttons').innerHTML = '<' + strClicky + ' onclick="window.open(\'survey.asp?MT=' + Infos[v].v + '&A=' + AccountID + '\',\'gdw\',\'width=615, height=395,status=no,toolbar=no,menubar=no,location=no\');" style=\'width: 65\'>Complete</button><' + strClicky + ' onclick="window.open(\'surveyr.asp?MT=' + Infos[v].v + '\',\'gdw\',\'width=615, height=395,status=no,toolbar=no,menubar=no,location=no\');" style=\'width: 65\'>Results</button>'
}

function AM(v, Named, sd, sat, a, sdd) {
var Color = GetSColor(sat);
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, v, Named, sd, sat, a, sdd);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width="100%" style="color: ' + Color + '; padding-left: 5px">' + Named + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, v, Named, sd, sat, a, sdd) {
this.c = Color;
this.sdd = sdd;
this.n = Named;
this.sd = sd;
this.sat = sat;
this.a = a;
this.v = v;
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('',Infos[v].n);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}
