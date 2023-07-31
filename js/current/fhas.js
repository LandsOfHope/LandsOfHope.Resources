var Processing = 0;
var CharsAt = CharsAt;
var PageNo = PageNo;
var Search = Search;
var SL = SL;
var EL = EL;
var IPath = window.top.FHIPR;
var BountyLimit = BountyLimit;
var IC = 0;
var Infos = new Array();
var LastV = -1;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AM(v, PictureID, l2, b, Named, a) {
	var Color = window.top.GetAColor(a);
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, v, PictureID, l2, b, Named, a);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="150" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px">' + Named + '</td><td align=right> ' + window.top.BSGM2(b) + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, v, PictureID, l2, b, Named, a) {
	this.c = Color;
	this.a = a;
	this.p = PictureID;
	this.n = Named;
	this.value = v;
	this.l2 = l2;
	this.v = b;
}

function DC(v) {
	var an = '';
	an = window.top.GetAName(Infos[v].a);
	an = (an == '' ? 'Neutral' : an)
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].n + '</b><br>Level: ' + Infos[v].l2 + '<br>Allegiance: ' + an + '<br>Current Contract Value: ' + window.top.BSGM(Infos[v].v);
	getObj('Pic').innerHTML = '<img src=\'' + IPath + Infos[v].p + '\'>';

	getObj('Buttons').innerHTML = '<input type=hidden id=saleprice name=saleprice value=0>' + FormMoney('saleprice', 0) + '<br>' + Adr('DC3(' + v + ');', 'Raise contract', 'Raise');
}

function DC3(inwhat) {
	if (Processing == 0) {
		var stuff = getObj('saleprice').value
		if (stuff > BountyLimit) {
			alert('You can not raise this persons assasination value higher than your current held funds of ' + window.top.BSGM2(BountyLimit) + ', please lower the value and try again.');
		} else if (stuff <= 0) {
			alert('You must enter a value higher than 0bp.');
		} else {
			LastV = inwhat; //Infos[v].value
			confirm('Are you sure you wish to raise this persons assassination value by ' + window.top.BSGM2(stuff) + ', this will cost ' + window.top.BSGM2(Math.floor(stuff)) + '?<br>This action can not be undone, you can not cancel a hit once one has been initiated and you can not get your money back.', stuff);
		}
	}
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && LastV >= 0) {
			Processing = 1;
			window.top.Interface.location.replace('fhas.asp?Type=' + pb + '&EL=' + EL + '&SN=' + Search + '&SL=' + SL + '&P=' + PageNo + '&CharsAt=' + CharsAt + '&ItemID=' + Infos[LastV].value + '');
		}
	}
}

function fx1(stuff) {
	var re = /^\$|,|'|"|%|@|#/g;
	stuff.value = stuff.value.replace(re, "");
	if (stuff.value == '' || stuff.value == null) {
		stuff.value = 0;
	}
}

function FormMoneyx(fin, mmin) {
	var harhar = mmin;
	var m = Math.floor(harhar / 1000000)
	var g = Math.floor(harhar / 10000) - (m * 100)
	var s = Math.floor(harhar / 100) - Math.floor(((g * 100) + (m * 10000)))
	var b = Math.floor(harhar) - Math.floor(((s * 100) + (g * 10000) + (m * 1000000)))

	return "<img src=\"" + window.top.FHIPO + "gkp.gif\"><input name=cpp" + fin + " id=cpp" + fin + " value=" + m + " size=2 maxlength=1 style=\"width: 30\" onkeyup=\"CalcM('" + fin + "', this)\"><img src=\"" + window.top.FHIPO + "gp.gif\"><input name=cg" + fin + " id=cg" + fin + " value=" + g + " size=2 maxlength=2 style=\"width: 30\" onkeyup=\"CalcM('" + fin + "', this)\"><img src=\"" + window.top.FHIPO + "sp.gif\"><input name=cs" + fin + " id=cs" + fin + " value=" + s + " size=2 maxlength=2 style=\"width: 30\" onkeyup=\"CalcM('" + fin + "', this)\"> <img src=\"" + window.top.FHIPO + "bp.gif\"><input name=cb" + fin + " id=cb" + fin + " value=" + b + " size=2 maxlength=2 style=\"width: 30\" onkeyup=\"CalcM('" + fin + "', this)\">";
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Infos[v].n);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}


function GoP(PageNo) {
	window.location.replace('?CharsAt=' + CharsAt + '&EL=' + EL + '&SN=' + Search + '&SL=' + SL + '&P=' + PageNo);
}

function ShowSearch(strword) {
	var strTest = '';
	strTest = '<table class=\'weakcell\' cellpadding=0 cellspacing=0><input type=hidden id=CharsAt name=CharsAt value=\'' + CharsAt + '\'><tr><td>' + strword + ':</td><td><input id=SN name=SN value=\'' + Search + '\' onblur=\'fx1(this)\' title=\'Name of Player.\'></td><td>Min Level:</td><td><input title=\'The minimum player level to find.\' id=SL name=SL value=\'' + SL + '\' size=4 maxlength=4 onkeypress=\'return fxkp(event);\' onpaste=\'event.returnValue = false;\'></td><td>Max Level:</td><td><input title=\'The maximum playerlevel to find.\' id=EL name=EL value=\'' + EL + '\' size=4 maxlength=4 onkeypress=\'return fxkp(event);\' onpaste=\'event.returnValue = false;\'></td><td>' + Adr('fx1(getObj(\'SN\')); fxn(getObj(\'EL\')); fxn(getObj(\'SL\'));getObj(\'editform\').submit();', 'Find Players', 'Find') + '</td></tr></table>';
	document.write(strTest);
}