function PercentBox(PercentValue, Color, caption) {
	if (caption == '') {
		caption = PercentValue + '%';
	}
	document.write('<div style="width: 100px; height: 15px; position: relative; background: URL(https://lohcdn.com/images/black.gif) repeat-x"><div style="width: ' + PercentValue + 'px;height: 15px; position: static; background: URL(https://lohcdn.com/images/' + Color + '.gif) repeat-x"><div class=perc style="position: absolute; width: 100px">' + caption + '</div></div></div>');
}

function PercentBoxS(pwidth, PercentValue, Color, caption) {
	if (caption == '') {
		caption = PercentValue + '%';
	}
	document.write('<div style="width: ' + pwidth + 'px; height: 15px; position: relative; background: URL(https://lohcdn.com/images/black.gif) repeat-x"><div style="width: ' + ((pwidth / 100) * PercentValue) + 'px;height: 15px; position: static; background: URL(https://lohcdn.com/images/' + Color + '.gif) repeat-x"><div class=perc style="position: absolute; width:' + pwidth + 'px">' + caption + '</div></div></div>');
}