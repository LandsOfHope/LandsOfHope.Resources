var Processing = 0;
var PageNo = PageNo;
var CharsAt = CharsAt;
var counter = 0;
var Tutorial = Tutorial;
var P2 = P2;
var Type2 = Type2;
var QuestID = QuestID;
var IPath = window.top.FHIPR;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AH(QN, Q) {
var Color = 'gold';
var PictureID = 'na.gif';
//document.write('<tr width="280" class="it" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px"><td colspan=3>' + Q + '</td></tr>');
}


function GoP(PageNo) {
window.location.replace('?P2=' + PageNo + '&P=' + PageNo + '&Type=' + Type2  +'&CharsAt=' + CharsAt);
}

function AM(PictureID,QuestName, Color, Material, Who, X, Y, G, Quest, QuestID, Spe, qt) {
var bg = ''
if (PictureID == '0') {PictureID = ''}
counter = counter + 1;
if (Material == '') { Material = 'INCOMPLETE'}
if ((counter / 2) == Math.round(counter / 2)) {bg = BGCOLOR_S}
DCX(PictureID, QuestName, Color, Material, Who, X, Y, G, Quest, QuestID, qt);
}

function AM2(PictureID,QuestName, Color, Who, X, Y, G, Quest, Spe) {
var bg = ''
var qt = 0;
if (PictureID == '0') {PictureID = ''}
counter = counter + 1;
if ((counter / 2) == Math.round(counter / 2)) {bg = BGCOLOR_S}
DCX(PictureID, QuestName, Color, '', Who, X, Y, G, Quest, 0, qt);
}

function DCX(PictureID,QuestName, Color, m, Who, X, Y, G, Quest, q, qt) {
var strx = '';
strx = '<table class=\'weakcell\' height=\'100%\' width=\'100%\'><tr><td colspan=2><b>' + QuestName + '</b></td><tr><td colspan=2>' + Quest + '</td></tr><tr><td style=\'color: ' +  Color +'\' colspan=2>Status: ' + (m == '' ? 'COMPLETE' : (m == 'RETURN' ? 'Return to ' + Who + ''  : m)) + '</td></tr><tr><td wisth=\'240\'>' + (m == 'DELIVERING' ? 'Deliver to: ' : 'From: ') + Who + (Tutorial != 0 ? '<br>Location: The Estate' : '<br>Location: ' + X + ', ' + Y + '<br>Realm: ' + GetRealm(G)) + '</td><td width=40><img src=\'' + IPath + PictureID + '\'></td></tr>';
strx = strx + '<tr><td colspan=2><' + strClicky3 + ' onclick="if (Processing ==0) {Processing = 1; window.parent.location.replace(\'fhquest.asp?CharsAt=' + CharsAt + '&ID=' + q + '&P=' + PageNo + '\');this.disabled=true;}" style=\'width: 85\'>Forfeit</button></td></tr>';
if (m == 'RETURNING' && Type2 > 0) {
	strx = strx + '<tr><td colspan=2>Can be Completed</tr></tr>'
}
strx = strx + '<tr height=\'100%\'><td colspan=2>&nbsp;</td></tr></table>'
document.write(strx);
}