var PageNo = PageNo;
var MT = MT;
var AccountID = AccountID;
var Processing = 0;
var LastTab = 0;
var QCount = 1;

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(z, Itty, va, vat) {
	var Color = 'yellow';
	var sel1 = '';
	var sel2 = '';
	var sel3 = '';
	var sel4 = '';
	var sel5 = '';
	if (va == 3 || va == -1) {
		sel3 = 'checked';
	}
	if (va == 1) {
		sel1 = 'checked';
	}
	if (va == 2) {
		sel2 = 'checked';
	}
	if (va == 4) {
		sel4 = 'checked';
	}
	if (va == 5) {
		sel5 = 'checked';
	}
	document.write('<tr width="100%"><td width="100%" style="padding-left: 5px" class="specialcell"><b style="color: ' + Color + ';">' + Itty + '</b></td></tr><tr><td class=\'weakercell\'><input name=Q' + QCount + ' value=' + z + ' type=hidden>' + (va == -1 ? (vat == 0 ? 'Excellent <input type=radio id=\'QAr' + QCount + '\' name=\'QAr' + QCount + '\' value=\'5\' ' + sel5 + '> Good <input type=radio id=\'QAr' + QCount + '\' name=\'QAr' + QCount + '\' value=\'4\' ' + sel4 + '> No Opinion <input type=radio id=\'QAr' + QCount + '\' name=\'QAr' + QCount + '\' value=\'3\' ' + sel3 + '> Not Good <input type=radio id=\'QAr' + QCount + '\' name=\'QAr' + QCount + '\' value=\'2\' ' + sel2 + '> Terrible <input type=radio id=\'QAr' + QCount + '\' name=\'QAr' + QCount + '\' value=\'1\' ' + sel1 + '>' : (vat == 1 ? 'Very Satisfied <input type=radio id=\'QAr' + QCount + '\' name=\'QAr' + QCount + '\' value=\'5\' ' + sel5 + '> Satisfied <input type=radio id=\'QAr' + QCount + '\' name=\'QAr' + QCount + '\' value=\'4\' ' + sel4 + '> No Opinion <input type=radio id=\'QAr' + QCount + '\' name=\'QAr' + QCount + '\' value=\'3\' ' + sel3 + '> Un-satisfied <input type=radio id=\'QAr' + QCount + '\' name=\'QAr' + QCount + '\' value=\'2\' ' + sel2 + '> Very un-satisfied <input type=radio id=\'QAr' + QCount + '\' name=\'QAr' + QCount + '\' value=\'1\' ' + sel1 + '>' : '')) : 'Answered ' + va) + '</td></tr>');
	QCount = QCount + 1;
}

function Finished() {
	document.write('<tr width="100%"><td width="100%" class="weakcell">Thank you for completing the survey!<br><br>You may now close this window.</td></tr>');
}

function DrawHeaders(hn) {
	return "<table cellpadding=1 cellspacing=1 border=0 height='25px'><tr><td width=240 class=title>" + hn + "</td><td valign=bottom></td></tr></table>";
}

function ShowTab(tabno) {
	ShowTab2(tabno, MT);
}

function DrawFooters(tp) {
	var strTest = '';
	strTest = "<td valign=bottom></td><td style='background-image: URL(https://lohcdn.com/game/pirate/piratetab.png); background-position: bottom; background-color: transparent; width:100px' align=center><a class='tab' href=\"javascript:window.close();\">Cancel</a></td><td width=100>&nbsp;</td><td style='background-image: URL(https://lohcdn.com/game/pirate/piratetab.png); background-position: bottom; background-color: transparent; width:100px' align=center><a class='tab' href=\"javascript:getObj(\'p\').value = " + (PageNo + 1) + "; getObj(\'questions\').submit();\">" + (PageNo < tp ? "Next" : "Finish") + "</a></td>";
	return "<table cellpadding=1 cellspacing=1 border=0 height='25px'><tr><td width=140>&nbsp;</td>" + strTest + "<td valign=bottom></td></tr></table>";
}