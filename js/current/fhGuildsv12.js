var GuildID = GuildID;
var GoPage = GoPage;
var GJ = GJ;
var S = S;
var GL = GL;
var POS = POS;
var Processing = 0;
var IPath = window.top.FHIP + 'pi/';
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(Color, PictureID, t, s, v, x, y, g, m, b, f, w, l, ItemName, gd, ga) {
	if (Color == '') {
		Color = LITE;
	}

	var Ally = '&nbsp;';
	if (t > 0) {
		Ally = '<img src="' + window.top.FHIPH + t + '.gif">';
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, PictureID, t, s, v, x, y, g, m, b, f, w, l, ItemName, gd, Ally, ga);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" ><td valign=top style=\'width: 42px; background-color: ' + Color + '\'><img src=\'' + IPath + PictureID + '\' width=40 height=40></td><td><table class=\'weakcell\' cellpadding=0 cellspacing=0 width=\'100%\'><tr><td width=\'400px\' style="color: ' + Color + '" colspan=2><b>' + ItemName + '</b></td><td width=\'200\'>' + window.top.GetAName(t) + '</td></tr><tr><td colspan=2 width=\'50%\'>Leader: ' + (l == '' ? 'No Leader' : l) + '<br>Members/Activity: ' + b + ' ' + (ga <= 2 ? '<font id=tgold>Very Active</font>' : (ga <= 14 ? '<font id=tgreen>Active</font>' : (ga <= 60 ? '<font id=tmagenta>Semi-Active</font>' : (ga <= 160 ? '<font id=theal>Inactive</font>' : (ga >= 160 ? '<font id=tcyan>Comatose</font>' : ''))))) + '</td><td colspan=2>' + (f > 0 ? Adr('if (Processing ==0) {Processing = 1;window.top.PF(' + f + ', 101);}', 'Private message guild leader', 'PM') : '') + (m == 3 ? Adr('if (Processing == 0) {Processing = 1;window.location.replace(\'?CharsAt=' + v + '&S=' + S + '&P=' + GoPage + '&Type=3\')}', 'Appoint yourself guild leader', 'Appoint Leader') : (m == 2 ? Adr('if (Processing ==0) {Processing = 1;window.location.replace(\'FHGuM.asp?CharsAt=' + v + '\');}', 'Manage the guild', 'Manage') : '') + (m > 0 && m <= 3 ? Adr('if (Processing == 0) {confirm(\'' + (GL == -1 ? 'Are you sure you wish to leave this guild?' : 'Are you sure you wish to leave this guild?') + '\', ' + s + ')};', 'Leave the guild', 'Leave') : (m == 0 && s == 0 && S != -2 && GuildID == 0 && POS == 0 && GJ >= 2 ? Adr('if (Processing ==0) {Processing = 1;window.location.replace(\'?S=' + S + '&P=' + GoPage + '&CharsAt=' + v + '&Type=1\');}', 'Join this guild', 'Join') : ''))) + '</td></tr><tr><td colspan=5>' + gd + '</td></tr></table></td></tr>');
	document.write('<tr><td colspan=2><hr></td></tr>')
	IC = IC + 1;
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			Processing = 1;
			window.top.Interface.location.replace('fhguilds.asp?S=' + pb + '&P=' + GoPage + '&Type=2');
		}
	}
}

// {Processing =1;this.disabled=true;window.location.replace(\'?S=' + S + '&P=' + GoPage + '&Type=2\')}


function newInfo(Color, PictureID, t, s, v, x, y, g, m, b, f, w, l, ItemName, gd, Ally, ga) {
	this.c = Color;
	this.v = v;
	this.p = PictureID;
	this.i = ItemName;
	this.m = m;
	this.f = f;
	this.w = w;
	this.l = l;
	this.t = t;
	this.s = s;
	this.x = x;
	this.y = y;
	this.g = g;
	this.b = b;
	this.ga = ga;
}


function RC(v) {
	getObj('I' + v).style.cursor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + Infos[v].p, Infos[v].i);
	getObj('I' + v).style.cursor = 'pointer';
}

function GoP(PageNo) {
	window.location.replace('?S=' + S + '&P=' + PageNo);
}

function Zg(vin) {
	window.location.replace('?S=' + vin + '');
}


