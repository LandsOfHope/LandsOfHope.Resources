var Processing = 0;
var CharsAt = CharsAt;
var PageNo = PageNo;
var counter = 0;
var IPath = window.top.FHIPI;

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');


function KP(stuff) {
	if (stuff.value.length > 1024) {
		return false;
	} else {
		return true;
	}
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

function AM(n, ct, Message) {
	var BID = CharsAt;
	counter = counter + 1
	var bg = ''
	var PictureID = 'fl1.gif';
	var Color = LITE;
	var ctt = '';
	if (ct == 1) {
		Color = '#6666ff';
		PictureID = 'fl3.gif';
		ctt = ' - Support Member'
	}
	if ((counter / 2) == Math.round(counter / 2)) { bg = BGCOLOR_S }
	document.write('<tr width="400" style="color: ' + Color + ';font-weight: bold"><td><img src="' + IPath + PictureID + '" width=10 height=10></td><td width=\'100%\'>' + n + ctt + '</td></tr>');
	document.write('<tr width="400" style="color: white;background-color: ' + bg + ';"><td></td><td>' + Message + '</td></tr>');
}

function DC(v) {
	window.location.replace('fhbugv.asp?OB=' + OB + '&CharsAt=' + v);
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
	if (returnVal != null) {
		if (pb != null && Processing == 0) {
			Processing = 1;
			getObj('Messy').submit();
		}
	}
}