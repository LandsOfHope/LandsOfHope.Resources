var Processing = 0;
var Skill = Skill;
var IPath = window.top.FHIPB;
var h2 = 0;
var p2 = 'na.gif';
var Countt = 0;
var CharsAt = 0;

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(d, ItemName, ItemID, f, u, h, CharacterID, n, bp) {
CharsAt = ItemID;
var p= 'na.gif';
var Color = 'white'
document.write("<input name=h id=h size=5 type=hidden maxlength=5 id=h value='" + h + "'>")
document.write("<tr><td colspan=2 class='weakcell'><b>" + ItemName + "</b></td></tr>");
if (bp != 0) {
	document.write("<tr><td colspan=2 id=Butt>" + (Skill > 0 ? "<" + strClicky + " title=\"The detect hidden skill required to detect this room.\" id=h1 onclick=\"if (Processing == 0) {prompt('How much Detect Hidden should be needed to detect this room?', 0, " + Math.round(Math.abs(Skill)) + ", 'Reveal Room');}\">" + (h > 0 ? Math.abs(h) : 0) + "</button>" : "") + "</td></tr>");
} else {
	document.write("<tr><td colspan=2 id=Butt>The entrance room can not be stealthed or revealed.</td></tr>");
}
document.write('<tr><td></td></tr>');

h2 = h;
p2 = (p == '' ? 'na.gif' : p);
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (returnVal <= Math.abs(Skill)) {
			Processing = 1;
			getObj('h').value = returnVal;
			h2 = returnVal;
			ChangeHidden(h2);
			window.top.Interface.ResultsOfit.location.replace('fhbsms.asp?CharsAt=-' + CharsAt + '&h=' + h2);
		}
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
	stuff.style.backgroundColor='';
}

function PC(stuff) {
	stuff.style.cursor = 'pointer';
	stuff.style.backgroundColor=BGCOLOR_S
}
