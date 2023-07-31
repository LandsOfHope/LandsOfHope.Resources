
var counteri = 0;
var AM = AM;
var CharsAt = CharsAt;
var IPath = window.top.FHIPR;
var IC = 0;

var Processing = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AH(ShopC, SkillGroup, Message, MD, MessageID, CharID, PictureID) {
	counteri = counteri + 1
	if (counteri > 1) {
		counteri = 0;
		var BGC = BGCOLOR;
		var BGC2 = BGCOLOR_S;
	} else {
		var BGC = BGCOLOR_S;
		var BGC2 = BGCOLOR;
	}
	if (PictureID == '') {
		PictureID = 'na.gif';
	}
	document.write("<tr class='navborderx' style='background-color: " + BGC + ";'><td colspan=3><table width='100%' cellpadding=0 cellspacing=0><td class='title' width='50%' style='padding-left: 0px'>" + SkillGroup + "</td><td class='title' style='padding-left: 0px'>" + MD + "</td><td width=50><" + strClicky + " title='Private Message Poster' onclick='window.location.replace(\"fhMess.asp?CharsAt=" + CharID + "\");'>PM</button></td></tr></table></td></tr><tr style='background-color: " + BGC2 + ";'><td valign=top width=40><img src='" + IPath + PictureID + "'></td><td class='weakcell' width='100%'>" + Message + "</td><td valign=top width=50>" + (AM != 0 ? "<input name=ItemID id=ItemID value=" + MessageID + " type=checkbox>" : "") + "</td></tr>");
	IC = IC + 1;
}

function GoP(PageNo) {
	window.location.replace('?CharsAt=' + CharsAt + '&P=' + PageNo + '');
}


function SA(how) {
	var x = 0;
	var totala = 0;
	if (getObj("ItemID") != null) {
		if (IC <= 1) {
			getObj("ItemID").checked = how;
		} else {
			for (x = 0; x < IC; x++) {
				getObj("ItemID")[x].checked = how;
			}
		}
	}
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && Processing == 0) {
			Processing = 1;
			getObj('Delly').submit();
		}
	}
}