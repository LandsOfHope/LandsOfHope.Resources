var PageNo = PageNo;
var county = 0;
var IPath = window.top.FHIPI;
var Processing = 0;
var MT = MT;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(Color, q, m, mt, PictureID, l, v, t, i, mid, nl) {
if (PictureID == '' || PictureID == '0') {PictureID = 'na.gif'}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, q, m, mt, PictureID, l, v, t, i, mid, nl);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="https://res.landsofhope.com/images/cards/' + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td style="color: ' + Color + '; padding-left: 5px">' + m + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, q, m, mt, PictureID, l, v, t, i, mid, nl) {
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
}

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '&Type=' + MT);
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('https://res.landsofhope.com/images/cards/' + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Tipsfor(v));
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function Tipsfor(v) {
return '<b>' + (Infos[v].i =='' ? Infos[v].m : Infos[v].i) + '</b>';
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tipsfor(v) + '<input type=hidden name=tradeitemid id=tradeitemid value=0><input type=hidden name=tradeitem id=tradeitem value=\'\'><input type=hidden name=tradeprice id=tradeprice value=1><input type=hidden name="WN" value="' +  (Infos[v].i =='' ? Infos[v].m : Infos[v].i) + '"><input type=hidden name="WI" value="' +  Infos[v].v + '"><input type=hidden name="WP" value="' + Infos[v].p + '"><input type=hidden name="OID" value="' + Infos[v].mid + '"><table class="weakcell">' + (Infos[v].nl == 0 ? '<tr><td>Item Level: </td><td><input name=Level id=Level size=4 maxlength=4 value="' +Infos[v].l + '" onkeypress="return fxkp(event);"> or <input type=checkbox name=Level2 value=1> any level</td></tr>' : '<input name=Level id=Level type=hidden value="' +Infos[v].l + '"><input type=hidden name=Level2 value=1>') + '<tr><td>' + Adr('CItemPicker(\'Reward Item:\',2,0,\'Reward Item\');','Choose Reward', 'Reward') + ': </td><td id=tradeitemidb class=\'nav3\' style=\'width: 200px;\'><input name=Quantity size=3 maxlength=3 type=hidden value="1" onkeypress="return fxkp(event);"></td></tr><tr><td colspan=2>This is the item the person completing this job will receive from you, if you sell/drop or otherwise trase the item this job will not be able to be completed and will be automatically deleted after a set period of time.</td></tr><tr><td colspan=2>' + Adr('if (Processing == 0) {if (Math.abs(getObj(\'tradeitemid\').value) >0) {Processing = 1; getObj(\'Take\').submit();}}', 'Create Job Listing', 'Create Job') + Adr('window.top.loadwindow2(\'imi.asp?Test=' + Infos[v].v + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].i + '\');','Info','Info') + '</td></tr></table>'
	getObj('Pic').innerHTML = "<img src='https://res.landsofhope.com/images/cards/" + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
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
	getObj('tradeitem').value = '';
	window.top.showPopWin("picker_cardjob.asp?message=" + message + "&defaultvalue=" + defaultvalue + "&title=" + title + "&icon=" + icon + "&style=" + style, 300, 220, PromptReturn, null, title, pb);
}

function PromptReturn(returnVal, pb, returnVal2) {
	if (returnVal != null) {
		if (pb != null) {
			if (pb == 1) {
				getObj('Take').submit();
			} else if (pb == 2) {
				getObj('tradeitemid').value = returnVal;
				if (returnVal2 == null) {
					returnVal2 = '[Item]'
				}
				getObj('tradeitemidb').innerHTML = returnVal2;
				getObj('tradeitem').value = returnVal2;
			}
		}
	} else if (pb == 2) {
		getObj('tradeitemid').value = 0;
		getObj('tradeitemidb').innerHTML = '';
		getObj('tradeitem').value = '';
	}
}