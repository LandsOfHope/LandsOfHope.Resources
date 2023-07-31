var Piccy = '';
var levelx = 0;
var Reqs2 = Reqs2;
var ItemID = ItemID;
var Shop = 0;
var CT = CT;
var ML = ML;
var SelID = 0;
var CTempC = 0;
var counter = 0;
var CharsAt = CharsAt;

var IPath = window.top.FHIPIM;
var IPath2 = window.top.FHIPI;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');


function AM2() {
	if (CTempC >= Reqs2) {
		getObj('Buttons').innerHTML = Adr('window.parent.location.replace(\'fhtrophiesr.asp?ItemID=' + ItemID + '&CharsAt=' + CharsAt + '\');', 'Take', 'Take');
	}
}

function AM(z, id, Named, ic, Picture, tq) {
	if (ic == 0) {
		var Color = '#ff6666';
	} else {
		var Color = 'orange';
	}


	if (ic >= tq) {
		CTempC = CTempC + ic;
	}
	document.write('<tr width="250"><td><img src="' + IPath2 + Picture + '" width=40 height=40></td><td width="300" style="padding-left: 5px; border: 1px dotted"><b style="color: ' + Color + ';">' + Named + '</b><br>' + (ic == 0 ? '<i>Missing Item</i>' : (ic < tq ? '<i>' + (tq - ic) + ' more needed</i>' : '<i>You have this item</i>')) + '</td></tr>');
}