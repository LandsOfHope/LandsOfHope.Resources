var PageNo = PageNo;
var Mask = Mask;
var IPath = window.top.FHIPM;
var BPath = window.top.FHIPB;
var IC = 0;
var Infos = new Array();

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '&Mask=' + Mask + '');
}

function AC(p2, PictureID, ItemName, ItemID, Flying, Underwater, Hidden, Dungeon, CharacterID, ds, dby, a, bt, lk, bo, btx, bs) {
	if (PictureID == '0') { PictureID = '' }
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, p2, PictureID, ItemName, ItemID, Flying, Underwater, Hidden, Dungeon, CharacterID, ds, dby, a, bt, lk, bo, btx, bs);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img src=\'' + BPath + (p2 == '' ? (PictureID == '' ? 'na.gif' : PictureID) : p2) + '\' width=15 height=15></td><td width=\'100%\' style="color: ' + Color + '; padding-left: 5px;">' + ItemName + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, p2, PictureID, ItemName, ItemID, Flying, Underwater, Hidden, Dungeon, CharacterID, ds, dby, a, bt, lk, bo, btx, bs) {
	this.c = Color;
	this.v = ItemID;
	this.p = PictureID;
	this.bt = bt;
	this.lk = lk;
	this.ds = ds;
	this.bs = bs;
	this.t = ItemName;
	this.btx = btx;
	this.bo = bo;
	this.a = a;
	this.dby = dby;
	this.d = Dungeon;
	this.cid = CharacterID;
	this.f = Flying;
	this.u = Underwater;
	this.h = Hidden;
	this.p2 = (p2 == '' ? 'na.gif' : p2);
}


function DC(v) {
	getObj('Stuff2').innerHTML = "<table cellpadding=0 cellspacing=0 class='weakcell'><tr><td><input type='hidden' name=P value='" + PageNo + "'><input type='hidden' name=IID value='" + Infos[v].v + "'>Name (" + Infos[v].bs + "):</td><td><input name=IN id=IN value='" + Infos[v].t + "'></td></tr><tr><tr><td>TAG:</td><td><input name=INBT id=INBT value='" + Infos[v].btx + "'></td></tr><tr><td>Owner:</td><td><input name=c id=c size=6 value='" + Infos[v].cid + "'></td><td>Type:</td><td><input name=bt id=bt size=6 value='" + Infos[v].bt + "'></td></tr><tr><td>Allegiance:</td><td><input name=a size=5 maxlength=5 id=a value='" + Infos[v].a + "'></td><td>Locked:</td><td><input name=lk id=lk size=2 value='" + Infos[v].lk + "'></td></tr><tr><td>Img:</td><td colspan=3><input name=ig id=ig value='" + (Infos[v].p2 == "na.gif" ? "" : Infos[v].p2) + "' size=15 maxlength=15></td></tr><tr><td>Flying:</td><td><input name=f id=f value='" + Infos[v].f + "' size=4 maxlenth=4></td><td>Underwater:</td><td><input name=u size=4 maxlength=4 id=u value='" + Infos[v].u + "'></td></tr><tr><td>Hidden:</td><td><input name=h size=5 maxlength=5 id=h value='" + Infos[v].h + "'></td><td>Dungeon:</td><td><input name=d size=5 maxlength=5 id=d value='" + Infos[v].d + "'></td></tr><tr><td>Disc. Skill:</td><td><input name=ds size=5 maxlength=5 id=ds value='" + Infos[v].ds + "'></td><td>By:</td><td><input name=dby size=5 maxlength=15 id=d value='" + Infos[v].dby + "'></td></tr><tr><td>Order:</td><td colspan=3><input name=bo size=2 maxlength=2 id=bo value='" + Infos[v].bo + "'></td></tr><tr><td colspan=4><" + strClicky2 + " type=button onclick=\"window.location.replace('fhbm.asp?CharsAt=" + Infos[v].v + "&Type=13')\">Claim</button>" + Adr('getObj(\'EditBuilding\').submit()', 'Save', 'Save') + Adr('window.top.loadwindow2(\'/gm/gmEBP.asp?CharsAt=' + Infos[v].v + '\',415,300,\'iwindow\',\'Edit Building Properties - ' + Infos[v].t + '\');', 'Stats', 'Stats') + Adr('window.top.loadwindow2(\'/gm/gmEBS.asp?CharsAt=' + Infos[v].v + '\',415,300,\'iwindow\',\'Edit Building Skills - ' + Infos[v].t + '\');', 'Skills', 'Skills') + "</td></tr></table>";
	getObj('Pic').innerHTML = "<img src='" + BPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>" + (Infos[v].p2 == "" || Infos[v].p2 == "na.gif" ? "" : "<br><img src='" + BPath + Infos[v].p2 + "'>");
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + Infos[v].p, Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}