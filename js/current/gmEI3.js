var Processing = 0;
var CharsAt = CharsAt;
var Name = Name;
var PageNo = PageNo;
var Mask = Mask;
var IPath = window.top.FHIPI;
var LastV = -1;
var Processing = 0;
var LastDefault = '';
var LastForward = '';
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(Color, v, PictureID, d, t) {
	if (PictureID == '0') { PictureID = '' }
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, PictureID, d, t);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + t + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, PictureID, d, t) {
	this.c = Color;
	this.d = d;
	this.v = v;
	this.t = t;
	this.p = PictureID;
}

function conf(message1, default1, forward1) {
	LastDefault = default1;
	LastForward = forward1;
	prompt(message1, 1, default1);
}


function DC(v) {
	getObj('Stuff2').innerHTML = Infos[v].t + '<br>' + Infos[v].d;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('conf(\'Please enter a new item name\',\'' + Infos[v].t + '\',\'gmEI.asp?Mask=' + Mask + '&P=' + PageNo + '&CharsAt=' + Infos[v].v + '&Name=\');', 'Rename', 'Rename') + Adr('window.open(\'gmEI2.asp?CharsAt=' + Infos[v].v + '\', \'EI\');', 'More', 'More') + Adr('window.top.loadwindow2(\'gmEI3.asp?CharsAt=' + Infos[v].v + '\',400,300,\'iwindow\',\'' + Infos[v].t + ' Stats\');', 'Stats', 'Stats');
}

function GoP(PageNo) {
	window.location.replace('?CharsAt=' + CharsAt + '&Name=' + Name + '&Mask=' + Mask + '&P=' + PageNo + '');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + IPath + Infos[v].p, Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && Processing == 0) {
			if (pb == 1) {
				if (LastForward != '') {
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