var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPR;
var Processing = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AM(PictureID, Color) {
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, PictureID);
document.write('<div id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="width: 40px; height: 40px; margin: 1px; padding: 1px; float: left; background-color: ' + Color + ';"><img src=\'' + IPath + PictureID + '\' width=40 height=40></div>');
IC = IC + 1;
}

function newInfo(Color, PictureID) {
this.c = Color;
this.p = PictureID;
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>Picture</b>';
	getObj('Pic').innerHTML = getObj('I' + v).innerHTML;
	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {window.location.replace(\'?Pic=' + Infos[v].p + '\');}','Use','Use');
}


function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor=Infos[v].c;
}

function PC(v) {
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}