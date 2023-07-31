var Processing = 0;
var thex = thex;
var they = they;
var Images = new Array(262908, 327420, 327172, 16580100, 16515588, 16515836, 16580348, 15001317, 14473948, 13356748, 13356748, 11842484, 10790565, 10132123, 9013642, 2360020, 317180, 5015044, 14461444, 5312260, 6095572, 7697525, 6514276, 5986650, 4802632, 3028809, 3486774, 1, 1841692, 4802632, 8166140, 8695548, 9224956, 10807036, 10280660, 10277300, 11520144, 13421196, 15519356, 13411972, 12292740, 9862262, 11765412, 11767492, 11637436, 3368176, 5541628, 6074108, 7200508, 7197380, 7586444, 7188052, 11383356, 14988804, 10775116, 10775116, 9195092, 9131644, 9723556, 9599675, 2360020, 1335026, 759548, 317180, 1883804, 2467405, 5015044, 9735940, 14461444, 9989636, 8669700, 5312260, 5964372, 6030716, 6766259, 2491020, 802460, 287404, 302779, 1343076, 1862196, 3429892, 6511877, 9989636, 6835205, 4006660, 5312260, 3211826, 3932756, 7094927, 2163300, 798316, 1329272, 290436, 809547, 1330724, 2375173, 4473348, 6511877, 5190149, 4006660, 459525, 3211826, 3211826, 5520760, 10335955, 7767717, 5530235, 4014676, 2435380, 7185108, 5471923, 3957396, 1329272, 1324636, 16580348, 16580348, 16580348, 9013642, 162713, 175272, 202699, 388893, 1280602, 1918761, 2017374, 2249983, 2651456, 3239982, 3835190, 4017729, 4020109, 4176526, 4276545, 4307045, 4347799, 4818740, 4953644, 4955288, 5347207, 5820911, 5871160, 6321997, 6381921, 6583140, 6677739, 6788284, 7656406, 8555948, 8716287, 8750469, 8877669, 9006902, 9228409, 9410769, 9885867, 10851975, 12238535, 12751662, 13092807, 13520962, 15763522, 16383408, 16383969, 16708047, 16774993, 16777215);
var oldcolor = '';
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');
function DrawColors(BuildingID) {
	var i = 0;
	var v = 0;
	if (window.parent.getObj("B" + BuildingID).bgColor == "") {
		oldcolor = -1;
	} else {
		oldcolor = window.parent.getObj("B" + BuildingID).bgColor;
	}
	v = 2;
	document.write("<div style='float: left; cursor: pointer; width: 10px; height: 10px; padding: 1px; margin: 1px;' onmousedown='ChangeImage(-1);' title='Default'>&nbsp;</div>");

	for (i = 0; i < Images.length; i++) {
		document.write("<div style='background-color: " + LongtoRH(Images[i]) + "; float: left; cursor: pointer; width: 10px; height: 10px; padding: 1px; margin: 1px;' onmousedown='ChangeImage(" + Images[i] + ");'>&nbsp;</div>");
	}
}
function ChangeImage(strImg) {
	var BuildingID = getObj("CharsAt").value;
	if (strImg == -1) {
		window.parent.SetColor(thex, they, oldcolor);
	} else {
		window.parent.SetColor(thex, they, LongtoRH(strImg));
	}
	getObj("C").value = strImg;
	//	window.event.cancelBubble = 1
	//	window.event.returnValue = 0
}
function LongtoRH(Color) {
	var R = (Color % 256);
	var G = ((Color / 256) % 256);
	var B = ((Color / 256 / 256) % 256);
	return convertRGBToHex('rgb(' + R + ',' + G + ',' + B + ')');
}

function convertRGBToHex(col) {
	var re = new RegExp("rgb\\s*\\(\\s*([0-9]+).*,\\s*([0-9]+).*,\\s*([0-9]+).*\\)", "gi");

	if (!col)
		return col;

	var rgb = col.replace(re, "$1,$2,$3").split(',');
	if (rgb.length == 3) {
		var r = parseInt(rgb[0]).toString(16);
		var g = parseInt(rgb[1]).toString(16);
		var b = parseInt(rgb[2]).toString(16);

		r = r.length == 1 ? '0' + r : r;
		g = g.length == 1 ? '0' + g : g;
		b = b.length == 1 ? '0' + b : b;

		return "#" + r + g + b;
	}

	return col;
}

function convertHexToRGB(col) {
	if (col.indexOf('#') != -1) {
		col = col.replace(new RegExp('[^0-9A-F]', 'gi'), '');

		var r = parseInt(col.substring(0, 2), 16);
		var g = parseInt(col.substring(2, 4), 16);
		var b = parseInt(col.substring(4, 6), 16);

		return { r: r, g: g, b: b };
	}

	return null;
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && Processing == 0) {
			var v = pb;
			Processing = 1;
			getObj('BT').value = v;
			getObj('editform').submit()
		}
	}
}