var IPath = window.top.FHIPR;
var oldprof = 0;
var Skill = 1000000;
var p2 = 'na.gif';
var Countt = 0;
var laststuff = '';
var lastid = 0;
var IC = 0;
var Infos = new Array();

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(PictureID, ItemName, ItemID, s, t, r, p) {

	if (PictureID == '0') { PictureID = '' }
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, PictureID, ItemName, ItemID, s, t, r, p);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\' style="color: ' + Color + '; padding-left: 5px;">' + ItemName + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, PictureID, ItemName, ItemID, s, t, r, p) {
	this.c = Color;
	this.v = ItemID;
	this.p = PictureID;
	this.text = ItemName;
	this.s = s;
	this.t = t;
	this.r = r;
	this.i = p;
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + Infos[v].p, Infos[v].text);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}

function DC(v) {
	//Clicked on the remodel map

	var npcid = Infos[v].v;
	if (npcid != 0) {
		laststuff = v;
		window.top.InfoTip('', 'Clicked ' + Infos[v].text);
		var x = 0;
		var i = 0;
		for (i = 0; i < 4; i++) {
			if (getObj('Draw2')[i].checked == true) {
				x = getObj('Draw2')[i].value
				if (x == 1) {
					window.ResultsOfit.location.replace("fhnpcr.asp?CharsAt=" + npcid)
				} else if (x == 2) {
					window.ResultsOfit.location.replace("fhnpcp.asp?CharsAt=" + npcid)
				} else if (x == 3) {
					window.ResultsOfit.location.replace("fhnpcpt.asp?CharsAt=" + npcid)
				} else {
					window.ResultsOfit.location.replace("fhnpce.asp?CharsAt=" + npcid)
				}
			}
		}
	}
}

function Floors() {
	var strTest = '';
	var v = 0;
	var i = 0;

	strTest += '<tr height="100%"><td colspan=2></td></tr>'
	strTest += '<tr><td colspan=2>Mode</td></tr>';
	strTest += '<tr height="100%" colspan=2><td><center>Edit<br><input class="btn" name=Draw2 id=Draw2 checked type=radio value=0 style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"></center></td></tr>';
	strTest += '<tr height="100%" colspan=2><td><center>Speech<br><input class="btn" name=Draw2 id=Draw2 type=radio value=3 style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"></center></td></tr>';
	strTest += '<tr height="100%" colspan=2><td><center>Race<br><input class="btn" name=Draw2 id=Draw2 type=radio value=1 style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"></center></td></tr>';
	strTest += '<tr height="100%" colspan=2><td><center>Prof<br><input class="btn" name=Draw2 id=Draw2 type=radio value=2 style="width:15; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"></center></td></tr>';

	getObj('Pages2').innerHTML = '<table class="copyright" cellpadding=1 cellspacing=0 height="100%">' + strTest + '</table>';
}
