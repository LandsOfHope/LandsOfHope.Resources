var PageNo = PageNo;
var county = 0;
var IPath = window.top.FHIPR;
var Processing = 0;
var ac = 0;

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(a, ad, ad2, PictureID, an) {
var Color = 'gold';

if (ac = 0) {
	Color1 = BGCOLOR
	Color2 = BGCOLOR_S
	ac = 1
} else {
	Color2 = BGCOLOR
	Color1 = BGCOLOR_S
	ac = 0
}

//a="' + a + '" ad="' + ad + '" ad2="' + ad2 + '" c="' + Color + '" 
document.write('<tr style="color: ' +  Color + '" width="100%"><td width="100%"><table width="100%" cellpadding=2 cellspacing=1 class="weakcell"><tr style="background-color: ' + Color1 + '"><td width="100%" colspan="2"><b>Dated: </b> ' + ad2 + ' ago</td></tr><tr style="background-color: ' + Color2 + '"><td width="100%">' + a + '</td><td width="40" valign=top><img src="' + IPath + PictureID +'" title="' + an + '"></td></tr></table></td></tr>');
}

function GoP(PageNo) {
window.location.replace('?P=' + PageNo);
}