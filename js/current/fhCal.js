
var fixed = 0;
var PageNo = 1;
var IPath = window.top.FHIPI;
var Processing = 0;
var mm = mm;
var yy = yy;
var MinYear = 2005;
var MaxYear = 2020;
var DHOL = DHOL;
var week = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
var monthz = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
var monthdays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
var Dayz = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');
if (DHOL == 1) {
	AddHoliday(25, 12, 'Christmas Day', 0);
	AddHoliday(24, 12, 'Christmas Eve', 0);
	AddHoliday(1, 1, 'New Years Day', 0);
}

function AC(t, v, Itty, s, e, m, d, dur, g) {
	if (Dayz[d] == null) {
		Dayz[d] = new Array();
	}
	if (Dayz[d][0] == null) {
		Dayz[d][0] = new Array();
	}
	Dayz[d][0] = Math.round(Dayz[d][0]) + 1
	var ddd = Dayz[d][0]
	Dayz[d][ddd] = new Array();
	var PictureID = 'ky1.gif'
	if (t == 0 && g == 0) {
		var Color = 'gold'
		var PictureID = 'fl1.gif'
	} else if (g > 0) {
		var Color = '#6464FF'
		var PictureID = 'fl3.gif'
	} else {
		var Color = 'white'
		var PictureID = 'fl2.gif'
	}
	//t=' + t + ' s=' + s + ' g=' + g + ' e=' + e + ' m=' + m + ' d=' + d + ' v=' + v + '
	//onclick="DC5(' + v + ')" onmouseover="PC5(' + v + ')" onmouseout="RC(this)"   p="' + PictureID + '"
	Dayz[d][ddd] = '<tr width="250" ID="ZD' + v + '" class="weakercell"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px;">' + Itty + '</td><td>' + s + '</td><td>' + e + '</td></tr>';
	if (dur > 0) {
		var i = 0;
		for (i = 1; i <= dur; i++)
			AC(t, v, Itty, s, e, m, d + i, 0, g);
		{
		}
	}
}

function AddHoliday(d, m, n, u) {
	if (m == mm) {
		AC(0, 0, n, 'All Day', 'All Day', m, d, u, 0);
	}
}

function ShowCalendar(month, year) {
	var today = new Date(year, month, 1);
	var today2 = new Date();
	if (today2.getMonth() == month && today2.getFullYear() == year) {
		var tod = today2.getDate();
	} else {
		var tod = 0;
	}

	var dayN = today.getDate();
	var day = today.getDay();
	var days = monthdays[month];
	if (month == 1) {

		var yearx = today.getYear();
		if (yearx % 4 == 0) days = 29;
	}
	document.write("<table class='weakercell' valign=top cellspacing='0' cellpadding='0'>");
	document.write("<tr class='boldcell'>");
	for (var i = 0; i < 7; i++) {
		document.write("<td width='82' height='10' align=center halign=middle>");
		document.write("" + week[i] + "");
		document.write("</td>");
	}
	document.write("</tr>");
	var jumped = 0;
	var inserted = 1;
	var start = day - dayN % 7 + 1;

	if (start < 0) start += 7;
	var weeks = parseInt((start + days) / 7);
	if ((start + days) % 7 != 0) weeks++;
	for (var i = weeks; i > 0; i--) {
		document.write("<tr height=32>");
		for (var j = 7; j > 0; j--) {
			document.write("<td width=82 valign=top>");
			if (jumped < start || inserted > days) {
				jumped++;
			} else {
				document.write("<table width='100%' class='nav4' cellpadding=0 cellspacing=0><tr><td class='weakercell'><b>" + (tod != 0 && tod == inserted ? '<b>Today</b> (' + inserted + ')' : '' + inserted) + "</b></td></tr>" + DayNumber(inserted, j) + "</table>");
				inserted++;
			}
			document.write("</td>");
		}
		document.write("</tr>");
	}
	document.write("</table>");
}

