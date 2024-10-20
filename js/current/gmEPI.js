var CharID = CharID;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(piid, inx, PictureID, iid, lid, vis, q, l, il, s) {
	if (piid == 0) {
		var Color = LITE;
	} else {
		var Color = '#66ff66';
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, piid, inx, PictureID, iid, lid, vis, q, l, il, s);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width=\'100%\'>' + inx + '</td><td>' + l + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, piid, inx, PictureID, iid, lid, vis, q, l, il, s) {
	this.c = Color;
	this.piid = piid;
	this.s = s;
	this.il = il;
	this.i = inx;
	this.iid = iid;
	this.lid = lid;
	this.vis = vis;
	this.q = q;
	this.l = l;
}

function DC(v) {
	getObj('Stuff2').innerHTML = Infos[v].i + ' (' + Infos[v].piid + ')<br>Skill: ' + Infos[v].s + '<br>Item Level: ' + Infos[v].il;
	getObj('Buttons').innerHTML = '' + '<form method=\'post\' id=editform name=editform style=\'margin: 0px;\' action=\'/gm/gmEPI.asp\'><input type=\'hidden\' name=\'ProfessionItemID\' value=\'' + Infos[v].piid + '\'>' + (Infos[v].piid == 0 ? '<input type=\'hidden\' name=\'New\' value=\'1\'>' : '') + '<input type=\'hidden\' name=\'CharsAt\' value=\'' + CharID + '\'>Item ID: <input name=ItemID id=ItemID value=\'' + Infos[v].iid + '\' ondblclick=\'window.open("gmItemPicker.asp", "ItemPicker", "height=300,width=400,status=no,toolbar=no,menubar=no,location=no")\'><br>Quantity: <input name=Quantity value=\'' + Infos[v].q + '\'><br>Location ID: <input name=LocationID value=\'' + Infos[v].lid + '\'><br>Level: <input name=Level value=\'' + Infos[v].l + '\'><br>Visible: <input name=vis value=\'' + Infos[v].vis + '\'><br>Redo: <input name=redoitem value=' + Infos[v].s + ' type=checkbox><input name=RedoLevel value=\'1\'><br>' + Adr('getObj(\'editform\').submit();', 'Save', 'Save') + '</form>';
}


function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + IPath + Infos[v].p, Infos[v].i);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}