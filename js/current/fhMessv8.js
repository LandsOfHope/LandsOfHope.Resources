var IC = 0;
var Infos = new Array();
var PageNo = PageNo;
var DefaultShop = 0;
var Shop = 0;
var Type2 = Type2;
var IPath = window.top.FHIPR;
var SPath = window.top.FHIP + 'icons/';

document.write('<script src="js/formatting.js" language="JavaScript"></script>');


function KP(stuff) {
	if (stuff.value.length > 1024) {
		event.returnValue=false;
	}
}

function ColumnHeaders() {
	document.write('<tr width="600" class=\'boldcell\' style="width: 600;"><td width="15"></td><td width="330">' + CH('Subject', 'Subject') + '</td><td width=15></td><td width="100">' + (Type2 != 1 ? CH('To', 'ForID') : CH('From', 'ByeID')) + '</td><td width="100">' + CH('Date', 'Dby') + '</td><td width="15"></td></tr>');
}

function CH(strdisplay, ob1) {
	return '' + strdisplay + '';
}


function DBX(fid, fn, fpp, fp, fc) {
document.write("<tr><td><img src='" + window.top.FHIP + fpp + "/" + fp + "' width=15 height=15></td><td style=\"" + strButtonx + "; width: 125; color: " + fc + "\" " + strClicksns + " c='" + fc + "' onclick=\"" + (fid == 0 ? "DCN(0)" : (fid < 0 ? "DCNN(0)" : "DB('" + fid + "')")) + "\">" + fn + "</td></tr>");
}

function AM(Shop2, Unread, FID, Color, Recipient, PictureID, MDate, Message, MID, gid, tid, tp) {
var bgx = ''
if ((IC / 2) == Math.round(IC / 2)) {bgx = BGCOLOR}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Shop2, Unread, FID, Color, Recipient, PictureID, MDate, Message, MID, bgx, gid, tid, tp);
document.write('<tr id="I' + IC + '" style="width: 475;' + (bgx != '' ? 'background-color: ' + bgx : '') + '"><td><img src="' + SPath + (gid != 0 || tid != 0 ? 'email_attach.png" title="Attached Item"' : (Unread == 1 ? 'email_open.png" title="Unread message"' : 'email.png" title="Read message"')) + '></td><td onmouseover="PC(' + IC + ', 1)" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')">' + (Unread == 1 ? '<b>' : '') + Message + (Unread == 1 ? '</b>' : '') + '</td><td><img src="' + IPath + PictureID + '" width=15 height=15></td><td onmouseover="PC(' + IC + ', 2)" onmouseout="RC(' + IC + ')" onclick="DCN(' + FID + ')" width="150">' + Recipient + '</td><td width="120">' + MDate + '</td><td>' + (gid == 0 && tid == 0 ? '<input type=checkbox name=ItemID value="' + MID + '" style="width: 12px; height: 12px">' : '') + '</td></tr>');
IC = IC + 1;
}

function newInfo(Shop2, Unread, FID, Color, Recipient, PictureID, MDate, Message, MID, bgx, gid, tid, tp) {
this.c = Color;
this.Shop2 = Shop2;
this.p = PictureID;
this.i = Message;
this.u = Unread;
this.b = FID;
this.n = Recipient;
this.MD = MDate;
this.v = MID;
this.bgx = bgx;
this.gid = gid;
this.tid = tid;
this.tp = tp;
}

function GoP(PageNo) {
window.location.replace('?Type=' + Type2 + '&P=' + PageNo);
}

function SA(how) {
var x = 0; 
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

function DC(v) {
	window.location.replace('fhmessv' + (Infos[v].tid != 0 ? 't' : '') + '.asp?P=' + PageNo + '&CharsAt=' + Infos[v].v);
}

function DCN(v) {
	window.location.replace('fhmessn.asp?P=' + PageNo + '&CharsAt=' + v);
}

function DCNN(stuff) {
	window.location.replace('fhmessnf.asp?P=' + PageNo + '&CharsAt=' + stuff);
}

function DB(stuff) {
	window.location.replace('?P=' + PageNo + '&Type=' + stuff);
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor=Infos[v].bgx;
}

function PC(v, pctype) {
if (pctype == 1) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), '<b>' + Infos[v].i + '</b><br>Click to read this message.');
} else {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), '<b>' + Infos[v].n + '</b><br>Click to message ' + Infos[v].n + '.');
}
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			if (pb == 1) {
				getObj('Delly').submit();
			} else {
				getObj('Delly').action = 'fhmessm.asp';
				getObj('Delly').submit();
			}
		}
	}
}