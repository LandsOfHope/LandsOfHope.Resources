var voted 
var counteri = 0;
var AM = AM;
var CharsAt = CharsAt;
var Processing = 0;

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AH(ShopC, SkillGroup, Message, MD, MessageID, CharID, o1, or1, o2, or2, o3, or3) {
counteri = counteri + 1
if (counteri > 1) {
	counteri = 0;
	var BGC = BGCOLOR;
	var BGC2 = BGCOLOR_S;
} else {
	var BGC = BGCOLOR_S;
	var BGC2 = BGCOLOR;
}
var total = or1 + or2 + or3;
document.write("<tr class='menucell' style='background-color: " + BGC + ";'><td colspan=2>Subject: " + SkillGroup + "</td><td colspan=2>Date: " + MD + "</td><td><" + strClicky + " title='Private Message Poster' onclick='window.location.replace(\"fhMess.asp?CharsAt=" + CharID + "\");'>PM</button></td></tr><tr style='background-color: " + BGC2 + "'><td colspan=4 class='weakcell'>" + Message + "</td><td valign=top>" + (AM != 0 ? "<input name=ItemID id=ItemID value=" + MessageID + " type=checkbox>" : "") + "</td></tr>");
if (voted == 0) {
	if (o1 != '') {
		document.write("<tr height=5><td colspan=3 class='weakcell'>" + o1 + "</td><td></td><td><input type=radio name=optionx value=1></td></tr>");
	}
	if (o2 != '') {
		document.write("<tr height=5><td colspan=3 class='weakcell'>" + o2 + "</td><td></td><td><input type=radio name=optionx value=2></td></tr>");
	}
	if (o3 != '') {
		document.write("<tr height=5><td colspan=3 class='weakcell'>" + o3 + "</td><td></td><td><input type=radio name=optionx value=3></td></tr>");
	}
	document.write("<tr height=5><td colspan=5></td></tr>");
}
document.write("<tr height=5><td colspan=5></td></tr>");
document.write("<tr height=5><td class='boldcell' colspan=5>Results</td></tr>");
document.write("<tr height=5><td class='weakcell' colspan=5>Total Votes: " + total + "</td></tr>");
if (o1 != '') {
	document.write("<tr height=5><td colspan=3 class='weakcell' " + (voted == 1 ? "style='color: #6666ff; font-weight: bold' title='You voted for this'" : "") + ">" + o1 + "</td><td>" + or1 + " votes, " + GetPerc(total, or1) + "%</td><td></td></tr>");
}
if (o2 != '') {
	document.write("<tr height=5><td colspan=3 class='weakcell' " + (voted == 2 ? "style='color: #6666ff; font-weight: bold' title='You voted for this'" : "") + ">" + o2 + "</td><td>" + or2 + " votes, " + GetPerc(total, or2) + "%</td><td></td></tr>");
}
if (o3 != '') {
	document.write("<tr height=5><td colspan=3 class='weakcell' " + (voted == 3 ? "style='color: #6666ff; font-weight: bold' title='You voted for this'" : "") + ">" + o3 + "</td><td>" + or3 + " votes, " + GetPerc(total, or3) + "%</td><td></td></tr>");
}
}

function GetPerc(maxx, curr) {
	if (maxx == 0 || curr == 0) {
		return 0
	} else {
		return Math.floor((100 / maxx) * curr)
	}
}

function GoP(PageNo) {
window.location.replace('?CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function SA(how) {
var x = 0;
var totala = 0;
if (getObj("ItemID") != null) 
{
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