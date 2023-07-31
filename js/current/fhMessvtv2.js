var Special = Special;
var IPath = window.top.FHIPR;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AM(Shop2, RDate, Mess, FID, Color, Recipient, PictureID, MDate, Message, MID, xpd, giftid, giftname, giftpicture, cost) {
	var bg = ''

	document.write('<tr width="615" class="weakercell" n="' + Recipient + '" b=' + FID + '><tr><td width="550" style="color: ' + Color + '; padding-left: 5px;"><table class="weakercell" width="550"><tr><td width="100">' + (Shop2 == 1 ? 'From: ' : 'To: ') + '</td><td width="200"><b>' + Recipient + '</b></td><td width="100">Expiry Date:</td><td>' + (xpd == '' ? 'None' : '<font id=tred>' + xpd + '</font>') + '</td></tr><tr><td width="100">Sent:</td><td width="200"><b>' + MDate + '</b></td><td width="100">Read:</td><td width="200">' + (RDate != '' ? '<b>' + RDate + '' : 'Not Yet') + '</td></tr><tr><td width="550" colspan=4>Subject: ' + Message + '</td></tr></table></td><td valign=top><img src="' + IPath + PictureID + '"></td></tr><tr><td colspan="2" width="615" style="color: ' + Color + '; padding-left: 5px"><div style="height: 180; width: 605; overflow: auto" class="weakcell">' + Mess + '</div></td></tr>');
	if (giftid != 0) {
		document.write('<tr><td><table cellpadding=0 cellspacing=0 class="weakcell"><tr><td valign=top>The following item is attached:</td><td><table cellpadding=0 cellspacing=0 class="weakcell" width="300" style="border: 1px dotted gold; color: gold; background-color: ' + BGCOLOR_S + '"><tr><td><img src="https://lohcdn.com/game/i/' + giftpicture + '"></td><td><b>' + giftname + '</b><br>Cost: ' + window.top.BSGM(cost) + '</td><td>' + (giftid > 0 ? '<' + strClicky2 + ' onclick=\'confirm("Are you sure you wish to spend ' + window.top.BSGM(cost) + ' to retrieve ' + giftname + '?",2);\'>Retrieve Item</button><' + strClicky2 + ' onclick=\'confirm("Are you sure you wish to send this item back (no cost)?",3);\'>Return Item</button>' : '') + '</td></tr></table></td></tr></table></td></tr>');
	}
}

function DC(stuff, subject) {
	window.location.replace('fhmessn.asp?CharsAt=' + stuff + '&subject=' + subject);
}

function DB(stuff) {
	window.location.replace('fhmess2.asp?Type=' + stuff);
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			if (pb < 0) {
				window.top.Interface.location.replace('fhmessb.asp?CharsAt=' + Math.abs(pb));
			} else if (pb == 2) {
				window.top.Interface.location.replace('fhmessvt.asp?retrieve=' + Special);
			} else if (pb == 3) {
				window.top.Interface.location.replace('fhmessvt.asp?retrieve=-' + Special);
			} else {
				window.top.Interface.location.replace('fhmessvt.asp?delete=' + pb);
			}
		}
	}
}