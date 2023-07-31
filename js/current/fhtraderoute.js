var IC = 0;
var Infos = new Array();
var LastV = -1;
var Vessels = new Array();
var VC = 0;
var CN = CN;
var CharsAt = CharsAt;
var LastVV = -1;
var IPath = window.top.FHIPR;
var VPath = window.top.FHIPV;
var profit = 0;
var PageNo = PageNo;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(GoP) {
	window.location.replace('fhtraderoute.asp?P=' + GoP + '&CharsAt=' + CharsAt);
} 

function GS(how, stuff) {
	window.location.replace('fhtraderoute.asp?Type=' + how + '&P=' + PageNo + '&CharsAt=' + CharsAt + '&ItemID=' + stuff + '');
}

function DC(v) {
LastV = v;
getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>' + Infos[v].d + '<br><table cellpadding=0 cellspacing=0><tr><td><table class=weakcell cellpadding=1 cellspacing=1><tr><td>Cost per item:</td></tr><tr><td>' + window.top.PSGM(Infos[v].bc)  + '</td></tr><tr><td>Profit per item: </td></tr><tr><td id=profit>' + window.top.PSGM(Infos[v].sc - Infos[v].bc)  + '</td></tr></table></td><td><table class="weakcell"><tr><td colspan=2><b>Risk Assessment</b></td></tr><tr><td>Attack</td><td>' + GetRisk(Infos[v].coa) + '</td></tr><tr><td>Accident</td><td>' + GetRisk(Infos[v].cos) + '</td></tr><tr><td>Other Risks</td><td>' + GetRisk(Infos[v].coo) + '</td></tr></table></td></tr></table>' + (Infos[v].ctrid == 0 ? '<form method=\'post\' action=\'fhtraderoute.asp\' style=\'margin: 0px;\'><input type=hidden name=CharsAt value=\'' + CharsAt + '\'><input type=hidden name=ItemTypeID id=ItemTypeID value=\'0\'><input type=hidden name=ItemID value=\'' + Infos[v].v + '\'>' + GetButtons(v) + '<br>Vessel to use <font id=tred>(required)</font>:<br><table class="weakcell" cellpadding=1 cellspacing=1 style="border: 1px dotted gold;">' + GetVessels() + '</table><table cellpadding=1 cellspacing=1 class=weakcell><tr><td colspan=3 id=dunk></td></tr></table><Br><' + strClicky + ' onclick=\'this.form.submit()\'>Establish</button></form>' : Adr('GS(1, ' + Infos[v].v + ');', 'Cancel Trade Agreement','Cancel'));
getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p2 == '' ? 'na.gif' : Infos[v].p2) + "'>";
}

function GetButtons(v) {
	var strout = '';
	strout = '';
	strout = (Infos[v].coa != 0 ? 'Hire Guard: <input type=checkbox onclick="getProfit(' + v + ');" name=coa id=coa value=1> | ' : '') + (Infos[v].cos != 0 ? 'Offerings: <input type=checkbox onclick="getProfit(' + v + ');" name=cos id=cos value=1> | ' : '') + (Infos[v].coo != 0 ? Infos[v].on + ': <input type=checkbox onclick="getProfit(' + v + ');" name=coo id=coo value=1> | ' : '');
	return strout;
}

function getProfit(v) {
	profit = Infos[v].sc - Infos[v].bc;
	if (getObj('coa') != null) {
		if (getObj('coa').checked == true) {
			profit = profit - 20;
		}
	}

	if (getObj('cos') != null) {
		if (getObj('cos').checked == true) {
			profit = profit - 10;
		}
	}

	if (getObj('coo') != null) {
		if (getObj('coo').checked == true) {
			profit = profit - 5;
		}
	}
	getObj('profit').innerHTML = window.top.PSGM(profit);
	if (LastVV >= 0) {
		DV(LastVV);
	}
}

function GetRisk(r) {
	if (r == 0) {
		return 'None'
	} else {
		if (r < 20) {
			return 'Very Low'
		} else if (r < 40) {
			return 'Low'
		} else if (r < 60) {
			return 'Moderate'
		} else if (r < 80) {
			return 'High'
		} else if (r < 80) {
			return 'Very High'
		}
	}
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('', '' + Infos[v].i + '');
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function SMM(Color, PictureID, v, Named, d, coa, cos, coo, bc, sc, gul, ofl, otl, on, ctrid) {
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, PictureID, v, Named, d, coa, cos, coo, bc, sc, gul, ofl, otl, on, ctrid);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td style="color: ' + Color + '">' + Named + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, PictureID, v, Named, d, coa, cos, coo, bc, sc, gul, ofl, otl, on, ctrid) {
this.c = Color;
this.v = v;
this.p2 = PictureID;
this.i = Named;
this.d = d;
this.coa = coa;
this.cos = cos;
this.coo = coo;
this.bc = bc;
this.sc = sc;
this.gul = gul;
this.ofl = ofl;
this.otl = otl;
this.ctrid = ctrid;
this.on = on;
}


function AdC(n, Names, Color, PictureID, slots) {
if (PictureID == '') {PictureID = 'bg3.gif'};
//document.write('<td style=\'cursor: pointer; border: 1px dotted ' + BGCOLOR_S + ';\'><table align=center cellspacing=0 class="weakercell" cellpadding=1><tr><td title="' + Titles2 + '" style="width: 34px; color: ' + Color + '; background-color:' + Color + ';" onmouseover="this.style.backgroundColor=\'' + BGCOLOR_S + '\';window.top.InfoTip(\'' + window.top.FHIPV + PictureID + '\', \'<b>' + Names + '</b><br>' + Titles2 + '\');" onmouseout="this.style.backgroundColor=\'' + Color + '\';"><img width=34 height=34 src="' + VPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '" onclick="this.disabled=true; FBI(' + n + ');"></td></tr></table></td>');

if (Vessels[VC] == null) {
	Vessels[VC] = new Array();
}
Vessels[VC] = new newVessel(Color, PictureID, n, Names, slots);
VC = VC + 1;

}

function GetVessels() {
var v = 0;
var strout = '';
for (v = 0; v < VC; v++) {
	strout += '<tr id="V' + v + '" width="100%"><td><img src="' + VPath + Vessels[v].p2 + '" width=15 height=15></td><td width="150" style="color: ' + Vessels[v].c + '" onmouseover="PV(' + v + ')" onmouseout="RV(' + v + ')" onclick="DV(' + v + ')">' + Vessels[v].i + '</td><td width=150>' + Vessels[v].s + ' cargo spaces</td></tr>';
}
return strout;
}

function DV(v) {
	LastVV = v;
	getObj('ItemTypeID').value = Vessels[v].v;
	getObj('dunk').innerHTML = window.top.PSGM(Vessels[v].s * Infos[LastV].bc) + window.top.PSGM(Vessels[v].s * (profit));
}

function RV(v) {
getObj('V' + v).style.cursor = '';
getObj('V' + v).style.backgroundColor='';
}

function PV(v) {
window.top.InfoTip('', '' + Vessels[v].i + '');
getObj('V' + v).style.cursor = 'pointer';
getObj('V' + v).style.backgroundColor=BGCOLOR_S
}

function newVessel(Color, PictureID, n, Names, slots) {
this.c = Color;
this.v = n;
this.p2 = PictureID;
this.i = Names;
this.s = slots;
}