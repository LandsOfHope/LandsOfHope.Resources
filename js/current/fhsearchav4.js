var PageNo = PageNo;
var P2 = P2;
var county = 0;
var IPath = window.top.FHIP
var Processing = 0;
var Search = Search;
var MT = MT;
var Infos = new Array();
var IC = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AvC(Color, MoreInfo, v, Itty, PictureID, PP) {
if (Color == '') {Color = 'white'};
PictureID = (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID);
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, MoreInfo, v, Itty, PictureID, PP);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '"><td width=15><img width=15 height=15 src="' + IPath + PP + '/' + PictureID + '"></td><td width=\'200\'>' + Itty + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, MoreInfo, v, Itty, PictureID, PP) {
this.c = Color;
this.mi = MoreInfo;
this.p = PictureID;
this.i = Itty;
this.pp = PP;
this.v = v;
}


function GoP(PageNo) {
if (Processing == 0) {
	Processing = 1;
	window.location.replace('?P=' + PageNo + '&P2=' + P2  +'&Search=' + Search);
}
}

function GoP2(PageNo2) {
if (Processing == 0) {
	Processing = 1;
	window.location.replace('?P=1&P2=' + PageNo2 + '&Search=' + Search);
}
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + Infos[v].pp + '/' + Infos[v].p,Tipsfor(v));
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function Tipsfor(v) {
return '<b>' + Infos[v].i + '</b><Br>' + Infos[v].mi;
}

function DC(v) {
	if (P2 == 2 || P2 == 10 || P2 == 12 || P2 == 13) {
		window.frames['ResultsOfit'].location.href = 'im3.asp?test=' + Infos[v].v
	} else if (P2 == 3 || P2 == 4) {
		window.frames['ResultsOfit'].location.href = 'Sz.asp?test=' + Infos[v].v
	} else if (P2 == 6) {
		window.frames['ResultsOfit'].location.href = 'professions/' + Infos[v].i + '.htm';
	} else if (P2 == 7) {
		window.frames['ResultsOfit'].location.href = 'matz.asp?test=' + Infos[v].v
	} else if (P2 == 9) {
		window.frames['ResultsOfit'].location.href = 'bz2.asp?A=5&CharsAt=-' + Infos[v].v
	} else if (P2 == 5) {
		window.frames['ResultsOfit'].location.href = 'rz.asp?test=' + Infos[v].v
	} else if (P2 == 11) {
		window.frames['ResultsOfit'].location.href = 'mr.asp?ItemID=' + Infos[v].v
	}
}

function SPages(Count, CurPage) {
var strTest = '';
var v = 0;
for (i = 1; i <= Count; i++) 
{         
	v = v + 1;

	var fc = LITE;	
	if (i == CurPage) {
		fc = 'gold';
	}
	
	strTest += "<tr><td style=\"" + strButtonx + "; width: 125px; height: 12px; color: " + fc + "\" " + strClicksns + " " + (CurPage != i ? " style=\"width: 100px;\" onclick=\"GoP2(" + i + ")\"" : " style=\"width: 100px; font-weight: bold\"") + ">" + (i == 1 ? "Results" : (i == 2 ? "Items" :  (i == 3 ? "Spells" : (i == 4 ? "Styles" : (i == 5 ? "Races" : (i == 6 ? "Professions" : (i == 7 ? "Materials" : (i == 8 ? "Characters" : (i == 9 ? "Buildings" : (i == 10 ? "Craftable" : (i == 12 ? "Guild Item" : (i == 13 ? "Loot Item" : "Ingredient")))))))))))) + "</td></tr>";        
	if (v >= 20) {
		strTest += '</tr><tr>';
		v = 0;
	}
}
if (Count == 0) {
	strTest += '<tr><td class="btn" style="width:60; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold">Info</td></tr>';        
}

getObj('Pages2').innerHTML = '<table valign=top cellpadding=1 cellspacing=1>' + strTest + '</table>';
}