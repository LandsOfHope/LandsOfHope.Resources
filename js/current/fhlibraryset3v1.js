
var IPath = window.top.FHIPS;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AM(Value, PictureID, Named, l, a) {
	var Color = GetAColor(a);
	if (Color == '') {
		Color = 'yellow';
	}
	aa = GetAName(a)
	if (aa == '') {
		aa = 'Neutral';
	}
	document.write('<tr style="color: ' + Color + '"><td width=15><img border=0 title="' + Named + '" width=15 height=15 src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\'></td><td><a href=\'#\' onclick="window.location.replace(\'sz.asp?Test=' + Value + '\')">' + Named + '</a></td><td width=\'100\'>' + (l == 0 ? 'All Levels' : 'Level: ' + l) + '</td><td width=\'100\'>' + aa + '</td></tr>');
}