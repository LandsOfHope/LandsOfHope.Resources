var Processing = 0;
var PageNo = PageNo;
var CharsAt = CharsAt;
var counter = 0;
var P2 = P2;
var Tutorial = Tutorial;
var Type2 = Type2;
var IPath = window.top.FHIPR;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AH(QN, Q) {
var Color = 'gold';
var PictureID = 'na.gif';
}

function GoP(PageNo) {
window.location.replace('?P2=' + PageNo + '&P=' + PageNo + '&Type=' + Type2  +'&CharsAt=' + CharsAt);
}

function AM(PictureID,QuestName, Color, Material, Who, X, Y, G, Quest, QuestID, Spe, qt, qr) {
var bg = ''
if (PictureID == '0') {PictureID = ''}
counter = counter + 1;
if (Material == '') { Material = 'INCOMPLETE'}
if ((counter / 2) == Math.round(counter / 2)) {bg = BGCOLOR_S}
DCX(PictureID, QuestName, Color, Material, Who, X, Y, G, Quest, QuestID, qt, qr);
}

function AM2(PictureID,QuestName, Color, Who, X, Y, G, Quest, Spe, qr) {
var bg = ''
var qt = 0;
if (PictureID == '0') {PictureID = ''}
counter = counter + 1;
if (qr == null) {
	qr = '';
}
if ((counter / 2) == Math.round(counter / 2)) {bg = BGCOLOR_S}
DCX(PictureID, QuestName, Color, '', Who, X, Y, G, Quest, 0, qt, qr);
}

function DCX(PictureID,QuestName, Color, m, Who, X, Y, G, Quest, q, qt, qr) {
var strx = '';
strx = '<table class=\'weakcell\' height=\'100%\' width=\'100%\'><tr><td colspan=2><b>' + QuestName + '</b></td><tr><td colspan=2>' + Quest + '</td></tr><tr><td style=\'color: ' +  Color +'\' colspan=2>Status: ' + (m == '' ? 'COMPLETE' : (m == 'RETURN' ? 'Return to ' + Who + ''  : m)) + '</td></tr><tr><td wisth=\'240\'>' + (m == 'DELIVERING' ? 'Deliver to: ' : 'From: ') + Who + (Tutorial != 0 ? '<br>Location: The Estate' : '<br>Location: ' + X + ', ' + Y + '<br>Realm: ' + GetRealm(G)) + '' + (qr != '' ? '<br>Rewards: ' + qr : '') + '</td><td width=40><img src=\'' + IPath + PictureID + '\'></td></tr>';
if (q != 0) {
	strx = strx + '<tr><td colspan=2><' + strClicky3 + ' onclick="if (Processing ==0) {Processing = 1; window.parent.location.replace(\'' + (Type2 > 0 ? 'fhshopq.asp?CharsAt=' + Type2 + '&ItemID=-' + q : 'fhquest.asp?ID=' + q) + '&P=' + PageNo + '\');this.disabled=true;}" style=\'width: 85\'>Forfeit</button></td></tr>';
}
if (m == 'RETURNING' && Type2 > 0) {
	strx = strx + '<tr><td colspan=2><' + strClicky3 + ' onclick="if (Processing ==0) {Processing = 1; window.parent.location.replace(\'fhquesta.asp?CharsAt=' + Type2 + '&Action=COMPLETE&QT=' + qt + '&Type=' + q + '\');this.disabled=true;}" style=\'width: 85\'>Complete</button></tr></tr>'
}
strx = strx + '<tr height=\'100%\'><td colspan=2>&nbsp;</td></tr></table>'
document.write(strx);
}