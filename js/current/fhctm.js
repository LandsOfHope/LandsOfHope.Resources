var IC = 0;
var Infos = new Array();
var CharsAt = CharsAt;
var IPath = window.top.FHIPI;
var Processing = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
window.location.replace('?CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function TA() {
var x = 0;
var totala = 0;
if (getObj("ItemID") != null) 
{
	if (IC <= 1) {
		if (getObj("ItemID").checked == true  && getObj("ItemID").disabled == false)  {
			totala = Math.abs(totala) + Math.abs(Infos[x].v)
		}
	} else {
		for (x = 0; x < IC; x++) {
			if (getObj("ItemID")[x].checked == true && getObj("ItemID")[x].disabled == false) {
				totala = Math.abs(totala) + Math.abs(Infos[x].v)
			}
		}
	}
}
return Math.round(totala);
}

function SA(how) {
var x = 0;
if (getObj("ItemID") != null) 
{
	if (IC <= 1) {
		if (getObj("ItemID").disabled == false) {
			getObj("ItemID").checked = how;
		}
	} else {
		for (x = 0; x < IC; x++) {
			if (getObj("ItemID")[x].disabled == false) {
				getObj("ItemID")[x].checked = how;
			}
		}
	}
}
}

function SI(how) {
var x = 0;
if (getObj("ItemID") != null) 
{
	for (x = 0; x < IC; x++) {
		if (IC <= 1) {
			if (Infos[x].i.indexOf('?') == -1 && getObj("ItemID").disabled == false) {
				getObj("ItemID").checked = how;
			}
		} else {
			if (Infos[x].i.indexOf('?') == -1 && getObj("ItemID")[x].disabled == false) {
				getObj("ItemID")[x].checked = how;
			}
		}
	}
}
}

function DC(v) {
var q3 = Math.abs(Infos[v].q2);
var q2 = 0;
if (q3 > 1000) {
	q2 = 1000;
} else {
	q2 = q3;
}
getObj('Stuff2').innerHTML = Infos[v].i + '<br>Quantity: ' + q2 + (q3 > Math.abs(q2) ?  ' of ' + q3 + '<br>Maximum you can sell: ' + q2 : '') + '<br>Value: ' + window.top.BSGM(Infos[v].v) + (q3 > 1 ? ' (<b>ea</b> ' + (window.top.BSGM((Infos[v].v / q3))) + ')' : '');
getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
getObj('Buttons').innerHTML = '' + (q3 <= 1000 ? Adr('if (Processing == 0) {Processing = 1; window.top.PGS(\'money.wav\');window.location.replace(\'fhctm.asp?CharsAt=' + CharsAt + '&ItemID=' +Infos[v].z + '\');}','Sell','Sell') : Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'fhctm.asp?CharsAt=' + CharsAt + '&aok=1000&ItemID=' +Infos[v].z + '\');','Sell','Sell')) + (Infos[v].i.indexOf('(?)') == -1 ? Adr('window.top.loadwindow2(\'im4.asp?Test=' + Infos[v].z + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].i + '\');','Info','Info') : '');
}

function AM(Color, Named, ShopID, value, q2, Picture) {
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, Named, ShopID, value, q2, Picture);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img src="' + IPath + (Picture == '' ? 'na.gif' : Picture) + '" width=15 height=15></td><td width="100%" style="color: ' + Color + '">' + Named + (q2 > 1 ? ' * ' + q2 : '') + '</td><td><input type=checkbox' + (Math.abs(q2) > 1000 ? ' disabled' : '') + ' id=ItemID name=ItemID value="' + ShopID + '" style="width: 10; height: 10"></td></tr>');
IC = IC + 1;
}

function newInfo(Color, Named, ShopID, value, q2, Picture) {
this.c = Color;
this.z = ShopID;
this.p = Picture;
this.i = Named;
this.v = value;
this.q2 = q2;
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('', ' ' + Infos[v].i + '<br>Value: ' + window.top.BSGM(Infos[v].v) + (Infos[v].q2 > 1 ? '<br>Each: ' + (window.top.BSGM(Math.round(Infos[v].v / Infos[v].q2))) + '' : ''));
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null && Processing == 0) {
		if (pb != null) {
			Processing = 1;
			if (pb == 2) {
				window.top.Interface.location.replace('fhctm.asp?ItemID=-1');
			} else {
				window.top.PGS('money.wav');
				getObj('Selly').submit();
			}
		}
	}
}