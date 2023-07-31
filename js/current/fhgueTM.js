document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

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

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			getObj('Messy').submit();
		}
	}
}