var DoingStuff = 0;
var IC = 0;
var CharsAt = CharsAt;
var PageNo = PageNo;
var SC = 0;
var AA = AA;
var Monster = Monster;

var FHIPPER = "https://lohcdn.com/game/";
var CPath = FHIPPER + "r/"
var IPath = FHIPPER + "i/"
var BPath = FHIPPER + "b/"

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

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

function DrawHeaders(hn, pc) {
	var strTest = '';
	var v = 0;
	var tn = '';
	var i = 0;
	for (i = 1; i <= 3; i++) {
		v = v + 1;

		var tn = TabName(i);
		strTest += ("<td valign=bottom></td><td style='background-image: URL(https://lohcdn.com/game/pirate/piratetab.png); background-position: bottom; background-color: transparent; width:100px' align=center><a class='tab' href='javascript:GoP(" + i + ");'>" + tn + "</a></td>")
		if (v >= 20) {
			strTest += "</tr><tr>";
			v = 0;
		}
	}
	return "<table cellpadding=1 cellspacing=1 border=0 height='25px'><tr><td width=240 class=title nowrap>" + hn + "</td>" + strTest + "<td valign=bottom></td></tr></table>";
}

function DrawFooters(vn, p) {
	var strTest = '';
	strTest = "<td valign=bottom></td><td style='background-image: URL(https://lohcdn.com/game/pirate/piratetab.png); background-position: bottom; background-color: transparent; width:100px' align=center><a class='tab' href=\"?Type=R&CharsAt=" + CharsAt + "&l2=" + p + "&name=" + vn + "\">Link</a></td>";
	return "<table cellpadding=1 cellspacing=1 border=0 height='25px'><tr><td width=240>&nbsp;</td>" + strTest + "<td valign=bottom></td></tr></table>";
}


function ACS2(Statty, sv, bonus, mx, a) {
	var Color = LITE;
	var perc = 100;
	perc = GetPerc(mx, sv)

	var pb = (a == 0 ? 'red' : (mx > 0 && sv >= mx ? 'gold' : 'green'));
	document.write('<tr width="300"><td width="115" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px" class="specialcell">' + Statty + '</td><td width=110>' + PercentBoxX(150, perc, pb, sv + (bonus != 0 ? ' (' + bonus + ')' : '') + (mx >= 0 ? '/' + mx : '')) + '</td></tr>');
}


function ACSI(LN, VHII, VIN, VIP) {
	var Color = LITE;
	var pb = (VHII == 0 ? 'red' : 'green');
	document.write('<tr width="300"><td width="115" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px" class="specialcell">' + LN + '</td><td width=110 class="specialcell" style="color: ' + pb + '">' + (VHII == 0 ? 'None' : '' + VIN) + '</td></tr>');
}

function ACSI2(VHII, VIN, VIP, VC, VV, VQ) {
	var Color = VC;
	document.write('<tr width="300"><td><img src="https://lohcdn.com/game/i/' + VIP + '" width=15 height=15></td><td width="170" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px" class="specialcell">' + (VQ + ' * ') + VIN + '</td><td>' + window.top.PSGM(VV) + '</td></tr>');
}


function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '&A=' + AA + '&CharsAt=' + CharsAt);
}

function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function TabName(i) {
	return (i == 1 ? "Info" : (i == 2 ? "Armaments" : (i == 3 ? "Cargo" : "Unknown")))
}

function PSGM(mmin) {
	return PSGMX(mmin, 0);
}

function PSGMX(mmin, moneyformat) {
	var harhar = mmin;
	var rt = 0;

	var m = Math.floor(harhar)
	rt = rt + (m)

	var strout = "";
	if (moneyformat == 0) {
		strout = "<table class=\"weakercell\" cellpadding=0 cellspacing=0 style=\"padding-left:0px; width: 150px\"><tr><td style=\"border: 1px inset " + BORDER1 + "; background-color: black;\" width=\"40\">" + addCommas(m) + "</td><td width=14><img src=\"game/pirate/c4.png\" title=\"Doubloons\"></td></tr></table>";
	} else {
		strout = "" + (m > 0 ? "" + addCommas(m) + "<img src=\"game/pirate/c4.png\" title=\"Doubloons\">" : "");
	}
	return strout;
}

function addCommas(nStr) {
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}
