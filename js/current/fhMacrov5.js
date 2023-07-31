var IC = 0;
var Infos = new Array();
var Level = Level;
var DefaultShop = 0;
var LID = 0;
var Shop = 0;
var counter = 0;
var panein = 0;
var a2 = 0;
var n2 = 0;
var MT = MT;
var MTS = MTS;
var amcount = 0;
var Equipping = '';
var lastslot = 0;
var IPath = window.top.FHIP
var filename = 'fhmacro.asp';
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function DS(ShopNum, Select) {
	panein = ShopNum;
	MT = panein;
	MTS = 0;
	window.frames["ResultsOfit"].location.replace('fhmacro3.asp?MT=' + ShopNum + '&MTS=' + Select);
}

function UpdateDesc(t) {
	lastslot = n2;
	prompt('Please enter the friendly caption for this shortcut ?', 1, '' + t);
}

function DeleteDesc(numin) {
	lastslot = n2;
	confirm('Delete shortcut from slot ' + (numin - 1) + '?', 2);
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			if (lastslot > 0) {
				if (pb == 1) {
					window.top.Interface.location.replace(filename + '?Slot=' + lastslot + '&ID=' + Infos[lastslot].x + '&a=' + a2 + '&Cap=' + returnVal + '&Type=' + panein + '');
				} else {
					window.top.Interface.location.replace(filename + '?Slot=' + lastslot + '&ID=0&a=2&Type=0');
				}
			}
		}
	}
}

function ChangeDesc(numin, actions, xx) {
	n2 = numin;
	a2 = actions;
	if (a2 == 0) {
		DS(MT, MTS);
	} else {
		DS(panein, 0);
	}
	var y = 0;
	var x = 0;
	for (y = 1; y < 21; y++) {
		getObj('Mac' + y).style.backgroundColor = '';
		getObj('Mac' + y).ob = '';
	}

	getObj('Mac' + numin).style.backgroundColor = 'gold';
	getObj('Mac' + numin).ob = 'gold';
}


function AH(ShopC, SkillGroup) {
	document.write("<td  class=\"btn\" onmouseover=\"this.className = 'btn btnhov';\" onmouseout=\"this.className = 'btn'\" style=\"width: 60px\" onclick=\"DS(" + ShopC + ",0)\">" + SkillGroup + "</td>");
}

function DrawHeaders() {
	document.write('<tr>');
	AH(0, 'Inventory');
	AH(1, 'Spells');
	AH(2, 'Actions');
	AH(3, 'Screens');
	AH(4, 'Travel');
	AH(5, 'Craft');
	AH(6, 'Pets');
	AH(7, 'Filters');
	document.write('</tr>');
}

function AM2(v, Named, Type, pp, Picture, x) {
	if (Named == '') { Named = '(Add New)' }
	var Picture2 = (Picture == '' || Picture == '0' ? 'na.gif' : Picture);
	if (Picture2.indexOf('.') == -1) {
		Picture2 = IPath + pp + '/' + Picture2 + '.gif'
	} else {
		Picture2 = IPath + pp + '/' + Picture2;
	}
	if (Picture2.indexOf('na.gif') != -1) {
		Picture2 = '';
	}

	if (amcount == 0) {
		document.write('<tr>');
	}
	if (Infos[v] == null) {
		Infos[v] = new Array();
	}
	Infos[v] = new newInfo(v, Named, Type, pp, Picture2, x);
	//x=' + x + ' type=' + Type + ' v=' + v+ ' t="' + Named +'" p="' + Picture2 + '"
	var Slot2 = v - 1;
	var charx = (Slot2 >= 10 ? String.fromCharCode(((Slot2 - 10) + 65)) : Slot2);
	//charx = (v - 1)
	document.write('<td class="menucell" id=Mac' + v + ' onclick="' + (Type > 0 ? 'panein= ' + Type + ';ChangeDesc(' + v + ', 1,' + x + ');' : 'ChangeDesc(' + v + ', 0, 0);') + 'DC(' + v + ');" title="' + (Type >= 0 ? 'Edit existing shortcut - ' : 'Set new shortcut') + Named + '" onmouseover="PC2(' + v + ')" onmouseout="RC2(' + v + ')" style="background-image: URL(' + Picture2 + '); background-position: bottom right; background-repeat: no-repeat; padding-left: 5px; width: 30px; height: 28px;">' + charx + '</td>');
	if (amcount == 9) {
		amcount = -1;
		document.write('</tr>');
	}

	amcount = amcount + 1
}

function newInfo(v, Named, Type, pp, Picture2, x) {
	this.x = x;
	this.t = Named;
	this.type = Type;
	this.v = v;
	this.p = Picture2;
	this.pp = pp;
}

function DC(v) {
	getObj('Stuff').innerHTML = '<table cellpadding=0 cellspacing=0 class=\'weakcell\' valign=top width=\'205\'><tr valign=top><td width=\'100%\' valign=top><b>' + Infos[v].t + '</b><br>Slot: ' + (Infos[v].v - 1) + ' of 19<br>' + (Infos[v].type >= 0 ? '<' + strClicky + ' onclick=\'UpdateDesc("' + Infos[v].t + '");\'>Update</button><' + strClicky + ' onclick=\'DeleteDesc(' + Infos[v].v + ');\'>Delete</button>' : '') + '<br></td></tr><tr><td colspan=2 height=\'100%\'></td></tr></table>'
}

function RC2(v) {
	getObj('Mac' + v).style.cursor = '';
	getObj('Mac' + v).style.backgroundColor = '';
}

function PC2(v) {
	window.top.InfoTip(Infos[v].p, 'Shortcut: ' + (Infos[v].v - 1) + '<br>' + Infos[v].t);
	getObj('Mac' + v).style.cursor = 'pointer';
	getObj('Mac' + v).style.backgroundColor = BGCOLOR_S
}