var IC = 0;
var Infos = new Array();
var DefaultShop = 0;
var Shop = 0;
var OB = OB;
var Type2 = Type2;
var PageNo = PageNo;
var counter = 0;
var IPath = window.top.FHIPI;
var Processing = 0;

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');


function KP(stuff) {

}

function ColumnHeaders() {
	document.write('<tr width="600" class=\'boldcell\' style="width: 600;"><td width="20"></td><td width="380">Bug</td><td width="100">Bug Date</td><td width="100">Fixed Date</td><td width="15"></td></tr>');
}

function CH(strdisplay, ob1) {
	return '<a href="?Type=' + Type2 + '&OB=' + ob1 + (ob1 == OB && OB.indexOf('DESC') == -1 ? ' DESC' : '') + '">' + strdisplay + '</a>';
}

function GoP(PageNo) {
	window.location.replace('?Type=' + Type2 + '&OB=' + OB + '&P=' + PageNo + '');
}

function AM(Fixed, Importance, BD, FD, Message, BID) {
	counter = counter + 1
	var bg = ''
	var PictureID = 'fl1.gif';
	var Color = '#ff6666';
	if (Type2 == 1) {
		Color = '#6666ff';
		PictureID = 'fl3.gif';
	} else if (Fixed != 0) {
		Color = '#66ff66';
		PictureID = 'fl2.gif';
	}
	if ((counter / 2) == Math.round(counter / 2)) { bg = BGCOLOR }
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, PictureID, Fixed, Importance, BD, FD, Message, BID, bg);
	// v=' + BID + ' f=' + FD + ' b=' + BD + ' onclick="DC(this)" onmouseover="PC(this)" onmouseout="RC(this)" title="Click to View"
	document.write('<tr width="600" id="I' + IC + '" onmouseover="PC(' + IC + ')"  onmouseout="RC(' + IC + ')" style="color: ' + Color + ';width: 600;' + (bg != '' ? 'background-color: ' + bg + ';' : '') + '"><td><img src="' + IPath + PictureID + '" width=10 height=10></td><td onclick="DC(' + IC + ')">' + (Fixed == 0 ? '<b>' : '') + Message + (Fixed == 0 ? '</b>' : '') + '</td><td width="100">' + BD + '</td><td width="100">' + FD + '</td><td><input type=checkbox id=ItemID name=ItemID value="' + BID + '" style="width: 12px; height: 12px;"></td></tr>');
	IC = IC + 1;
}

function newInfo(Color, PictureID, Fixed, Importance, BD, FD, Message, BID, bg) {
	this.c = Color;
	this.v = BID;
	this.p = PictureID;
	this.f = FD;
	this.b = BD;
	this.bg = bg;
	this.m = Message;
}

function DC(v) {
	window.location.replace('fhbugv.asp?OB=' + OB + '&CharsAt=' + Infos[v].v);
}

function DCN(stuff) {
	window.location.replace('fhbugn.asp?OB=' + OB + '&CharsAt=' + stuff);
}

function DB(stuff) {
	window.location.replace('?OB=' + OB + '&Type=' + stuff);
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = Infos[v].bg;
}

function PC(v) {
	//window.top.InfoTip(IPath + Infos[v].p,Tipsfor(v));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function SA(how) {
	var x = 0;
	var totala = 0;
	if (getObj("ItemID") != null) {
		if (IC <= 1) {
			getObj("ItemID").checked = how;
		} else {
			for (x = 0; x < IC; x++) {
				getObj("ItemID")[x].checked = how;
			}
		}
	}
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && Processing == 0) {
			Processing = 1;
			getObj('Delly').submit();
		}
	}
}