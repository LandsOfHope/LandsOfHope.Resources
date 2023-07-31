var PageNo = PageNo;
var CharsAt = CharsAt;
var IPath = window.top.FHIPR;
var Mask = Mask;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AR(Value, Name, PictureID, l, a, s) {
var Color = LITE;
if (l < 0) {
	if (s != 0) {
		Color = '#66ff66'
	} else if (Value == 0) {
	} else {
		Color = '#6666ff';
	}
} else {
	Color = GetAColor(a);
}
if (Color == '') {
	Color = 'yellow';
}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, Value, Name, PictureID, l, a, s);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC2(' + IC + ')"><td width=20><img src="' + IPath + PictureID + '" width=20 height=20></td><td style="width:180; color: ' + Color + ';"><b>' + Name + '</b><br>' + (s == 0 ? (l > 0 ? 'Level: ' + l : (Value == 0 ? 'Choose another recipient' : 'Your Guild Leader'))  : '- Support -') + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, Value, Name, PictureID, l, a, s) {
this.c = Color;
this.value = Value;
this.p = PictureID;
this.i = Name;
this.l = l;
this.a = a;
this.s = s;
}
function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '&Mask=' + Mask + '&CharsAt=' + CharsAt);
}

function DC2(v) {
	getObj('ForID').value = Infos[v].value;
	getObj('Rep').innerHTML = '<b style="color: ' + Infos[v].c + '">' + Infos[v].i + '</b>';
}

function KP2() {
	var m = getObj('newmessage').value.length;
	if (m > 4000) {
		getObj('charco').innerHTML = 'Character Count: ' + m + '/4000 <font id=tred>TOO LONG</font>';
		return true;
	} else {
		getObj('charco').innerHTML = 'Character Count: ' + m + '/4000 OK';
		return false;
	}
}

function DB(stuff) {
	window.location.replace('fhmess2.asp?Type=' + stuff);
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Infos[v].i);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function CItemPicker(message, pb, defaultvalue, title, icon, style) {
	if (title == undefined) {
		title = '';
	}
	if (icon == undefined) {
		icon = '';
	}
	if (style == undefined) {
		style = '';
	}
	getObj('tradeitemid').value = 0;
	getObj('tradeitemidb').innerHTML = '';
	window.top.showPopWin("picker_post.asp?message=" + message + "&defaultvalue=" + defaultvalue + "&title=" + title + "&icon=" + icon + "&style=" + style, 300, 220, PromptReturn, null, title, pb);
}

function PromptReturn(returnVal, pb, returnVal2) {
	if (returnVal != null) {
		if (pb != null) {
			if (pb == 1) {
				getObj('messy').submit();
			} else if (pb == 2) {
				getObj('tradeitemid').value = returnVal;
				if (returnVal2 == null) {
					returnVal2 = '[Item]'
				}
				getObj('tradeitemidb').innerHTML = returnVal2;
			} else {
				window.top.Interface.location.replace('fhmessb.asp?CharsAt=' + Math.abs(Special));				
			}
		}
	} else if (pb == 2) {
		getObj('tradeitemid').value = 0;
		getObj('tradeitemidb').innerHTML = '';
	}
}