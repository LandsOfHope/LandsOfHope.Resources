var MapID = MapID;
var IPath = window.top.FHIPB;
var Skill = 5000;
var IC = 0;
var Infos = new Array();
var Processing = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(PictureID, Pic2, ItemName, ItemID, d, CharacterID, mc, bo) {
	if (PictureID == '0') { PictureID = '' }
	var Color = 'white'
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, PictureID, Pic2, ItemName, ItemID, d, CharacterID, mc, bo);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\' style="color: ' + Color + '; padding-left: 5px;">' + ItemName + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, PictureID, Pic2, ItemName, ItemID, d, CharacterID, mc, bo) {
	this.c = Color;
	this.v = ItemID;
	this.p = PictureID;
	this.d = d;
	this.bo = bo;
	this.m = mc;
	this.cid = CharacterID;
	this.t = ItemName;
}

function DC(v) {
	getObj('Stuff2').innerHTML = "<table cellpadding=0 cellspacing=0 class='weakcell'><tr><td colspan=4><b>" + Infos[v].t + "</b></td><tr><tr><input type='hidden' name=MapID value='" + MapID + "'><input type='hidden' name=IID value='" + Infos[v].v + "'><input type='hidden' name=cid value='" + Infos[v].cid + "'><td>Name:</td><td colspan=3><input name=IN id=IN value='" + Infos[v].t + "' maxlength='40' size='40'></td></tr><tr><td>Order (0 - 25):</td><td colspan=3><input name=bo id=bo value='" + Infos[v].bo + "' maxlength='2' size='2' onkeypress='fxkp(event);' onpaste='event.returnValue = false;'></td></tr><tr><Td colspan=4></td></tr></table>"
	getObj('Butt').innerHTML = DrawImages(Infos[v].p, Infos[v].v, Infos[v].t) + Adr('if (Processing == 0) {getObj(\'BuildingEdit\').submit();}', 'Save changes', 'Save') + Adr('if (Processing == 0) {confirm(\'Destroy ' + Infos[v].t + ', the building will be destroyed as will all contents. Continue?\',' + v + ');}', 'Destroy building', 'Destroy') + Adr('if (Processing == 0) {window.location.replace(\'fhbnpc.asp?CharsAt=' + Infos[v].v + '\');}', 'Edit building NPCs', 'Edit NPCs');
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && Processing == 0) {
			Processing = 1;
			window.location.replace('fhtbm.asp?IID=-3&MapID=' + MapID + '&Type=' + Infos[pb].v);
		}
	}
}

function DrawImages(currentimage, vv, it) {
	var DI = '';
	DI = Adr('window.location.replace(\'fhtbmi.asp?CharsAt=' + vv + '&MapID=' + MapID + '\');', 'The image used to display your building.', 'Image');
	return DI;
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '&MapID=' + MapID);
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