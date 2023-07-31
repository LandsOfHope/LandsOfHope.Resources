var PageNo = PageNo;
var MT = MT;
var Processing = 0;
var Countx = 0;

var LastTab = 0;

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?MT=' + MT + '&P=' + PageNo + '');
}

function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function PC(stuff) {
	stuff.style.cursor = 'pointer';
	stuff.style.backgroundColor = BGCOLOR_S
}

function AvC(Color, z, Itty, vp, vt) {
	//ri=' + Countx + ' z=' + z + ' vp="' + vp + '" vt="' + vt + '"
	document.write('<tr width="160"><td><img src="https://lohcdn.com/game/v/' + vp + '" width=15 height=15></td><td width="145" onclick="DC(' + z + ')" t="' + Itty + '" onmouseover="PC(this)" onmouseout="RC(this)" style="padding-left: 5px;" class="specialcell"><b style="color: ' + Color + ';">' + Itty + '</b></td></tr>');
	Countx = Countx + 1;
}

function DC(z) {
	getObj("Stuff").innerHTML = 'Loading data ...';
	MT = z
	getObj("HiddenWindow").src = 'vesselsz.asp?Type=' + LastTab + '&P=' + PageNo + '&ID=-' + z + '';
}

function DrawHeaders(hn) {
	return "<table cellpadding=1 cellspacing=1 border=0 height='25px'><tr><td width=240 class=title>" + hn + "</td><td valign=bottom></td><td style='background-image: URL(https://lohcdn.com/game/pirate/piratetab.png); background-position: bottom; background-color: transparent; width:100px' align=center><a class='tab' href='javascript:ShowTab(0);'>General</a></td><td valign=bottom></td><td style='background-image: URL(https://lohcdn.com/game/pirate/piratetab.png); background-position: bottom; background-color: transparent; width:100px' align=center><a class='tab' href='javascript:ShowTab(1);'>Properties</a></td><td valign=bottom></td><td style='background-image: URL(https://lohcdn.com/game/pirate/piratetab.png); background-color: transparent; background-position: bottom; width:100px' align=center><a class='tab' href='javascript:ShowTab(2);'>Equipment</a></td><td valign=bottom></td><td style='background-image: URL(https://lohcdn.com/game/pirate/piratetab.png); background-position: bottom; background-color: transparent; width:100px' align=center><a class='tab' href='javascript:ShowTab(3);'>Other</a></td><td valign=bottom></td></tr></table>";
}

function ShowTab(tabno) {
	ShowTab2(tabno, MT);
}
function ShowTab2(tabno, id) {
	getObj("Stuff").innerHTML = 'Loading data ...';
	LastTab = tabno;
	getObj("HiddenWindow").src = 'vesselsz.asp?Type=' + tabno + '&ID=' + id + '';
}

function SetStuff(HTMLin, hn) {
	getObj("Stuff").innerHTML = HTMLin;
	if (hn != '') {
		getObj("Header").innerHTML = DrawHeaders(hn);
		document.title = hn;
	}
}

function DrawFooters() {
	var strTest = '';
	strTest = "<td valign=bottom></td><td style='background-image: URL(https://lohcdn.com/pirate/piratetab.png); background-position: bottom; background-color: transparent; width:100px' align=center><a class='tab' href=\"javascript:window.top.closeme('iwindow');\">Close</a></td>";
	return "<table cellpadding=1 cellspacing=1 border=0 height='25px'><tr><td width=240>&nbsp;</td>" + strTest + "<td valign=bottom></td></tr></table>";
}