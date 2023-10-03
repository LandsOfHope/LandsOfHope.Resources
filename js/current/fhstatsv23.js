var IC = 0;
var VC = 0;
var CharsAt = CharsAt;
var PageNo = PageNo;
var PageNo2 = PageNo2;
var SC = 0;
var AA = AA;
var Monster = Monster;
var Items = new Array();
var MIC = 0;
var SKC = 0;
var FHIPPER = "https://lohcdn.com/game/";
var CPath = FHIPPER + "r/"
var IPath = FHIPPER + "i/"
var BPath = FHIPPER + "b/"
var CC = 0;
var CharItems = new Array();
var Vessels = new Array();
var PetSkills = new Array();
var Skills = new Array();
var Chars = new Array();

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function PercentBoxX(pwidth, PercentValue, Color, caption) {
	if (caption == '') {
		caption = PercentValue + '%';
	}
	return '<div style="width: ' + pwidth + 'px; height: 15px; position: relative; background: URL(https://lohcdn.com/images/black.gif) repeat-x"><div style="width: ' + ((pwidth / 100) * PercentValue) + 'px;height: 15px; position: static; background: URL(https://lohcdn.com/images/' + Color + '.gif) repeat-x"><div class=perc2 style="position: absolute; width:' + pwidth + 'px">' + caption + '</div></div></div>';
}

function GetPerc(MaxP, CurP) {
	if (CurP <= 0) {
		return 0
	} else {
		if (CurP > MaxP) {
			return 100
		} else {
			return Math.floor((100 / MaxP) * CurP)
		}
	}

}

function ACS(Statty, sv, sv2, bonus, mv, ar, pb) {
	var Color = LITE;
	var perc = 100;
	if (sv2 >= 0) {
		perc = GetPerc(sv2, sv)
	}

	if (Skills[SKC] == null) {
		Skills[SKC] = new Array();
	}
	Skills[SKC] = new NewSkill(Statty, sv, sv2, bonus, mv, ar, pb, Color, perc, 0, 0);
	document.write('<tr width="255" id="S' + SKC + '" onclick="' + (ar > 0 ? 'DCR(' + SKC + ')' : '') + '" onmouseover="PC(' + SKC + ')" onmouseout="RC(this)"><td width="115" style="color: ' + Color + '; padding-left: 5px;">' + Statty + '</td><td width=110 style="color: ' + (((sv2 > 0 && sv >= sv2)) ? '#ff6666' : '#66ff66') + '">' + PercentBoxX(150, perc, pb, sv + (bonus != 0 ? ' (' + bonus + ')' : '') + (sv2 >= 0 ? '/' + sv2 : '')) + '</td></tr>');
	SKC = SKC + 1;
}

function ACS2(Statty, sv, bonus, mx, sv2, a) {
	var Color = LITE;
	var perc = 100;
	if (sv2 >= 0) {
		perc = GetPerc(sv2, sv)
	}

	var pb = (a == 0 ? 'red' : (mx > 0 && sv >= mx ? 'gold' : 'green'));

	if (Skills[SKC] == null) {
		Skills[SKC] = new Array();
	}
	Skills[SKC] = new NewSkill(Statty, sv, sv2, bonus, 0, 0, pb, Color, perc, mx, a);

	document.write('<tr id="S' + SKC + '"  width="255" onmouseover="PC(' + SKC + ')" onmouseout="RC(this)"><td width="115" style="color: ' + Color + '; padding-left: 5px;">' + Statty + '</td><td width=110>' + PercentBoxX(150, perc, pb, sv + (bonus != 0 ? ' (' + bonus + ')' : '') + (mx >= 0 ? '/' + mx : '')) + '</td></tr>');

	SKC = SKC + 1;
}

function PC(v) {
	window.top.InfoTip('', '<b>' + Skills[v].s + '</b><br>Value: ' + Skills[v].sv + (Skills[v].sv2 >= 0 ? '<br>Max Value: ' + Skills[v].sv2 : '') + '<br>' + (Skills[v].bv > 0 ? 'Bonus: ' + Skills[v].bv : '') + '<br>' + (Skills[v].mv > 0 ? 'Mount Bonus: ' + Skills[v].mv : ''));
	getObj('S' + v).style.cursor = 'pointer';
	getObj('S' + v).style.backgroundColor = BGCOLOR_S
}

