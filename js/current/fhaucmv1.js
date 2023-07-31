
var PageNo = PageNo;
var SN = SN;
var IPath = window.top.FHIP
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function fx1(stuff) {
	var re = /^\$|,|'|"|%|@|#/g;
	stuff.value = stuff.value.replace(re, "");
	if (stuff.value == '' || stuff.value == null) {
		stuff.value = 0;
	}
}


function AC(e, IID, ItemName, t, PictureID, mb, b, cd, cc, ip) {
	if (PictureID == '0') { PictureID = '' }
	var Color = LITE;
	if (e == 1) {
		Color = '#ff6666';
	} else if (e == 2) {
		Color = '#66ff66';
	}
	ip = ip + "/";
	// ip="' + ip + '" i="' + ItemName + '" e=' + e + ' t="' + t + '" cc=' + cc + ' cd="' + cd + '" v=' + IID + ' mb=' + mb + ' b=' + b + ' p="' + (PictureID == '' ? 'na.gif' : PictureID) + '"
	document.write('<tr style="color: ' + Color + '; padding-left: 5px"><td width=15><img src=\'' + IPath + ip + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'300\' valign=top onclick="DC(' + IID + ')"><b>' + ItemName + '</b> (' + (cc > 0 ? '<a style="padding-left: 0" href="fhaucc.asp?CharsAt=' + IID + '" title="View Comments">' + cc + '</a>' : cc) + ')' + (t != '' ? '<br>' + t : '') + '</td><td width=\'40\' valign=top>' + b + '</td><td id=\'tgold\' width=\'90\' valign=top>' + window.top.BSGM(mb) + '</td><td width=\'95\' valign=top>' + (e == 1 ? 'CLOSED' : (e == 2 ? 'FINISHED' : cd)) + '</td>' + (e == 0 ? '<td><' + strClicky + ' type=button onclick="DC2(' + IID + ');">Edit</button></td>' : '') + '<td><' + strClicky + ' type=button onclick="DC(' + IID + ');">View</button></td></tr>');
}


function GoP(PageNo) {
	window.location.replace('?SN=' + SN + '&P=' + PageNo + '');
}

function DC(stuff) {
	window.location.replace('fhaucmv.asp?CharsAt=' + stuff);
}

function DC2(stuff) {
	window.location.replace('fhauce.asp?CharsAt=' + stuff);
}