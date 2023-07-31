var IPath = window.top.FHIPR;
var IIDs = 0; var Countt = 0;
var Time2r =  Time2r;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');
if (Time2r > 0) {
	IIDs = window.setInterval("Rest()", 1000);
} else {
	IIDs = window.setInterval("Rest2()", 2000);
}

function Rest() {
	Countt = Countt + 1;
	window.clearInterval(IIDs);
	if (((Time2r - Countt)) > 0) {
		IIDs = window.setInterval("Rest()", 1000);
	}
	if (getObj('lala') != null) {
		getObj('lala').innerHTML = (((Time2r - Countt)) <= 0 ? 'You are now wide awake.' : 'You will awaken in ' + Math.round((Time2r - Countt)) + ' seconds.');
	}
	if (((Time2r - Countt)) <= 0) {
		window.location.replace('fhmysticaltent.asp?ID=1')
	}
}

function Rest2() {
	Countt = Countt + 1;
	window.clearInterval(IIDs);
	getObj('lala3').style.visibility = 'visible';
}

