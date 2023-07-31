var PageNo = PageNo;
var Mask = Mask;
var IPath = window.top.FHIPV;
var RPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();
var Processing = 0;
var LastV = -1;
var LastDefault = '';
var LastForward = '';

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(m, v, p, server, vl, vt, vn, a, vtid, vc, vcp, vb, x, y) {
	var Color = GetAColor(a)
	if (Color == '') { Color = 'yellow' };
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, m, v, p, server, vl, vt, vn, a, vtid, vc, vcp, vb, x, y);
	// m=' + m + ' v=' + v + ' server=' + server + ' vl=' + vl + ' vt="' + vt + '" vn="' + vn + '" a=' + a + ' vtid=' + vtid + '
	//vc="' + vc + '" vcp="' + vcp + '" vb=' + vb + ' x=' + x + ' y=' + y + ' p="' + (p == '' ? 'na.gif' : p) + '"
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img src=\'' + IPath + (p == '' ? 'na.gif' : p) + '\' width=15 height=15></td><td width=\'100%\' style="color: ' + Color + '; padding-left: 5px;">' + vn + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, m, v, p, server, vl, vt, vn, a, vtid, vc, vcp, vb, x, y) {
	this.color = Color;
	this.vn = vn;
	this.p = p;
	this.m = m;
	this.v = v;
	this.server = server;
	this.vl = vl;
	this.vt = vt;
	this.a = a;
	this.vtid = vtid;
	this.vc = vc;
	this.vcp = vcp;
	this.vb = vb;
	this.x = x;
	this.y = y;
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '&Action=-10&Mask=' + Mask + '');
}

function conf(message1, default1, forward1) {
	LastDefault = default1;
	LastForward = forward1;
	prompt(message1, 1, default1);
}

function conf2(message1, forward1) {
	LastDefault = 1000;
	LastForward = forward1;
	confirm(message1, 2);
}

function go(URL) {
	if (Processing == 0) {
		Processing = 1;
		window.location.replace(URL);
	}
}

function gowin(URL, w, h, pb, title) {
	window.top.showPopWin(URL, w, h, PromptReturn, null, title, pb);
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

function DC(v) {
	getObj('Stuff2').innerHTML = '<input type=\'hidden\' id=hc name=hc value=' + Infos[v].vb + '><b>' + Infos[v].vn + '</b><br>Vessel Type: ' + Infos[v].vt + '<br>Vessel Level: ' + Infos[v].vl + '<br>Server: ' + Infos[v].server + '<br>Allegiance: ' + Infos[v].a + '<br>Location: ' + Infos[v].x + ', ' + Infos[v].y + '<br>' + PFormMoney('hc', Infos[v].vb) + Adr('go(\'gmEV2.asp?Action=100&P=' + PageNo + '&Mask=' + Mask + '&hc=\' + getObj(\'hc\').value + \'&CharsAt=' + Infos[v].v + '\');', 'Adjust', 'Bounty');
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'><img src='" + RPath + (Infos[v].vcp == '' ? 'na.gif' : Infos[v].vcp) + "'>";
	getObj('Buttons').innerHTML = Adr('window.location.replace(\'gmev2.asp?Action=1&Mask=' + Mask + '&CharsAt=' + Infos[v].v + '\');', 'Go to this vessel', 'Go') + (Math.round(Infos[v].m) > 0 ? Adr('window.location.replace(\'gmev2.asp?CharsAt=' + Infos[v].m + '\');', 'Go to Master', 'Master') : '') + Adr('conf(\'Please enter the new Server for this vessel.\', \'' + Infos[v].server + '\', \'gmev2.asp?Mask=' + Mask + '&Action=12&CharsAt=' + Infos[v].v + '&Name=\');', 'Server', 'Server') + Adr('conf2(\'Are you sure you wish to delete this vessel?\',\'gmEV2.asp?Action=6&Mask=' + Mask + '&CharsAt=' + Infos[v].v + '\');', 'Delete', 'Delete') + Adr('conf(\'Please enter a new name for this vessel.\', \'' + Infos[v].vn + '\', \'gmev2.asp?Mask=' + Mask + '&Action=11&CharsAt=' + Infos[v].v + '&Name=\');', 'Rename', 'Rename') + Adr('conf(\'Please enter a new picture for this vessel.\', \'' + Infos[v].p + '\', \'gmev2.asp?Mask=' + Mask + '&Action=19&CharsAt=' + Infos[v].v + '&Name=\');', 'Picture', 'Picture') + Adr('conf(\'Please enter a new name for the captain.\', \'' + Infos[v].vc + '\', \'gmev2.asp?Mask=' + Mask + '&Action=110&CharsAt=' + Infos[v].v + '&Name=\');', 'Set the Captain name', 'Captain') + Adr('conf(\'Please enter a new picture for the vessel captain.\', \'' + Infos[v].vcp + '\', \'gmev2.asp?Mask=' + Mask + '&Action=190&CharsAt=' + Infos[v].v + '&Name=\');', 'Captain Picture', 'C Pic');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + Infos[v].p, Infos[v].vn);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}
