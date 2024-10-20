var PageNo = PageNo;
var Type2 = Type2;
var Mask = Mask;
var CharacterName = CharacterName;
var IPath = "https://lohcdn.com/game/r/"
var CharsAt = CharsAt;
var IC = 0;
var Infos = new Array();
var Processing = 0;
var LastV = -1;
var LastDefault = '';
var LastForward = '';

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(m, d, p2, c, v, b, l, r, p, Itty, a, ri, pi, z, la, type, hc) {
	var Color = GetAColor(a)
	if (Color == '') { Color = 'yellow' };
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, m, d, p2, c, v, b, l, r, p, Itty, a, ri, pi, z, la, type, hc);
	//t="' + Itty + '" z=' + z + ' la="' + la + '" hc=' + hc + ' type=' + type + ' a=' + a + ' ri=' + ri + ' pi=' + pi + ' m=' + m + 
	// d=' + d + ' c=' + c + ' p2="' + (p2 == '' ? 'na.gif' : p2) + '" r="' + r + '" p="' + p + '" b=' + b + ' v=' + v + ' l=' + l + '
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img src=\'' + IPath + (p2 == '' ? 'na.gif' : p2) + '\' width=15 height=15></td><td width=\'100%\' style="color: ' + Color + '; padding-left: 5px;">' + Itty + (b != 0 ? ' - Banned' : '') + '</td><td style="color: gold">' + (type != 0 ? 'X' : '&nbsp;') + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, m, d, p2, c, v, b, l, r, p, Itty, a, ri, pi, z, la, type, hc) {
	this.color = Color;
	this.t = Itty;
	this.p2 = p2;
	this.z = z;
	this.la = la;
	this.hc = hc;
	this.type = type;
	this.a = a;
	this.ri = ri;
	this.pi = pi;
	this.m = m;
	this.d = d;
	this.c = c;
	this.b = b;
	this.r = r;
	this.p = p;
	this.v = v;
	this.l = l;
}


function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '&CharsAt=' + CharsAt + '&Type=' + Type2 + '&Action=0' + (Type2 != 4 ? '&Mask=' + Mask + '' : ''));
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

