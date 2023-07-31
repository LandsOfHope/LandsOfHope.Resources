
var Skill = Skill;
var IPath = window.top.FHIPM;
var h2 = 0;
var p2 = 'na.gif';
var Countt = 0;
var Processing = 0;

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(d, ItemName, ItemID, f, u, h, CharacterID, n, bp) {
	var p = 'na.gif';
	var Color = 'white'
	document.write("<input name=h id=h size=5 type=hidden maxlength=5 id=h value='" + h + "'>")
	document.write("<tr><td colspan=2 class='weakcell'><b>" + ItemName + "</b><br>" + (h > 0 ? "Detect Hidden: " + h : "Not Hidden") + "</td></tr>");
	if (bp != 0) {
		document.write("<tr><td colspan=2 id=Butt>" + (Skill > 0 && Skill >= h && h > 0 ? "<" + strClicky + " title=\"Reveal this room.\" id=h1 onclick=\"SetStealth();\">" + (h > 0 ? Math.abs(h) : 0) + "</button><br>" : (h == 0 ? "This room can not be revealed as its not hidden!" : "To reveal this room you need " + h + " detect hidden skill")) + "</td></tr>");
	} else {
		document.write("<tr><td colspan=2 id=Butt>The entrance room can not be stealthed or revealed.</td></tr>");
	}
	document.write('<tr><td></td></tr>');

	h2 = h;
	p2 = (p == '' ? 'na.gif' : p);
}

function SetStealth() {
	if (Processing == 0) {
		getObj('h').value = 0;
		h2 = 0;
		Processing = 1;
		ChangeHidden(0);
		getObj('stufff').submit();
	}
}

function ChangeHidden(newh) {
	var xx = window.parent.mx;
	var yy = window.parent.my;
	window.parent.SetHidden(xx, yy, newh, 0, 0);
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}

function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function PC(stuff) {
	stuff.style.cursor = 'pointer';
	stuff.style.backgroundColor = BGCOLOR_S
}
