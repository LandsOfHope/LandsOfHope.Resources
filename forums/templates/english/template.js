function PageHeader(hn, param1) {
	document.write("<div class='header' style='position: relative; padding-top: 6px;'>" + hn + "</div>");
}

function TinyHeader(hn, param1) {
	if (hn != '') {
		document.write("<div class='theader' style='padding-top: 2px;'>" + hn + "</div>");
	}

}

function Box(hn, content, width, height) {
	TinyHeader(hn, '');
	document.write("<table border='0' align='center' cellpadding='0' cellspacing='0' class='menu' style='width: " + width + ";" + (height != '' ? "height: " + height : "") + "'><tr><td>" + content + "</td></tr></table>");
}