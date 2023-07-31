var Menu = 0;
var counter = 0;
var Menus = new Array();
var SPath = window.top.FHIP + 'pi/';
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function tgl(MenuNum) {
	if (getObj('Menu' + MenuNum).innerHTML == '') {
		DrawMenu(MenuNum);
	}
	else {
		getObj('Menu' + MenuNum).innerHTML = '';
	}
}

function DrawMenu(MenuNum, gs, gc) {
	var strout = '';
	var y = 0;
	for (y = 0; y < Menus[MenuNum].length; y++) {
		strout = strout + Menus[MenuNum][y];
	}
	getObj('Menu' + MenuNum).innerHTML = '<table cellpadding=1 cellspacing=1 class="weakercell"><tr height="42px;"><td id=Menu2 style="width: 140px; background-image: URL(\'' + SPath + gs + '\'); background-color: ' + gc + '; background-repeat: no-repeat; background-position: bottom"></td></tr>' + strout + '</table>';
}

function AMH(Named, PictureURL, URL) {
	Menus[Menu][counter] = new Array();
	Menus[Menu][counter] = "<tr><td class=\"navborderx\" style=\"" + strButtonx + ";height: 12px; color: gold; padding-left: 5px;width: 140px;\"  " + (URL != "" ? "onclick=\"window.Interface.location.replace('" + URL + "')\"" : "") + "><small>" + Named + "</small></td></tr>";
	counter = counter + 1;
}

function AM(URL, Named, PictureURL) {
	Menus[Menu][counter] = new Array();
	Menus[Menu][counter] = "<tr><td style=\"" + strButtonx + "width: 140px;\" " + strClicksns + " onclick=\"window.Interface.location.replace('" + URL + "')\">&nbsp;&nbsp;" + Named + "</td></tr>";
	counter = counter + 1;
}

function DC(stuff) {
	if (stuff.v == 0) {
		window.location.replace(stuff.d + (stuff.d.indexOf('?') == -1 ? '' : ''))
	} else {
		window.Interface.location.replace(stuff.d + (stuff.d.indexOf('?') == -1 ? '' : ''))
	}
}
