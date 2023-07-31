
var CharID = CharID;
var PageNo = PageNo;
var Processing = 0;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();
var SPath = window.top.FHIPS;
var LastV = -1;
var LastDefault = '';
var LastForward = '';
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(GoP) {
	window.location.replace('?CharsAt=' + CharID + '&P=' + GoP + '');
}


function conf(message1, default1, forward1) {
	LastDefault = default1;
	LastForward = forward1;
	prompt(message1, 1, default1);
}

function DC(v) {
	LastV = v;
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Owner can Cancel: ' + (Infos[v].b == 0 ? 'No' : 'Yes') + '<br>Casted: ' + Infos[v].d + '<br>Duration: ' + Infos[v].i + '';
	getObj('Pic').innerHTML = "<img src='" + Infos[v].p + "'>"
	if (Processing == 0) {
		getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'Mz.asp?Test=' + Infos[v].m + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].t + '\');', 'Info', 'Info') + (Infos[v].b != 0 ? Adr('Processing=1;window.location.replace(\'?CharsAt=' + CharID + '&P=' + PageNo + '&ItemID=1&InventoryItemID=' + Infos[v].m + '\');', 'Cancel', 'Cancel') : '');
	} else {
		getObj('Buttons').innerHTML = '';
	}
}


function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(SPath + Infos[v].p, Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function AvC(v, d, i, b, m, PictureID, Itty) {
	var Color = LITE;
	if (b != 0) {
		var Color = 'grey';
	}

	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, d, i, b, m, PictureID, Itty);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + (PictureID.indexOf('.') == -1 ? SPath : IPath) + PictureID + (PictureID.indexOf('.') == -1 ? '.png' : '') + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px;">' + Itty + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, d, i, b, m, PictureID, Itty) {
	this.c = Color;
	this.t = Itty;
	this.p = (PictureID.indexOf('.') == -1 ? SPath : IPath) + '' + PictureID + (PictureID.indexOf('.') == -1 ? '.png' : '');
	this.d = d;
	this.m = m;
	this.b = b;
	this.v = v;
	this.i = i;
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && Processing == 0) {
			if (pb == 1) {
				if (returnVal != LastDefault && LastForward != '') {
					Processing = 1;
					window.top.Interface.location.replace('' + LastForward + returnVal);
				}
			} else if (pb == 2) {
				if (returnVal != LastDefault && LastForward != '') {
					Processing = 1;
					window.top.Interface.location.replace('' + LastForward + '');
				}
			}

		}
	}
}