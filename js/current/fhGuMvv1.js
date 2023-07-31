var CharacterID = CharacterID;
var counteri = 0;
var AM = AM;
var CharsAt = CharsAt;
var IC = 0;
var infos = new Array();

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function popupwindowx(url, message, pb, defaultvalue, title, icon, style, pwwidth, pwheight) {
	if (title == undefined) {
		title = '';
	}
	if (icon == undefined) {
		icon = '';
	}
	if (style == undefined) {
		style = '';
	}
	if (pwwidth == undefined) {
		pwwidth = 350
	}
	if (pwheight == undefined) {
		pwheight = 250
	}

	window.top.showPopWin(url + "message=" + message + "&defaultvalue=" + defaultvalue + "&title=" + title + "&icon=" + icon + "&style=" + style, pwwidth, pwheight, ForumReturn, null, title, pb);
}

function ForumReturn(returnVal, pb) {
	if (returnVal != null) {
		if (returnVal > 0) {
			//alert(returnVal);
			window.top.Interface.location.reload(-1);
		}
	}
}

function AH(ShopC, SkillGroup, Message, MD, MessageID, CharID) {
counteri = counteri + 1
var BGC = BGCOLOR;
var BGC2 = BGCOLOR_S;
if ((counteri / 2) == Math.round(counteri / 2)) {BGC = BGCOLOR_S; BGC2 = BGCOLOR}
document.write("<tr style=\"" + strButtonx + "; width: 615; color: " + LITE + "\" class=\"btn\"><td colspan=2>Subject: " + SkillGroup + "</td><td colspan=2>Date: <b>" + MD + "</b></td><td>" + Adr("window.location.replace('fhMess.asp?CharsAt=" + CharID + "');","Send postee a Private Message", "PM") + (AM != 0 || CharacterID == CharID ? Adr("popupwindowx('fhGumVE.asp?CharsAt=" + MessageID + "&', '', 1, 0, 'Edit Message', '', '', 400, 350);","Edit a message", "Edit") : "") + "</td></tr><tr style='background-color: " + BGC2 + ";'><td colspan=4 class='weakcell'>" + Message + "</td><td valign=top>" + (AM != 0 ? "<input name=ItemID id=ItemID value=" + MessageID + " type=checkbox style='width: 12px; height: 12px;'>" : "") + "</td></tr>");
document.write("<tr height=5><td colspan=5></td></tr>");
IC = IC + 1;
}

function GoP(PageNo) {
window.location.replace('?CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function SA(how) {
var x = 0;
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
		if (pb != null) {
			getObj('Delly').submit();
		}
	}
}