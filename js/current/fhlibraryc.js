var PageNo = PageNo;
var IPath = window.top.FHIPR;
var TC = 0;
var Cards = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(cid, cardname, cardtype, cardtypeid, cardtext) {
	var Color = 'RGB(153, 153, 153)';
	if (cardtypeid == 2) {
		Color = '#66ff66'
	} else if (cardtypeid == 3) {
		Color = '#6666ff'
	} else if (cardtypeid == 5) {
		Color = '#ff66ff'
	} else if (cardtypeid == 6) {
		Color = 'orange'
	} else if (cardtypeid == 7) {
		Color = '#ff6666'
	} else if (cardtypeid == 8) {
		Color = 'RGB(203, 152, 229)'
	} else if (cardtypeid == 9) {
		Color = 'RGB(152, 150, 37)'
	} else if (cardtypeid == 10) {
		Color = 'gold'
	}

	if (Cards[TC] == null) {
		Cards[TC] = new Array();
	}
	Cards[TC] = new newCard(Color, cid, cardname, cardtype, cardtypeid, cardtext);
	document.write('<tr id="TC' + TC + '" style="color:' + Color + '" onclick="DC(' + TC + ')" onmouseover="PC(' + TC + ');" onmouseout="RC(this)"><td>' + cardname + '</td><td width=75>' + cardtype + '</td></tr>');
	TC = TC + 1;
}

function newCard(Color, cid, cardname, cardtype, cardtypeid, cardtext) {
	this.c = Color;
	this.cid = cid;
	this.i = cardname;
	this.ct = cardtype;
	this.ctid = cardtypeid;
	this.ctt = cardtext;
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}
function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('', '' + Tipsfor(v))
	getObj('TC' + v).style.cursor = 'pointer';
	getObj('TC' + v).style.backgroundColor = BGCOLOR_S;
}

function Tipsfor(v) {
	return '<b>' + Cards[v].i + '</b><br>Type: ' + Cards[v].ct;
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<table width=250 height=151 cellpadding=0 cellspacing=0 style="background-image: URL(https://lohcdn.com/images/cards/card' + Cards[v].cid + '.jpg)" class="weakercell"><tr height="40px"><td colspan=3></td></tr><tr height="90px"><td width=126></td><td width="110" style="color: ' + Cards[v].c + '" valign=top>' + Cards[v].ctt + '</font></td><td width=14></td></tr><tr height="100%"><td colspan=3></td></tr></table>'
}
