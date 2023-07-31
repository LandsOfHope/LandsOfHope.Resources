var IPath = window.top.FHIPS;
var IPath2 = window.top.FHIPI;
var DefValue ='';
var PR =0;
var P = '';
var Group = '';
var OC = 0;
var Options = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');


function CheckValue(Val1, Val2) {
	if (Val1 > Val2) {
		return false
	} else {
		return true
	}
}

function RC(stuff) {
stuff.style.cursor = '';
stuff.style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('' + Options[v].p, '' + Options[v].n + '<br>' + Options[v].d);
getObj('O' + v).style.cursor = 'pointer';
getObj('O' + v).style.backgroundColor=BGCOLOR_S
}


//function AHOLD(SkillGroup) {
//document.write("<tr height=\"16px\"><td colspan=2 style=\"" + strButtonx + "; width: 100\" " + strClicksns + " onclick=\"window.location.replace(\'fhoption.asp?Group=" + SkillGroup + "\')\">" + SkillGroup + "</td></tr>");
//}


function AH(SkillGroup) {
document.write("<tr><td colspan=2 style=\"" + strButtonz + "\" " + strClicksns + "  onclick=\"window.location.replace(\'fhoption.asp?Group=" + SkillGroup + "\');\">" + SkillGroup + "</td></tr>");
}


function AddExtra(PR, P, Group, PV) {
//v
ExtraH(100, PR, P, Group, PV);
AddOp('None',0, 'na.gif','','');
AddOp('Change Character',4, 'na.gif','','');
AddOp('Favourites - All',9, 'na.gif','','');
AddOp('Favourites - Yours',10, 'na.gif','','');
AddOp('Fellowship',7, 'na.gif','','');
AddOp('Filters',8, 'na.gif','','');
AddOp('Friends',2, 'na.gif','','');
AddOp('Getting Started',12, 'na.gif','','');
AddOp('Help',6, 'na.gif','','');
AddOp('Message Inbox',1, 'na.gif','','');
AddOp('Pets',5, 'na.gif','','');
AddOp('Travel',3, 'na.gif','','');
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
document.write('<tr id="O' + OC + '" title="' + d +'" onclick="window.location.replace(\'?PR=' + PR + '&P=' + P + '&V=' + Ov + '&Group=' + Group + '\');" onmouseover="PC(' + OC + ')" onmouseout="RC(this)"><td width="10"><img src="' + IPath2 + PictureID + '" width="10" height="10"><td style="width: 200; padding-left: 5px' + (DefValue == Ov ? '; color: gold; font-weight: bold' : '; color: ' + c) + '">' + n + '</td></tr>');
OC = OC + 1;
}


function newOption(n, Ov, PictureID, d, c) {
this.c = c;
this.p = IPath2 + PictureID;
this.n = n;
this.Ov = Ov;
this.d = d;
}

function FormMoneyx(fin, mmin) {
	var harhar = mmin;
	var m = Math.floor(harhar / 1000000)
	var g = Math.floor(harhar / 10000) - (m * 100)
	var s = Math.floor(harhar / 100) - Math.floor(((g * 100) + (m * 10000)))
	var b = Math.floor(harhar) - Math.floor(((s * 100) + (g * 10000) + (m * 1000000)))

	return "<input name=cpp" + fin + " id=cpp" + fin + " value=0 size=2 maxlength=2 type=\"hidden\"><img src=\"" + window.top.FHIPO + "gp.gif\"><input name=cg" + fin + " id=cg" + fin + " value=" + g + " size=2 maxlength=1 style=\"width: 30\" onkeyup=\"CalcM('" + fin + "', this)\"><img src=\"" + window.top.FHIPO + "sp.gif\"><input name=cs" + fin + " id=cs" + fin + " value=" + s + " size=2 maxlength=2 style=\"width: 30\" onkeyup=\"CalcM('" + fin + "', this)\"> <img src=\"" + window.top.FHIPO + "bp.gif\"><input name=cb" + fin + " id=cb" + fin + " value="  + b + " size=2 maxlength=2 style=\"width: 30\" onkeyup=\"CalcM('" + fin + "', this)\">";
}

function PromptReturn(returnVal, postback) {
	if (returnVal != null) {
		if (returnVal != false) {
			window.top.location.replace('fhlogin.asp');
		}
	}
}
