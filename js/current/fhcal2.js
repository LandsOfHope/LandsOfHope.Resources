var SystemUser = SystemUser;
var PageNo = 1;
var CharsAt = CharsAt;
var GuildID = GuildID;
var mm = mm;
var yy = yy;
var dd = dd;
var IPath = window.top.FHIPI;
var Processing = 0;
var Infos = new Array();
var IC = 0;

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(t, v, Itty, s, e, g, a, charid) {
	var PictureID = 'ky1.gif'
	if (t == 0 && g == 0) {
		var Color = 'gold'
		var PictureID = 'fl1.gif'
	} else if (g > 0) {
		var Color = '#6464FF'
		var PictureID = 'fl3.gif'
	} else if (t < 0) {
		var Color = '#66ff66'
		var PictureID = 'fl3.gif'
	} else {
		var Color = 'white'
		var PictureID = 'fl2.gif'
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(t, v, Itty, s, e, g, a, charid, PictureID, Color);
	//g=' + g + ' a=' + a + ' z=' + charid + ' t=' + t + ' s="' + s + '" e="' + e + '" v=' + v + ' p="' + PictureID + '" 
	document.write('<tr id="I' + IC + '" width="250" onclick="DC(' + IC + ')" onmouseover="PC(' + IC + ')" onmouseout="RC(this)"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td></tr>');
	IC = IC + 1;
}


function newInfo(t, v, Itty, s, e, g, a, charid, PictureID, Color) {
	this.c = Color;
	this.s = s;
	this.v = v;
	this.p = PictureID;
	this.i = Itty;
	this.e = e;
	this.z = charid;
	this.g = g;
	this.a = a;
	this.t = t;
}


function GoP(PageNo) {
	window.location.replace('?InventoryItemID=' + ItemID + '&P=' + PageNo + '');
}

function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('', '' + Infos[v].i + '');
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b>' + (Math.round(Infos[v].t) >= 0 ? '<br>Start Date: ' + Infos[v].s + '<br>End Date: ' + Infos[v].e + (Math.round(Infos[v].g) > 0 ? '<br>Guild Event' : (Math.round(Infos[v].a) != 0 ? '<br>Game Event' : '<br>Private Event')) : '');
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	if (Math.round(Infos[v].z) == CharsAt || Math.round(Infos[v].t) == -1) {
		//Add form for Edit/Add New
		getObj('Buttons').innerHTML = '<input type="hidden" name="ItemID" value="' + (Infos[v].v) + '"><input type="hidden" name="y" value="' + yy + '"><input type="hidden" name="m" value="' + mm + '"><input type="hidden" name="d" value="' + dd + '">Description:<br><textarea name=Calendar id=Calendar rows=4 cols=30>' + (Infos[v].i) + '</textarea><br><input name=StartDate value="' + Infos[v].s + '" size=18 maxlength=18 type="hidden"><input name=EndDate value="' + Infos[v].e + '" size=18 maxlength=18 type="hidden">' + (GuildID > 0 || Math.round(Infos[v].g) > 0 ? '<br>Guild Event: <input name=GuildID type="checkbox" value="' + (GuildID == 0 ? Infos[v].g : GuildID) + '" ' + (Math.round(Infos[v].g) > 0 ? 'checked' : '') + ' style="width: 12px; height: 12px">' : '<input type=hidden name=GuildID value=0>') + (SystemUser != 0 ? 'Announcement: <input name=Ann type="checkbox" value="1" ' + (Math.round(Infos[v].a) > 0 ? 'checked' : '') + ' style="width: 12px; height: 12px">' : '<input type=hidden name=Ann value=0>') + '<br>' + Adr('getObj(\'cal\').submit();', 'Submit', 'Submit') + (Math.round(Infos[v].v) > 0 ? Adr('getObj(\'Calendar\').value=\'DELETE\';getObj(\'cal\').submit();', 'Delete', 'Delete') : '');
	} else {
		getObj('Buttons').innerHTML = '';
	}
}
