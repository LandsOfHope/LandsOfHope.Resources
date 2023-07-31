var CharsAt = CharsAt;
var IPath = window.top.FHIPR;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AH(ShopC, SkillGroup, SkillID, total, v, l, b) {
    document.write("<div onclick=\"DC(" + SkillID + ")\" id=Head" + ShopC + " style=\"margin: 1px;\" " + strClicksns + "><table class='weakcell' cellpadding=0 cellspacing=0 width='100%'><tr><td width='50%'>" + SkillGroup + " (" + total + ")</td><td width='50%'>" + (v) + (b > 0 ? " (" + b + ")" : "") + " of " + l + "</td></tr></table></div>");
}

function DC(v) {
    window.location.replace('fhmake2.asp?SkillID=' + v + '&CharsAt=' + CharsAt);
}