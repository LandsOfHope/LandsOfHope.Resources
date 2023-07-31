var JW = JW;

function GetNotices() {
var strNew = "";
return strNew;
}

function Themes(tx) {
document.write(Themes2(tx));
}

function Themes2(tx) {
var strout = '';
strout += '<table width=\'110\' align=center cellpadding=2 cellspacing=2>';
var dimarr = new Array('Classic', 'ANewDawn','BigFont','RedDawn','GreenForest','BlueSea')
strout += '<tr>';
var x = 0;
var y = 1;
var strSSClick = ' onmouseover="PC(this);" onmouseout="RC(this);"'
for (x = 0; x < dimarr.length ; x++) {
	var xw1 = dimarr[x];
	strout += '<td ' + strSSClick + ' ' + (tx == xw1 ? 'style=\'border: 1px solid gold\'' : 'style=\'border: 1px solid RGB(115,102,86)\'') + ' align=center><img title="Theme: ' + xw1 + '" src="https://res.landsofhope.com/' + xw1 + '.gif" onclick="SetTheme(\'' + xw1 + '\');"></td>';
	y = y + 1;
	if (y == 2) {
		strout += '</tr><tr>';
		y = 1;
	}
}
strout += '</tr>';
strout += '</table>';
return strout;
}

function SetTheme(themex) {
	document.getElementById('Theme').value = themex;
	document.getElementById('Themex').innerHTML = Themes2(themex);
}

function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor='';
}

function PC(stuff) {
	stuff.style.cursor = 'pointer';
	stuff.style.backgroundColor='#66ff66';
}