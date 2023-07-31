
var PageNo = PageNo;
var ItemID = ItemID;
var M = M;
var F = F;
var U = U;
var InventoryItemID = InventoryItemID;
var IPath = window.top.FHIPR;
var Processing = 0;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(v, PictureID, Itty, at) {
	var Color = '#D9FB96';
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, PictureID, Itty, at);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width="300" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td><td width=15><img width=15 height=15 src="' + IPath + (M == '' || M == '0' ? 'na.gif' : M) + '"></td><td width=15><img width=15 height=15 src="' + IPath + (F == '' || F == '0' ? 'na.gif' : F) + '"></td><td width=15><img width=15 height=15 src="' + IPath + (U == '' || U == '0' ? 'na.gif' : U) + '"></td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, PictureID, Itty, at) {
	this.c = Color;
	this.at = at;
	this.p = PictureID;
	this.t = Itty;
	this.v = v;
}



function GoP(PageNo) {
	window.location.replace('?InventoryItemID=' + ItemID + '&P=' + PageNo + '');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Infos[v].t + '<br>Armor: ' + GetAT(Infos[v].at));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function GetAT(q) {
	return (q == 1 ? ' <b>Cloth</b>' : (q == 2 ? ' <b>Leather</b>' : (q == 3 ? ' <b>Chain</b>' : (q == 4 ? ' <b>Plate</b>' : 'None'))))
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Allowed Armor: ' + GetAT(Infos[v].at) + '<br><i>Please note that as soon as you click one of the buttons below you will gain the pet using the class selected on the left and the sex indicated below. If you have not yet made your pet class choice do not click the sex button until you have otherwise you will get whatever class is currently selected.</i>';
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = AddButton(M, 'Male', 'M', Infos[v].v) + AddButton(F, 'Female', 'F', Infos[v].v) + AddButton(U, 'Unisex', 'U', Infos[v].v)
}

function AddButton(sex, sex1, sex2, v) {
	if (Processing == 0) {
		return (sex != '' ? '<div class="btn" style="float: left; cursor: pointer; width: 100px; height: 60px;" onclick="if (Processing == 0) {Processing = 1; window.location.replace(\'?InventoryItemID=' + InventoryItemID + '&ItemID=' + v + '&S=' + sex2 + '&P=' + PageNo + '\')}"><center><img src="' + IPath + (sex == '' || sex == '0' ? 'na.gif' : sex) + '"><br>' + sex1 + '</center></div>' : '');
	} else {
		return '';
	}
}

