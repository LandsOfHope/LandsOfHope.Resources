var PageNo = PageNo;
var MT = MT;
var AccountID = AccountID;
var Processing = 0;
var LastTab = 0;
var QCount = 1;

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(z, Itty, rc, rp) {
	if (rp >= 90) {
		var Color = 'gold';
	} else if (rp >= 75) {
		var Color = 'yellow';
	} else if (rp >= 50) {
		var Color = 'orange';
	} else {
		var Color = 'red';
	}

	var ap1 = rp
	var ap1t = PercentBoxX(100, ap1, Color, rp + '%')

	document.write('<tr width="100%"><td width="100%" style="padding-left: 5px;" colspan=2 class="specialcell"><b style="color: ' + Color + ';">' + Itty + '</b></td></tr><tr><td class=\'weakercell\'>' + ap1t + '</td><td>Avg. from ' + rc + ' answers</td></tr>');
}

function DrawHeaders(hn) {
	return "<table cellpadding=1 cellspacing=1 border=0 height='25px'><tr><td width=240 class=title>" + hn + "</td><td valign=bottom></td></tr></table>";
}

function ShowTab(tabno) {
	ShowTab2(tabno, MT);
}

function DrawFooters(tp) {
	var strTest = '';
	strTest = "<td valign=bottom></td><td style='background-image: URL(https://lohcdn.com/game/pirate/piratetab.png); background-position: bottom; background-color: transparent; width:100px' align=center><a class='tab' href=\"javascript:window.close();\">Cancel</a></td><td width=100>&nbsp;</td><td style='background-image: URL(https://lohcdn.com/game/pirate/piratetab.png); background-position: bottom; background-color: transparent; width:100px' align=center><a class='tab' href=\"javascript:getObj(\'p\').value = " + (PageNo - 1) + "; getObj(\'questions\').submit();\"" + (PageNo > 1 ? "" : " disabled") + ">Previous</a></td><td style='background-image: URL(https://lohcdn.com/game/pirate/piratetab.png); background-position: bottom; background-color: transparent; width:100px' align=center><a class='tab' href=\"javascript:getObj(\'p\').value = " + (PageNo + 1) + "; getObj(\'questions\').submit();\"" + (PageNo < tp ? "" : " disabled") + ">Next</a></td>";
	return "<table cellpadding=1 cellspacing=1 border=0 height='25px'><tr><td width=140>&nbsp;</td>" + strTest + "<td valign=bottom></td></tr></table>";
}

function PercentBoxX(pwidth, PercentValue, Color, caption) {
	if (caption == '') {
		caption = PercentValue + '%';
	}
	return '<div style="width: ' + pwidth + 'px; height: 15px; position: relative; background: URL(https://lohcdn.com/images/black.gif) repeat-x"><div style="width: ' + ((pwidth / 100) * PercentValue) + 'px;height: 15px; position: static; background: URL(https://lohcdn.com/images/' + Color + '.gif) repeat-x"><div class=perc2 style="position: absolute; width:' + pwidth + 'px">' + caption + '</div></div></div>';
}