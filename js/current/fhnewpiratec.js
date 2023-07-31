var lastp = -1;
var lastp3 = '';
var lasttab = 1;
var pc = 0;
var Toggle = T;
var Shop = 0;
var counter = 0;
var RaceID;
var p2 = '';
var Profs = new Array();
var PageNo = PageNo;
var IPath = 'https://lohcdn.com/game/r/';
var returnVal = null;

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function TabName(i) {
	return (i == 1 ? "Step 1" : (i == 2 ? "Step 2" : (i == 3 ? "Step 3" : "Finish")))
}

function GoP(PageNo) {
	getObj('P').value = PageNo;
	getObj('NewForm').submit();
}

function DrawHeaders(hn, pc) {
	var strTest = '';
	var v = 0;
	var tn = '';
	var i;
	for (i = 1; i <= 4; i++) {
		v = v + 1;

		var tn = TabName(i);
		strTest += ("<td valign=bottom></td><td style='background-image: URL(https://lohcdn.com/game/pirate/piratetab.png); background-position: bottom; background-color: transparent; width:100px;' align=center><a class='tab' href='javascript:GoP(" + i + ");' style='" + (i < PageNo ? "color: #66ff66;" : (i == PageNo ? "color: yellow;" : "")) + "' title='" + tn + "'>" + tn + "</a></td>")
		if (v >= 20) {
			strTest += "</tr><tr>";
			v = 0;
		}
	}
	return "<table cellpadding=1 cellspacing=1 border=0 height='25px'><tr><td width=160 class=title>" + hn + "</td>" + strTest + "<td valign=bottom></td></tr></table>";
}

function updatecn() {
	getObj('CharacterName').value = getObj('CN2').value
	DC2();

}

function updatevn() {
	getObj('VesselName').value = getObj('VN2').value
	DC2();

}

function DrawFooters(vn, p) {
	var strTest = '';
	strTest = "<td valign=bottom></td><td style='background-image: URL(https://lohcdn.com/game/pirate/piratetab.png); background-position: bottom; background-color: transparent; width:100px' align=center><a class='tab' href=\"javascript: window.top.hidePopWin(true);\" title=\"Close this window\">Close</a></td>";
	return "<table cellpadding=1 cellspacing=1 border=0 height='25px'><tr><td width=240>&nbsp;</td>" + strTest + "<td valign=bottom></td></tr></table>";
}

function AM(IID, PictureID, Itty, p2p, pt) {
	var Color = 'white';
	var c2 = 'black';
	if (IID == getObj('ProfessionID').value) {
		lastp3 = Itty;
	}

	Profs[counter] = new Array(4);
	Profs[counter][0] = IID;
	Profs[counter][1] = PictureID;
	Profs[counter][2] = Itty;
	Profs[counter][3] = p2p;
	Profs[counter][4] = pt;

	counter = counter + 1;
}

function DC(stuff) {
	lastp = stuff;
	getObj('FlagColor').value = '#000000';
	getObj('thepic').value = '';
	getObj('ProfessionID').value = Profs[stuff][0];
	lastp3 = Profs[stuff][2];
	//	DC2()
	GoP(2);
}

