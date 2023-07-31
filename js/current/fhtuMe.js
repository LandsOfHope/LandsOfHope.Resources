var PageNo = PageNo;
var DefaultShop = 0;
var TM = TM;
var counteri = 0;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(Px) {
	window.location.replace('fhtume.asp?P=' + Px);
}

function AH(ShopC, SkillGroup, MessageID, MessageDate, Replies, P, i, Poll) {
counteri = counteri + 1
if (counteri > 1) {
	counteri = 0;
	var BGC = BGCOLOR;
} else {
	var BGC = BGCOLOR_S;
}
document.write("<tr style='background-color: " + BGC + ";" + (P != 0 || TM == i ? "font-weight: " + (P != 0 ? "bold" : "italic") + "; color:gold;" : "") + "'><td width=400 onmouseover=\"PC(this)\" onmouseout=\"RC(this)\" onclick=\"window.location.replace(\'fhtum" + (Poll != 0 ? "P" : "V") + ".asp?CharsAt=" + MessageID + "\');\">" + (Poll != 0 ? "POLL: " : "" ) + SkillGroup + "</td><td width='150'>" + MessageDate + "</td><td width='50'>" + Replies + "</td></tr>");
}

function PC(stuff) {
	stuff.style.cursor = 'pointer';
	stuff.style.backgroundColor=BGCOLOR_S
}

function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor='';
}