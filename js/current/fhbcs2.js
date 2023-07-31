var Money = Money;
var PageNo = PageNo;
var SystemUser = SystemUser;
var Processing = 0;
var MC = 0;
var Markers = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}

function RC(v) {
	getObj('M' + v).style.cursor = '';
	getObj('M' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('', '' + Markers[v].t + '');
	getObj('M' + v).style.cursor = 'pointer';
	getObj('M' + v).style.backgroundColor = BGCOLOR_S
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && returnVal == true) {
			if (Processing == 0) {
				Processing = 1;
				window.top.Interface.location.replace('fhbcs2.asp?CharsAt=' + pb + '&P=' + PageNo + '&Type=' + 10)
			}
		}
	}
}


function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Markers[v].t + '</b><br>Location: ' + Markers[v].x + ', ' + Markers[v].y + ' ' + GetRealm(Markers[v].g) + (Markers[v].lid != 0 ? '<br><i>Listed Already</i>' : '<br>Listing Cost: <b>50</b>gp<br>You can not rename a Landmark listing, so please ensure your tile is using a good/unique name before listing the tile.' + (Money < 500000 ? '<br><font id=tred>You need more money!</font>' : ''));

	getObj('Buttons').innerHTML = '' + (Markers[v].lid == 0 ? (Money >= 500000 ? '<' + strClicky3 + ' id=Sp10 onclick="confirm(\'Add  ' + Markers[v].t + ' to the player town list at a cost of 50gp?\',' + Markers[v].v + ',\'Add Tile\');" style=\'width: 85\'>List Town</button>' : '') : '');
}

function AB(ItemName, ItemID, Color, x, y, g, lid) {
	if (Markers[MC] == null) {
		Markers[MC] = new Array();
	}
	Markers[MC] = new newMarker(ItemName, ItemID, Color, x, y, g, lid);
	document.write('<tr id="M' + MC + '" onclick="DC(' + MC + ')" onmouseout="RC(' + MC + ')" onmouseover="PC(' + MC + ')" style="color: ' + Color + '; padding-left: 5px"><td width=\'100%\'>' + ItemName + '</td><td>' + x + ',' + y + '</td></tr>');
	MC = MC + 1;
}

function newMarker(ItemName, ItemID, Color, x, y, g, lid) {
	this.c = Color;
	this.t = ItemName;
	this.v = ItemID;
	this.lid = lid;
	this.x = x;
	this.y = y;
	this.g = g;
}
