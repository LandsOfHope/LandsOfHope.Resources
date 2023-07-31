var CharsAt = CharsAt;
var IPath = window.top.FHIPI;
var PirateRank = PirateRank;
var PirateFame = PirateFame;
var Processing = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AM(v, Named, pr, pf, pb) {
var bgc = '' + BGCOLOR;
if (pf > PirateFame || PirateRank >= pr) {
	if (PirateRank == pr) {
		var Color = 'gold';
		var bgc = '' + BGCOLOR_S;
	} else {
		var Color = '#ff6666';
	}
	var aok = 0;
} else {
	var Color = '#66ff66';
	var aok = 1;
}
//pb="' + pb + '" aok=' + aok + ' v=' + v + ' pr=' + pr + ' pf=' + pf + ' i="' + Named + '" c="' + Color + '" 
document.write('<tr width="100%" style="background-color: ' + bgc + '"><td width="500" style="color: ' + Color + '"><b>' + Named + '</b></td><td width="115">' + (aok == 1 ? Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt=' + CharsAt + '&ItemID=' +v + '\');}','Promote','Promote') : 'Rank ' + pr) + '</td></tr><tr><td colspan=2 class="weakcell">' + (pr <= PirateRank ? 'CONGRATULATIONS! You have already unlocked this rank.<br>' : pb) + '</td></tr>');
}