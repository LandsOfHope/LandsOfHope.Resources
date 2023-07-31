document.write('<script src="js/formatting.js" language="JavaScript"></script>');
document.write('<script src="js/wysiwyg.js" language="JavaScript"></script>');

function KP2() {
	if (getObj('Message').value.length >= 4000) {
		getObj('charco').innerHTML = 'Character Count: ' + getObj('Message').value.length + '/4000 <font id=tred>TOO LONG</font>';
		return true;
	} else {
		getObj('charco').innerHTML = 'Character Count: ' + getObj('Message').value.length + '/4000 OK';
		return false;
	}
}

function KP(stuff) {
}

function PC(stuff) {
	stuff.style.cursor = 'pointer';
	stuff.style.backgroundColor=BGCOLOR_S
	stuff.style.color='black';
}

function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor='';
	stuff.style.color='';
}