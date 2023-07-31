var InventoryItemID = InventoryItemID;
var CharsAt = CharsAt;
var PageNo = PageNo;
var SelectedS = -1;
var Highlighted = -1;
var IPath = "https://lohcdn.com/game/v/"
var RPath = "https://lohcdn.com/game/r/"
var IC = 0;
var Infos = new Array();
var Processing = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function tgl(ShopNum) {
	Highlighted = -1;
	if (getObj('Shop' + ShopNum).innerHTML == '') {
		DS(ShopNum);
	}
	else {
		getObj('Shop' + ShopNum).innerHTML = '';
	}
}

function DS(ShopNum) {
	var strout = '';
	var y = 0;
	for (y = 0; y < IC; y++) {
		if (Infos[y].h == ShopNum) {
			strout = strout + '<tr id="I' + y + '" onmouseover="PC(' + y + ')" onmouseout="RC(' + y + ')"   onclick="DC(' + y + ')"><td><table width="100%" class="weakcell"><tr><td width=40 style="background-image: URL(https://lohcdn.com/' + (Infos[y].d != 0 ? 'game/a/flame.gif' : 'game/v/' + Infos[y].p + '') + '); background-repeat: no-repeat;"><table cellpadding=0 cellspacing=0><tr height=24><td colspan=2></td></tr><tr><td width=24></td><td bgcolor="' + Infos[y].vfc + '"><img width=16 height=16 src="https://lohcdn.com/game/flags/' + Infos[y].vfid + '" align=right valign=bottom></td></tr></table></td><td width="260" style="padding-left: 5px" valign=top><b style="' + (Infos[y].anchor != 0 ? 'color: #ff6666;' : 'color: ' + Infos[y].c) + '">' + Infos[y].Named + '</b><br>Last Position: ' + Infos[y].x + ', ' + Infos[y].y + '<br>Victories: ' + Infos[y].vv + ', Losses: ' + Infos[y].vl + '</td><td><img width=40 height=40 src="' + RPath + Infos[y].p2 + '"></td><td width="260" style="padding-left: 5px"><table cellpadding=0 cellspacing=0 class="weakcell"><tr><td colspan=2>' + Infos[y].Named2 + '</td></tr>' + (Infos[y].i > 0 ? '<tr><td width=\'50%\'>Status:</td><td style=\'color: red;\'><i>Impounded</i></td></tr></table></td></tr>' : '<tr><td>Bounty:</td><td class="nav3">' + window.top.PSGM(Infos[y].vb) + '</td></tr><tr><td>Worth:</td><td class="nav3">' + window.top.PSGM(Infos[y].vw) + '</td></tr></table></td></tr>') + '</table></td></tr>';
		}
	}
	getObj('Shop' + ShopNum).innerHTML = '<table id=Min' + ShopNum + ' cellspacing=0 cellpadding=1 width="100%" class=\'weakercell\'>' + strout + '</table>';
}

function AH(ShopC, SkillGroup) {
	document.write("<tr><td colspan=3 style=\"" + strButtonx + "\" " + strClicksns + " onclick=\"tgl(" + ShopC + ")\" id=Head" + ShopC + ">" + SkillGroup + "</td></tr><tr><td colspan=2 id=Shop" + ShopC + "></td></tr>");
}

function AM(Color, vfid, vfc, v, f, n, x, y, g, Named, Picture, Named2, Picture2, vv, vl, vb, vw, vlvl, d, Shop, i) {
	if (CharsAt != 0 && v == CharsAt) {
		SelectedS = IC;
	}

	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, vfid, vfc, v, f, n, x, y, g, Named, Picture, Named2, Picture2, vv, vl, vb, vw, vlvl, d, Shop, i);
	IC = IC + 1;
}

function newInfo(Color, vfid, vfc, v, f, n, x, y, g, Named, Picture, Named2, Picture2, vv, vl, vb, vw, vlvl, d, h, i) {
	this.c = Color;
	this.d = d;
	this.vv = vv;
	this.p = Picture;
	this.vl = vl;
	this.vb = vb;
	this.vw = vw;
	this.vlvl = vlvl;
	this.vfid = vfid;
	this.vfc = vfc;
	this.v = v;
	this.f = f;
	this.n = n;
	this.x = x;
	this.y = y;
	this.i = i;
	this.g = g;
	this.Named = Named;
	this.Named2 = Named2;
	this.p2 = Picture2;
	this.h = h;
	this.anchor = f;
}


function GoP(PageNo) {
	window.location.replace('?H=' + H + '&CharsAt=' + CharsAt + '&P=' + PageNo);
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	if (v != Highlighted) {
		getObj('I' + v).style.backgroundColor = '';
	}
	//window.top.hideTip();
}

function CheckSel() {
	if (SelectedS >= 0) {
		DC(SelectedS);
	} else {
		if (IC > 0) {
			DC(0);
		}
	}
}

function PC(v) {
	window.top.InfoTip('' + IPath + Infos[v].p, '<b>' + Infos[v].Named + '</b>');
	getObj('I' + v).style.cursor = 'pointer';
	if (v != Highlighted) {
		getObj('I' + v).style.backgroundColor = BGCOLOR_S
	}
}

function DC(v) {
	Highlighted = v;
	if (Processing == 0) {
		confirm('Are you sure you wish to use the item on ' + Infos[v].Named + '?', 1);
	}
}

function PromptReturn(returnVal, postback) {
	var v = Highlighted;
	var II = Infos[v];
	if (returnVal != null) {
		if (returnVal != false) {
			Processing = 1;
			window.top.Interface.location.replace('fhvuse.asp?InventoryItemID=' + InventoryItemID + '&P=' + PageNo + '&CharsAt=' + II.v);
		}
	}
}