function NewSkill(Statty, sv, sv2, bonus, mv, ar, pb, Color, perc, mx, a) {
	this.sv = sv;
	this.mv = mv;
	this.s = Statty;
	this.bv = bonus;
	this.sv2 = sv2;
	this.ar = ar;
	this.pb = pb;
	this.perc = perc;
	this.mx = mx;
	this.a = a;
}

function DCR(stuff) {
	window.location.replace('fhsublevel.asp?STAT=' + stuff.s);
}

function NewItem(p, n, s, l, v, ml, pp) {
	this.p = (p == 'q.gif' ? BPath : window.top.FHIP + pp + '/') + '' + (p != '' ? p : 'na.gif');
	this.n = n;
	this.s = s;
	this.l = l;
	this.v = v;
	this.ml = ml;
	this.pp = pp;
}

function AMI(p, n, s, l, v, ml, pp) {
	var tmppath = window.top.FHIP + pp + '/';

	if (Items[MIC] == null) {
		Items[MIC] = new Array();
	}
	Items[MIC] = new NewItem(p, n, s, l, v, ml, pp);

	document.write('<div style="float: left; width: 40px; height: 40px; padding: 1px; margin: 1px;" id="I' + MIC + '" title="' + n + '" onclick="XI(' + MIC + ');" onmouseover="XIC(' + MIC + ');" onmouseout="XO(this);"  align=center><img width=40 height=40 src="' + (p == 'q.gif' ? BPath : tmppath) + '' + (p != '' ? p : 'na.gif') + '"></div>')
	MIC = MIC + 1;
}

