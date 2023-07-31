var FHIP = 'https://res.landsofhope.com/game/';
var strFunc = ' class=\'btn\' onmouseover="this.className=\'btn btnhov\';" onmouseout="this.className =\'btn\';""'


function SM(s, A, Named, Value, PictureID, Action, Number) {
if (PictureID == '') {PictureID = 'na.gif'}
var Color = GetAColor(A);
if (Color == '') {
	Color = 'yellow';
}
var PictureID2 = GetAImg(A);
document.write('<tr width="100%" height=40 ' + strFunc + ' onclick="" style="color: ' + Color + '; border: 1px solid black; padding-left: 2px; padding-top: 2px"><td style="width: 50px">' + Number + '</td><td width=40 style=\'background-repeat: no-repeat; background-Image: URL(' + FHIP + '' + (Action == 3 ? 's' : 'r' ) + '/' + PictureID + ')\' valign=bottom halign=right>' + (PictureID2 == '' ? '&nbsp;' : '<img src=\'' + PictureID2 + '\' valign=bottom halign=right onerror="this.src=\'https://res.landsofhope.com/na.gif\'">') + '</td><td width="300"><b>' + Named + '</b><br>' + GetAName(A) + '<br>Server: ' + s + '</td><td align=right width="100">' + Value + '</td></tr>');
}


function GetAColor(alin) {
	return (alin == 0 ? '' : (alin == 1 ? 'white' : (alin == 2 ? 'gold' : 'red')))
}
function GetAImg(alin) {
	return (alin == 0 ? '' : FHIP + 'h/' + (alin == 1 ? '1' : (alin == 2 ? '2' : '3')) + '.gif')
}

function GetAName(alin) {
	return (alin == 0 ? '' : (alin == 1 ? 'The Exiles' : (alin == 2 ? 'The Society' : 'The Reapers')))
}