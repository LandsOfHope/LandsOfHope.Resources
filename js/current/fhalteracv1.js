var PageNo = PageNo;
var SPath = window.top.FHIPS;
var IPath = window.top.FHIPI;
var Countt = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function ADC(Itty, Color) {
	document.write('<div onmouseover="DC2(this)" onmouseout="DC1(this)" title="' + Itty + '" onclick="setimage(\'' + Color + '\');" width=100 style="float: left; padding: 1px; margin: 1px; width: 120px;"><table cellpadding=0 cellspacing=0 class=itemtext width="100%" style=" background-color: #' + Color + ';"><tr><td><center>' + Itty + '</center></td></tr></table></div>')

}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}

function setimage(newimg) {
	window.location.replace('?IID=1&img=' + newimg);
}

function DC1(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function DC2(stuff) {
	stuff.style.cursor = 'pointer';
	stuff.style.backgroundColor = BGCOLOR_S;
}

function SetChatColor(strc) {
	window.top.getObj('colors').value = strc;
	window.top.getObj('colorbox').style.backgroundColor = (strc == '0' ? 'white' : strc);
	window.top.getObj('message').focus();
}