function XO(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function XI(v) {
	if (window.top.DoingStuff == 0) {
		window.top.DoingStuff = 1;
		window.location.replace('fhwuse.asp?CharsAt=' + Items[v].v + '&PetID=' + CharsAt);
	}
}

function XIC(v) {
	if (window.top.DoingStuff == 0) {
		getObj('I' + v).style.cursor = 'pointer';
		getObj('I' + v).style.backgroundColor = BGCOLOR_S
		window.top.InfoTip(Items[v].p, '<b>' + Items[v].n + '</b></font><br>This item is on the ground at this location. Click on it to have the pet Interact with it.' + (Items[v].ml > 0 ? '<br>Level: ' + Items[v].ml + ' (' + (Items[v].ml * 5) + ')' : ''));
	} else {
	}
}

function PCU(v) {
	window.top.InfoTip('' + IPath + PetSkills[v].p, '<b>' + PetSkills[v].s + '</b><br>Value: ' + PetSkills[v].sv + '');
	getObj('PS' + v).style.cursor = 'pointer';
	getObj('PS' + v).style.backgroundColor = BGCOLOR_S
}

function ACUS(Statty, sv, v, PictureID) {
	var Color = LITE;

	if (PetSkills[SC] == null) {
		PetSkills[SC] = new Array();
	}
	PetSkills[SC] = new PetSkill(Statty, sv, v, PictureID, Color);

	document.write('<div width="142" height="42" style="padding: 1px; margin: 1px;float: left; " id="PS' + SC + '" title="' + Statty + '" onclick="DCU(' + SC + ')" onmouseover="PCU(' + SC + ');" onmouseout="RC(this);"><table cellpadding=1 cellspacing=1 class="weakcell"><tr><td><img width=40 height=40 src="' + IPath + PictureID + '"></td><td><b>' + Statty + '</b><br>Value: ' + sv + '</td></tr></table></div>');
	SC = SC + 1;
}

function PetSkill(Statty, sv, v, PictureID, Color) {
	this.v = v;
	this.s = Statty;
	this.sv = sv;
	this.c = Color;
	this.p = PictureID;
}


function AV(v, PictureID, VesselName, VesselFlagID, VesselFlagColor, VesselVictories, VesselLosses, Captain, CaptainPictureID) {
	var Color = LITE;
	//document.write('<tr width="255" v=' + v + ' p="' + PictureID + '" onclick="DC5(this)" onmouseover="PC5(this)" onmouseout="RC(this)"><td width=40 style=\'background-image: URL(https://lohcdn.com/game/v/' + PictureID+ '); background-repeat: no-repeat\'><table cellpadding=0 cellspacing=0><tr height=20><td colspan=2></td></tr><tr><td width=20></td><td bgcolor=\'' + VesselFlagColor + '\'><img src=\'game/flags/' + VesselFlagID+ '\' width=20 height=20></td></tr></table></td><td width=40><img src=\'game/r/' + CaptainPictureID + '\'></td><td width="205" style="color: ' + Color + '; padding-left: 5px;"><b>' + VesselName + '</b><br>Captain: ' + Captain + '<br>Victories: ' + VesselVictories + '&nbsp;Losses: ' + VesselLosses + '</td></tr>');

	if (Vessels[VC] == null) {
		Vessels[VC] = new Array();
	}
	Vessels[VC] = new Vessel(v, PictureID, VesselName, VesselFlagID, VesselFlagColor, VesselVictories, VesselLosses, Captain, CaptainPictureID, Color);

	document.write('<div width="42" height="42" style="padding: 1px; margin: 1px;float: left; " id="CI' + VC + '" onclick="DC5(' + VC + ')" onmouseover="PC5(' + VC + ');" onmouseout="RC(this);"><img width=40 height=40 src="https://lohcdn.com/game/v/' + PictureID + '"></div>');
	VC = VC + 1;
}


function Vessel(v, PictureID, VesselName, VesselFlagID, VesselFlagColor, VesselVictories, VesselLosses, Captain, CaptainPictureID, Color) {
	this.v = v;
	this.VesselName = VesselName;
	this.VesselFlagID = VesselFlagID;
	this.VesselFlagColor = VesselFlagColor;
	this.VesselVictories = VesselVictories;
	this.VesselLosses = VesselLosses;
	this.Captain = Captain;
	this.CaptainPictureID = CaptainPictureID;
	this.c = Color;
	this.p = PictureID;
}

function AR(v, PictureID, CharacterName, l) {
	var Color = LITE;
	if (Chars[CC] == null) {
		Chars[CC] = new Array();
	}
	Chars[CC] = new newChar(v, PictureID, CharacterName, l, Color);

	document.write('<div width="142" height="42" style="padding: 1px; margin: 1px;float: left; " id="CC' + CC + '" title="' + CharacterName + '" onclick="DC2(' + CC + ')" onmouseover="PC2(' + CC + ');" onmouseout="RC(this);"><table cellpadding=1 cellspacing=1 class="weakcell"><tr><td><img width=40 height=40 src="' + CPath + PictureID + '"></td><td><b>' + CharacterName + '</b><br>Level: ' + l + '</td></tr></table></div>');
	CC = CC + 1;

	//document.write('<tr width="255" l=' +  l+ ' v=' + v + ' p="' + PictureID + '" onclick="DC2(this)" onmouseover="PC2(this)" onmouseout="RC(this)"><td width=15><img src=\'' + CPath + PictureID+ '\'></td><td width="205" style="color: ' + Color + '; padding-left: 5px;"><b>' + CharacterName + '</b><br>Level: ' + l + '</td></tr>');
}

function newChar(v, PictureID, CharacterName, l, Color) {
	this.v = v;
	this.CharacterName = CharacterName;
	this.l = l;
	this.c = Color;
	this.p = PictureID;
}


function AFV(PictureID, CharacterName, Color, fv, fb) {
	Color = LITE;
	document.write('<tr width="255"><td><img src=\'https://lohcdn.com/images/' + PictureID + '\' alt=\'' + CharacterName + '\'></td><td width="205" style="color: ' + Color + '; padding-left: 5px; background-color: ' + BGCOLOR_S + '" valign=top>' + CharacterName + '<br>Faction: <b>' + fv + '</b>' + (fb > 0 ? '<br>This Challenge: <i>' + fb + '</i>' : '') + '</td></tr>');
}

function AI(PictureID, CharacterName, bt) {
	var Color = LITE;
	if (PictureID == '' || PictureID == '0') { PictureID = 'na.gif' }

	if (CharItems[IC] == null) {
		CharItems[IC] = new Array();
	}
	CharItems[IC] = new CharItem(PictureID, CharacterName, bt, Color);

	document.write('<div width="42" height="42" style="padding: 1px; margin: 1px;float: left; " id="CI' + IC + '" onclick="DC3(' + IC + ')" onmouseover="PC4(' + IC + ');" onmouseout="RC(this);"><img width=40 height=40 src="' + IPath + PictureID + '"></div>');
	IC = IC + 1;
}

function CharItem(PictureID, CharacterName, bt, Color) {
	this.c = Color;
	this.v = bt;
	this.t = CharacterName;
	this.p = PictureID;
}

function GoP(p, pagebox) {
	if (pagebox == null) {
		pagebox = 'Pages';
	}
	if (pagebox == 'Pages') {
		window.location.replace('?P=' + p + '&A=' + AA + '&CharsAt=' + CharsAt);
	} else {
		window.location.replace('?P2=' + p + '&A=' + AA + '&CharsAt=' + CharsAt + '&P=' + PageNo);
	}
}

function PC4(v) {
	window.top.InfoTip('' + IPath + CharItems[v].p, '<b>' + CharItems[v].t + '</b>');
	getObj('CI' + v).style.cursor = 'pointer';
	getObj('CI' + v).style.backgroundColor = BGCOLOR_S
}

function DC2(v) {
	window.location.replace('fhstat2.asp?CharsAt=' + Chars[v].v + '&A=' + AA);
}

function DC5(v) {
	window.location.replace('fhinspect.asp?CharsAt=' + Vessels[v].v + '&A=' + AA);
}

function DC3(v) {
	window.frames['ResultsOfit'].location.replace('im4.asp?Test=' + CharItems[v].v + '&Bonus=0&Material=')
}

function RC(stuff) {
	window.top.hideTip();
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function PC2(v) {
	window.top.InfoTip('' + CPath + Chars[v].p, '<b>' + Chars[v].CharacterName + '</b><br>Level: ' + Chars[v].l);
	getObj('CC' + v).style.cursor = 'pointer';
	getObj('CC' + v).style.backgroundColor = BGCOLOR_S
}

function PC5(v) {
	window.top.InfoTip('https://lohcdn.com/game/v/' + Vessels[v].p, '<b>' + Vessels[v].VesselName + '</b>');
	getObj('CI' + v).style.cursor = 'pointer';
	getObj('CI' + v).style.backgroundColor = BGCOLOR_S
}

function DCU(v) {
	window.location.replace('fhmake2.asp?SkillID=' + PetSkills[v].v + '&CharsAt=' + CharsAt)
}

function DC(stuff) {
}

function SPages(Count, CurPage) {
	var strTest = '';
	var v = 0;
	var tn = '';

	var i = 0;
	for (i = 1; i <= Count; i++) {
		v = v + 1;

		if (Count > 10 && (i == 2 || i == 3)) {
		} else {
			var tn = TabName(i);
			strTest += (i == CurPage ? "<td class=\"btn btnhov\" style=\"width: " + Math.round(tn.length * 8) + "px; border: 1px dotted gold\">" : "<td class=\"btn\" style=\"width: " + Math.round(tn.length * 8) + "px;\" onmouseover=\"this.className = 'btn btnhov'\" onmouseout=\"this.className = 'btn'\" onclick=\"GoP(" + i + ")\">") + tn + "</td>";
		}
		if (v >= 20) {
			strTest += "</tr><tr>";
			v = 0;
		}
	}
	if (Count == 0) {
		strTest += "<td style=\"width: 60px;\" class=\"btn\" onmouseover=\"this.className = 'btn btnhov'\" onmouseout=\"this.className = 'btn'\">Info</td>";
	}

	getObj('Pages').innerHTML = "<table class=\"weakercell\"><tr>" + strTest + "</tr></table>";
}

function TabName(i) {
	return (i == 1 ? "Info" : (i == 2 ? "Social" : (i == 3 ? "Trophies" : (i == 4 ? "Other" : (i == 5 ? "Pets" : (i == 6 ? "Factions" : (i == 7 ? "Skills" : (i == 9 ? "History" : (i == 11 ? "Control" : (i == 12 ? "Status" : (i == 10 ? "Pirate" : "Equipment")))))))))))
}

function SendLinkC(lvalue, lpp, ln, lc) {
	window.top.sendRequest('fhlink.asp?Type=C&CharsAt=' + lvalue + '&Name=' + ln + '&c=' + encodeURIComponent(lc) + '&l1=r&l2=' + lpp);
}

function AvT(tid, tin, tip, ot, ts) {
	var Color = LITE;
	document.write('<tr style="color:' + Color + '"><td width="40"><img src="https://lohcdn.com/game/i/' + tip + '"></td><td width="260" valign=top><b>' + tin + '</b><br><font id=tmagenta>' + ot + '</font></td><td>Rank ' + ts + '</td></tr>');
}