function DC2() {
	if (getObj('Results') != undefined) {
		getObj('PreviewPic').innerHTML = (getObj('thepic').value == '' ? '' : '<img src=\'' + IPath + getObj('thepic').value + '\' onerror=\'this.src="https://lohcdn.com/na.gif"\'>');
		getObj('PreviewPic').style.backgroundColor = getObj('FlagColor').value;
		getObj('Results').innerHTML = '<table class=\'specialcell\' cellpadding=1 cellspacing=1><tr><td colspan=3><b>Checklist</b></td></tr><tr><td><b>Step 1</b></td><td>Profession ' + (lastp3 != '' ? '' + lastp3 + '</td><td><img src="https://lohcdn.com/game/icons/tick.png" alt="Complete">' : '</td><td><img src="https://lohcdn.com/game/icons/cross.png" alt="Incomplete">') + '</td></tr><tr><td><b>Step 2</b></td><td>Sex ' + (getObj('Sex').value != '' ? '' + (getObj('Sex').value == 'M' ? 'Male' : 'Female') + '</td><td><img src="https://lohcdn.com/game/icons/tick.png" alt="Complete">' : '</td><td><img src="https://lohcdn.com/game/icons/cross.png" alt="Incomplete">') + '</td></tr><tr><td></td><td>Picture' + (getObj('thepic').value != '' ? '</td><td><img src="https://lohcdn.com/game/icons/tick.png" alt="Complete">' : '</td><td><img src="https://lohcdn.com/game/icons/cross.png" alt="Incomplete">') + '</td></tr><tr><tr><td></td><td>Character Name' + (getObj('CharacterName').value != '' ? '</td><td><img src="https://lohcdn.com/game/icons/tick.png" alt="Complete">' : '</td><td><img src="https://lohcdn.com/game/icons/cross.png" alt="Incomplete">') + '</td></tr><tr><td><b>Step 3</b></td><td>Vessel Name' + (getObj('VesselName').value != '' ? '</td><td><img src="https://lohcdn.com/game/icons/tick.png" alt="Complete">' : '</td><td><img src="https://lohcdn.com/game/icons/cross.png" alt="Incomplete">') + '</td></tr><tr><td></td><td>Bonus' + (getObj('Bonus').value != -1 ? '</td><td><img src="https://lohcdn.com/game/icons/tick.png" alt="Complete">' : '</td><td><img src="https://lohcdn.com/game/icons/cross.png" alt="Incomplete">') + '</td></tr><tr></table>';
		if (PageNo == 4) {
			if (getObj('Results').innerHTML.indexOf('cross.png') != -1) {
				//Failed
				getObj('Buttons').innerHTML = "";
				returnVal = null;
			} else {
				//Success
				getObj('Buttons').innerHTML = "Please click the button below to make your character and enter the Shrouded Isles!<br><table width=100><tr><td style='background-image: URL(https://lohcdn.com/game/pirate/piratetab.png); background-position: bottom; background-color: transparent; width:100px;' align=center><a class='tab' href='javascript:GoP(5);' style='color: gold'>Finish</a></td></tr></table>";
			}
		}
	}
}


function RC(stuff) {
	stuff.style.cursor = '';
	//stuff.className = 'btn';
}

function PC(stuff) {
	//window.top.InfoTip('', '' + stuff.i + '');
	stuff.style.cursor = 'pointer';
	//stuff.className = 'btnhov';
}

function DrawProfs() {
	var strout = '';
	var y = 0;
	for (y = 0; y < counter; y++) {
		strout = strout + '<td><table height=180><tr><td width=120 id="p' + y + '" onclick="DC(' + y + ')" onmouseover="PC(this)" onmouseout="RC(this)" style=\'color: white\' title=\'Pick a ' + Profs[y][2] + '\'><table><tr><td><img src=\'https://lohcdn.com/images/' + Profs[y][1] + '\' alt=\'Click to pick ' + Profs[y][2] + '\'></td><td><img src=\'https://lohcdn.com/game/icons/info.png\'><a href=\'pesd.asp?CharsAt=' + Profs[y][0] + '\' target=\'_new\'>Info</a></td></tr></table></td></tr><tr><td class=\'specialcell\'><div style=\'height: 130; overflow: auto\'>' + Profs[y][4] + '</div></td></tr></table></td>';
	}
	if (getObj('ProfBox') != undefined) {
		getObj('ProfBox').innerHTML = '<table width="100%" class=\'itemText\' valign=top><tr>' + strout + '</tr></table>';
		if (lastp >= 0) {
			getObj('p' + lastp).click();
		}
	}
}

function tgl(IID) {
	RaceID = 1;
	if (getObj('Sex').value == 'M') {
		p2 = 'M'
	} else {
		p2 = 'F'
	}
	DC2();
	DrawProfs();
}

