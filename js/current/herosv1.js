var FHIP = 'https://res.landsofhope.com/game/';

function SM(s, A, Named, Value, PictureID, Action, Number, fn, fc, fs) {
if (PictureID == '') {PictureID = 'na.gif'}
var Color = GetAColor(A);
if (Color == '') {
	Color = 'yellow';
}
var PictureID2 = GetAImg(A);
document.write('<tr width="100%" height=40><td style="width: 100px" class="box3">' + Number + 'days</td><td width=40 class="box2" style=\'background-repeat: no-repeat; background-Image: URL(' + FHIP + '' + (Action == 3 ? 's' : 'r' ) + '/' + PictureID + ')\' valign=bottom halign=right>' + (PictureID2 == '' ? '&nbsp;' : '<img src=\'' + PictureID2 + '\' valign=bottom halign=right onerror="this.src=\'https://res.landsofhope.com/na.gif\'">') + '</td><td width="300" class="box3"><font style="border: 0px;' + (fn != '' ? 'font-family: ' + fn + ';' : '') + (fs != 0 ? 'font-size: ' + fs + 'pt;' : '') + (fc != '' ? 'color: ' + fc + ';' : '') + '">' + Named + '</font><br><font color="' + Color + '">' + GetAName(A) + '</font></td><td class="box2"><a href="#" onclick="ZP(' + s + ');" ><img src="https://res.landsofhope.com/game/icons/info.png" alt="More information on ' + Named + '" border=0></a></td><td align=right width="50" class="box3">' + Value + '</td></tr>');
}

function ZP(c) {
	PopupPlayer(c);
}

function PopupPlayer(c) {		
	var pp = window.open('player.asp?C=' + c,
	null,
	'toolbar=no,width=615,height=395,resizable=0'
	);
}

function GetAColor(alin) {
	return (alin == 0 ? '' : (alin == 1 ? 'white' : (alin == 2 ? 'gold' : 'red')))
}
function GetAImg(alin) {
	return (alin == 0 ? '' : FHIP + 'h/' + (alin == 1 ? '1' : (alin == 2 ? '2' : '3')) + '.gif')
}

function GetAName(alin) {
	return (alin == 0 ? 'Neutral' : (alin == 1 ? 'The Exiles' : (alin == 2 ? 'The Society' : 'The Reapers')))
}