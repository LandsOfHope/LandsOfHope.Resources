
var PageNo = PageNo;
var Cat = Cat;
var SN = SN;
var IPath = window.top.FHIPR;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

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
			if (pb == 1) {
				getObj('bid').value = 'QSP';
				getObj('bidform').submit();
			} else {
				getObj('bidform').submit();
			}
		}
	}
}

function placebid() {
	confirm('Do you wish to place a bid of ' + window.top.BSGM2(getObj('bid').value) + ' on this auction, the money will be deducted and unavailable to you until you are outbid or the auction completes.', 2);
}