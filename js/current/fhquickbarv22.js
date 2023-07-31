var strout = '';
var FHIP = window.parent.FHIP;
var FHIPI = FHIP + 'i/';
var FHIPH = FHIP + 'h/';
var FHIPO = FHIP + 'icons/';
var FHIPM = FHIP + 'm/';
var FHIPB = FHIP + 'b/';
var FHIPR = FHIP + 'r/';
var FHIPS = FHIP + 's/';
var FHIPP = FHIPP;
var counter = 0;
var Processing = 0;
var skipmacro = 1;
var Extra = Extra;
var PageNo = PageNo;
var PageNo2 = PageNo2;

window.top.Quick = new Array();

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function Adirtemp(Actions, Titles, PictureID, Names) {
	var returnx = '';
	returnx = '<' + strClicky0 + ' type=button id=FC' + window.top.FormatCount + ' onclick=\'ButtonC(this, ' + window.top.FormatCount + ');' + Actions + ';\' title=\'' + Titles + '\'><img src=\'' + window.top.FHIPO + PictureID.toLowerCase() + '.png\'></button>';
	window.top.FormatCount = window.top.FormatCount + 1
	return returnx;
}

function AddH(Count, CurPage) {
	strout += '<table height=\'50%\' width=\'100%\' cellspacing=0 cellpadding=0 class=\'weakcell\'><tr><td colspan=5 id=QBPages>' + Pages2(Count, CurPage) + '</td></tR>'
}


function Pages2(Count, CurPage) {
	var strTest = '';
	var v = 0;
	var i = 0;
	for (i = 1; i <= Count; i++) {
		v = v + 1;
		strTest += AddPageButton22(i, CurPage, i);

		if (v >= 20) {
			strTest += '</tr><tr>';
			v = 0;
		}
	}
	if (Count == 0) {
		strTest += AddPageButton2();
	}

	return '<table><tr><td class=\'weakercell\'>Page: </td>' + strTest + '</tr></table>';
}

function AddPageButton22(i, CurPage, ii) {
	return '<td ' + (CurPage != i ? ' class="btn" onmouseover="this.className = \'btn btnhov\'" onmouseout="this.className = \'btn\'" style="width:20" onclick="window.QuickBar.location.replace(\'fhquickbar.asp?P=' + (counter == 0 ? i : PageNo) + '&P2=' + (counter != 0 ? i : PageNo2) + '\');"' : ' class="btn btnhov" style="width:20; font-weight: bold"') + '>' + ii + '</td>';
}


function NewQuick(Named, PictureID, URL, URL2, x, y, g, b, um, l, LA, FN, d) {
	this.n = Named;
	this.p = PictureID;
	this.URL = URL;
	this.URL2 = URL2;
	this.x = x;
	this.y = y;
	this.g = g;
	this.b = b;
	this.um = l;
	this.LA = LA;
	this.fn = FN;
	this.d = d;
}

function ASG(URL, Named) {
	if (window.top.Quick[counter] == null) {
		window.top.Quick[counter] = new Array();
	}
	window.top.Quick[counter] = new NewQuick(Named, null, URL);
	strout += '<tr ID="QB' + counter + '" onmouseover="qPC(' + counter + ')" onmouseout="qRC(this)"><td id="Extraa' + counter + '" style="width: 200" onclick="' + (URL != '' ? 'window.parent.ml(' + URL + ')' : '') + '">&nbsp;&nbsp;' + Named + '</td></tr>';
	counter = counter + 1;
}

function ASR(Named, x, y, g, b, PictureID) {
	if (window.top.Quick[counter] == null) {
		window.top.Quick[counter] = new Array();
	}
	if (PictureID == '') {
		PictureID = FHIPI + 'na.gif';
	} else {
		PictureID = FHIPS + PictureID;
	}
	window.top.Quick[counter] = new NewQuick(Named, PictureID, null, null, x, y, g, b);
	strout += '<tr ID="QB' + counter + '" onmouseover="qPC2(' + counter + ')" onmouseout="qRC(this)"><td width="10"><img src="' + PictureID + '" width="12" height="12"></td><td id="Extrab' + counter + '" onclick="ml3(' + x + ', ' + y + ', ' + g + ', ' + b + ', this)">&nbsp;&nbsp;' + Named + '</td></tr>';
	counter = counter + 1;
}

