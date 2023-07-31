var IPath = window.top.FHIPS;
var IPath2 = window.top.FHIPI;
var CharsAt = CharsAt;
var DefValue = '';
var PR = 0;
var P = '';
var Group = '';
var OC = 0;
var Options = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');


function CheckValue(Val1, Val2) {
	if (Val1 > Val2) {
		return false
	} else {
		return true
	}
}

function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + Options[v].p, '' + Options[v].n + '<br>' + Options[v].d);
	getObj('O' + v).style.cursor = 'pointer';
	getObj('O' + v).style.backgroundColor = BGCOLOR_S
}

function AH(SkillGroup) {
	document.write("<tr><td colspan=2 style=\"" + strButtonz + "\" " + strClicksns + "  onclick=\"window.location.replace(\'gmoption.asp?CharsAt=" + CharsAt + "&Group=" + SkillGroup + "\');\">" + SkillGroup + "</td></tr>");
}


function AddExtra(PR, P, Group, PV) {
	//v
	ExtraH(100, PR, P, Group, PV);
	AddOp('None', 0, 'na.gif', '', '');
	AddOp('Change Character', 4, 'na.gif', '', '');
	AddOp('Favourites - All', 9, 'na.gif', '', '');
	AddOp('Favourites - Yours', 10, 'na.gif', '', '');
	AddOp('Fellowship', 7, 'na.gif', '', '');
	AddOp('Filters', 8, 'na.gif', '', '');
	AddOp('Friends', 2, 'na.gif', '', '');
	AddOp('Gamemaster', 11, 'na.gif', '', '');
	AddOp('Message Inbox', 1, 'na.gif', '', '');
	AddOp('Pets', 5, 'na.gif', '', '');
	AddOp('Shortcuts (Single bar)', 14, 'na.gif', '', '');
	AddOp('Tips and Info', 13, 'na.gif', '', '');
	AddOp('Travel', 3, 'na.gif', '', '');
	ExtraF();
}

function ExtraF() {
	document.write('<tr height=\'100%\'><td colspan=2>&nbsp;</td></tr></table></div>')
}

function ExtraH(H2, PR2, P2, Group2, PV2) {
	DefValue = PV2;
	PR = PR2;
	P = P2;
	Group = Group2;
	document.write('<div class="nav3" style="height: ' + H2 + '; overflow: auto"><table class=itemtext height=' + (H2 - 5) + ' cellspacing=0 cellpadding=1>')
}

function AddOp(n, Ov, PictureID, d, c) {
	if (c == '') {
		c = 'white';
	}
	if (Options[OC] == null) {
		Options[OC] = new Array();
	}
	Options[OC] = new newOption(n, Ov, PictureID, d, c);

	// d="' + d + '" n="' + n + '" p="' + IPath2 + PictureID + '" 
	document.write('<tr id="O' + OC + '" title="' + d + '" onclick="window.location.replace(\'?PR=' + PR + '&CharsAt=' + CharsAt + '&P=' + P + '&V=' + Ov + '&Group=' + Group + '\');" onmouseover="PC(' + OC + ')" onmouseout="RC(this)"><td width="10"><img src="' + IPath2 + PictureID + '" width="10" height="10"><td style="width: 200; padding-left: 5px' + (DefValue == Ov ? '; color: gold; font-weight: bold' : '; color: ' + c) + '">' + n + '</td></tr>');
	OC = OC + 1;
}


function newOption(n, Ov, PictureID, d, c) {
	this.c = c;
	this.p = IPath2 + PictureID;
	this.n = n;
	this.Ov = Ov;
	this.d = d;
}