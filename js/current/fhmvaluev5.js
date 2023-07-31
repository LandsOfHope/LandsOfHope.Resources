var PetPrice = PetPrice;
var IPath = window.top.FHIPR;
var Processing = 0;
var CharsAt = CharsAt;
var PageNo = PageNo;
var IC = 0;
var Infos = new Array();

document.write('<script src="js/formatting.js" language="JavaScript"></script>');


function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>' + (Infos[v].f == 0 ? 'Not for sale' : '<font id=tred>FOR SALE</font>') + '<br>Level: ' + Infos[v].l + '<br>Racename: ' + Infos[v].r + '<br>Profession: ' + Infos[v].p2 + '<br>Your Price: ' + window.top.BSGM(Infos[v].v) + '<br>Fair Price: ' + window.top.BSGM(FairPrice(Infos[v].l)) + '<br>Value: ' + window.top.BSGM(Infos[v].v2);
	getObj('saleprice').value = Infos[v].v;
	getObj('Pic').innerHTML = "<img src='" + IPath + Infos[v].p + "'>";
	getObj('Buttons').innerHTML = '<input type=hidden id=ItemID name=ItemId value=' + Infos[v].value + '><input type=hidden id=ForSale name=ForSale value=' + Infos[v].f + '>' + FormMoney('saleprice', Infos[v].v) + '<br>' + Adf2('', 'Set Sale Price', 'Set') + Adr('getObj(\'saleprice\').value = FairPrice(' + Infos[v].l + '); getObj(\'price\').submit();', 'Fair Price', 'Fair Price') + (Infos[v].f == 0 ? Adr('confirm(\'List ' + Infos[v].t + ' for sale, the listing price is ' + window.top.BSGM2(Math.round(getObj('saleprice').value) / 10) + '\', ' + v + ');', 'For sale', 'For sale') : Adr('getObj(\'ForSale\').value = 0;getObj(\'price\').submit();', 'Not For sale', 'Not For sale'));
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + Infos[v].p,Infos[v].t);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function GoP(PageNo) {
window.location.replace('?CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function AC(f, value, v, v2, r, p2, l, PictureID, Itty) {
if (f == 0) {
	var Color = LITE;
} else {
	var Color = 'gold';
}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, f, value, v, v2, r, p2, l, PictureID, Itty);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="200" style="color: ' + Color + '; padding-left: 5px;">' + Itty + '</td><td width=\'100\'>' + window.top.BSGM(v) + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, f, value, v, v2, r, p2, l, PictureID, Itty) {
this.c = Color;
this.f = f;
this.p = PictureID;
this.v2 = v2;
this.v = v;
this.value = value;
this.f = f;
this.r = r;
this.p2 = p2;
this.l = l;
this.t = Itty;
}		

function FairPrice(l) {
	var outp = 0;
	outp = Math.round((l * 1) * PetPrice)
	return outp;
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			getObj('ForSale').value = 1;
			getObj('price').submit();
		}
	}
}