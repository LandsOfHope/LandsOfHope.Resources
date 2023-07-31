var PageNo = PageNo;
var Mask = Mask;
var CharacterName = CharacterName;
var IC = 0;
var Infos = new Array();
var LastV = -1;
var Processing = 0;
var LastDefault = '';
var LastForward = '';
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(d, b, c2, c, i, p, e, n, o, s, pd, l, f, tp, hc, ev, evc, dob, pa) {
if (b != 0) {
	var Color = '#ff6666';
} else {
	if (ev == 0) {
		var Color = '#6666ff'
	} else {
		if (o != 0) {
			var Color = 'gold'
		} else {
			var Color = '#66ff66'
		}
	}
}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, d, b, c2, c, i, p, e, n, o, s, pd, l, f, tp, hc, ev, evc, dob, pa);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=\'100%\' style="color: ' +  Color + '; padding-left: 5px;">' + n + '</td><td>' + (dob == '' ? hc : (Math.abs(dob) < 13 ? 'U' : hc)) + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, d, b, c2, c, i, p, e, n, o, s, pd, l, f, tp, hc, ev, evc, dob, pa) {
this.c = Color;
this.o = o;
this.dob = dob;
this.ev = ev;
this.evc = evc;
this.tp = tp;
this.hc = hc;
this.s = s;
this.pd = pd;
this.l = l;
this.f = f;
this.d = d;
this.b = b;
this.c2 = c2;
this.c = c;
this.p = p;
this.i = i;
this.e = e;
this.n = n;
this.pa = pa;
}


function GoP(GoP) {
	window.location.replace('?Mask=' + Mask + '&P=' + GoP + '');
} 

function conf(message1, default1, forward1) {
	LastDefault = default1;
	LastForward = forward1;
	prompt(message1,1,default1);
}

function conf2(message1, forward1) {
	LastDefault = 1000;
	LastForward = forward1;
	confirm(message1,2);
}

