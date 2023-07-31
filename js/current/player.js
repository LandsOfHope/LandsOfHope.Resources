var PageNo = PageNo;
var CharsAt = CharsAt;
var FHIPPER = "https://lohcdn.com/game/";
var CPath = FHIPPER + "r/"
var IPath = FHIPPER + "i/"
var BPath = FHIPPER + "b/"

function PercentBox(PercentValue, Color, caption) {
	if (caption == '') {
		caption = PercentValue + '%';
	}
	document.write('<div style="width: 100px; height: 15px; position: fixed; background: URL(https://lohcdn.com/images/black.gif) repeat-x"><div style="width: ' + PercentValue + 'px;height: 15px; position: static; background: URL(https://lohcdn.com/images/' + Color + '.gif) repeat-x"><div class=perc style="position: absolute; width: 100px">' + caption + '</div></div></div>');
}

function PercentBoxS(pwidth, PercentValue, Color, caption) {
	if (caption == '') {
		caption = PercentValue + '%';
	}
	document.write('<div style="width: ' + pwidth + 'px; height: 15px; position: fixed; background: URL(https://lohcdn.com/images/black.gif) repeat-x"><div style="width: ' + ((pwidth / 100) * PercentValue) + 'px;height: 15px; position: static; background: URL(https://lohcdn.com/images/' + Color + '.gif) repeat-x"><div class=perc style="position: absolute; width:' + pwidth + 'px">' + caption + '</div></div></div>');
}

function DrawHeaders(hn, pc) {
	var strTest = '';
	var v = 0;
	var tn = '';
	for (i = 1; i <= 3; i++) {
		v = v + 1;

		var tn = TabName(i);
		strTest += ("<td valign=bottom></td><td style='background-image: URL(https://lohcdn.com/game/pirate/piratetab.png); background-position: bottom; background-color: transparent; width:25px'><a class='tab' href='javascript:GoP(" + i + ");'>" + tn + "</a></td>")
		if (v >= 20) {
			strTest += "</tr><tr>";
			v = 0;
		}
	}
	return "<table cellpadding=1 cellspacing=1 border=0 height='25px'><tr><td width=240 class=title>" + hn + "</td>" + strTest + "<td valign=bottom></td></tr></table>";
}

function DrawFooters(vn, p) {
	var strTest = '';
	strTest = "<td valign=bottom></td><td style='background-image: URL(https://lohcdn.com/game/pirate/piratetab.png); background-position: bottom; background-color: transparent; width:25px'><a class='tab' href=\"javascript: window.close();\" title=\"Close this window\">Close</a></td>";
	return "<table cellpadding=1 cellspacing=1 border=0 height='25px'><tr><td width=240>&nbsp;</td>" + strTest + "<td valign=bottom></td></tr></table>";
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '&C=' + CharsAt);
}

function TabName(i) {
	return (i == 1 ? "Info" : (i == 2 ? "Equipment" : (i == 3 ? "Other" : "Unknown")))
}
