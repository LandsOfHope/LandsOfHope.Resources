var Toggle = T;
var AccountID = AccountID;
var IPath = window.top.FHIPI;

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AM(IID, IID2, PictureID, Itty, b, Cost, d) {
	var Color = LITE;
	var c2 = BGCOLOR_S;
	if (b != 0) {
		Color = '#ff6666';
		if (Toggle == 1) {
			var c2 = '#ff6666';
		}
	}

	// b=' + b + ' d="' + Cost + '" i="' + Itty + '" c2="' + c2 + '" v=' + IID + ' p="' + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"
	document.write('<tr><td width=550><table cellpadding=0 cellspacing=0 width=450><tr width=550><td width=\'320\' class=\'theader\' style=\'color: ' + Color + '\'>' + Itty + '</td><td colspan=2>' + (b == 0 && Math.round(Cost < 100) ? Adr('window.open(\'https://www.paypal.com/xclick/business=billing%40fho2.com&no_shipping=1&item_name=' + Itty + '&item_number=' + Math.abs(IID) + '&amount=' + (Cost * 5) + '&custom=' + AccountID + '&no_note=1\', \'PP\', \'\');', 'Buy ' + Itty + ' for $' + (Cost * 5), '$' + (Cost * 5)) + Adr('window.open(\'fhfhd.asp?item_name=' + Itty + '&item_number=' + Math.abs(IID) + '&a3=' + Cost + '&custom=' + AccountID + '\', \'PP\', \'\');', 'Buy ' + Itty + ' for ' + Cost + 'hc', '' + Cost + 'hc') : '') + '</td></tr><tr><td colspan=3>' + d + '</td></tr></table></td></tr>');
}