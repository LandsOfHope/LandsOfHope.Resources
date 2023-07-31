
var BCCC = 0;

function Cl(SpellID) {
if (SpellID > 0) {
	spellconfirm('Are you sure you wish to Cancel this spell?', -SpellID, 'Cancel Spell', '', 'Yes', 'No');
} else {
	window.top.Interface.location.replace('' + (SpellID == -4 ? 'fh.asp?Redraw=1&BuildingID=1977' : (SpellID == -2 ? 'fh.asp?Redraw=1&BuildingID=838' : (SpellID ==-1 ? 'fhaSpells.asp' : (SpellID ==-3 ? 'fhstat.asp?Type=AA' : '')))));
}
return false;
}

function ml(SpellID) {
window.top.Interface.location.replace('fhmess.asp?ID=-' + SpellID)
}


function spellconfirm(message, pb, title, icon, c1, c2) {
	if (title == undefined) {
		title = '';
	}
	if (icon == undefined) {
		icon = '';
	}
	if (c1 == undefined) {
		c1 = 'OK';
	}
	if (c2 == undefined) {
		c2 = 'Cancel';
	}
	window.top.showPopWin("confirm.asp?message=" + message + "&title=" + title + "&c1=" + c1 + "&c2=" + c2 + "&icon=" + icon, 350, 130, SpellPromptReturn, null, title, pb);
}

function SpellPromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb < 0) {
			window.top.Ninja.location.replace('fh.asp?SpellID=' + pb + '');
		}
	}
}