var CharsAt = CharsAt;
var PageNo = PageNo;
var Type = Type;
var DefaultShop = 0;
var Shop = 0;
var IC = 0;
var Infos = new Array();
var strWhat = strWhat;
var IPath = window.top.FHIPR;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AM(PictureID,QuestName, Color, Quest, QuestID, Spe) {
var bgx = '';
if (PictureID == '0') {PictureID = ''}
if ((IC / 2) == Math.round(IC + 1 / 2)) {bgx = BGCOLOR}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, PictureID,QuestName, Quest, QuestID, Spe, bgx);
IC = IC + 1;
}

function newInfo(Color, PictureID,QuestName, Quest, QuestID, Spe, bgx) {
this.c = Color;
this.s = Spe;
this.p = PictureID;
this.b = bgx;
this.q = QuestID;
this.qn = QuestName;
this.d = Quest;
this.shop = Shop;
this.type = 1;
}

function AM2(PictureID,QuestName, Quest, QuestID, Spe, cn, mx, my, g, qsd, qd, mins) {
var bgx = '';
if (PictureID == '0') {PictureID = ''}
if ((IC / 2) == Math.round(IC / 2)) {bgx = BGCOLOR}
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo2(Color, PictureID,QuestName, Quest, QuestID, Spe, cn, mx, my, g, qsd, qd, mins, bgx);
IC = IC + 1;
}

function newInfo2(Color, PictureID,QuestName, Quest, QuestID, Spe, cn, mx, my, g, qsd, qd, mins, bgx) {
this.c = Color;
this.s = Spe;
this.p = PictureID;
this.b = bgx;
this.q = QuestID;
this.qn = QuestName;
this.d = Quest;
this.cn = cn;
this.mx = mx;
this.my = my;
this.g = g;
this.qsd = qsd;
this.qd = qd;
this.mins = mins;
this.shop = Shop;
this.type = 2;
}

function GoP(PageNo) {
window.location.replace('?Type=' + Type + '&CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function DC(v) {
	window.frames['ResultsOfit'].location.replace('gmECQ2.asp?P=' + PageNo + '&CharsAt=' + CharsAt + '&QuestID=' + Infos[v].q);
}

function GetRow(v) {
	if (Infos[v].type == 1) {
		return '<tr id="I' + v + '" onmouseover="PC(' + v + ')" onmouseout="RC(' + v + ')" onclick="DC(' + v + ')" ' + (Infos[v].b != '' ? 'style="background-color: ' + Infos[v].b + '"' : '') + '><td width=15><img src=\'' + IPath + Infos[v].p + '\' width=15 height=15></td><td width="280"style="color: ' + Infos[v].c + '; padding-left: 5px;">' + (Infos[v].s == 1 ? '<i>' + Infos[v].qn + '</i>' : Infos[v].qn) + '</b></td></tr>';
	} else {
		return '<tr id="I' + v + '" onmouseover="PC(' + v + ')" onmouseout="RC(' + v + ')" onclick="DC(' + v + ')" ' + (Infos[v].b != '' ? 'style="background-color: ' + Infos[v].b + '"' : '') + '><td width=40 valign=top><img src=\'' + IPath + Infos[v].p + '\' width=40 height=40></td><td width="575"><table cellpadding=1 cellspacing=1 class="weakcell" style="color: ' + Infos[v].c + '"><tr><td colspan=2>' + (Infos[v].s == 1 ? '<i>' + Infos[v].qn + '</i>' : Infos[v].qn) + '</b></td></tr><tr><Td>Quest Giver: ' + Infos[v].cn + '</td><td>Location ' + Infos[v].mx + ', ' + Infos[v].my + ' ' + window.top.GetRealm(Infos[v].g) + '</td></tr><tr><td>Start: ' + Infos[v].qsd + '&nbsp; &nbsp; End: ' + Infos[v].qd + '</td><td>Time taken: ' + window.top.HSM(Infos[v].mins) + '</td></tr></table></td></tr>';
	}
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor=Infos[v].b;
}

function PC(v) {
window.top.InfoTip('', '' + Infos[v].qn + '');
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function tgl(ShopNum) {
if (getObj('Shop' + ShopNum).innerHTML == '') {
	DrawShop(ShopNum);
}
else
{
	getObj('Shop' + ShopNum).innerHTML = '';
}
}

function DrawShop(ShopNum) {
var strout = '';
var y = 0;
for (y = 0; y < IC; y++) {
	if (Infos[y].shop == ShopNum) {
		strout = strout + GetRow(y);
	}
}
getObj('Shop' + ShopNum).innerHTML = '<table width="100%" cellspacing=0 cellpadding=1 class=\'itemText\'>' + strout + '</table>';
}

function AH(ShopC, SkillGroup) {
document.write("<tr><td colspan=2 style=\"" + strButtonx + "\" " + strClicksns + " onclick=\"tgl(" + ShopC + ")\">" + SkillGroup + "</td></tr><tr><td colspan=2 id=Shop" + ShopC + "></td></tr>");
}

