var DefaultShop = 0;
var Shop = 0;
var counter = 0;
var Shops = new Array();
var ItemID = ItemID;
var CharsAt = CharsAt;
var counter2 = 0;
var IPath = window.top.FHIPR;
var EvolveName = EvolveName;
var EvolvePic = EvolvePic;
var Processing = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');


function DC2() {
	var strout = '';
	var y = 0;
	for (y = 0; y < Shops.length; y++) {
		strout = strout + Shops[y];
	}
	getObj('Stuff2').innerHTML = '<table width="100%" class=\'itemText\'>' + strout + '</table>';
	if (counter2 == counter) {
		getObj('Buttons').innerHTML = Adr('if (Processing == 0) {confirm(\'Are you sure you wish to evolve into a ' + EvolveName + '?\', 1)}', 'Evolve into a ' + EvolveName + '', 'Evolve');
	} else {
		getObj('Buttons').innerHTML = '<font id=tred>One or more requirements for Evolution are not met!</font>';
	}
}

function AM(Named, s, nv, Picture, av) {
	var Color = LITE;
	if (av < nv) {
		Color = '#ff6666';
	} else {
		counter2 = counter2 + 1
		Color = '#66ff66';
	}
	Shops[counter] = new Array();
	//s=' + s + ' i="' + Named + '" av="' + av + '" nv="' + nv + '" ' + (Picture != '' ? 'p="' + Picture + '"' : 'p=""') + ' c="' + Color + '" 
	Shops[counter] = '<tr width="100%"><td></td><td width="200" style="color: ' + Color + ';">' + (s == 0 ? '<b>' + Named + '</b>' : Named) + '</td><td width="125">' + av + '/<b>' + nv + '</b></td></tr>';
	counter = counter + 1;
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && Processing == 0) {
			Processing = 1;
			window.top.Interface.location.replace('fhevolve.asp?CharsAt=' + CharsAt + '&ItemID=' + ItemID);
		}
	}
}