var SC = 0;
var Spells = new Array();
var Processing = 0;
var IPath = window.top.FHIPS;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function DC(v) {
getObj('Stuff2').innerHTML = '<b>' + Spells[v].s + '</b><br>Pieces Required: ' + Spells[v].x + '<br>Pieces Held: ' + Spells[v].spc;
getObj('Pic').innerHTML = "<img src='" + IPath + (Spells[v].p == '' ? 'na.gif' : Spells[v].p) + "'>";
getObj('Buttons').innerHTML = Adr('window.frames[\'ResultsOfit\'].location.replace(\'fhsetyp.asp?test=' + Spells[v].v+ '\');', 'Your Pieces', 'Your Pieces') + (Spells[v].spc < Spells[v].x ? Adr('window.frames[\'ResultsOfit\'].location.replace(\'fhsetmp.asp?test=' + Spells[v].v+ '\');', 'Missing Pieces', 'Missing Pieces') : Adr('window.frames[\'ResultsOfit\'].location.replace(\'fhsetys.asp?CharsAt=' + Spells[v].v + '\');', 'Activate', 'Activate'));
}

function AC(ItemID, s, spc, x, PictureID) {
var Color = LITE;
if (PictureID == '0') {PictureID = ''}
if (PictureID == '') {PictureID = 'na'}
PictureID = PictureID + '.png'

if (Spells[SC] == null) {
	Spells[SC] = new Array();
}
Spells[SC] = new Spell(ItemID, s, spc, x, PictureID, Color);

document.write('<tr id="S' + SC + '" onmouseover="PC(' + SC + ')" onmouseout="RC(' + SC + ')"  onclick="DC(' + SC + ')" style="color: ' +  Color + '; padding-left: 5px"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + s + '</td></tr>');
SC = SC + 1;
}

function Spell(ItemID, s, spc, x, PictureID, Color) {
this.s = s;
this.v = ItemID;
this.spc = spc;
this.p = PictureID;
this.x = x;
this.c = Color;
}

function RC(v) {
	window.top.hideTip();
	getObj('S' + v).style.cursor = '';
	getObj('S' + v).style.backgroundColor='';
}

function PC(v) {
	getObj('S' + v).style.cursor = 'pointer';
	getObj('S' + v).style.backgroundColor=BGCOLOR_S
}
