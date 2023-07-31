var levelx = 0;
var ItemID = ItemID;
var SkillID = SkillID;
var SV = SV;
var Shop = 0;
var CT = CT;
var CTempC = 0;
var Piccy = '';
var counter = 0;
var SelID = 0;
var Req2 ='';
var materialx=''; var varxx = '';
var ShopsS = '';

var Items = new Array();
var IC = 0;

var Reqs = new Array();
var RC = 1;

var IPath = window.top.FHIPIM;
var IPath2 = window.top.FHIPI;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AI(Quantity, Value, m, l, Named) {
if (Items[IC] == null) {
	Items[IC] = new Array();
}
Items[IC] = new newItem(Shop, Quantity, Value, m, l, Named);
IC = IC + 1;
if ((SelID == 0) || (SelID > 0 && SelID == Value)) {
	ShopsS += "SelectIngredient(" + Shop + ", '" + m + "', " + Value + ", " + Quantity + ", " + l + ", '" + Named + "');";
	SelID = Value;
}
}

function GetIngredients(s) {
var strout = '';
var y = 0;
for (y = 0; y < Items.length; y++) {
	if (Items[y].s == s) {
		strout = strout + '<tr width="200" id="I' + s + 's' + y  + '"  onmouseover="PCI(this, ' + y + ')" onmouseout="RC2(this)" onclick="DC2(' + y + ', ' + s + ')"><td><img src="' + IPath2 + Reqs[s].p + '" width=10 height=10"></td><td style="padding-left: 5px">' + Items[y].i + '</td></tr>';
	}
}
return strout;	
}

function GetIngredientCount(s) {
var o = '';
var y = 0;
for (y = 0; y < Items.length; y++) {
	if (Items[y].s == s) {
		o = o + 1;
	}
}
return o;	
}

function newItem(s, Quantity, Value, m, l, Named) {
this.q = Quantity;
this.value = Value;
this.m = m;
this.i = Named;
this.l = l;
this.s = s;
}

function SelShops() {
	if (ShopsS != "") {
		eval(ShopsS);
	}
}

function SelectIngredient(s, m, Value, Quantity, l, Named) {
	var Quantity2 = Reqs[s].q;

	if (m != '') {
		materialx = m;
	}
	Reqs[s].v=Value;
	if (getObj('current') != null) {
		getObj('current').innerHTML = '<b>' + Named + '</b>'
	}
	if (Reqs[s].master != 0) {
		var qt = Math.round(Quantity2 / Reqs[s].q);
		var tt = ((qt * CT));
		if (tt <= 0) {tt = 1};
		levelx = l;
		getObj('Stuff3').innerHTML = 'Level: ' + levelx + '<br>Quantity: ' + qt + '<br>Time: ' + window.top.HSM(tt) + '<br>Xp: ' + CalcXP(l)
	}

	getObj('I' + s).cells[1].innerHTML = (Named.indexOf(' *') > 0 ? Named.substring(0,Named.indexOf(' *')) : Named) + ' (' + Quantity2 + ')';
	getObj('I' + s).style.color = '#66ff66';

	if (GoN() == 0) {
		getObj('Buttons').innerHTML = '<' + strClicky3 + ' onclick="window.top.PGS(\'drop.wav\'); window.location.replace(\'?ItemID=' + ItemID + '&Material=' + materialx + '&l=' + levelx + '&InventoryItemID=2' + varxx + '\');this.disabled=true;">Assemble</button>';
	} else {
		getObj('Buttons').innerHTML = 'To assemble this item all of the Ingredients on the left must be in green.';
	}

}

function AM2() {
	SelShops();
}

function AM(z, master, q, Named, Picture) {
var Color = 'orange';
if (GetIngredientCount(Shop) == 0)  {Color = '#ff6666'}
if (q == 0) {
	CTempC = 0;
}
Req2 += '' + (CTempC >= 1 ? ', ' : '') + (q == 0 ? '<br><b>Tool:</b> ' : '') + (Color == '#ff6666' ? '<font color=\'#ff6666\'>' : '<font color=\'#66ff66\'>') + Named + (Named.indexOf(' * ') == -1 ? (q == 0 ? '' : ' * ' + q) : '') + '</font>';
CTempC = CTempC + 1

if (Reqs[RC] == null) {
	Reqs[RC] = new Array();
}
Reqs[RC] = new newReq(Color, z, master, q, Named, Picture);
document.write('<tr width="200" id="I' + RC + '" onmouseover="PCR(this, ' + RC + ')" onmouseout="RC2(this)" onclick="DC(' + RC + ')" style="color: ' + Color + (master > 0 ? ';font-weight: bold' : '') + '"><td><img src="' + IPath2 + Picture + '" width=15 height=15></td><td width="185" style="padding-left: 5px">' +Named + '</td></tr>');
RC = RC + 1;
SelID = 0
}

function newReq(Color, z, master, q, Named, Picture) {
this.c = Color;
this.z = z;
this.value = z;
this.q = q;
this.p = Picture;
this.i = Named;
this.master = master;
this.v = 0;
}

function RC2(stuff) {
	window.top.hideTip();
	stuff.style.cursor = '';
	stuff.style.backgroundColor='';
}

function GoN() {
	varxx = '';
	var y = 0;
	for (y = 1; y < RC; y++) {
		if (Reqs[y].v == 0) {
			return 1;
		} else {
			varxx += '&IQ' + y + '=' + Reqs[y].q + '&IID' + y + '=' + Reqs[y].v;
		}
	}
	return 0
}

function DC2(v, zin) {
	SelectIngredient(zin, Items[v].m, Items[v].value, Items[v].q, Items[v].l,Items[v].i);
}

function CalcXP(tt) {
	if (tt >= 1000) {
		return Math.round(200 + (tt * 35))
	} else {
		return Math.round(200 + (tt * 20))
	}
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<div style=\'height: 110; overflow: auto\'><table class=\'itemText\' cellpadding=0 cellspacing=0><tr><td colspan=3 id=current><b>' + Reqs[v].i + '</b><br></td></tr>' + GetIngredients(Reqs[v].value) + '</table></div>'
}

function PCR(stuff, v) {
	window.top.InfoTip('', '' + Reqs[v].i + '');
	stuff.style.cursor = 'pointer';
	stuff.style.backgroundColor=BGCOLOR_S
}

function PCI(stuff, v) {
	window.top.InfoTip('', '' + Items[v].i + '');
	stuff.style.cursor = 'pointer';
	stuff.style.backgroundColor=BGCOLOR_S
}

