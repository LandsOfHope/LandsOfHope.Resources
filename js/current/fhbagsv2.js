
var PageNo = 1;
var PageNo = PageNo;
var IPath = window.top.FHIPI;
var Processing = 0;
var IC = 0;
var Infos = new Array();
var LastClick = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(Color, PictureID, v, Itty, q, l) {
	if (PictureID == '') {
		PictureID = 'na.gif'
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, PictureID, v, Itty, q, l);

	//q=' + q + ' i="' + Itty + '" l='+ l + ' v=' + v + ' p="' + PictureID + '"
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')"  onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="200" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td><td width="100">' + window.top.PercentBoxR(window.top.GetPerc(l, q), Color, '' + q + ' of ' + l + '') + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, PictureID, v, Itty, q, l) {
	this.c = Color;
	this.i = Itty;
	this.p = PictureID;
	this.v = v;
	this.q = q;
	this.l = l;
}


function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}


function DC(v) {
	LastClick = v;
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Items Held: ' + Infos[v].q + '<br>Capacity: ' + Infos[v].l + '<br>Free Slots: ' + (Infos[v].l - Infos[v].q);
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = (Infos[v].v != -47 ? '<' + strClicky + ' onclick="if (Processing == 0) {Processing = 1; window.location.replace(\'' + (Infos[v].v == -68 ? 'fhtb.asp' : 'fhinv.asp?InventoryItemID=1&ItemTypeID=' + Math.abs(Infos[v].v) + '&P=1') + '\')}" style=\'width: 65\'>Open</button>' + (Infos[v].v >= 97 && Infos[v].v <= 104 ? '<' + strClicky2 + ' onclick="prompt(\'Please enter the new name for this bag below.\', 1,\'My Bag\',\'Rename Bag\',\'i/' + Infos[v].p + '\');" style=\'width: 85\'>Rename</button>' : '') : '') + (Infos[v].v > 0 ? '<' + strClicky1 + ' onclick="confirm(\'Send a link to Chat, this will allow people to view the contents of this bag. Continue?\', 2);" style=\'width: 85\'>Link</button>' : '');
}


function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + IPath + Infos[v].p, '<b>' + Infos[v].i + '</b><br>Items Held: ' + Infos[v].q + '<br>Capacity: ' + Infos[v].l + '<br>Free Slots: ' + (Infos[v].l - Infos[v].q));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}


function PromptReturn(returnVal, pb) {
	var v = LastClick;
	if (returnVal != null) {
		if (pb == 1) {
			window.top.Interface.location.replace('fhbags.asp?ItemName=' + returnVal + '&ItemID=' + Infos[v].v);
		} else if (pb == 2 && returnVal == true) {
			window.top.Interface.location.replace('fhbags.asp?ItemID=-' + Math.abs(Infos[v].v) + '&name=' + Infos[v].i + '&l2=' + (Infos[v].p) + '&d1=' + Infos[v].q + '&d2=' + Infos[v].l);
		}
	}
}