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
	tinyMCE.setContent(Infos[v].tt);

	getObj('Buttons').innerHTML = Adr('getObj(\'Resp\').submit();', 'Save changes', 'Save') + Adr('window.top.SendCommand(tinyMCE.getContent());', 'Preview text', 'Preview');
	//OtherStuff();
	getObj('preview').innerHTML = '' + (Infos[v].t == 'TALK' ? 'This response will be shown when a friendly clicks the TALK Button on you.' : (Infos[v].t == 'ENEMYTALK' ? 'This response will be shown when an enemy clicks the TALK Button on you.' : (Infos[v].t == 'STOLENFROM' ? 'This response will be shown when someone STEALS from you.' : (Infos[v].t == 'FIGHT' ? 'This response will be shown at the start of a fight with someone.' : (Infos[v].t == 'HISTORY' ? 'This response is shown when someone tries to retrieve your History via the Info screen.' : 'Unknown - Under Construction'))))) + '<br>Remove the text entered if you do not wish any message to appear.';
}