function DC(v) {
	LastV = v;
	getObj('Stuff2').innerHTML = '<input type=\'hidden\' name=hc id=hc value=' + Infos[v].hc + '><b>' + Infos[v].t + '</b><input value=\'' + Infos[v].d + '\'>' + (Infos[v].z != 0 ? '<br><b>Disguised/Polyed</b>' : '') + '<br>Race: ' + Infos[v].r + ' (' + Infos[v].ri + ')' + '<br>Profession: ' + Infos[v].p + ' (' + Infos[v].pi + ')' + '<br>Level: ' + Infos[v].l + '<br>Server: ' + Infos[v].c + '    Allegiance: ' + Infos[v].a + '<br>Last Active: ' + Infos[v].la + '<br>' + FormMoney('hc', Infos[v].hc) + Adr('go(\'/gm/gmEC.asp?Action=100&Type=' + Type2 + '&P=' + PageNo + '&Mask=' + Mask + '&hc=\' + getObj(\'hc\').value + \'&CharsAt=' + Infos[v].d + '\');', 'Adjust', 'Adjust');
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p2 == '' ? 'na.gif' : Infos[v].p2) + "'>";
	getObj('Buttons').innerHTML = '' + Adr('go(\'/gm/gmEC.asp?Action=1&Mask=' + Mask + '&CharsAt=' + Infos[v].d + '\');', 'Go to them', 'Go') + Adr('go(\'/gm/gmEC.asp?Action=2&Mask=' + Mask + '&CharsAt=' + Infos[v].d + '\');', 'Bring to you', 'Bring') + Adr('go(\'/gm/gmEC.asp?Action=23&Mask=' + Mask + '&CharsAt=' + Infos[v].d + '\');', 'Gods', 'Gods') + (Type2 == 0 || Type2 == 5 ? Adr('go(\'/gm/gmEA.asp?CharsAt=-' + Infos[v].d + '\');', 'View Account', 'Account') + (Infos[v].b == 0 ? Adr('conf(\'Please enter a reason for banning this account.\', \'Banned for Generic Abuse\', \'/gm/gmEC.asp?Action=3&Type=' + Type2 + '&Mask=' + Mask + '&CharsAt=' + Infos[v].d + '&Name=\');', 'Ban account', 'Ban') : Adr('conf(\'Please enter a reason for lifting this ban.\', \'Account Ban Lifted\', \'/gm/gmEC.asp?Action=8&Type=' + Type2 + '&Mask=' + Mask + '&CharsAt=' + Infos[v].d + '&Name=\');', 'Unband this account', 'Unban')) : (Type2 == 2 && Math.round(Infos[v].m) > 0 ? Adr('go(\'/gm/gmEC.asp?CharsAt=' + Infos[v].m + '\');', 'Go to pet owner', 'Owner') + Adr('go(\'/gm/gmEC.asp?Action=24&CharsAt=' + Infos[v].d + '\'); ', 'Tame', 'Tame') : '')) + Adr('go(\'/gm/gmECQ.asp?CharsAt=' + Infos[v].d + '\');', 'View Quests', 'Quests') + Adr('gowin(\'/gm/gmECP.asp?CharsAt=' + Infos[v].d + '\',615, 300, 5,\'Edit Stats\');', 'Edit stats', 'Stats') + Adr('gowin(\'/gm/gmECS.asp?CharsAt=' + Infos[v].d + '\',615, 300, 6,\'Edit Skills\');', 'Edit skills', 'Skills') + Adr('go(\'/gm/gmEC.asp?CharsAt=' + Infos[v].d + '&Type=4\');', 'View pets', 'Pets') + Adr('go(\'/gm/gmEV2.asp?CharsAt=0&Mask=-' + Infos[v].d + '\');', 'View vessels', 'Vessels') + Adr('conf(\'Please enter the new Server for this character.\', \'' + Infos[v].c + '\', \'/gm/gmEC.asp?Mask=' + Mask + '&Action=12&CharsAt=' + Infos[v].d + '&Name=\');', 'Switch server', 'Server') + (Infos[v].v == 0 ? Adr('go(\'/gm/gmEC.asp?Action=5&Type=' + Type2 + '&Mask=' + Mask + '&CharsAt=' + Infos[v].d + '\');', 'Hide', 'Hide') : Adr('go(\'/gm/gmEC.asp?Action=9&Mask=' + Mask + '&Type=' + Type2 + '&CharsAt=' + Infos[v].d + '\');', 'Unhide', 'Unhide')) + Adr('conf2(\'Are you sure you wish to delete this character ?\',\'/gm/gmEC.asp?Action=6&Mask=' + Mask + '&Type=' + Type2 + '&CharsAt=' + Infos[v].d + '\');', 'Delete', 'Delete') + (Infos[v].z == 0 ? Adr('conf(\'Please enter a new name for this character.\', \'' + Infos[v].t + '\', \'/gm/gmEC.asp?Mask=' + Mask + '&Action=11&CharsAt=' + Infos[v].d + '&Name=\');', 'Renamte', 'Rename') : Adr('go(\'/gm/gmEC.asp?Action=36&Type=' + Type2 + '&Mask=' + Mask + '&CharsAt=' + Infos[v].d + '\');', 'Remove disguise', 'Remove')) + Adr('conf(\'Change the pk status 0 or negative for not PK, 1 or greater for PK!\', \'0\', \'/gm/gmEC.asp?Mask=' + Mask + '&Action=13&CharsAt=' + Infos[v].d + '&Name=\');', 'PK Status', 'PK') + Adr('conf(\'Change the NPC Flag 0 = Player/Pet, -1 = NPC!\', \'0\', \'/gm/gmEC.asp?Mask=' + Mask + '&Action=17&CharsAt=' + Infos[v].d + '&Name=\');', 'NPC Flag', 'NPC') + Adr('conf(\'Please enter a new title for this character.\', \'\', \'/gm/gmEC.asp?Mask=' + Mask + '&Action=18&CharsAt=' + Infos[v].d + '&Name=\');', 'Change title', 'Title') + (Infos[v].z == 0 ? Adr('conf(\'Please enter a new picture for this character.\', \'' + Infos[v].p2 + '\', \'/gm/gmEC.asp?Mask=' + Mask + '&Action=19&CharsAt=' + Infos[v].d + '&Name=\');', 'Change picture', 'Picture') : '') + Adr('gowin(\'/gm/gmECProfile.asp?CharsAt=' + Infos[v].d + '\',615, 300, 7, \'Appearance Profile\');', 'Profile', 'Profile') + Adr('go(\'/gm/gmECI.asp?CharsAt=' + Infos[v].d + '\');', 'Inventory', 'Inven.') + Adr('go(\'/gm/gmBuildings.asp?Mask=-' + Infos[v].d + '\');', 'Buildings', 'Property') + Adr('go(\'/gm/gmIMessages.asp?CharsAt=' + Infos[v].d + '\');', 'Messages', 'Messages') + Adr('go(\'/gm/gmECAS.asp?CharsAt=' + Infos[v].d + '\');', 'Active spells', 'A Spells') + Adr('go(\'/gm/gmECKS.asp?CharsAt=' + Infos[v].d + '\');', 'Known spells', 'K Spells') + Adr('go(\'/gm/gmECKP.asp?CharsAt=' + Infos[v].d + '\');', 'Plans', 'Plans') + Adr('conf(\'Change the Allegiance of this character?\', \'' + Infos[v].a + '\', \'/gm/gmEC.asp?Mask=' + Mask + '&Action=20&CharsAt=' + Infos[v].d + '&Name=\');', 'Allegiance', 'Alleg.') + (Infos[v].z == 0 ? Adr('conf(\'Change the Race of this character?\', \'' + Infos[v].ri + '\', \'/gm/gmEC.asp?Mask=' + Mask + '&Action=21&CharsAt=' + Infos[v].d + '&Name=\');', 'Race', 'Race') + Adr('conf(\'Change the Profession of this character?\', \'' + Infos[v].pi + '\', \'/gm/gmEC.asp?Mask=' + Mask + '&Action=22&CharsAt=' + Infos[v].d + '&Name=\');', 'Profession', 'Prof') + Adr('conf(\'Credits and Infos[v]?\', \'0\', \'/gm/gmEC.asp?Mask=' + Mask + '&Action=25&CharsAt=' + Infos[v].d + '&Name=\');', 'Credits', 'Credits') : '') + Adr('go(\'/gm/gmECR.asp?CharsAt=' + Infos[v].d + '\');', 'Response', 'Response') + Adr('go(\'fhmessn.asp?CharsAt=' + Infos[v].d + '\');', 'Private message', 'PM') + Adr('go(\'/gm/gmoption.asp?CharsAt=' + Infos[v].d + '\');', 'Options', 'Options') + Adr('go(\'/gm/gmEC.asp?Action=26&Type=' + Type2 + '&Mask=' + Mask + '&CharsAt=' + Infos[v].d + '\');', 'Give GM Cookie', 'Cookie') + Adr('conf(\'Please enter how much money this person has spent?.\', \'\', \'/gm/gmEC.asp?Mask=' + Mask + '&Action=27&CharsAt=' + Infos[v].d + '&Name=\');', 'Statue', 'Statue');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + Infos[v].p2, Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && Processing == 0) {
			if (pb == 1) {
				if (returnVal != LastDefault && LastForward != '') {
					Processing = 1;
					window.top.Interface.location.replace('' + LastForward + returnVal + '&Type=' + Type2 + '');
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