function ASE(URL, Named, PictureID, um, l) {
	if (window.top.Quick[counter] == null) {
		window.top.Quick[counter] = new Array();
	}
	var op = PictureID;
	if (PictureID == '') {
		PictureID = FHIPI + 'na.gif';
	} else {
		PictureID = FHIPR + PictureID;
	}
	window.top.Quick[counter] = new NewQuick(Named, PictureID, URL, null, null, null, null, null, um, l);
	strout += '<tr ID="QB' + counter + '" onmouseover="qPC(' + counter + ')" onmouseout="qRC(this)"><td width="30"><img src="' + PictureID + '" width="30" height="30"></td><td id="Extrac' + counter + '">&nbsp;&nbsp;<b>' + Named + '</b><br>&nbsp;&nbsp;Unread Mail: ' + um + '</td><td id=loginbuttons>' + (URL != '' ? '<' + strClicky1 + ' onclick="javascript: ml2(-' + URL + ',\'' + op + '\');" style=\'width: 85\' title=\'Login and Logout\'>Switch</button><br><' + strClicky1 + ' onclick="javascript: ml2(' + URL + ',\'' + op + '\');" style=\'width: 85\' title=\'Login (no) Logout\'>Login</button>' : '') + '</td></tr>';
	counter = counter + 1;
}

function ASD(URL, Named, URL2) {
	var PictureID = 'fl3.gif';
	if (window.top.Quick[counter] == null) {
		window.top.Quick[counter] = new Array();
	}
	if (PictureID == '') {
		PictureID = FHIPI + 'na.gif';
	} else {
		PictureID = FHIPI + PictureID;
	}
	window.top.Quick[counter] = new NewQuick(Named, PictureID, URL, URL2);
	strout += '<tr ID="QB' + counter + '" onmouseover="qPC(' + counter + ')" onmouseout="qRC(this)"><td width="10"><img src="' + PictureID + '" width="10" height="10"></td><td id="Extrad' + counter + '" onclick="window.parent.Interface.location.replace(\'' + URL2 + '\');">&nbsp;&nbsp;' + Named + '</td></tr>';
	counter = counter + 1;
}

function ASF(URL, Named, PictureID, LA, FN) {
	if (window.top.Quick[counter] == null) {
		window.top.Quick[counter] = new Array();
	}
	if (PictureID == '') {
		PictureID = FHIPI + 'na.gif';
	} else {
		PictureID = FHIPR + PictureID;
	}
	window.top.Quick[counter] = new NewQuick(Named, PictureID, URL, null, null, null, null, null, null, null, LA, FN);
	strout += '<tr ID="QB' + counter + '" onmouseover="qPCF(' + counter + ')" onmouseout="qRC(this)"><td width="30"><img src="' + PictureID + '" width="30" height="30"></td><td id="Extrae' + counter + '" onclick="' + (URL != '' ? 'ml4(' + URL + ', this)' : '') + '">&nbsp;&nbsp;<b>' + Named + '</b><br>&nbsp;&nbsp;' + LA + ' ago</td></tr>';
	counter = counter + 1;
}

function ASF2(URL, Named, PictureID) {
	if (window.top.Quick[counter] == null) {
		window.top.Quick[counter] = new Array();
	}
	if (PictureID == '') {
		PictureID = FHIPI + 'na.gif';
	} else {
		PictureID = FHIPI + PictureID;
	}
	window.top.Quick[counter] = new NewQuick(Named, PictureID, URL);
	strout += '<tr ID="QB' + counter + '" onmouseover="qPC(' + counter + ')" onmouseout="qRC(this)"><td width="20"><img src="' + PictureID + '" width="20" height="20"></td><td id="Extraf' + counter + '" onclick="' + (URL != '' ? 'window.parent.Interface.location.replace(\'fhinv.asp?F=' + URL + '\')' : '') + '">&nbsp;&nbsp;' + Named + '</td></tr>';
	counter = counter + 1;
}

function ASP(URL, Named, PictureID, LA, d, m) {
	if (window.top.Quick[counter] == null) {
		window.top.Quick[counter] = new Array();
	}
	if (PictureID == '') {
		PictureID = FHIPI + 'na.gif';
	} else {
		PictureID = FHIPR + PictureID;
	}
	window.top.Quick[counter] = new NewQuick(Named, PictureID, URL, null, null, null, null, null, null, null, LA, null, d);
	strout += '<tr ID="QB' + counter + '" onmouseover="qPC(' + counter + ')" onmouseout="qRC(this)"><td width="30"><img src="' + PictureID + '" width="30" height="30"></td><td id="Extrag' + counter + '" width="100%" onclick="' + (URL != '' ? 'window.parent.Interface.location.replace(\'fhstat2.asp?P=11&CharsAt=' + URL + '\')' : '') + '">&nbsp;&nbsp;<b>' + Named + '</b><br>&nbsp;&nbsp;Level: ' + LA + ' ' + (d != 0 ? '<i>Dead</i>' : '') + '</td></tr><tr><td colspan=2>' + (m == 0 ? Adirtemp('window.parent.Interface.location.replace("mapr.asp?Pet=' + URL + '");this.disabled=false;', 'Resource Map', 'world', '') + Adirtemp('window.parent.Interface.location.replace("fhqueue.asp?CharsAt=' + URL + '");this.disabled=false;', 'Check pet queue', 'star', '') + Adirtemp('window.parent.Interface.location.replace("fheat.asp?CharsAt=' + URL + '");this.disabled=false;', 'Feed pet', 'heart', '') + Adirtemp('window.parent.Interface.location.replace("fhtrade.asp?CharsAt=' + URL + '");this.disabled=false;', 'Trade to pet', 'user_go', '') + Adirtemp('window.parent.Interface.location.replace("fhrt.asp?CharsAt=' + URL + '");this.disabled=false;', 'Take from pet', 'user_delete', '') + Adirtemp('window.parent.Interface.location.replace("fhequip.asp?CharsAt=' + URL + '");this.disabled=false;', 'Equip pet', 'folder_add', '') + Adirtemp('window.parent.Interface.location.replace("fh.asp?o=20&other=' + URL + '");this.disabled=false;', 'Follow on/off', 'accept', '') : '<i>Mount/Hidden</i>') + '</td></tr>';
	counter = counter + 1;
}

