var CharsAt = CharsAt;
var PageNo = PageNo;
var IPath = window.top.FHIPI;
var Processing = 0;
var TC = 0;
var Cards = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');


function AvC(cid, cardname, cardtype, cardtypeid, cardtext, cc) {
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
		Color = 'RGB(203, 152, 229)';
	} else if (cardtypeid == 9) {
		Color = 'RGB(152, 150, 37)';
	} else if (cardtypeid == 10) {
		Color = 'gold'
	}
	if (Cards[TC] == null) {
		Cards[TC] = new Array();
	}
	Cards[TC] = new newCard(Color, cid, cardname, cardtype, cardtypeid, cardtext, cc);

	document.write('<tr id="TC' + TC + '" style="color:' + Color + '" onclick="DC(' + TC + ')" onmouseover="PC(' + TC + ');" onmouseout="RC(this)"><td>' + cardname + (cc > 1 ? ' * ' + cc : '') + '</td><td width=75>' + cardtype + '</td></tr>');
	TC = TC + 1;
}

function newCard(Color, cid, cardname, cardtype, cardtypeid, cardtext, cc) {
	this.c = Color;
	this.cid = cid;
	this.i = cardname;
	this.ct = cardtype;
	this.ctid = cardtypeid;
	this.ctt = cardtext;
	this.cc = cc;
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '&CharsAt=' + CharsAt);
}

function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
	window.top.hideTip();
}

function PC(v) {
	window.top.InfoTip('', '<b>' + Cards[v].i + '</b><br>Owned Quantity: ' + Cards[v].cc + '<br>Type: ' + Cards[v].ct);
	getObj('TC' + v).style.cursor = 'pointer';
	getObj('TC' + v).style.backgroundColor = BGCOLOR_S
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<table width=250 height=151 cellpadding=0 cellspacing=0 style="background-image: URL(https://lohcdn.com/images/cards/card' + Cards[v].cid + '.jpg)" class="weakercell"><tr height="40px"><td colspan=3></td></tr><tr height="90px"><td width=112></td><td width="114" style="color: ' + Cards[v].c + '" valign=top>' + Cards[v].ctt + '</font></td><td></td></tr><tr height="100%"><td colspan=3></td></tr></table>'
	getObj('Buttons').innerHTML = "<" + strClicky2 + " onclick=\"if (Processing == 0) {Processing = 1; window.location.replace('?CharsAt=" + Cards[v].cid + "&P=" + PageNo + "');}\" title=\"Remove this card (send it to your Inventory)\">Remove</button>";
}
