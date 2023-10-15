var PageNo = PageNo;
var county = 0;
var EPath = "https://lohcdn.com/game/images/"
var Processing = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(e, ea, en, sd) {
	var Color = LITE;
	// e=' + e + ' ea=' + ea + ' en="' + en + '" sd="' + sd + '"
	document.write('<tr ' + (ea == 0 ? '' : ' onclick="DC(' + e + ')"') + ' style="cursor: pointer"><td><img src="' + (EPath + 'event' + e + '.jpg') + '" title="' + en + '" ' + (ea == 0 ? ' style="filter: gray()"' : '') + '>' + (ea == 0 ? '<div style="position: fixed; left: 190px; top: 220px; width: 235px; height: 60px; background-color: black;"><Center>Trigger Date: <b>' + sd + '</b><br><br>This event will start on the date listed above.</center></div>' : '') + '</td></tr>');
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}


function DC(stuff) {
	if (Processing == 0) {
		Processing = 1;
		window.location.replace('fheventpick.asp?EventID=' + stuff + '')
	}
}
