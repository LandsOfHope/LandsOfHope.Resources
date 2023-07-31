var FontName = FontName;
var FontSize = FontSize;
var PageNo = PageNo;
var CN = CN;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();
var SpecFonts = new Array('Arial', 'Arial Black', 'Courier New', 'Comic Sans', 'Georgia', 'MS Sans Serif', 'Papyrus', 'Tahoma', 'Times New Roman', 'Trebuchet', 'Verdana')
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function DumpStuff() {
	var PictureID = '';
	var Color = LITE;
	var DFontIndex = 0;
	var Color2 = 0;
	var Color3 = 0;
	var x = 0;
	for (x = 0; x < SpecFonts.length; x++) {
		DFontIndex = x;
		if (SpecFonts[DFontIndex] == FontName) {
			Color = 'gold';
		} else {
			Color = 'white';
		}

		if (Infos[IC] == null) {
			Infos[IC] = new Array();
		}
		Infos[IC] = new newInfo(DFontIndex, Color, Color2, SpecFonts[DFontIndex], x, PictureID);
		document.write('<tr><td id="I' + IC + '" width="250" title="' + SpecFonts[DFontIndex] + '" onclick="DC(' + IC + ')" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" style="color: ' + Color + '; font-family: ' + SpecFonts[DFontIndex] + '; padding-left: 5px;">' + SpecFonts[DFontIndex] + '</td></tr>');
		IC = IC + 1;
	}
}

function newInfo(DFontIndex, Color, Color2, Named, x, PictureID) {
	this.c = Color;
	this.c2 = Color2;
	this.f = DFontIndex;
	this.p = PictureID;
	this.t = Named;
	this.x = x;
}

function GoP(PageNo) {
	window.location.replace('?ItemTypeID=' + ItemTypeID + '&InventoryItemID=' + InventoryItemID + '&P=' + PageNo);
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('', '<font  style="color: ' + Infos[v].c + (Infos[v].c2 < 0 ? '; font-weight: bold; font-style: italic' : '; font-weight: bold') + '; font-family: ' + SpecFonts[Infos[v].f] + '; padding-left: 5px">' + Infos[v].t + '</font><br>Font Name: ' + SpecFonts[Infos[v].f] + '<br>Color Name: ' + Infos[v].c + '');
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<font  style="color: ' + Infos[v].c + '; font-family: ' + SpecFonts[Infos[v].f] + '; padding-left: 5px">' + Infos[v].t + '</font><br>Font: ' + SpecFonts[Infos[v].f] + '<br>Color: ' + Infos[v].c + '';
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = '<' + strClicky2 + '   style="height: 30; color: ' + Infos[v].c + '; font-family: ' + SpecFonts[Infos[v].f] + '; padding-left: 5px" onclick="this.disabled=true;window.location.replace(\'?Type=1&ItemID=8&P=' + PageNo + '&FN=' + SpecFonts[Infos[v].f] + '\')">Normal</button><' + strClicky2 + '   style="height: 30; color: ' + Infos[v].c + ';font-size: 9px; font-family: ' + SpecFonts[Infos[v].f] + '; padding-left: 5px" onclick="this.disabled=true;window.location.replace(\'?Type=1&ItemID=7&P=' + PageNo + '&FN=' + SpecFonts[Infos[v].f] + '\')">Small</button><' + strClicky2 + '   style="height: 30;color: ' + Infos[v].c + '; font-size: 9pt; font-family: ' + SpecFonts[Infos[v].f] + '; padding-left: 5px" onclick="this.disabled=true;window.location.replace(\'?Type=1&ItemID=9&P=' + PageNo + '&FN=' + SpecFonts[Infos[v].f] + '\')">Big</button>';
}
