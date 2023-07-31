
var IPath = window.top.FHIP
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AM(PictureID, Color, URL, Named, URL2) {
document.write('<tr><td width="40" onmouseover="PC(this)" onmouseout="RC(this)"  onclick="' + (URL2 != '' ? 'window.location.replace(\'fhcharx' + URL2 + '.asp\');' : '') + ';" style="background-color: ' + Color + '"><img src=\'' + IPath + URL + '/' + PictureID + '\' width=40 height=40></td><td onclick="' + (URL2 != '' ? 'window.location.replace(\'fhcharx' + URL2 + '.asp\');' : '') + '" c="" onmouseover="PC(this)" onmouseout="RC(this)">' + Named + '</td></tr>');
}

function AM2(PictureID, Color, URL, Named, URL2) {
document.write('<tr><td width="40" onmouseover="PC(this)" onmouseout="RC(this)"  onclick="' + (URL2 != '' ? 'window.location.replace(\'' + URL2 + '\');' : '') + ';" style="background-color: ' + Color + '"><img src=\'' + IPath + URL + '/' + PictureID + '\' width=40 height=40></td><td onclick="' + (URL2 != '' ? 'window.location.replace(\'' + URL2 + '\');' : '') + '" c="" onmouseover="PC(this)" onmouseout="RC(this)">' + Named + '</td></tr>');
}


function PC(stuff) {
	stuff.style.cursor = 'pointer';
	stuff.style.backgroundColor=BGCOLOR_S
}

function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor='';
}