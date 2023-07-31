var IC = 0;
var Infos = new Array();
var PageNo = PageNo;
var county = 0;
var IPath = window.top.FHIPI;
var Processing = 0;
var MT = MT;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(Color, q, m, mt, PictureID, l, v, t, i, mid, s, nl) {
	if (PictureID == '' || PictureID == '0') { PictureID = 'na.gif' }
	if (t == 0) {
		Color = '#ff6666'
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, q, m, mt, PictureID, l, v, t, i, mid, nl, s);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td style="color: ' + Color + '; padding-left: 5px">' + m + '</td><td>' + mt + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, q, m, mt, PictureID, l, v, t, i, mid, nl, s) {
	this.c = Color;
	this.mid = mid;
	this.p = PictureID;
	this.i = i;
	this.nl = nl;
	this.t = t;
	this.v = v;
	this.m = m;
	this.mt = mt;
	this.l = l;
	this.s = Math.abs(s);
}


function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '&Type=' + MT);
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Tipsfor(v));
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function Tipsfor(v) {
	return '<b>' + (Infos[v].i == '' ? Infos[v].m : Infos[v].i) + '</b><br>Availability: ' + (Infos[v].t == 0 ? 'Scarce' : 'Common') + (Infos[v].nl == 0 ? '<br>Base Equip/Use Level: ' + Infos[v].l : '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v) + '<input type=hidden name="WN" value="' + (Infos[v].i == '' ? Infos[v].m : Infos[v].i) + '"><input type=hidden name="WI" value="' + Infos[v].v + '"><input type=hidden name="WP" value="' + Infos[v].p + '"><table class="weakcell">' + (Infos[v].nl == 0 ? '<tr><td>Item Level: </td><td><input name=Level id=Level size=4 maxlength=4 value="' + Infos[v].l + '" onkeypress="return fxkp(event);"> - <input name=Level3 id=Level3 size=4 maxlength=4 value="' + Infos[v].l + '" onkeypress="return fxkp(event);"> or <input type=checkbox name=Level2 value=1> any level</td></tr>' : '<input name=Level type=hidden value="' + Infos[v].l + '"><input type=hidden name=Level2 value=1>') + '<tr><td>Quantity: </td><td> ' + (Infos[v].s == 0 ? '<input name=Quantity size=3 maxlength=3 value="1" type=hidden><b style="color: red">1</b> - Comes in singles.' : '<input name=Quantity size=3 maxlength=3 value="1" onkeypress="return fxkp(event);">') + '</td></tr><tr><td>Price: </td><td>' + FormMoney('Price', 0) + '</td></tr><tr><td colspan=2>If this job can be completed multiple times enter the amount of money you wish to spend in total below, otherwise leave it as 0.</td></tr><tr><td>Fund: </td><td>' + FormMoney('Fund', 0) + '</td></tr><tr><td colspan=2>' + Adr('if (Processing == 0) {if (Math.abs(getObj(\'Level\').value) >= ' + Infos[v].l + ') {if (Math.abs(getObj(\'Price\').value) >0) {Processing = 1; getObj(\'Take\').submit();} else {alert(\'Please enter a price you are willing to pay for the completion of this job\');}} else {alert(\'This Item has a minimum level of ' + Infos[v].l + ', you entered a level too low. Try again\')}}', 'Create Job Listing', 'Create Job') + Adr('window.top.loadwindow2(\'imi.asp?Test=' + Infos[v].v + '&Bonus=0&Material=\',300,300,\'iwindow\',\'Item Info\');', 'Info', 'Info') + '</td></tr></table>'
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
}
