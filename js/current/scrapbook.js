
var PageNo = PageNo;
var MT = MT;
var Processing = 0;
var FT = FT;
var IC = 0;
var Infos = new Array();

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?MT=' + MT + '&FT=' + FT + '&P=' + PageNo + '');
}

function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function PC(stuff) {
	stuff.style.cursor = 'pointer';
	stuff.style.backgroundColor = BGCOLOR_S
}

function AM(Color, z, ud, Itty, u, o, st, sdi) {
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, z, ud, Itty, u, o, st, sdi);
	document.write('<tr id="I' + IC + '" onmouseover="PC(this)" onmouseout="RC(this)" onclick="DC(' + IC + ')" width="160"><td width="160" style="padding-left: 5px;"><b style="color: ' + Color + ';">' + Itty + '</b></td></tr>');
	IC = IC + 1;
}

function newInfo(Color, z, ud, Itty, u, o, st, sdi) {
	this.c = Color;
	this.st = st;
	this.sdi = sdi;
	this.u = u;
	this.o = o;
	this.t = Itty;
	this.z = z;
	this.ud = ud;
}

function DC(v) {
	if (Infos[v].st == 0 || Infos[v].st == 5) {
		getObj("Stuff").style.backgroundImage = 'URL(https://lohcdn.com/images/pet.png)';
	} else if (Infos[v].st == 1) {
		getObj("Stuff").style.backgroundImage = 'URL(https://lohcdn.com/images/pet.png)';
	} else if (Infos[v].st == 2 || Infos[v].st == 7) {
		getObj("Stuff").style.backgroundImage = 'URL(https://lohcdn.com/images/player.png)';
	} else if (Infos[v].st == 3) {
		getObj("Stuff").style.backgroundImage = 'URL(https://lohcdn.com/images/building.png)';
	} else if (Infos[v].st == 4) {
		getObj("Stuff").style.backgroundImage = 'URL(https://lohcdn.com/images/item.png)';
	}
	getObj("Stuff").innerHTML = '<table width=\'100%\' height=\'345\' valign=top><tr height=\'35px\'><td colspan=3 style=\'padding: 5px\' class=title>' + Infos[v].t + '</td></tr>' + (Infos[v].st != 0 && Infos[v].st != 5 ? '<tr height=\'100%\'><td width=\'20px\'>&nbsp</td><td valign=top><img src=\'' + Infos[v].u + '\'></td><td valign=top width=\'100%\'>' + Infos[v].ud + (Infos[v].sdi != 0 ? '<br><a href=\'javascript:LoadOther(' + Infos[v].st + ',' + Infos[v].sdi + ',"' + Infos[v].t + '",' + v + ')\'>more...</a>' : '') + '</td></tr>' : '<tr height=\'200\'><td style=\'background-image: URL(' + Infos[v].u + '); background-repeat: no-repeat;\' colspan=3>&nbsp</td></tr><tr height=95><td valign=top width=\'100%\' colspan=3>' + Infos[v].ud + (Infos[v].sdi != 0 && Infos[v].sdi != 5 ? '<br><a href=\'javascript:LoadOther(' + Infos[v].st + ',' + Infos[v].sdi + ',"' + Infos[v].t + '")\'>more...</a>' : '') + '</td></tr>') + '</table>';
	getObj("Stuff").style.backgroundRepeat = 'no-repeat';
}

function LoadOther(st, sdi, t, v) {
	getObj("Stuff").innerHTML = '<IFRAME NORESIZE SCROLLING=AUTO HSPACE=0 VSPACE=0 FRAMEBORDER=0 MARGINHEIGHT=0 src=\'scrapbookz.asp?Type=' + st + '&ID=' + sdi + '&t=' + t + '&ri=' + v + '\'  width=\'100%\' height=\'345\'></IFRAME>';
}

function DrawHeaders(hn) {
	document.write("<table cellpadding=0 cellspacing=0 border=0 height='30px'><tr><td width=240 class=title>" + hn + "</td><td valign=bottom><img src='https://lohcdn.com/images/tableft.gif' border=0></td><td style='background-image: URL(https://lohcdn.com/images/tab.gif); background-position: bottom; background-color: transparent; width:25px'><a class='tab' href='javascript:ShowTab(0);'>All</a></td><td valign=bottom><img src='https://lohcdn.com/images/tabjoin.gif' border=0></td><td style='background-image: URL(https://lohcdn.com/images/tab.gif); background-position: bottom; background-color: transparent; width:35px'><a class='tab' href='javascript:ShowTab(1);'>Items</a></td><td valign=bottom><img src='https://lohcdn.com/images/tabjoin.gif' border=0></td><td style='background-image: URL(https://lohcdn.com/images/tab.gif); background-color: transparent; background-position: bottom; width:75px'><a class='tab' href='javascript:ShowTab(2);'>Characters</a></td><td valign=bottom><img src='https://lohcdn.com/images/tabjoin.gif' border=0></td><td style='background-image: URL(https://lohcdn.com/images/tab.gif); background-position: bottom; background-color: transparent; width:45px'><a class='tab' href='javascript:ShowTab(7);'>Friends</a></td><td valign=bottom><img src='https://lohcdn.com/images/tabjoin.gif' border=0></td><td style='background-image: URL(https://lohcdn.com/images/tab.gif); background-color: transparent; background-position: bottom; width:75px'><a class='tab' href='javascript:ShowTab(5);'>Screenshots</a></td><td valign=bottom><img src='https://lohcdn.com/images/tabright.gif' border=0></td></tr></table>");
}

function ShowTab(tabno) {
	window.location.replace('?MT=' + MT + '&FT=' + tabno);
}