function ASG2(URL, Named, PictureID, LA) {
	if (window.top.Quick[counter] == null) {
		window.top.Quick[counter] = new Array();
	}
	if (PictureID == '') {
		PictureID = FHIPI + 'na.gif';
	} else {
		PictureID = FHIPR + PictureID;
	}
	window.top.Quick[counter] = new NewQuick(Named, PictureID, URL, null, null, null, null, null, null, null, LA);
	strout += '<tr ID="QB' + counter + '" onmouseover="qPC(' + counter + ')" onmouseout="qRC(this)"><td width="20"><img src="' + PictureID + '" width="20" height="20"></td><td id="Extrah' + counter + '" onclick="' + (URL != '' ? 'window.parent.Interface.location.replace(\'fh.asp?TE=' + URL + '\')' : '') + '">&nbsp;&nbsp;<b>' + Named + '</b><br>&nbsp;&nbsp;Level: ' + LA + '</td></tr>';
	counter = counter + 1;
}

function ASU(URL, Named, PictureID) {
	if (window.top.Quick[counter] == null) {
		window.top.Quick[counter] = new Array();
	}
	if (PictureID == '') {
		PictureID = FHIPI + 'na.gif';
	} else {
		PictureID = FHIPI + PictureID;
	}
	window.top.Quick[counter] = new NewQuick(Named, PictureID, URL);
	strout += '<tr ID="QB' + counter + '" onmouseover="qPC(' + counter + ')" onmouseout="qRC(this)"><td width="20"><img src="' + PictureID + '" width="20" height="20"></td><td id="Extrau' + counter + '" onclick="' + (URL != '' ? 'window.open(\'' + URL + '\', \'_new\', \'\');' : '') + '">&nbsp;&nbsp;<b>' + Named + '</b></tr>';
	counter = counter + 1;
}

function ASC(MType, Named, ID, Slot, PictureID, PP) {

	if (window.top.Quick[counter] == null) {
		window.top.Quick[counter] = new Array();
	}
	PictureID = FHIP + PP + '/' + PictureID;
	window.top.Quick[counter] = new NewQuick(Named, PictureID, null, null, null, null, null, null, null, null, null, null, null);
	strout += '<tr ID="QB' + counter + '" onmouseover="qPC(' + counter + ')" onmouseout="qRC(this)"><td width="20"><img src="' + PictureID + '" width="14" height="14"></td><td id="Extrah' + counter + '" onclick="' + (MType == 0 ? 'window.top.Interface.location.replace(\'fhuse.asp?InventoryItemID=' + ID + '&ItemTypeID=1\')' : (MType == 1 ? 'window.top.Interface.location.replace(\'fhspell3.asp?CharsAt=' + ID + '\')' : (MType == 5 ? 'window.top.Interface.location.replace(\'fhmac.asp?CharsAt=' + ID + '\')' : (MType == 2 || MType == 3 ? 'window.top.PF(0,' + ID + ')' : (MType == 3 ? 'window.PF(0,' + ID + ')' : (MType == 4 ? 'window.top.Interface.location.replace(\'fhmact.asp?CharsAt=' + ID + '\')' : (MType == 6 ? 'window.top.Interface.location.replace(\'fhmacp.asp?CharsAt=' + ID + '\')' : (MType == 7 ? 'window.top.Interface.location.replace(\'fhinv.asp?F=' + ID + '\')' : 'window.top.Interface.location.replace(\'fhMess.asp\')')))))))) + '">&nbsp;&nbsp;' + Named + '</td></tr>';
	counter = counter + 1;
}
