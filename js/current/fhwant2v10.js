var Cat = Cat;
var PageNo = PageNo;
var OB = OB;
var SL = SL;
var EL = EL;
var SN = SN;
var IPath = window.top.FHIP
var RPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');


function fx1(stuff) {
var re = /^\$|,|'|"|%|@|#/g;
stuff.value = stuff.value.replace(re, "");
if (stuff.value == '' || stuff.value == null) {
	stuff.value = 0;
	}
}

function ColumnHeaders2() {
	document.write('<tr class=\'boldcell\'><td></td><td>Category</td><td>Jobs</td></tr>');
}

function ColumnHeaders() {
	document.write('<tr class=\'boldcell\'><td></td><td>' + CH('Want Information', '1') + '</td><td>' + CH('Price', '2') + '</td><td>' + CH('Character', '3') + '</td></tr>');
}

function CH(strdisplay, ob1) {
	return '<a href="?Cat=' + Cat + '&SL=' + SL + '&EL=' + EL + '&SN=' + SN + '&OB=' + (ob1 == OB ? -ob1 : ob1) + '">' + strdisplay + '</a>';
}

function AC(IID, ItemName, PictureID, ip, wl, wl2, wq, wp, wpp, price, wd, fund, wi2, wn2) {
if (PictureID == '0') {PictureID = ''}
var Color = LITE;
var BColor = '';
ip = ip + "/";
if (fund < price) {
	Color = '#ff6666';
}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, IID, ItemName, PictureID, ip, wl, wl2, wq, wp, wpp, price, wd, fund, wi2, wn2);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' +  Color + '; padding-left: 5px"><td width=15><img src=\'' + IPath + ip + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'300\' valign=top><b>' + ItemName + (wi2 > 0 ? '</b><br>Payment: ' + wn2 : '</b><br>Quantity: ' + wq + ', Level: ' + (Math.round(wl) < 0 ? 'Any' : '' + wl + '' + (wl2 > wl && wl2 > 0 ? ' - ' + wl2 : '' ))  + (wd != '' ? '<br>' + wd : '') + (fund > price ? ', Can be completed ' + Math.floor(fund / price) + ' more times' : (fund < price ? ', Job Owner needs to delete this job' : ''))) + '</td><td id=\'tgold\' width=\'90\' valign=top>' + (wi2 > 0 ? 'Item' : window.top.BSGM(price) + (wq > 1 ? '<br>' + window.top.BSGM(price / wq) + 'ea' : '')) + '</td><td width=\'95\' valign=top>' + wp + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, IID, ItemName, PictureID, ip, wl, wl2, wq, wp, wpp, price, wd, fund, wi2, wn2) {
this.c = Color;
this.wd = wd;
this.p = PictureID;
this.i = ItemName;
this.f = fund;
this.ip = ip;
this.price = price;
this.wl = wl;
this.wp = wp;
this.wq = wq;
this.wpp = wpp;
this.wi2 = wi2;
this.wn2 = wn2;
this.wl2 = wl2;
this.v = IID;
}

function GoP(PageNo) {
window.location.replace('?OB=' + OB + '&SN=' + SN + '&SL=' + SL + '&EL=' + EL + '&P=' + PageNo + '&Cat=' + Cat);
}

function DC(v) {
if (Infos[v].wi2 != 0) {
	window.location.replace('fhwantvi.asp?Cat=' + Cat + '&CharsAt=' + Infos[v].v);
} else if (Math.floor(Infos[v].f) >= Math.floor(Infos[v].price)) {
	window.location.replace('fhwantv.asp?Cat=' + Cat + '&CharsAt=' + Infos[v].v);
} else {
	alert('This job does not have enough money left in its fund to be completed. The job owner should delete the job to reclaim the remaining money.');
}
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + Infos[v].ip + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Infos[v].i + (Infos[v].wi2 != 0 ? '<br>Payment: ' + Infos[v].wn2 : '<br>Quantity: ' + Infos[v].wq +'<br>Level: ' + (Infos[v].wl <0 ? 'any' :'' + Infos[v].wl + '' + ( Infos[v].wl2 >  Infos[v].wl &&  Infos[v].wl2 > 0 ? ' - ' +  Infos[v].wl2 : '' )) + '<br>Price: ' + window.top.BSGM2(Infos[v].price)) + '');
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function AC2(ItemName, cc) {
var PictureID = '';
if (PictureID == '0') {PictureID = ''}
var Color = 'gold';
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo2(Color, ItemName, cc, PictureID);

document.write('<tr id="I' + IC + '" onmouseover="PC2(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC2(' + IC + ')" onmouseover="PC2(this)" onmouseout="RC(this)" onclick="DC2(this)" style="color: ' +  Color + '; padding-left: 5px"><td width=15><img src=\'' + IPath + 'i/' + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'480\' valign=top><b>' + ItemName + '</b></td><td width=\'40\' valign=top>' +cc + '</td></tr>');
IC = IC + 1;
}

function newInfo2(Color, ItemName, cc, PictureID) {
this.c = Color;
this.p = PictureID;
this.i = ItemName;
this.cc = cc;
this.bc = '';
}

function DC2(v) {
window.location.replace('?Cat=' + Infos[v].i + '&SL=' + SL + '&EL=' + EL);
}

function PC2(v) {
	window.top.InfoTip('', '' + Infos[v].i + '<br>Click to view category');
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor=BGCOLOR_S
}