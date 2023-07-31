
var IPath = window.top.FHIP
var RPath = window.top.FHIPR;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AM(v, hs, PictureID, Color, URL, Named, URL2) {
	document.write('<tr onmouseover="PC(this)" onmouseout="RC(this)"><td width="40" onclick="' + (URL2 != '' ? 'window.location.replace(\'' + URL2 + '\');' : '') + ';" style="background-color: ' + Color + ';"><img src=\'' + IPath + URL + '/' + PictureID + '\' width=40 height=40></td><td onclick="' + (URL2 != '' ? 'window.location.replace(\'' + URL2 + '\');' : '') + '">' + Named + '</td><td onclick="window.location.replace(\'g_hs.asp?FID=' + v + '\');">Top Score: <br>' + hs + '</td></tr>');
}

function PC(stuff) {
	stuff.style.cursor = 'pointer';
	stuff.style.backgroundColor = BGCOLOR_S
}

function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}
