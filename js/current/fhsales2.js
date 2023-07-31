var SN = SN;
var IPath = window.top.FHIP
var Processing = 0;
var PageNo = PageNo;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '&SN=' + SN);
} 
