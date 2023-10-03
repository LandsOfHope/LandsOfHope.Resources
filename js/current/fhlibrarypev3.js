var PageNo = PageNo;
var county = 0;
var county2 = 0;
var IPath = window.top.FHIPO;
var FPID = FPID;
var Level = Level;
var OPath = window.top.FHIPO;
var DefaultShop = 0;
var Shop = 0;
var counter = 0;
var Shops = new Array();
var Processing = 0;
var LastID = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(pid, rc, Itty, PictureID, aa) {
	LastID = pid;
	county = county + 1
	PictureID = 'reveal2.gif'
	//aa=' + aa +'  r=' + pid + ' rc=' + rc + ' i="' + Itty + '" 
	document.write('<tr><td style=\'' + strButtonx + ';\' ' + strClicksns + ' width=\'100%\' onclick="DrawShop(' + county + ')">' + Itty + ' (' + GetAT(aa) + ')' + (Math.round(rc) > 1 ? ' <font id=tgold>Bought Profession</font>' : '') + '</td><td></td></tr>');
	PictureID = 'na.gif'
	document.write('<tr><td colspan=2 id=Shop' + county + ' width=\'100%\' style=\'padding-left: 20px\'></td></tr>');
	counter = 0;
	Shops[county] = new Array()
}

function GetAT(aa) {
	return (aa > 0 ? (aa == 1 ? 'Cloth' : (aa == 2 ? 'Leather' : (aa == 3 ? 'Mail' : 'Plate'))) : 'None');
}


function AvC2(pid, Itty, l, aa, pic, pid2, Itty2, l2, aa2, pic2, pid3, Itty3, l3, aa3, pic3) {
	if (LastID != FPID) {
		var Color = '#ff6666';
	} else {
		var Color = '#66ff66';
	}
	//var PictureID = 'hc4.gif'
	Shops[county][counter] = new Array();

	// t="II" r=' + pid + ' aa=' + aa + ' l=' + l + ' rc="" i="' + Itty + '"

	Shops[county][counter] = '<tr><td width=\'33%\' style="color:' + Color + '; border-left: 1px solid white; border-bottom: 1px solid white; " onclick="DC(' + pid + ', ' + l + ');" onmouseover="PC(this,\'' + pic + '\',\'' + Itty + '\',\'II\',' + aa + ',' + l + ');" onmouseout="RC(this)"><img src="' + OPath + 'info.png" width=12 height=12 style="cursor: pointer" title="View Description" onclick="window.open(\'https://guide.landsofhope.com/Professions/' + Itty + '.htm\',\'_new\',null);">' + Itty + ' (' + GetAT(aa) + ')</td><td width=\'33%\' style="color:' + Color + '; border-bottom: 1px solid white" onclick="DC(' + pid2 + ', ' + l2 + ');" onmouseover="PC(this,\'' + pic2 + '\',\'' + Itty2 + '\',\'III\',' + aa2 + ',' + l2 + ');" onmouseout="RC(this)"><img src="' + OPath + 'info.png" width=12 height=12 style="cursor: pointer" title="View Description" onclick="window.open(\'https://guide.landsofhope.com/Professions/' + Itty2 + '.htm\',\'_new\',null);">' + Itty2 + ' (' + GetAT(aa2) + ')</td><td width=\'33%\' style="color:' + Color + '; border-bottom: 1px solid white" onclick="DC(' + pid3 + ', ' + l3 + ');" onmouseover="PC(this,\'' + pic3 + '\',\'' + Itty3 + '\',\'IV\',' + aa3 + ',' + l3 + ');" onmouseout="RC(this)"><img src="' + OPath + 'info.png" width=12 height=12 style="cursor: pointer" title="View Description" onclick="window.open(\'https://guide.landsofhope.com/Professions/' + Itty3 + '.htm\',\'_new\',null);">' + Itty3 + ' (' + GetAT(aa3) + ')</td></tr>';
	counter = counter + 1;
}

function DrawShop(ShopNum) {
	var strout = '';
	var y = 0;
	if (getObj('Shop' + ShopNum).innerHTML != '') {
		getObj('Shop' + ShopNum).innerHTML = '';
	} else {
		for (y = 0; y < Shops[ShopNum].length; y++) {
			strout = strout + Shops[ShopNum][y];
		}
		getObj('Shop' + ShopNum).innerHTML = '<table width="100%" class=\'itemText\' cellpadding=2 cellspacing=0>' + strout + '</table>';
	}
}

function DrawAllShops() {
	var strout = '';
	var y = 0;
	for (y = 1; y < Shops.length; y++) {
		DrawShop(y)
	}
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}
function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function PC(stuff, pic, i, t, aa, l) {
	window.top.InfoTip('' + window.top.FHIP + 'pi/' + pic, '' + '<b>' + i + '</b><br>Tier ' + t + ' Profession<br>Armor: ' + GetAT(aa) + '<br>Required Level: ' + l)
	stuff.style.cursor = 'pointer';
	stuff.style.backgroundColor = BGCOLOR_S
}

function DC(r, l) {
	window.frames['ResultsOfit'].location.replace('Ez.asp?test=' + r + '&bonus=' + l);
}