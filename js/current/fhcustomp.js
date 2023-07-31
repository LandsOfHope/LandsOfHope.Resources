
var CharsAt = CharsAt;
var PageNo = PageNo;
var counter = 0;
var IPath = 'custom/';

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');


function KP(stuff) {

}

function ColumnHeaders() {
	document.write('<tr width="600" class=\'boldcell\' style="width: 600;"><td width="20"></td><td width="380">' + CH('Bug', 'BugName') + '</td><td width="100">' + CH('Bug Date', 'BugDate') + '</td><td width="100">' + CH('Fixed Date', 'FixedDate') + '</td><td width="15"></td></tr>');
}

function CH(strdisplay, ob1) {
	return '<a href="?Type=' + Type2 + '&OB=' + ob1 + (ob1 == OB && OB.indexOf('DESC') == -1 ? ' DESC' : '') + '">' + strdisplay + '</a>';
}

function GoP(PageNo) {
	window.location.replace('?CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function AM(n, ct, Message, path) {
	var BID = CharsAt;
	counter = counter + 1
	var bg = ''
	var PictureID = path;
	var Color = LITE;
	var ctt = '';
	if (ct == 1) {
		Color = '#6666ff';
		ctt = ' - Support Member'
	}
	if ((counter / 2) == Math.round(counter / 2)) { bg = BGCOLOR_S }
	document.write('<tr width="450" style="color: ' + Color + ';font-weight: bold"><td rowspan=2>' + (PictureID != '' ? '<img src="' + IPath + PictureID + '">' : '') + '</td><td width=\'100%\'>' + n + ctt + '</td></tr>');
	document.write('<tr width="450" style="color: white;background-color: ' + bg + ';"><td>' + Message + '</td></tr>');
}

function DC(stuff) {
	window.location.replace('fhbugv.asp?OB=' + OB + '&CharsAt=' + stuff.v);
}

function DCN(stuff) {
	window.location.replace('fhbugn.asp?OB=' + OB + '&CharsAt=' + stuff);
}

function DB(stuff) {
	window.location.replace('fhbug.asp?Type=' + stuff);
}


function PC(stuff) {
	stuff.style.cursor = 'pointer';
	stuff.style.backgroundColor = BGCOLOR_S
}

function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null && pb != null) {
		window.top.Interface.location.replace('fhcustomp.asp?CharsAt=' + pb + '&Type=1');
	}
}