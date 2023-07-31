var PageNo = PageNo;
var SPath = window.top.FHIPS;
var IPath = window.top.FHIPI;
var Countt = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function DrawImages(currentimage) {
	var x = 0;
	var xc = 0;
	var DI = '';
	var strImg = '';
	for (x = 1; x < 152; x++) {
		strImg = (x + ".png");
		DI = DI + "<img width=20 height=20 c=\"" + (currentimage == strImg ? "gold" : "#000000") + "\" onclick=\"setimage('" + strImg + "')\" src=\"" + SPath + strImg + "\" style=\"border: 1px solid " + (currentimage == strImg ? "gold" : "#000000") + "\" onmouseover='DC2(this)' onmouseout='DC1(this)'>"
		xc = xc + 1
		if (xc > 14 && x < 152) {
			DI = DI + "<br>"
			xc = 0
		}
	}
	document.write('<tr><td>' + DI + '</td></tr>');
}

function ADC(Itty, Color) {
	if (Countt == 0) {
		document.write('<tr>');
	}
	document.write('<td onmouseover="DC2(this)" onmouseout="DC1(this)" onclick="setimage(\'' + Color + '\');" width=100 style="background-color: #' + Color + '; border: 1px solid black">' + Itty + '</td>')
	if (Countt == 4) {
		document.write('</tr>');
		Countt = 0
	} else {
		Countt = Countt + 1
	}

}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}

function setimage(newimg) {
	window.parent.getObj('Menu2').style.backgroundColor = newimg;
	window.location.replace('?IID=1&img=' + newimg);
}

function DC1(stuff) {
	stuff.style.cursor = '';
	stuff.style.border = '1px solid black';
}

function DC2(stuff) {
	stuff.style.cursor = 'pointer';
	stuff.style.border = '1px solid ' + BGCOLOR_S;
}