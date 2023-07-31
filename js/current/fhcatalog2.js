var counteri = 0;
var PageNo = PageNo;
var ExtraID = ExtraID;
var IPath = '/game/';
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AM(PictureID, PP, Color, ItemName, Cost, v, Desc, x) {
	counteri = counteri + 1
	if (PictureID == '') { PictureID = 'na.gif' }
	document.write('<tr><td width="40" class="nav3"><img src=\'' + IPath + PP + '/' + PictureID + '\' width=40 height=40></td><td><b style="Color: ' + Color + '">' + (ItemName) + '</b><br>Cost: $' + (Cost * 5) + '/ ' + Cost + 'hc<br>' + Desc + '</td><td></td></tr>');
}


function AC(PictureID, PP, a, ItemName, s, v, l, d, ic) {
	counteri = counteri + 1
	if (PictureID == '') { PictureID = 'na.gif' }
	var Color = GetAColor(a);
	if (Color == '') {
		Color = 'yellow';
	}
	var atx = GetAName(a);
	if (atx == '') {
		atx = 'Neutral'
	}
	document.write('<tr><td width="40" class="nav3"><img src=\'' + IPath + PP + '/' + PictureID + '\' width=40 height=40></td><td><b style="Color: ' + Color + '">' + (ItemName) + '</b><br>Level: ' + l + '<br>Allegiance: ' + atx + '<br>Server: ' + s + (ic > 0 ? '<br>This character already has <b>' + ic + '</b> of these items.' : '') + '</td><td>' + Adr('window.location.replace(\'https://www.paypal.com/xclick/business=billing%40fho2.com&no_shipping=1&item_name=Extra: ' + Extra + '&item_number=' + ExtraID + '&amount=' + (d * 5) + '&custom=' + v + '&no_note=1\');', 'Buy for ' + ItemName + ' at $' + (d * 5), '$' + (d * 5)) + Adr('window.location.replace(\'fhfhd.asp?item_name=Catalog: ' + Extra + '&item_number=' + ExtraID + '&a3=' + d + '&custom=' + v + '\');', 'Buy for ' + ItemName + ' at ' + d + 'hc', d + 'hc') + '</td></tr>');
}

function AH(Header) {
	counteri = 0;
	document.write("<tr><td class='theader' colspan=3>" + Header + "</td></tr>");
}

function AHF() {
}

function GetAColor(alin) {
	return (alin == 0 ? 'yellow' : (alin == 1 ? 'white' : (alin == 2 ? 'gold' : 'red')))
}
function GetAImg(alin) {
	return (alin == 0 ? '' : '/game/h/' + (alin == 1 ? '1' : (alin == 2 ? '2' : '3')) + '.gif')
}

function GetAName(alin) {
	return (alin == 0 ? '' : (alin == 1 ? 'The Exiles' : (alin == 2 ? 'The Society' : 'The Reapers')))
}