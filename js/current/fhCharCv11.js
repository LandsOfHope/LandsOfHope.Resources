
var PageNo = PageNo;
var Su = Su;
var IPath = window.parent.FHIP + "r/"
var OPath = window.parent.FHIP + "icons/"
var Processing = 0;
var Characters = new Array();
var CC = 0
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AM(Color, v, l, n, xy, r, Named, Picture, stuff, pr, cm, sn, um, hm, lsu, qm, pvp) {
	hm = window.top.BSGM2(hm)
	if (Characters[CC] == null) {
		Characters[CC] = new Array();
	}
	Characters[CC] = new newChar(Color, v, l, n, xy, r, Named, Picture, stuff, pr, cm, sn, um, hm, lsu, qm, pvp);

	document.write('<tr id="I' + CC + '"  width="250" onclick="DC(' + CC + ')" onmouseover="PC(' + CC + ')" onmouseout="RC(this)"><td><img src="' + IPath + (Picture == '' || Picture == '0' ? 'na.gif' : Picture) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px;"><b>' + Named + (pvp != 0 ? ' - PvP Enabled' : '') + '</b><br>Level: ' + l + '<br>Server: <b>' + sn + '</b></td><td width="60">' + (um > 0 ? '<img src="' + OPath + 'email.png" title="' + um + ' unread mail">' : '') + (qm != 0 ? '<img src="' + OPath + 'clock.png" title="' + (qm < 0 ? 'Queue Finished - Login to empty queue' : qm + 'seconds till queue finishes.') + '">' : '') + '</td></tr>');
	CC = CC + 1;
}


function newChar(Color, v, l, n, xy, r, Named, Picture, stuff, pr, cm, sn, um, hm, lsu, qm, pvp) {
	this.c = Color;
	this.p = Picture;
	this.sn = sn;
	this.lsu = lsu;
	this.um = um;
	this.hm = hm;
	this.t = Named;
	this.cm = cm;
	this.pr = pr;
	this.s = stuff;
	this.v = v;
	this.l = l;
	this.n = n;
	this.x = xy;
	this.r = r;
	this.qm = qm;
	this.pvp = pvp;
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}

function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + IPath + Characters[v].p, '<b>' + Characters[v].t + '</b>' + '<br>Profession: ' + Characters[v].n + '<br>Race: ' + Characters[v].r + '<br>Level: ' + Characters[v].l + '<br>Location: ' + Characters[v].x + '<br>Server: ' + Characters[v].sn);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S;
}

function DC(v) {
	if (Processing == 0) {
		getObj('Stuff2').innerHTML = '<b>' + Characters[v].t + '</b><br>Profession: ' + Characters[v].n + '<br>Race: ' + Characters[v].r + '<br>Level: ' + Characters[v].l + '<br>Location: ' + Characters[v].x + '<br>Server: ' + Characters[v].sn + '<br>Unread Mail: ' + Characters[v].um + '<br>Held Money: ' + Characters[v].hm + '' + (Characters[v].s == 6 ? '<br>Switching to this profession will change the game menus. This will take several seconds.' : (Characters[v].s == 5 ? '<br>This character can not be switched to at this time, please log into it via the Account screen.' : '')) + '<br><b>Logout and Login</b> (recommended) Current character is logged out, new character is logged in.<br><b>Login</b> current character remains visible in game for 15 minutes.';
		getObj('Pic').innerHTML = '<img src="' + IPath + Characters[v].p + '">';
		getObj('Buttons').innerHTML = '' + (Characters[v].s <= 3 || Characters[v].s == 6 ? '<' + strClicky3 + ' onclick="if (Processing == 0) {Processing = 1; this.disabled = true; window.parent.FHIPP = window.parent.FHIPR + \'' + Characters[v].p + '\';ChangeChar(' + Characters[v].s + ',' + Characters[v].cm + ',-' + Characters[v].v + ',' + Characters[v].lsu + ')};">Logout and Login</button><' + strClicky2 + ' onclick="if (Processing == 0) {Processing = 1; this.disabled = true; window.parent.FHIPP = window.parent.FHIPR + \'' + Characters[v].p + '\';ChangeChar(' + Characters[v].s + ',' + Characters[v].cm + ',' + Characters[v].v + ',' + Characters[v].lsu + ')};" style=\'width: 85\'>Login</button>' : '');
	}
}

function ChangeChar(s, pr, v, lsu) {
	getObj('Stuff2').innerHTML = '<b>Loading Correct Menu (menu' + pr + ') - Please wait.</b>';
	window.top.DisableInterface();
	var gsux = 0;
	if (Su != 0 && lsu != 0) {
		gsux = 1;
	}
	window.top.RenderMenu(gsux, pr);
	window.top.refreshTime();
	window.top.Interface.location.replace('?CharsAt=' + v);
}

