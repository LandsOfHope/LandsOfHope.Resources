var IC = 0;
var Infos = new Array();
var PageNo = PageNo;
var IPath = window.top.FHIPI;
var CN = '<b>' + CN + '</b>: ';
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');


function AC(Color, t, tt) {
	var PictureID = 'na.gif';
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, t, tt, PictureID);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px;">' + t + '</td><td>' + tt.length + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, t, tt, PictureID) {
	this.c = Color;
	this.t = t;
	this.p = PictureID;
	this.tt = tt;
}

function GoP(PageNo) {
	window.location.replace('?ItemTypeID=' + ItemTypeID + '&InventoryItemID=' + InventoryItemID + '&P=' + PageNo + '');
}


function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + Infos[v].p, Infos[v].t);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function DC(v) {
	getObj('RT').value = Infos[v].t;
	getObj('Stuff2').innerHTML = '<font class="weakcell" style="color:' + Infos[v].c + '"><b>' + Infos[v].t + '</b></font>';
	//getObj('Message').value = Infos[v].tt;
	tinyMCE.get('Message').setContent(Infos[v].tt);
	getObj('Buttons').innerHTML = Adr('getObj(\'Message\').value = tinyMCE.get(\'Message\').getContent();getObj(\'Resp\').submit();', 'Save changes', 'Save') + Adr('window.top.SendCommand(tinyMCE.getContent());', 'Preview text', 'Preview');
	//OtherStuff();
}
