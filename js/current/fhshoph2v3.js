
var IPath = window.top.FHIPR;
var Processing = 0;
var ItemID = ItemID;
var CharsAt = CharsAt;
var Special = Special;
var PackagesFF = new Array();
var PackageCount = 0;
var IC = 0;
var Infos = new Array();
var Processing = 0;
var LastV = -1;

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AddP(Cost, PackageID, PackageName, PackageDesc) {
	PackagesFF[PackageCount] = new Array()
	PackagesFF[PackageCount] = '<b>' + PackageName + ' Package</b><br>Cost: ' + window.top.BSGM(Cost) + ' (' + PackageDesc + ').<br>' + Adr('if (Processing == 0) {Processing = 1; DC2(this, ' + Cost + ', ' + PackageID + ')}', 'Send', 'Send') + '<br>';
	PackageCount = PackageCount + 1;
}

function AC(a, pv, ItemID, PictureID, Itty, q) {
	if (PictureID == '0') { PictureID = '' }
	if (pv == 0) {
		var Color = LITE;
	} else {
		var Color = '#ff6666';
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, a, pv, ItemID, PictureID, Itty, q);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" ' + (pv == 0 ? 'onclick="DC(' + IC + ')"' : '') + ' style="color: ' + Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'*\'>' + Itty + '</td><td width=70> ' + (pv == 0 ? '' + (a > 0 ? '<b>' + a + '</b> years' : '') : 'Disabled') + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, a, pv, ItemID, PictureID, Itty, q) {
	this.c = Color;
	this.a = a;
	this.p = PictureID;
	this.t = Itty;
	this.value = ItemID;
}

function DC(v) {
	LastV = v;
	getObj('Stuff2').innerHTML = 'Recipient: <b>' + Infos[v].t + '</b>';
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	var strout = '';
	var y = 0;
	for (y = 0; y < PackageCount; y++) {
		strout += PackagesFF[y]
	}

	getObj('Buttons').innerHTML = strout;
}

function DC2(stuff, lngTotal, packagex) {
	var x = 0;
	getObj('Dest').value = Infos[LastV].value;
	getObj('Package').value = packagex;
	//getObj('Note').value = tinyMCE.getContent();
	confirm('Send package ' + packagex + ' to ' + Infos[LastV].t + ' at a cost of ' + window.top.BSGM2(lngTotal) + '?', 1);
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			getObj('editform').submit();
		}
	}
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}