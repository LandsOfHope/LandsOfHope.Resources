var FHSP = '';
var FHIP = FHIP;
var UseAdvanced = 0;
var LastSelectedCharacter = -1;


var FHIPI = FHIP + 'i/';
var FHIPO = FHIP + 'icons/';
var FHIPM = FHIP + 'm/';
var FHIPB = FHIP + 'b/';
var FHIPR = FHIP + 'r/';
var FHIPV = FHIP + 'v/';
var FHIPP = FHIPP;

var mainx = mainx;
var Tiles = Tiles;
var mainy = mainy;
var mainz = mainz;
var mx = mx;
var my = my;
var mz = mz;
var BuildingID = BuildingID;

function O(stuff)
{
	stuff.style.cursor = '';
	stuff.style.backgroundColor='';
}


function NewChar(m, ag, s, d, k, h, f, t, o, p, Color, v, Itty, Extra, ll, FC1, FN1, FS1, ap, ap2, r, as, prof, pl, l, afid, p2, agct, haspets, pvp, agc, nmc) {
this.m = m;
this.ag = ag;
this.s = s;
this.d = d;
this.k = k;
this.h = h;
this.f = f;
this.e = t;
this.o = o;
this.p = p;
this.Color = Color;
this.v = v;
this.Itty = Itty;
this.Extra = Extra;
this.ll = ll;
this.FC1 = FC1;
this.FN1 = FN1;
this.FS1 = FS1;
this.ap = ap;
this.ap2 = ap2;
this.r = r;
this.as = as;
this.prof = prof;
this.pl = pl;
this.l = l;
this.afid = afid;
this.p2 = p2;
this.t = agct;
this.haspets = haspets;
this.agc = agc;
this.nmc = nmc;
}

function AFC(m, ag, s, d, k, h, f, t, o, p, Color, v, Itty, Extra, ll, FC1, FN1, FS1, ap, ap2, r, as, prof, pl, l, afid, haspets, pvp, spawner, nmc) {
	var p2= '';
	var Color3 = '';

	var u = 0;
	var FontIndex = 0;

	if (FC1 != '') {
		Color3 = FC1;
	}

	if (ll == 1) {
		Extra = '<b>Lootable</b>';
	} else if (ll == -1) {
		Extra = '<b>Not Lootable</b>';
	} else if (haspets != 0) {
		Extra = '* ' + Extra;
	}

	
	if (p2 == '') {p2 = p};
	if (p2 == '') {p2 = 'na.gif'};
	var agc = GetAImg(ag);
	var agct = GetAName(ag);


	if (window.top.Chars[window.top.FHCC] == null) {
		window.top.Chars[window.top.FHCC] = new Array();
	}
	window.top.Chars[window.top.FHCC]  = new NewChar(m, ag, s, d, k, h, f, t, o, p, Color, v, Itty, Extra, ll, FC1, FN1, FS1, ap, ap2, r, as, prof, pl, l, afid, p2, agct, haspets, pvp, agc, nmc);

	window.top.FHCC = window.top.FHCC + 1;
}

function StrToPath(thestr) {
	var strout = '';
	strout = 'https://res.landsofhope.com/game/' + thestr + '/'
	return strout;
}
function NewItem(p, n, s, l, v, ad, d, ml, pp) {
this.p = (p == 'q.gif' ? FHIPB : StrToPath(pp)) + '' + (p != '' ? p : 'na.gif');
this.n = n;
this.s = s;
this.l = l;
this.v = v;
this.ad = ad;
this.d = d;
this.ml = ml;
this.pp = pp;
}


function ABI(p, n, s, l, v, ad, d, ml, pp) {
	var tmppath = StrToPath(pp);
	if (window.top.Items[window.top.FHIC] == null) {
		window.top.Items[window.top.FHIC] = new Array();
	}
	window.top.Items[window.top.FHIC]  = new NewItem(p, n, s, l, v, ad, d, ml, pp);

	window.top.FHIC = window.top.FHIC + 1;
}

function AMI(p, n, s, l, v, ad, d, ml, pp) {
	var tmppath = StrToPath(pp);

	if (window.top.Items[window.top.FHIC] == null) {
		window.top.Items[window.top.FHIC] = new Array();
	}
	window.top.Items[window.top.FHIC]  = new NewItem(p, n, s, l, v, ad, d, ml, pp);

	window.top.FHIC = window.top.FHIC + 1;
}

function NewHandItem(v, p, itty, l) {
this.v = v;
this.p = p;
this.n = itty;
this.l = l;
}

function AHI(v, p, itty, l) {
	if (window.top.Hands[window.top.FHHC] == null) {
		window.top.Hands[window.top.FHHC] = new Array();
	}
	window.top.Hands[window.top.FHHC]  = new NewHandItem(v, p, itty, l);

	window.top.getObj('Hand' + (window.top.FHHC + 1)).innerHTML = '<div style="float: left; width: 30px; height: 30px; padding: 1px; margin: 1px;" id="HI' + window.top.FHHC + '" onclick="IU(' + window.top.FHHC + ');" onmouseover="IC3(' + window.top.FHHC + ');" onmouseout="O(this);" align=center><img width=30 height=30 src="' + FHIPI + '' + (p != '' ? p : 'na.gif') + '"></div>';
	window.top.FHHC = window.top.FHHC + 1;
}

function NewBuilding(s, n, lv, al, t, h, u, p, Color, v, l, Itty, bt, agc, agct, p2, needpaid, dd) {
this.s = s;
this.n = n;
this.lv = lv;
this.al = al;
this.t = t;
this.h = h;
this.u = u;
this.p = p;
this.Color = Color;
this.v = v;
this.l = l;
this.a = 0;
this.Itty = Itty;
this.bt = bt;
this.agc = agc;
this.agct = agct;
this.p2 = p2;
this.needpaid = needpaid;
this.dd = dd;
}

function AFB(s, n, lv, al, t, h, u, p, Color, v, l, Itty, bt, needpaid, dd) {
	var p2 = p
	if (u != '') {
		if (u == '1') {
			p = 'cloud.gif'
		} else if (u == '2') {
			p = 'flame.gif'
		} else if (Math.round(u) <= -2) {
			p = 'water.gif'
		}
	}

	var a = 0;
	var agc = GetAImg(al)
	var agct = GetAName(al)
	if (window.top.Buildings[window.top.FHBC] == null) {
		window.top.Buildings[window.top.FHBC] = new Array();
	}
	window.top.Buildings[window.top.FHBC]  = new NewBuilding(s, n, lv, al, t, h, u, p, Color, v, l, Itty, bt, agc, agct, p2, needpaid, dd);
	window.top.FHBC = window.top.FHBC + 1;
}
