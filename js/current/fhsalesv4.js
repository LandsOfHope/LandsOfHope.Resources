var SN = SN;
var IPath = window.top.FHIP
var Processing = 0;
var Type2 = Type2;
var PageNo = PageNo;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(z, PictureID, v, s, sd, sn, l) {
if (PictureID == '0') {PictureID = ''}
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, z, PictureID, v, s, sd, sn, l);
//z=' + z + ' v="' + v + '" l=' + l + ' s=' + s + ' sd="' + sd + '" sn="'+ sn +'"
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'150\' style="color: ' +  Color + '; padding-left: 5px;">' + sn + '</td><td>' + v + '</td><td>' + l + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, z, PictureID, v, s, sd, sn, l) {
this.c = Color;
this.z = z;
this.p = PictureID;
this.sn = sn;
this.v = v;
this.s = s;
this.sd = sd;
this.l = l;
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '&Type=' + Type2 + '&SN=' + SN);
} 


function GoP2(PageNo2) {
	window.location.replace('?P=' + PageNo + '&Type=' + PageNo2 + '&SN=' + SN);
} 


function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Infos[v].sn);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].sn + '</b><br>Level: ' + (Infos[v].l == 0 ? 'Unknown' : '' + Infos[v].l) + '<br>Price: ' + Infos[v].v + '<br>' + Infos[v].sd + ' ago' ;
	getObj('Buttons').innerHTML = '';
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
}

function SPages(CurPage) {
var strTest = '';
var v = 0;
var i = 0;
for (i = -1; i <= 9; i++) 
{         
	
	if (i != 4 && i != 3) {
	v = v + 1;

	strTest += '<td class="btn" ' + (CurPage != i ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:55px" onclick="GoP2(' + i + ')"' : ' style="width:55px; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '>' + (i == -1 ? 'All' : (i == 0 ? 'Items' : (i == 1 ? 'Pets' : (i == 2 ? 'Buildings' : (i == 5 ? 'Lockpicking' : (i == 6 ? 'Crafting' : (i == 7 ? 'Appraising' : (i == 8 ? 'Salvage' : 'Auctions')))))))) + '</td>';        
	if (v >= 20) {
		strTest += '</tr><tr>';
		v = 0;
	}
	}
}
i = 19;
strTest += '<td class="btn" ' + (CurPage != i ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:55px" onclick="GoP2(' + i + ')"' : ' style="width:55px; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '>Vessel</td>';        

getObj('Pages2').innerHTML = '<table><tr>' + strTest + '</tr></table>';
}