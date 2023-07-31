
var Type2 = Type2;
var Mask = Mask;
var CharacterName = CharacterName;
var IC = 0;
var Infos = new Array();
var LastV = -1;
var Processing = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(d, b, c2, i, p, e, n, l, f) {
//response.write "AC(" & rstChat("ViolatorID") & ", " & rstChat("Violation") & ", " & rstChat("Checked") & ", '" & RTRIM(rstChat("IP")) & "', '" & RTRIM(rstChat("Password")) & "', '" & RTRIM(rstChat("Email")) & "', '" & Replace(rstChat("Name"), "'","`") & "', '" & rstChat("Logged") & "', " & rstChat("Expr1") & ");" & vbcrlf
if (c2 != 0) {
	var Color = '#66ff66';
} else {
	var Color = '#ff6666';
}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, d, b, c2, i, p, e, n, l, f);
//l="' + l + '" f=' + f + ' d=' + d + ' b=' + b + ' c2=' + c2 + '
//p="' + p + '" i="' + i + '" e="' + e + '" n="' + n + '"
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=\'100%\' style="color: ' +  Color + '; padding-left: 5px;">' + n + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, d, b, c2, i, p, e, n, l, f) {
this.c = Color;
this.l = l;
this.f = f;
this.d = d;
this.b = b;
this.c2 = c2;
this.p = p;
this.i = i;
this.e = e;
this.n = n;
this.l = l;
this.f = f;
}


function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].n + '</b><br><a href=\'mailto:' + Infos[v].e + '?subject=RE: Your Lands of Hope Account\'>' + Infos[v].e + '</a><br>Password: ' + Infos[v].p + '<br>IP Address: ' + Infos[v].i + '<Br>Logged: ' + Infos[v].l + '<br>Accounts on IP: ' + Infos[v].f + (Infos[v].c2 == 0 ? '<br>Unchecked' : '<br>Checked');
	getObj('Buttons').innerHTML = Adr('window.location.replace(\'gmEA.asp?Mask=' + Infos[v].i + '\');','View Accounts','View Accounts') + (Infos[v].c2 == 0 ? Adr('window.location.replace(\'gmEAT.asp?Mask=' + Mask + '&CharsAt=' + Infos[v].d + '&Action=1\');','Set Checked', 'Checked') : '') + Adr('window.location.replace(\'gmEAT.asp?Mask=' + Mask + '&CharsAt=' + Infos[v].d + '&Action=2\');','Delete','Delete');
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