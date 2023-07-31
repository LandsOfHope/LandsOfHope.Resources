var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIP
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AM(PictureID, Color, URL, Named, URL2, BColor, TColor) {
document.write('<div style="float: left; width: 300px; height: 60px; margin: 1px; padding: 1px; border: 1px dotted ' + BColor + '; background-color: ' + Color + ';"><table cellpadding=1 cellspacing=1 style="color: ' + TColor + '; width: 294px; height: 54px;" class="weakercell"><tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')"  onclick="window.location.replace(\'fhalter' + URL2 + '.asp\');"><td><img src=\'' + IPath + URL + '/' + PictureID + '\' width=40 height=40></td><td>' + Named + '</td></tr></table></div>');
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo2(PictureID, Color, URL, Named, URL2, BColor, TColor);
IC = IC + 1;
}

function newInfo2(PictureID, Color, URL, Named, URL2, BColor, TColor) {
this.c = Color;
this.p = PictureID;
this.t = Named;
this.u = URL;
this.u2 = URL2;
this.BColor = BColor;
this.TColor = TColor;
}


function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('' + IPath + Infos[v].u + '/' + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Infos[v].t);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=Infos[v].BColor;
}