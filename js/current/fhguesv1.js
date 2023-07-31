var PageNo = PageNo;
var Infos = new Array();
var IC = 0;
var SPath = window.top.FHIP + 'pi/';
var IPath = window.top.FHIPI;
var xPath = window.top.FHIP;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function DrawImages(currentimage, page) {
	var x = 0;
	var xc = 0;
	var DI = '';
	var strImg = '';
	for (x = (page * 45) - 44; x <= (page * 45); x++) {
		if (x <= 217) {
			strImg = (x + ".gif");
			DI = DI + "<div style='width: 40; height: 40; float: left; margin: 1px; padding: 1px;'><img onclick=\"setimage('" + strImg + "')\" src=\"" + SPath + strImg + "\" width=40 height=40 style=\"padding: 1px; margin: 1px; border: 1px solid " + (currentimage == strImg ? "gold" : "#000000") + "\" onmouseover='DC2(this)' onmouseout='DC1(this, \"" + (currentimage == strImg ? "gold" : "#000000") + "\")'></div>"
			xc = xc + 1
		}
	}
	document.write(DI);
}

function setimage(newimg) {
//	getObj('ImgSource').value = newimg;
	window.parent.getObj('Menu2').style.backgroundImage='url(' + SPath + newimg + ')';
	window.location.replace('?IID=1&P=' + PageNo + '&img=' + newimg);

}

function GoP(p) {
	window.location.replace('?P=' + p);
}

function DC1(stuff, c) {
stuff.style.cursor = '';
stuff.style.border='1px solid ' + c;
}

function DC2(stuff) {
stuff.style.cursor = 'pointer';
stuff.style.border='1px solid #A2A2A2';
}