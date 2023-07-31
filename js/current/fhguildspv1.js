var Special = 0;
var IC = 0;
var Infos = new Array();

var OKR = OKR;
var IPath = window.top.FHIP
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(Infos[v].p, Infos[v].n + '<br>X: ' + Infos[v].x + ', Y: ' + Infos[v].y);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<font style=\'color:' + Infos[v].c + '\'><b>' + Infos[v].n + '</b></font><br>Location: ' + Infos[v].x + ', ' + Infos[v].y;
	getObj('Pic').innerHTML = "<img src='" + Infos[v].p + "'>";
	getObj('Buttons').innerHTML = Adr('window.location.replace(\'fh.asp?Redraw=1&BuildingID=' + Infos[v].b + '\');', 'Recall', 'Recall');
}

function tgl(SpecialNum) {
	DrawSpecial(SpecialNum);
}

function AH(Special2, Realm) {
	document.write('<td  class="btn" onmouseover="this.className = \'btn btnhov\'" onmouseout="this.className = \'btn\'" onclick="tgl(' + Special2 + ')">' + Realm + '</td>')
}

function DrawSpecial(SpecialNum) {
	var strout = '';
	var y = 0;
	for (y = 0; y < IC; y++) {
		if (Infos[y].shop == SpecialNum) {
			strout = strout + GetRow(y) //Specials[SpecialNum][y];
		}
	}
	getObj('Inv').innerHTML = '<table width="100%" height="100%" cellspacing=1 cellpadding=1 border=0 class="weakercell">' + strout + '<tr height="100%"><td></td></tr></table>';
}

function AM(pp, PictureID, Named, MX, MY, GameID, BuildingID) {
	var Color = '#6464FF';
	PictureID = IPath + pp + '/' + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID);
	//p="' + IPath + pp + '/' + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '" g=' + GameID + '
	// n="' + Named + '" x=' + MX + ' y=' + MY + ' b=' + BuildingID + '
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, pp, PictureID, Named, MX, MY, GameID, BuildingID);
	IC = IC + 1;
}

function newInfo(Color, pp, PictureID, Named, MX, MY, GameID, BuildingID) {
	this.c = Color;
	this.n = Named;
	this.p = PictureID;
	this.x = MX;
	this.y = MY;
	this.g = GameID;
	this.b = BuildingID;
	this.shop = Special;
}

function GetRow(v) {
	return '<tr id="I' + v + '" onmouseover="PC(' + v + ')" onmouseout="RC(' + v + ')" onclick="DC(' + v + ')"><td width=15><img width=15 height=15 src="' + Infos[v].p + '"></td><td width="235" style="color: ' + Infos[v].c + '">' + Infos[v].n + '</td><td width=65>' + Infos[v].x + ', ' + Infos[v].y + '</td></tr>';
}