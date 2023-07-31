
var IPath = window.top.FHIPR;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			getObj('Messy').submit();
		}
	}
}

function DC(stuff, subject) {
	window.location.replace('fhbugn.asp?CharsAt=' + stuff.b + '&bugname=' + subject);
}

function DB(stuff) {
	window.location.replace('fhbug.asp?Type=' + stuff);
}

function KP(stuff) {
	if (stuff.value.length > 1024) {
		return false;
	} else {
		return true;
	}
}