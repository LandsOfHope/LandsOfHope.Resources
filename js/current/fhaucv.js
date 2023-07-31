
var PageNo = PageNo;
var Cat = Cat;
var SN = SN;
var IPath = window.top.FHIPR;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function fx1(stuff) {
var re = /^\$|,|'|"|%|@|#/g;
stuff.value = stuff.value.replace(re, "");
if (stuff.value == '' || stuff.value == null) {
	stuff.value = 0;
	}
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (returnVal == true) {
			getObj('bid').value='QSP';
			getObj('bidform').submit();
		}
	}
}