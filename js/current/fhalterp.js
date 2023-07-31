
var CharacterID = CharacterID;
var counteri = 0;
var IPath = window.top.FHIPR;

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AM(PictureID, Color, Sex, v) {
	counteri = counteri + 1
	// v=' + v + ' p="' + PictureID + '" s="' + Sex + '" class="it" onmouseover="PC(this)" onmouseout="RC(this)"  onclick="DC(this)" c="' + Color + '"
	document.write('<div onmouseover="PC(this)" onmouseout="RC(this, \'' + Color + '\')"  onclick="DC(\'' + PictureID + '\')" style="width: 40px; height: 40px; margin: 1px; padding: 1px; float: left; background-color: ' + Color + '" align=center><img src=\'' + IPath + PictureID + '\' width=40 height=40></div>');
}

function DC(p) {
	getObj('Stuff2').innerHTML = '<b>Portrait</b>';
	getObj('Pic').innerHTML = '<img src=\'' + IPath + p + '\'>';
	getObj('Buttons').innerHTML = Adr('window.location.replace(\'?Pic=' + p + '\');', 'Use Picture', 'Use');
}


function PC(stuff) {
	stuff.style.cursor = 'pointer';
	stuff.style.backgroundColor = BGCOLOR_S
}

function RC(stuff, c) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = c;
}