function DayNotes(dd) {
	var strReturn = '';
	if (Dayz[dd] == null) {
		strReturn = '';
	} else {
		if (Dayz[dd][0] == null) {
			strReturn = '';
		} else {
			for (var j = 1; j <= Dayz[dd][0]; j++) {
				strReturn = strReturn + Dayz[dd][j];
			}
		}
	}

	if (mm == 7 && dd == 31 && yy > 2005) {
		//s=0 e=0 m=0 d=' + dd + ' v=0 p="fl3.gif" onclick="DC(this)" onmouseover="PC(this)" onmouseout="RC(this)" 
		strReturn = '<tr width="250" class="weakercell"><td width=15><img width=15 height=15 src="' + IPath + 'fl3.gif' + '"></td><td width="300" style="color: gold; padding-left: 5px">' + (yy - 2005) + ' yr Anniversay</td><td>N/A</td><td>N/A</td></tr>' + strReturn
	}

	return strReturn
}
function DayNumber(dd, jj) {
	var strReturn = '';
	if (Dayz[dd] == null) {
		strReturn = '';
	} else {
		if (Dayz[dd][0] == null) {
			strReturn = '';
		} else {
			//alert(Dayz[dd][0])
			strReturn = strReturn + '<tr height="16" valign="top"><td width="100%" j=' + jj + ' id="D' + dd + '" ondblclick="DDC(' + dd + ')" onclick="DC(' + dd + ')" onmouseover="PC(' + dd + ')" onmouseout="RC(this)"><b>' + Dayz[dd][0] + '</b> events</td></tr>';
		}
	}
	if (strReturn == '') {
		strReturn = strReturn + '<tr height="16"><td width="100%" j=' + jj + ' id="D' + dd + '" ondblclick="DDC(' + dd + ')" onclick="DC(' + dd + ')" onmouseover="PC(' + dd + ')" onmouseout="RC(this)">&nbsp;</td></tr>';
	}
	return strReturn
}

function GoP(PageNo) {
	window.location.replace('?y=' + yy + '&m=' + PageNo + '');
}

function Goy(PageNo) {
	window.location.replace('?y=' + PageNo + '&m=' + mm + '');
}

function DDC(stuff) {
	window.location.replace('fhcal2.asp?y=' + yy + '&m=' + mm + '&d=' + stuff);
}

function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function PC(v) {
	if (fixed == 0) {
		getObj('Info').innerHTML = '<table>' + DayNotes(v) + '</table>';
		getObj('D' + v).style.cursor = 'pointer';
		getObj('D' + v).style.backgroundColor = BGCOLOR_S
	}
}

function DC(v) {
	if (fixed == 0) {
		fixed = 1;
	} else {
		fixed = 0;
	}
	getObj('Info').innerHTML = '<table>' + DayNotes(v) + '</table>';
}

function DrawButtons() {
	var Count = 12;
	var CurPage = mm;
	var strTest = '';
	var v = 0;
	var i = 0;
	for (i = 1; i <= Count; i++) {
		v = v + 1;

		strTest += '<td class="btn" ' + (CurPage != i ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:50" onclick="GoP(' + i + ')"' : ' style="width:50; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold;"') + '>' + monthz[i - 1] + '</td>';
	}
	var strTest2 = '';
	v = 0;
	CurPage = yy;
	var yy2 = yy;
	if (yy - 2 < MinYear) { yy2 = MinYear + 2 }
	if (yy + 2 > MaxYear) { yy2 = MaxYear - 2 }
	for (i = yy2 - 2; i < yy2 + 2; i++) {
		v = v + 1;

		strTest2 += '<td class="btn" ' + (CurPage != i ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:50" onclick="Goy(' + i + ')"' : ' style="width:50; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '>' + i + '</td>';
	}
	// Adr2('window.location.replace("?y=' + yy + '&m=' + (mm - 1) + '")', 'Previous Month', '<') +
	// + Adr2('window.location.replace("?y=' + yy + '&m=' + (mm + 1) + '")', 'Next Month', '>')
	var strButs = Adr2('window.location.replace("?")', 'Current Month', 'N');
	document.write('<table><tr><td>' + strButs + '</td><td class=\'weakercell\'>Month: </td>' + strTest + '<td class=\'weakercell\'>Year: </td>' + strTest2 + '</tr></table>');
}
