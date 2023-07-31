var BkName = BkName;
var BkID = BkID;
var CharsAt = CharsAt;
var Processing = 0;
var IPath = window.top.FHIPI;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function KP2() {
	if (getObj('BookText').value.length >= 6000) {
		getObj('charco').innerHTML = 'Character Count: ' + getObj('BookText').value.length + '/6000 <font id=tred>TOO LONG</font>';
		return true;
	} else {
		getObj('charco').innerHTML = 'Character Count: ' + getObj('BookText').value.length + '/6000 OK';
		return false;
	}
}
