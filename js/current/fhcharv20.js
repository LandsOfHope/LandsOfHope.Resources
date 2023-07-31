var estring = estring;
var lngmax = lngmax;
var counteri = 0;
var IPath = 'https://lohcdn.com/game/r/';
var OPath = 'https://lohcdn.com/game/icons/';
var gVersion = gVersion;
var CharsArray = new Array(12)
var CurrentMapID = 0;
document.write('<script src="js/simpleformatting.js" language="JavaScript"></script>');

function FinishMap() {
	window.FH.document.getElementById('Loading').innerHTML = 'Loading Map ' + CurrentMapID;
}

/**
 * X-browser event handler attachment and detachment
 * TH: Switched first true to false per http://www.onlinetools.org/articles/unobtrusivejavascript/chapter4.html
 *
 * @argument obj - the object to attach event to
 * @argument evType - name of the event - DONT ADD "on", pass only "mouseover", etc
 * @argument fn - function to call
 */
function addEvent(obj, evType, fn) {
	if (obj.addEventListener) {
		obj.addEventListener(evType, fn, false);
		return true;
	} else if (obj.attachEvent) {
		var r = obj.attachEvent("on" + evType, fn);
		return r;
	} else {
		return false;
	}
}
function removeEvent(obj, evType, fn, useCapture) {
	if (obj.removeEventListener) {
		obj.removeEventListener(evType, fn, useCapture);
		return true;
	} else if (obj.detachEvent) {
		var r = obj.detachEvent("on" + evType, fn);
		return r;
	} else {
		alert("Handler could not be removed");
	}
}

/**
 * Code below taken from - http://www.evolt.org/article/document_body_doctype_switching_and_more/17/30655/
 *
 * Modified 4/22/04 to work with Opera/Moz (by webmaster at subimage dot com)
 *
 * Gets the full width/height because it's different for most browsers.
 */
function getViewportHeight() {
	if (window.innerHeight != window.undefined) return window.innerHeight;
	if (document.compatMode == 'CSS1Compat') return document.documentElement.clientHeight;
	if (document.body) return document.body.clientHeight;

	return window.undefined;
}
function getViewportWidth() {
	var offset = 17;
	var width = null;
	if (window.innerWidth != window.undefined) return window.innerWidth;
	if (document.compatMode == 'CSS1Compat') return document.documentElement.clientWidth;
	if (document.body) return document.body.clientWidth;
}

/**
 * Gets the real scroll top
 */
function getScrollTop() {
	if (self.pageYOffset) // all except Explorer
	{
		return self.pageYOffset;
	}
	else if (document.documentElement && document.documentElement.scrollTop)
	// Explorer 6 Strict
	{
		return document.documentElement.scrollTop;
	}
	else if (document.body) // all other Explorers
	{
		return document.body.scrollTop;
	}
}
function getScrollLeft() {
	if (self.pageXOffset) // all except Explorer
	{
		return self.pageXOffset;
	}
	else if (document.documentElement && document.documentElement.scrollLeft)
	// Explorer 6 Strict
	{
		return document.documentElement.scrollLeft;
	}
	else if (document.body) // all other Explorers
	{
		return document.body.scrollLeft;
	}
}


document.title = 'Lands of Hope: A New Dawn';

function DC3() {
	window.top.showPopWin("fhnewplayer.asp?P=22", 620, 400, PromptReturnx, null, "Create new character", 1);
}

function DC4() {
	window.top.showPopWin("fhnewpiratec.asp", 620, 400, PromptReturnx, null, "Create new pirate", 1);
}

function DC5() {
	window.top.showPopWin("fhnewplayer.asp?P=22&ProfessionID=362", 620, 400, PromptReturnx, null, "Create new Gladiator", 1);
}

function PromptReturnx(returnVal, postback) {
	if (returnVal != null) {
		window.location.replace('fhchar.asp?P=-1');
	}
}


function Login(id, name2) {
	id = GetSelectedID();
	name2 = GetSelectedName();

	if (getObj("Fully").checked == true) {
		window.open('fhnewlogin.asp?ID=' + id + '&Name2=' + name2 + '&anon=' + getObj("Anon").checked + '', 'FH', 'status=no,toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes')
	} else {
		window.location.replace('fhnewlogin.asp?ID=' + id + '&Name2=' + name2 + '&anon=' + getObj("Anon").checked);
	}
}

function Login2(id, name2) {
	id = GetSelectedID();
	name2 = GetSelectedName();
	if (getObj("Fully").checked == true) {
		window.open('fhnewlogin.asp?ID=' + id + '&SM=1&Name2=' + name2 + '&anon=' + getObj("Anon").checked + '', 'FH', 'status=no,toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes')
	} else {
		window.location.replace('fhnewlogin.asp?ID=' + id + '&SM=1&Name2=' + name2 + '&anon=' + getObj("Anon").checked + '');
	}

}


function createCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	} else {
		var expires = "";
	}
	document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function SetFully() {
	if (getObj('Fully').checked == true) {
		createCookie('Fully', 1, 356);
	} else {
		createCookie('Fully', 0, 356);
	}
}

function SetAnon() {
	if (getObj('Anon').checked == true) {
		createCookie('Anon', 1, 356);
	} else {
		createCookie('Anon', 0, 356);
	}
}

