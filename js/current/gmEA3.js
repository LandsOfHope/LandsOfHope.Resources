var Type2 = Type2;
var Mask = Mask;
var PageNo = PageNo;
var CharacterName = CharacterName;
var IC = 0;
var Infos = new Array();
var LastV = -1;
var Processing = 0;
var LastDefault = '';
var LastForward = '';

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?Mask=' + Mask + '&Type2=' + Type2 + '&P=' + PageNo + '');
}

function AC(d, p, e, n, o, ip, lpi, dob, cc, wb) {
	if (dob == '') {
		var Color = 'white'
	} else {
		var Color = '#66ff66'
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, d, p, e, n, o, ip, lpi, dob, cc, wb);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=\'100%\' style="color: ' + Color + '; padding-left: 5px;">' + n + '</td><td style="color: gold">' + lpi + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, d, p, e, n, o, ip, lpi, dob, cc, wb) {
	this.c = Color;
	this.d = d;
	this.p = p;
	this.e = e;
	this.n = n;
	this.o = o;
	this.ip = ip;
	this.lpi = lpi;
	this.dob = dob;
	this.cc = cc;
	this.wb = wb;
}

function conf(message1, default1, forward1) {
	LastDefault = default1;
	LastForward = forward1;
	prompt(message1, 1, default1);
}

function gowin(URL, w, h, pb, title) {
	window.top.showPopWin(URL, w, h, PromptReturn, null, title, pb);
}


function DC(v) {
	LastV = v
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].n + '</b><br><a href=\'mailto:' + Infos[v].e + '?subject=RE: Your Lands of Hope Account\'>' + Infos[v].e + '</a><br>Number: ' + Infos[v].d + '<br>Password: ' + Infos[v].p + '<br>Date of Birth: ' + (Infos[v].dob == '' ? 'Unentered' : '' + Infos[v].dob) + '<br>Country Code: ' + Infos[v].cc;
	getObj('Buttons').innerHTML = Adr('window.location.replace(\'/gm/gmEA.asp?Mask=' + Mask + '&CharsAt=' + Infos[v].d + '\');', 'Account', 'Account') + Adr('window.location.replace(\'/gm/gmEA2.asp?Mask=' + Mask + '&CharsAt=' + Infos[v].d + '\');', 'Billing', 'Billing') + Adr('conf(\'Account Name:\', \'' + Infos[v].n + '\', \'/gm/gmEA3.asp?Mask=' + Mask + '&Action=1&CharsAt=' + Infos[v].d + '&Name=\');', 'Name', 'Name') + Adr('conf(\'Account Password:\', \'' + Infos[v].p + '\', \'/gm/gmEA3.asp?Mask=' + Mask + '&Action=2&CharsAt=' + Infos[v].d + '&Name=\');', 'Password', 'Password') + Adr('conf(\'Date of Birth (mm/dd/yyyy):\', \'' + Infos[v].dob + '\', \'/gm/gmEA3.asp?Mask=' + Mask + '&Action=4&CharsAt=' + Infos[v].d + '&Name=\');', 'Date of Birth', 'Date of Birth') + Adr('conf(\'2 Digit Country Code:\', \'' + Infos[v].cc + '\', \'/gm/gmEA3.asp?Mask=' + Mask + '&Action=5&CharsAt=' + Infos[v].d + '&Name=\');', 'Country', 'Country') + Adr('gowin(\'/gm/gmEAN.asp?CharsAt=' + Infos[v].d + '\', 615, 200,50, \'Notices\')', 'Notices', 'Notices');
}


function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('', Infos[v].n);
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