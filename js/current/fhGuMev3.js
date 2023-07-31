var PageNo = PageNo;
var AM = AM;
var DefaultShop = 0;
var GuildLeader = GuildLeader;
var IC = 0;
var Infos = new Array();

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AH(ShopC, SkillGroup, MessageID, MessageDate, Replies, P, views, color, Poll) {
var BGC = '';
if ((IC / 2) == Math.round(IC / 2)) {BGC = BGCOLOR}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(ShopC, SkillGroup, MessageID, MessageDate, Replies, P, BGC, Poll);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" style="' + (color != '' ? 'color: ' + color + ';' : '') + 'background-color: ' + BGC + ' ' + (P != 0 ? ';font-weight: bold; color:#6464FF' : '') + '"><td width=400 onclick="DC(' + IC + ')" title="Click to view this message">' + (Poll != 0 ? '[Poll] ' : '') + SkillGroup + '</td><td width="150px">' + MessageDate + '</td><td width="50px">' + views + '</td><td width="50px">' + Replies + '</td><td>' + (AM != 0 ? '<input name=ItemID id=ItemID value=' + MessageID + ' type=checkbox style="height: 12px; width: 12px;">' : '') + '</td></tr>');
IC = IC + 1;
}

function DC(v) {
	if (Infos[v].Poll != 0) {
		window.location.replace('fhGumP.asp?CharsAt=' + Infos[v].v + '&P2=' + PageNo);
	} else {
		window.location.replace('fhGumV.asp?CharsAt=' + Infos[v].v + '&P2=' + PageNo);
	}
}

function newInfo(ShopC, SkillGroup, MessageID, MessageDate, Replies, P, BGC, Poll) {
this.b = BGC;
this.ShopC = ShopC;
this.t = SkillGroup;
this.v = MessageID;
this.md = MessageDate;
this.r = Replies;
this.p = P;
this.Poll = Poll;
}


function SA(how) {
var x = 0;
var totala = 0;
if (getObj("ItemID") != null) 
{
	if (IC <= 1) {
		getObj("ItemID").checked = how;
	} else {
		for (x = 0; x < IC; x++) {
			getObj("ItemID")[x].checked = how;
		}
	}
}
}

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '');
}


function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor=Infos[v].b;
}

function PC(v) {
window.top.InfoTip('',Infos[v].t);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			getObj('Delly').submit();
		}
	}
}