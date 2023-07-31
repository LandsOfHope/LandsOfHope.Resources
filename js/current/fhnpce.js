var IPath = window.top.FHIPR;
var FHIPO = window.top.FHIPO;
var p2 = 'na.gif';
var Countt = 0;

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(ItemName, ItemID, s, t, p, su) {
	var Color = LITE;
	document.write('<tr><td>Name: </td><td><input name=IN id=IN value="' + ItemName + '"></td></tr>');
	document.write('<tr onmouseover=\'InfoTip("","The Sex of this NPC, Male/Female.")\'><td>Sex:</td><td>Male:<input type=radio name=Sex value=\'Male\'' + (s == 'M' ? ' checked' : '') + '>&nbsp;Female:<input type=radio name=Sex value=\'Female\'' + (s == 'F' ? ' checked' : '') + '></td></tr>');
	document.write('<tr onmouseover=\'InfoTip("","The Title that will show below the NPCs name")\'><td>Title:</td><td><input name=t id=t value="' + t + '"></td></tr>');
	document.write('<tr><td colspan=2 id=Butt>' + Adf2('', 'Save NPC changes', 'Save') + Adr('CheckStuff2();', 'Delete NPC', 'Delete') + '<br>' + Adr('window.parent.location.href=\'fhtrade.asp?CharsAt=' + getObj('CharsAt').value + '\'', 'Trade items to NPC', 'Trade') + Adr('window.parent.location.href=\'fhrt.asp?CharsAt=' + getObj('CharsAt').value + '\'', 'Unstock', 'Unstock') + '</td></tr>');
	document.write('<tr><td colspan=2></td></tr>');

	p2 = (p == '' ? 'na.gif' : p);
}


function CheckStuff() {
	var blReturn = true;
	return blReturn;
}

function CheckStuff2() {
	confirm('Are you sure you wish to delete this NPC?', 1);
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			getObj('Deletex').value = 1;
			getObj('NPC').submit();
		}
	}
}