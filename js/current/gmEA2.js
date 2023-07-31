
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

function AC(d, b, i, p, e, n, o, s, pd, dd) {
	var Color = 'white'
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, d, b, i, p, e, n, o, s, pd, dd);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=\'100%\' style="color: ' + Color + '; padding-left: 5px;">' + n + '</td><td style="color: gold;">$' + dd + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, d, b, i, p, e, n, o, s, pd, dd) {
	this.c = Color;
	this.d = d;
	this.b = b;
	this.i = i;
	this.p = p;
	this.e = e;
	this.n = n;
	this.o = o;
	this.s = s;
	this.pd = pd;
	this.dd = dd;
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
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].n + '</b><br><a href=\'mailto:' + Infos[v].e + '?subject=RE: Your Lands of Hope Account\'>' + Infos[v].e + '</a><br>Number: ' + Infos[v].d + '<br>Password: ' + Infos[v].p + '<br>IP Address: ' + Infos[v].i + '<br>Status:' + (Infos[v].b != 0 ? 'Banned (' + Infos[v].b + ')' : 'Active') + (Infos[v].o != 0 && Infos[v].o < 100 && Infos[v].o > -100 ? '<br>p2p Date: ' + Infos[v].pd + '' : (Infos[v].o == -100 ? '<br>Courtesy Account' : (Infos[v].o == 100 ? '<br>Shared Child Account' : '<br>Type: f2p')));
	getObj('Buttons').innerHTML = Adr('window.location.replace(\'gmEA.asp?Mask=' + Mask + '&CharsAt=' + Infos[v].d + '\');', 'Account', 'Account') + Adr('window.location.replace(\'gmEA2.asp?Mask=' + Mask + '&CharsAt=' + Infos[v].d + '\');', 'Billing', 'Billing') + Adr('conf(\'Type of Account: (100=Staff 99=Cancelled/Postal 0=f2p -100=Courtesy 2=monthly p2p(PayPal), 3=yearly p2p(PayPal)).\', \'' + Infos[v].o + '\', \'gmEA2.asp?Mask=' + Mask + '&Action=11&CharsAt=' + Infos[v].d + '&Name=\');', 'Type', 'Type') + Adr('conf(\'Hope Credits Balance:\', \'' + Infos[v].dd + '\', \'gmEA2.asp?Mask=' + Mask + '&Action=14&CharsAt=' + Infos[v].d + '&Name=\');', 'HC', 'HC') + Adr('gowin(\'gmEAN.asp?CharsAt=' + Infos[v].d + '\', 615, 200,50, \'Notices\')', 'Notices', 'Notices') + (Infos[v].b != 0 ? Adr('conf(\'Please enter an optional note with regards the cancellation of the ban.\', \'Ban lifted by ' + CharacterName + '\', \'gmEA2.asp?Mask=' + Mask + '&Action=12&CharsAt=' + Infos[v].d + '&Name=\');', 'Unban', 'Unban') : Adr('conf(\'Please enter a reason for this ban.\', \'Generic Violation\', \'gmEA2.asp?Mask=' + Mask + '&Action=13&CharsAt=' + Infos[v].d + '&Name=\');', 'Ban', 'Ban'));
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