function ShowRaces() {
	var i = 0;
	var v = 1;
	for (i = 0; i < getObj('Sexx').length; i++) {
		if (getObj('Sexx')[i].checked == true) {
			getObj('Sex').value = getObj('Sexx')[i].value;
			v = i + 1;
		}
	}

}

function ClickBonus() {
	var i = 0;
	var v = 1;
	for (i = 0; i < getObj('Bonusx').length; i++) {
		if (getObj('Bonusx')[i].checked == true) {
			getObj('Bonus').value = getObj('Bonusx')[i].value;
			v = i + 1;
		}
	}

	DC2();
}

function SetPicx(strPic) {
	getObj('thepic').value = strPic;
	DC2();
}

function ShowPics() {
	var i = 0;
	var v = 1;
	for (i = 0; i < getObj('Sexx').length; i++) {
		if (getObj('Sexx')[i].checked == true) {
			getObj('Sex').value = getObj('Sexx')[i].value;
			v = i + 1;
		}
	}

	var strout = '';
	var y = 0;
	var Sex = getObj('Sex').value;
	if (Sex == '') {
		strout = "<tr><td></td></tr>";
	} else {
		if (getObj('ProfessionID').value == 233) {
			if (Sex == 'M') {
				var RacePics = new Array('pirate7.gif', 'pirate8.gif', 'pirate3.gif', 'other4.gif', 'other5.gif', 'other6.gif');
			} else {
				var RacePics = new Array('pirate10.gif', 'pirate9.gif', 'pirate6.gif', 'other1.gif', 'other2.gif', 'other3.gif');
			}
		} else {
			if (Sex == 'M') {
				var RacePics = new Array('navy1.gif', 'navy2.gif', 'navy3.gif', 'other4.gif', 'other5.gif', 'other6.gif');
			} else {
				var RacePics = new Array('navy4.gif', 'navy5.gif', 'navy6.gif', 'other1.gif', 'other2.gif', 'other3.gif');
			}
		}

		for (y = 0; y < RacePics.length; y++) {
			var strPic = RacePics[y];
			if (y == 0) {
				strout = strout + "<tr>";
			}
			strout = strout + "<td onclick=\"SetPicx('" + strPic + "')\" " + strClicksns + " width=\"44\" align=center height=\"44\"><img src=\"" + IPath + strPic + "\" alt=\"Picture " + y + "\"></td>";
			if (y == 5) {
				strout = strout + "</tr>";
			}
		}
	}
	getObj('PictureBox').innerHTML = "<table>" + strout + "</table>";
}

function ShowFlagColors() {
	var strout = '';
	var y = 0;
	var Faction = getObj('ProfessionID').value;
	if (Faction == '') {
		strout = "<tr><td></td></tr>";
	} else {
		if (getObj('ProfessionID').value == 233) {
			var FacColors = new Array('#000000', '#330000', '#660000', '#990000', '#CC0000');
		} else {
			var FacColors = new Array('#000000', '#000099', '#330099', '#660099', '#990099');
		}

		for (y = 0; y < FacColors.length; y++) {
			var strPic = FacColors[y];
			if (y == 0) {
				strout = strout + "<tr>";
			}
			strout = strout + "<td onclick=\"SetFlagx('" + strPic + "')\" style=\"background-color: " + strPic + "; cursor: pointer\" width=\"22\" align=center height=\"22\" title=\"Flag Color " + strPic + "\"></td>";
			if (y == 10 || y == FacColors.length - 1) {
				strout = strout + "</tr>";
			}
		}
	}
	getObj('FlagBox').innerHTML = "<table>" + strout + "</table>";
}

function SetFlagx(strPic) {
	getObj('FlagColor').value = strPic;
	DC2();
}

function SetSex() {
	var i = 0;
	for (i = 0; i < getObj('Sexx').length; i++) {
		if (getObj('Sexx')[i].value == Sex) {
			getObj('Sexx')[i].checked = true;
		} else {
			getObj('Sexx')[i].checked = false;
		}
	}
}


function ShowRaces2() {
	ShowRaces();
	ShowPics();
	tgl(1);
}