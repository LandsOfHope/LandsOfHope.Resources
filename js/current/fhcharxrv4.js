var CharacterID = CharacterID;
var IPath = window.top.FHIPR;
var IPath2 = window.top.FHIPIM;
var Infos = new Array();
var IC = 0

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AM(PictureID, Color, Sex, Cost, v) {
//c="' + Color + '" v=' + v + ' p="' + PictureID + '" s="' + Sex + '" d="' + Cost + '"

if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(PictureID, Color, Sex, Cost, v);

document.write('<div id="I' + IC + '" onmouseover="PC(' + IC + ');" onmouseout="RC(' + IC + ');"  onclick="DC(' + IC + ');" style="padding: 1px; margin: 1px; float: left; width: 40px; height: 40px; background-color: ' + Color + '"><img src=\'' + IPath + PictureID + '\' width=40 height=40></div>');
IC = IC + 1;
}


function newInfo(PictureID, Color, Sex, Cost, v) {
this.c = Color;
this.p = PictureID;
this.s = Sex;
this.d = Cost;
this.v = v;
}

function Fin(r, r2, s) {
document.write('<tr><td colspan=\'7\'><table class="weakcell" width="300"><tr><td>Character Name:</td><td><input name=CharName id=CharName size=15 maxlength=30 value=""></td><td><td colspan=2><' + strClicky1 + ' onclick="if (getObj(\'CharName\').value != \'\') {window.open(\'fhfhd.asp?item_name=\' + getObj(\'CharName\').value + \'&item_number=67&a3=1&custom=' + CharacterID + '\', \'PP\', \'\')};">1hc</button></td></tr>');
document.write('<tr><td>Character Title:</td><td><input name=CharTitle id=CharTitle size=15 maxlength=30 value=""></td><td><td colspan=2><' + strClicky1 + ' onclick="if (getObj(\'CharTitle\').value != \'\') {window.open(\'fhfhd.asp?item_name=\' + getObj(\'CharTitle\').value + \'&item_number=68&a3=1&custom=' + CharacterID + '\', \'PP\', \'\')};">1hc</button></td></tr>');
document.write('<tr><td>Chat Tag:</td><td><input name=ChatTag id=ChatTag size=15 maxlength=15 value=""></td><td><td colspan=2><' + strClicky1 + ' onclick="if (getObj(\'ChatTag\').value != \'\') {window.open(\'fhfhd.asp?item_name=\' + getObj(\'ChatTag\').value + \'&item_number=286&a3=1&custom=' + CharacterID + '\', \'PP\', \'\')};">1hc</button></td></tr></table></td></tr>');
document.write('<tr><td colspan=\'7\' class=\'weakcell\' width="300">Using the Character > Appearance Profile system you can switch backwards and forwards between different titles, names and pictures and even go back to your original.</td></tr>');
if (r2 == 0 || r == r2) {
	if (s == 'U') {
	} else {
		document.write('<tr><td colspan=\'7\'><table class="weakcell" width="300"><tr><td colspan=4><b>Sex Change (' + s + ' to ' + (s == 'F' ? 'M' : 'F') + ')</b><br>Your characters sex will change along with your current picture and you will lose previous pictures unlocked with the old sex.</td></tr><tr><td>New Name:</td><td><input name=CharName2 id=CharName2 size=15 maxlength=30 value=""></td><td><td colspan=2><' + strClicky1 + ' onclick="if (getObj(\'CharName2\').value != \'\') {window.open(\'fhfhd.asp?item_name=\' + getObj(\'CharName2\').value + \'&item_number=311&a3=1&custom=' + CharacterID + '\', \'PP\', \'\')};">1hc</button></td></tr></table></td></tr>');
	}
} else {
	document.write('<tr><td colspan=\'7\' id=tred>Sex change can only happen if you are not polymorphed.</td></tr>');
}
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>Portrait</b><Br>Cost: $' + (Infos[v].d * 5) + '/ ' + Infos[v].d + 'hc<br>Sex: ' + Infos[v].s;
	getObj('Pic').innerHTML = '<img src="' + IPath + Infos[v].p + '">';
	getObj('Buttons').innerHTML = '<' + strClicky3 + ' onclick="window.open(\'fhfhd.asp?item_name=Avatar Change ' + Infos[v].p + '&item_number=' + Math.abs(Infos[v].v) + '&a3=' + Infos[v].d + '&custom=' + CharacterID + '\', \'PP\', \'\');">Purchase</button>';
}


function PC(v) {
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor=Infos[v].c
}
