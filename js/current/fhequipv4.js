var ItemTypeID = ItemTypeID;
var bagname = bagname;
var MN = mn;
var Processing = 0;
var CharsAt = CharsAt;
var Level = Level;
var LID = 0;
var LastL = 7;
var Header = '';
var counter = 0;
var Locations = new Array();
var Pictures = new Array();
var Using2Hand = 0;
var Equipping = '';
var IPath = window.top.FHIPI;
var OPath = window.top.FHIPO;
var LPath = window.top.FHIPL;
var eqcolor1 = eqcolor1;
var eqcolor2 = eqcolor2;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function tgl(ShopNum) {
	if (Processing == 0) {
		Processing = 1;
		if (ShopNum == 8 && Using2Hand != 0) {
			ShopNum = 7;
		}
		LastL = ShopNum;
		window.frames['EquipItems'].location.replace('fhequipslot.asp?BagID=' + ItemTypeID + '&CharsAt=' + CharsAt + '&LocationID=' + ShopNum);

	} else {
		window.top.InfoTip('', '<font id=tred>Please wait for the screen to finish loading.</font>');
	}
}

function AH(ll, SkillGroup, Picture, Picture2, bi, x, y, pt, iid, iin, it) {
	LID = ll;
	counter = 0;
	var EBG = BGCOLOR_S;
	if (iid == 0) {
		EBG = eqcolor2;
	} else {
		EBG = eqcolor1;
	}
	if (it == 8 || it == 10) {
		Using2Hand = 1;
	}
	Header = Header + "<div onmouseover=\"PC(" + LID + ")\" id=\"Head" + LID + "\" title=\"" + SkillGroup + "\" onmouseout=\"RC(" + LID + ")\" onclick=\"tgl(" + LID + ")\" style=\"left: " + x + "px; top: " + y + "px;width: 20px; height: 20px; position: absolute; border: 2px ridge " + EBG + ";padding: 1px;\"><img width=\"20\" height=\"20\" src=\"" + (iid > 0 ? IPath + Picture2 : LPath + (Picture == "" || Picture == "0" ? "na.gif" : Picture)) + "\"></div>";

	if (Locations[LID] == null) {
		Locations[LID] = new Array();
	}
	Locations[LID] = new newLocation(EBG, ll, SkillGroup, Picture, Picture2, bi, x, y, pt, iid, iin, it);
}

function newLocation(EBG, ll, SkillGroup, Picture, Picture2, bi, x, y, pt, iid, iin, it) {
	this.c = EBG;
	this.l = ll;
	this.it = it;
	this.SkillGroup = SkillGroup;
	this.p = Picture2;
	this.p2 = Picture;
	this.bi = bi;
	this.x = x;
	this.y = y;
	this.pt = pt;
	this.iid = iid;
	this.iin = iin;
	this.t = '';
	this.ap = '';
	if (iid > 0) {
		this.t = '<b>' + iin + '</b><br>Equipped to: ' + SkillGroup;
		this.ap = Picture2;
	}
}

function ChangePT(l, t, p, ln, it) {
	getObj('Head' + l).style.borderColor = eqcolor1;
	getObj('Head' + l).innerHTML = "<img width=\"20\" height=\"20\" src=\"" + IPath + p + "\">";
	Locations[l].t = '<b>' + t + '</b><br>Equipped to: ' + ln;
	Locations[l].ap = '' + p;
	Processing = 0;
	if (l == 7 && (it == 8 || it == 10)) {
		Using2Hand = 1;
		RemovePT(8);
	} else if (l == 7 && Using2Hand != 0 && it != 8 && it != 10) {
		Using2Hand = 0;
		RemovePT(8);
	}
}

function RemovePT(l) {
	getObj('Head' + l).style.borderColor = eqcolor2;
	getObj('Head' + l).innerHTML = "<img width=\"20\" height=\"20\" src=\"" + LPath + Locations[l].p2 + "\">";
	Locations[l].t = '';
	Locations[l].ap = '';
	Processing = 0;
	if (l == 7 && Using2Hand != 0) {
		Using2Hand = 0;
		RemovePT(8);
	}
}

function AH2() {
	getObj("ragdoll").innerHTML = '' + Header + '';
	tgl(7);
}

function RC(v) {
	getObj('Head' + v).style.cursor = '';
	getObj('Head' + v).style.backgroundColor = '';
	window.top.hideTip();
}

function PC(v) {
	var strdiv = Locations[v].t;
	if (strdiv != '') {
		window.top.InfoTip('' + IPath + Locations[v].ap, strdiv);
	} else {
		window.top.InfoTip('' + Locations[v].ap, '<b>' + Locations[v].SkillGroup + '</b><br>Nothing Equipped');
	}
	getObj('Head' + v).style.cursor = 'pointer';
	getObj('Head' + v).style.backgroundColor = BGCOLOR_S
}

function FBI(v, n) {
	if (ItemTypeID != v) {
		if (Processing == 0) {
			getObj('Bag' + ItemTypeID).style.backgroundColor = getObj('Bag' + ItemTypeID).style.color;
			ItemTypeID = v;
			bagname = n;
			getObj('Bag' + v).style.backgroundColor = 'gold';
			getObj('thetitle').innerHTML = mn + ' - ' + bagname;
			window.frames['EquipItems'].location.replace('fhequipslot.asp?BagID=' + ItemTypeID + '&CharsAt=' + CharsAt + '&LocationID=' + LastL);
			Processing = 1;
		} else {
			window.top.InfoTip('', '<font id=tred>Please wait for the screen to finish loading.</font>');
		}
	} else {
		window.top.InfoTip('', '<font id=tred>' + n + ' is already the active bag.</font>');
	}
}

function AdC(n, Names, Color, PictureID) {
	if (PictureID == '') { PictureID = 'bg3.gif' };
	var Titles2 = 'Open your ' + Names;
	//style="filter: ' + (n == ItemTypeID ? 'Gray()' : '') + '"
	document.write('<tr><td style=\'cursor: pointer\'><table align=center cellspacing=0 class="weakercell" cellpadding=1><tr><td title="' + Titles2 + '"  id=Bag' + n + ' style="width: 30px; padding: 2px; color: ' + Color + '; background-color:' + (n == ItemTypeID ? 'gold' : Color) + '" onmouseover="this.style.backgroundColor=\'' + BGCOLOR_S + '\';window.top.InfoTip(\'' + IPath + PictureID + '\', \'<b>' + Names + '</b><br>' + Titles2 + '\');" onmouseout="this.style.backgroundColor=(' + n + ' != ItemTypeID ? this.style.color : \'gold\');"><img width=30 height=30 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '" onclick="FBI(' + n + ',\'' + Names + '\');"></td></tr></table></td></tr>');
}