function DC(v) {
	LastV = v;
	getObj('Stuff2').innerHTML = '<table cellpadding=1 cellspacing=0 class=\'weakercell\' width=\'410\'><tr><td width=\'200\'><b>' + Infos[v].n + '</b></td><td width=\'200\'>Email: <a href=\'mailto:' + Infos[v].e + '?subject=RE: Your Lands of Hope Account\'>' + Infos[v].e + '</a></td></tr><tr><td>Password: ' + Infos[v].p + '</td><td>IP Address: ' + Infos[v].i + '</td></tr><tr><td>LA: ' + Infos[v].l + '</td><td>FA: ' + Infos[v].f + '</td></tr><tr><td>Characters: ' + Infos[v].c + '</td><td>Notices: ' + Infos[v].c2 + '</td></tr><tr><td>Status: ' + (Infos[v].b != 0 ? 'Banned (' + Infos[v].b + ')' : (Infos[v].ev == 0 ? '<font id=tred>Email Not Verified</a>' : 'Email Verified')) + '</td><td>' + (Infos[v].o != 0 ? 'Paid: ' + Infos[v].pd : 'Age: ' + (Infos[v].dob == '' ? 'Not Entered' : (Math.abs(Infos[v].dob) < 13 ? 'Underage (' + Math.abs(Infos[v].dob) + ')' : '' + Infos[v].dob + 'yrs'))) + '</td></tr><tr><td colspan=2>USD Spent: ' + Infos[v].pa + '</td></tr></table>';
	getObj('Buttons').innerHTML = Adr('window.location.replace(\'gmEA3.asp?Mask=' + Mask + '&CharsAt=' +Infos[v].d + '\');','Settings', 'Settings') + Adr('window.location.replace(\'gmEA2.asp?Mask=' + Mask + '&CharsAt=' +Infos[v].d + '\');', 'Billing', 'Billing') + Adr('conf(\'Please enter a new name for this account.\', \'' + Infos[v].n + '\', \'gmEA.asp?Mask=' + Mask + '&P=' + PageNo + '&Action=11&CharsAt=' +Infos[v].d + '&Name=\');','Rename','Rename') + Adr('window.location.replace(\'gmEC.asp?Mask=-' + Infos[v].d + '\');', 'Characters', 'Characters') + Adr('gowin(\'gmEAN.asp?CharsAt=' + Infos[v].d + '\', 400, 200,50, \'Notices\')','Notices','Notices') + (Infos[v].b != 0 ? Adr('conf(\'Please enter an optional note with regards the cancellation of the ban.\', \'Ban lifted by ' + CharacterName + '\', \'gmEA.asp?Mask=' + Mask + '&P=' + PageNo + '&Action=12&CharsAt=' +Infos[v].d + '&Name=\');','Unban','Unban') : Adr('conf(\'Please enter a reason for this ban.\', \'Generic Violation\', \'gmEA.asp?Mask=' + Mask + '&P=' + PageNo + '&Action=13&CharsAt=' +Infos[v].d + '&Name=\');', 'Ban', 'Ban') + Adr('conf(\'Please enter a reason for this TOS ban.\', \'Multiple Accounts\', \'gmEA.asp?Mask=' + Mask + '&P=' + PageNo + '&Action=14&CharsAt=' +Infos[v].d + '&Name=\');', 'TOS Ban','TOS Ban'))  + Adr('window.location.replace(\'gmEA.asp?Mask=' + Mask + '&P=' + PageNo + '&Action=15&CharsAt=' +Infos[v].d + '\');', 'Clear Trans', 'Clear Trans') + Adr('window.location.replace(\'gmEA.asp?Mask=' + Infos[v].e + '&P=' + PageNo + '&Action=26&CharsAt=' +Infos[v].d + '\');', 'Ban Email', 'Ban Email') + Adr('window.location.replace(\'gmEA.asp?Mask=' + Infos[v].e + '&P=' + PageNo + '&Action=16&CharsAt=' +Infos[v].d + '\');', 'Clear Email', 'Clear Email') + Adr('conf(\'How much HC should this Account have ?\', \'' + Infos[v].hc + '\', \'gmEA.asp?Mask=' + Mask + '&P=' + PageNo + '&Action=17&CharsAt=' +Infos[v].d + '&Name=\');', 'hc', 'hc') + Adr('conf(\'Add Mailed $ as HC?\', \'5\', \'gmEA.asp?Mask=' + Mask + '&P=' + PageNo + '&Action=38&CharsAt=' +Infos[v].d + '&Name=\');', 'USD to HC', 'Mail') + Adr('conf(\'What type should this account be 0 = non-paid 2 = paid -100 = courtesy?\', \'' + Infos[v].o + '\', \'gmEA.asp?Mask=' + Mask + '&P=' + PageNo + '&Action=18&CharsAt=' +Infos[v].d + '&Name=\');','Type', 'Type') + Adr('conf2(\'Send a password reminder to this account?\', \'gmEA.asp?Mask=' + Mask + '&P=' + PageNo + '&Action=19&CharsAt=' +Infos[v].d + '&Name=\');', 'Remind', 'Remind') + Adr('window.location.replace(\'gmEAL.asp?CharsAt=' + Infos[v].d + '\');', 'Logs','Logs') + Adr('conf(\'Please enter the reason why you wish to IP Block this account (0 - 200 chars).\', \'' + Infos[v].n + '\', \'gmEIPB.asp?Mask=' + Infos[v].i + '&P=' + PageNo + '&Action=15&CharsAt=' +Infos[v].i + '&Name=\');', 'IP Block', 'IP Block') + (Infos[v].ev == 0 ? Adr('window.location.replace(\'gmEA.asp?Mask=' + Mask + '&P=' + PageNo + '&Action=21&CharsAt=' +Infos[v].d + '&Name=\');','Verified','Verified') : Adr('window.location.replace(\'gmEA.asp?Mask=' + Mask + '&P=' + PageNo + '&Action=20&CharsAt=' +Infos[v].d + '&Name=\');','Unverify','Unverify'));
}

function gowin(URL, w, h, pb, title) {
	window.top.showPopWin(URL, w, h, PromptReturn, null, title, pb);
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

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && Processing == 0) {
			if (pb == 1) {
				if (LastForward != '') {
					Processing = 1;
					window.top.Interface.location.replace('' + LastForward + returnVal);
				}
			} else 	if (pb == 2) {
				if (returnVal != LastDefault && LastForward != '') {
					Processing = 1;
					window.top.Interface.location.replace('' + LastForward + '');
				}
			}

		}
	}
}
