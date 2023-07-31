var Search = Search;
var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPI;
var Processing = 0;
var PageNo = PageNo;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(z, PictureID, lid, il, cn, Itty) {
	if (PictureID == '0') { PictureID = '' }
	var Color = LITE;
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, z, PictureID, lid, il, cn, Itty);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'60%\'>' + Itty + '</td><td>' + cn + '</td></tr>');
	IC = IC + 1;
}

//response.write "AC(" & rstView("InventoryItemID") & ", '','" & rstView("PictureID") & "'," & rstView("LocationID") & "," & rstView("ItemLevel") & ", '" & strWhere & "');" & vbcrlf

function newInfo(Color, z, PictureID, lid, il, cn, Itty) {
	this.c = Color;
	this.z = z;
	this.cn = cn;
	this.p = PictureID;
	this.i = Itty;
	this.lid = lid
	this.il = il;
}

function GoP(PageNo) {
	window.location.replace('?SN=' + Search + '&P=' + PageNo);
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Infos[v].i);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Held by:' + Infos[v].cn + '<br>Location: ' + (Infos[v].lid < 0 ? 'Storage Chest' : (Infos[v].lid > 0 ? 'Inventory/Bag' : '')) + '<br>Level: ' + Infos[v].il + '';
	getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'im4.asp?Test=' + Infos[v].z + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].i + '\');', 'Info', 'Info');
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
}
