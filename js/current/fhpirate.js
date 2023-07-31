var CN = CN;
var CharsAt = CharsAt;
var Processing = 0;
var IPath = 'https://res.landsofhope.com/game/i/';

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function xCStatus(g, cr, v, tc, tf, tg, tt, ti) {
	var strout = '';
	
	if (tt == -1) {
		var ap1t = (tc == 1 ? '<b>COMPLETED</b>' : '<b>' + tg + '</b> - No limit')

		strout = '<tr><td style="color: white">Turn-in status:</td><td colspan=2>' + ap1t + '</td></tr>';
	} else {
		var ap1 = window.parent.GetPerc(tt, tg)
		var ap1t = (tc == 1 ? '<b>COMPLETED</b>' : window.top.PercentBoxR(ap1,'white','' + tg + ' / ' + tt + ''))

		strout = '<tr><td style="color: white">Turn-in status:</td><td>' + ap1t + '</td><td>' + ap1 + '%</td></tr>';
	}
	strout = strout + '<tr><td colspan=3>' + Adr('window.parent.loadwindow2(\'imi.asp?Test=' + ti + '&Bonus=0&Material=\',300,300,\'iwindow\',\'Event Requirement\');','Info','Info') + (tf == 0 ? Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'fhpiratei.asp?ID=' + g + '&CharsAt=' + CharsAt + '\');}','Give Items','Give Items') : '') + '</td></tr>';

	return strout;
}


function AvC(g, v, tf, tc, tg, tt, Itty, ti, tin, PictureID, text) {
if (PictureID == '0') {PictureID = ''}
var Color = LITE;
// g=' +g  + ' tf=' + tf + ' tc=' + tc + ' tin=' + tin + ' ti=' + ti + ' tg=' + tg + ' tt=' + tt + ' v=' + v + ' i="' + Itty +'" p="' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '" class="it" c="' + Color + '" 
document.write('<tr style="padding-left: 5px;"><td width=\'100%\'><table class="weakcell" width="100%"><tr><td width="100%" colspan=3><b style="color: ' +  Color + '">' + Itty + '</b></td></tr><tr><td colspan=3><img align=left src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\'>' + text + '</td></tr>' + xCStatus(g,0,v, tc, tf, tg, tt, ti) +'</table></td></tr>');
}


function AvC3() {
var Color = LITE;
var Itty = '';
Itty = 'No Events are currently available.'
// class="it" c="' + Color + '"
document.write('<tr style="padding-left: 5px;"><td width=\'100%\'><table class="weakcell" style="color: ' +  Color + '"><tr><td>' + Itty + '</td></tr></table></td></tr>');
}