
var counteri = 0;
var AM = AM;
var AS = AS;
var CharsAt = CharsAt;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AH(ShopC, Message, MessageID, CharID) {
var BGC2 = ''
if ((counteri / 2) == Math.round(counteri / 2)) {BGC2 = BGCOLOR_S}
document.write("<tr class='menucell'><td colspan=4>" + (CharID == AS ? "<font id=tgold><b>Auction Seller</b></font>" : (Message.indexOf("#669999") != -1 ? "<font color=#669999><b>Gamemaster</b></font>" : "<b>Bidder</b>")) + "</td><td>" + Adr('window.location.replace(\'fhMess.asp?CharsAt=' + CharID + '\');','Private message', 'PM') + "</td></tr><tr style='background-color: " + BGC2 + "'><td colspan=4 class='weakcell'>" + Message + "</td><td valign=top>" + (AM != 0 ? "<input name=ItemID id=ItemID value=" + MessageID + " type=checkbox>" : "") + "</td></tr>");
counteri = counteri + 1
}

function GoP(PageNo) {
window.location.replace('?CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function SA(how) {
var x = 0; 
	if (getObj("ItemID") != null) {
		if (counteri == 1) {
			getObj("ItemID").checked = how;
		} else {
			for (x = 0; x < (counteri); x++) {
				getObj("ItemID")[x].checked = how;
			}
		}
	}
}
