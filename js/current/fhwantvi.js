var IC = 0;
var Infos = new Array();
var PageNo = PageNo;
var Cat = Cat;
var CharsAt = CharsAt;
var qq = qq;
var IPath = window.top.FHIPI;
var Processing = 0;
var LastV = -1;
var turnin = turnin;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(IID, ItemName, PictureID, q, l) {
if (PictureID == '0') {PictureID = ''}
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, IID, ItemName, PictureID, q, l);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'250px\' style="color: ' +  Color + '; padding-left: 5px">' + ItemName + (q > 1 ? ' * ' + q : '') + '</td><td>' + l + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, IID, ItemName, PictureID, q, l) {
this.c = Color;
this.v = IID;
this.p = PictureID;
this.q = q;
this.l = l;
this.i = ItemName;
}

function ACN(PictureID, Color, Notice) {
if (PictureID == '0') {PictureID = ''}
document.write('<tr><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'250px\' style="color: ' +  Color + '; padding-left: 5px">' + Notice + '</td></tr>');
}


function GoP(PageNo) {
window.location.replace('fhwantvi.asp?CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function DC(v) {
	if (Processing == 0) {
		LastV = v;
		var cq = Math.floor(Infos[v].q / qq);
		if (cq > turnin) {
			cq = turnin;
		}
		if (cq > 1) {
			prompt('Please enter how many times you wish to complete this job (up to ' + cq + ')?<br>You will lose ' + qq + ' * ' + Infos[v].i + ' each time.', 2, 1, 'Complete Job', '', 2)
		} else {
			confirm('Do you wish to fulfill this job?<br>You will lose ' + qq + ' * ' + Infos[v].i + '', 1)
		}
	}
}


function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
	window.top.InfoTip('' + IPath + Infos[v].p, '' + Infos[v].i + '<br>Quantity: ' + Infos[v].q + '<br>Level: ' + Infos[v].l);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function PromptReturn(returnVal, pb) {
	var v = LastV;
	if (returnVal != null && pb != null && Processing == 0 && LastV >= 0) {
		if (pb == 1) {
			Processing = 1;
			window.top.Interface.location.replace('fhwantvi.asp?CharsAt=' + CharsAt + '&P=' + PageNo + '&Times=1&ItemID=' + Infos[v].v + '&cat=' + Cat);
		} else {
			if (returnVal >= 1) {
				var cq = Math.floor(Infos[v].q / qq);
				if (cq > returnVal) {
					cq = returnVal;
				}
				if (cq > turnin) {
					cq = turnin;
				}
				if (returnVal >= cq) {
					returnVal = cq;
				}
				Processing = 1;
				window.top.Interface.location.replace('fhwantvi.asp?CharsAt=' + CharsAt + '&P=' + PageNo + '&Times=' + returnVal + '&ItemID=' + Infos[v].v + '&cat=' + Cat);
			}
		}
	}
}
