var PageNo = PageNo;
var county = 0;
var IPath = window.top.FHIPR;
var Processing = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(f, fn, PictureID, fln, flp, fit, fr) {
	var Color = LITE;
	PictureID = flp;
	document.write('<td width="50%"><table class="weakcell" cellpadding=1 cellspacing=1 height="100%"><tr><td width=30><img width=30 height=30 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td valign=top><b>' + fn + '</b><br>Leader: ' + fln + '</td><td><center>' + Adr('if (Processing == 0) {confirm(\'You may only join one faction in this realm, so are you sure you wish to join the ' + fn + ' faction?\', ' + f + ');}', 'Join ' + fn, 'Join') + '</center></td></tr><tr><td colspan=3>' + fit + '</td></tr><tr height="100%"><td colspan=3></td></tr><tr><td colspan=3 class="weakercell">' + fr + '</td></tr></table></td>');
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && Processing == 0) {
			Processing = 1;
			window.top.Interface.location.replace('fheventjoin.asp?Type=' + pb);
		}
	}
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}