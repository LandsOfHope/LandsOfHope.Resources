var PageNo = PageNo;
var IPath = window.top.FHIPR;
var TC = 0;
var Cards = new Array();

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(cdid, carddeck, carddeckd, cardcount) {
	var Color = 'white';
	if (Cards[TC] == null) {
		Cards[TC] = new Array();
	}
	Cards[TC] = new newCard(Color, cdid, carddeck, carddeckd, cardcount);
	document.write('<tr id="TC' + TC + '" style="color:' + Color + '" onclick="DC(' + TC + ')" onmouseover="PC(' + TC + ');" onmouseout="RC(this)"><td>' + carddeck + '</td><td width=75>' + cardcount + '</td></tr>');
	TC = TC + 1;
}

function newCard(Color, cdid, carddeck, carddeckd, cardcount) {
	this.c = Color;
	this.cdid = cdid;
	this.i = carddeck;
	this.cc = cardcount;
	this.cdd = carddeckd;
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Cards[v].i + '</b><br>' + Cards[v].cdd + '<br>Cards: ' + Cards[v].cc;
	getObj('Buttons').innerHTML = Adr('window.location.replace(\'fhlibrarycdc.asp?CharsAt=' + Cards[v].cdid + '&D=' + Cards[v].i + '\');', 'View Cards', 'View Cards');
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
	return '<b>' + Cards[v].i + '</b><br>Cards: ' + Cards[v].cc;
}