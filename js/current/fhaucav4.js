var ItemTypeID = ItemTypeID;
var PageNo = PageNo;
var BagCount = 0;
var CharsAt = 0;
var OPath = window.top.FHIPO;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '&ItemTypeID=' + ItemTypeID);
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function AVC(Color, value, v, PictureID, Itty) {
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, value, v, PictureID, Itty);

//z=' + value + ' v="' + v + '" p="' + PictureID + '" t=
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, value, v, PictureID, Itty) {
this.c = Color;
this.p = PictureID;
this.t = Itty;
this.v = v;
this.z = value;
}

function FBI(v) {
window.location.replace('?ItemTypeID=' + v + '&CharsAt=' + CharsAt);
}

function AdC(n, Names, Color, PictureID) {
if (PictureID == '') {PictureID = 'bg3.gif'};
BagCount = BagCount + 1;
var Titles = 'Swap items in or out of your ' + Names;
var Titles2 = 'Open your ' + Names;
var Actions = 'FB(' + n + ');';
document.write('<td style=\'cursor: pointer; border: 1px dotted ' + BGCOLOR_S + ';\'><table align=center cellspacing=0 class="weakercell" cellpadding=1><tr><td title="' + Titles2 + '" style="width: 34px; color: ' + Color + '; background-color:' + Color + ';" onmouseover="this.style.backgroundColor=\'' + BGCOLOR_S + '\';window.top.InfoTip(\'' + window.top.FHIPI + PictureID + '\', \'<b>' + Names + '</b><br>' + Titles2 + '\');" onmouseout="this.style.backgroundColor=\'' + Color + '\';"><img width=34 height=34 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '" onclick="this.disabled=true; FBI(' + n + ');"></td><td>' + Adir('this.disabled=true;' + Actions + '', Titles, 'arrow_inout','') + '</td></table></td>');
}

function FB(v) {
if (ItemTypeID == 48) {
	window.location.replace('fhswap.asp?CharsAt=' + v + '&LID=' + ItemTypeID + '&Pet=0');
} else {
	window.location.replace('fhswap.asp?CharsAt=' + ('' + ItemTypeID == '1' ? '6' : '' + ItemTypeID + '') + '&LID=' + v + '' + '&Pet=0');
}
}


function PC(v) {
window.top.InfoTip('' + IPath + Infos[v].p, '' + Infos[v].t + '');
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function DC(v) {
var bi = Math.round(Math.abs(Infos[v].v) / 10);
if (bi <= 0) {
	bi = 1;
}
getObj('Stuff2').innerHTML = '<font class="weakcell" style="color:' + Infos[v].c + '"><b>' + Infos[v].t + '</b></font>' + (Infos[v].t.indexOf('(T)') != -1 ? '<br>Trapped' : (Infos[v].t.indexOf('(#)') != -1 ? '<br>Inscribed' : '')) + '<br>Value: ' + window.top.BSGM3(Infos[v].v);
getObj('Stuff3').innerHTML = '<table class=\'itemtext\' cellpadding=1 cellspacing=0><tr><td><input type=hidden name=I value=\'' + Infos[v].z + '\'><input type=hidden name=ItemTypeID value=\'' + ItemTypeID + '\'><input type=hidden name=P value=\'' + PageNo + '\'>Starting Price:</td><td><input name=StartingPrice id=StartingPrice value=\'' + Infos[v].v + '\' type=hidden>' + FormMoney('StartingPrice', Infos[v].v) + '</td></tr><tr><td colspan=2 class=\'weakercell\'>The price the auction should start at, minimum bid has to be this price or higher.</td></tr><tr><td>Bid Increment:</td><td><input name=BidIncrement id=BidIncrement value=\'' + bi + '\' type=hidden>' + FormMoney('BidIncrement', bi) + '</td></tr><tr><td colspan=2 class=\'weakercell\'>Once bidding starts you can set the minimum bid increment, i.e. to stop people just bidding 1bp over the last person enter a number higher than 1bp in the box.</td></tr><tr><td>Quick Sale Price:</td><td><input name=QuickSalePrice id=QuickSalePrice value=\'' + (Math.abs(Infos[v].v) * 10) + '\' type=hidden>' + FormMoney('QuickSalePrice', (Math.abs(Infos[v].v) * 10)) + '</td></tr><tr><td colspan=2 class=\'weakercell\'>Setting a QSP allows an auction to end early if a bidder clicks the relevant button and pays the amount entered in the Quick Sale Box.</td></tr></table>';
//getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "' width=20 height=20>";
getObj('Buttons').innerHTML = Adf2('','Add Auction','Add Auction') + '<' + strClicky + ' type="button" onclick="window.top.loadwindow2(\'im.asp?Test=' + Infos[v].z + '&Bonus=0&Material=\',300,300,\'iwindow\',\'Info Window\');" style=\'width: 85\'>Info</button>';
}