function LoadCheckBoxes() {
	var f = readCookie('Fully');
	var a = readCookie('Anon');
	if (f == null) {
		f = 1;
	}
	if (getObj('Fully') != null) {
		getObj('Fully').checked = (f == 1 ? true : false);
	}

	if (a == null) {
		a = 0;
	}
	if (getObj('Anon') != null) {
		getObj('Anon').checked = (a == 1 ? true : false);
	}
}

function eraseCookie(name) {
	createCookie(name, "", -1);
}

function DelChar() {
	var id = GetSelectedID();
	var name2 = GetSelectedName();
	window.location.replace('fhdel.asp?DelID=' + id + '&DelName=' + name2 + '');
}

function GetSelectedID() {
	var v = GetSelected();
	return CharsArray[v][0];
}

function GetSelectedName() {
	var v = GetSelected();
	return CharsArray[v][1];
}

function GetSelected() {
	var i = 0;
	var v = -1;
	for (i = 0; i < getObj('SelectedChar').length; i++) {
		if (getObj('SelectedChar')[i].checked == true) {
			v = i + 1;
		}
	}
	if (v == -1 && counteri > 0) {
		v = 1;
	}
	return v;
}

function AM(Value, PictureID, v, l, r, p, Named, dd, server, um, pvp, picon, mobile) {
	var s = 0;

	if (PictureID == '') { PictureID = 'na.gif' }
	document.write('<div style=\'width: 245px; float: left;\'><table><tr width=\'100%\' height=\'100px\'>');
	var Color = 'gold';

	counteri = counteri + 1
	CharsArray[counteri] = new Array(3);
	CharsArray[counteri][0] = Value;
	CharsArray[counteri][1] = Named;

	//Server: <b>' + server + '
	document.write('<td class=\'box2\' width=\'30\'><input type=\'radio\' value=\'' + counteri + '\' id=SelectedChar name=SelectedChar ' + (counteri == 1 ? 'checked' : '') + '></td><td width=\'200\' class=\'box3\'><table id=\'c' + Value + '\' width=\'200\' height=\'90\' cellpadding=1 cellspacing=1><tr><td width=200 align=right valign=top height=44 style=\'background-Image: URL("' + IPath + PictureID + '");background-Repeat: no-repeat; background-position: left\'><b style=\'Color: ' + Color + '\'>' + Named + '</b><br>' + p + '<br>' + um + ' message(s)</td></tr><tr><td><table width=\'100%\'><tr><td width=\'155px;\'>Level: ' + l + '</td><td rowspan=3 width=\'40\'><img src=\'https://lohcdn.com/game/pi/' + picon + '\'></td></tr><tr><td colspan=2>Last On: ' + dd + '</td></tr><tr><td colspan=2>' + (mobile != 0 ? '<b>Mobile</b>' : 'PvP: <b>' + (pvp != 0 ? 'Enabled' : 'Not Enabled')) + '</b></td></tr></table></td></tr><tr height=\'100%\'><td></td></tr></table></td>');
	document.write('</tr></table></div>');

}

function NewChar(x) {
	if (getObj('ControlButtons') == null) {
		window.location.replace('browsers.asp?A=1');
	} else {
		getObj('ControlButtons').innerHTML = '<img onclick="Login()" style=\'cursor: pointer;\' src="https://lohcdn.com/images/play2.png" title=\'Play the selected character\'><img onclick="Login2()" style=\'cursor: pointer;\' title=\'Play using safe mode - chat and some other features disabled by default.\' src="https://lohcdn.com/images/safemode.png"><img onclick="DelChar();" style=\'cursor: pointer;\' src="https://lohcdn.com/images/delete.png">';
		if (x > 0) {
			getObj('Special').innerHTML = '<table width="280"><tr><td colspan=4>' + x + ' slots remaining</td></tr><tr><td><img onclick="DC3();" title=\'Create a new character\' style=\'cursor: pointer;\' src="https://lohcdn.com/images/newcharacter.png"></td><td><img  src="https://lohcdn.com/images/newgladiator.png" onclick="DC5();" title=\'Create a new Gladiator character\' style=\'cursor: pointer;\'></td>' + (estring.indexOf('P') != -1 ? '<td><img onclick="DC4();" title=\'Create a new pirate\' style=\'cursor: pointer;\' src="https://lohcdn.com/images/newpirate.png"></td>' : '') + '</tr></table>';
		}
	}
}

function NoChar(x) {
	if (getObj('ControlButtons') == null) {
		window.location.replace('browsers.asp?A=1');
	} else {
		getObj('ControlButtons').innerHTML = 'Welcome to Lands of Hope, to get started please click any of the New Character buttons above to make your first character and begin playing the game!';
		if (x > 0) {
			getObj('Special').innerHTML = '<table width="280"><tr><td colspan=4>' + x + ' slots remaining</td></tr><tr><td><img onclick="DC3();" title=\'Create a new character\' style=\'cursor: pointer;\' src="https://lohcdn.com/images/newcharacter.png"></td><td><img  src="https://lohcdn.com/images/newgladiator.png" onclick="DC5();" title=\'Create a new Gladiator character\' style=\'cursor: pointer;\'></td>' + (estring.indexOf('P') != -1 ? '<td><img onclick="DC4();" title=\'Create a new pirate\' style=\'cursor: pointer;\' src="https://lohcdn.com/images/newpirate.png"></td>' : '') + '</tr></table>';
		}
	}
}

function Fin() {
}

function PC(stuff) {
}

function RC(stuff) {
}