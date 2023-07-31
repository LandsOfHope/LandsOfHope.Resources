var BImg = BImg;
var BName = BName;
var BDesc = BDesc;
var SystemUser = SystemUser;
var Processing = 0;
var IPath = window.top.FHIP
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function DC(v) {
	if (Processing == 0) {
		if (Infos[v].s != '') {
			Processing = 1;
			window.location.replace('' + Infos[v].s + '');
		} else {
			getObj('Buttons').innerHTML = '<' + strClicky3 + ' onclick="Processing = 1;window.location.replace(\'?Type=' + Infos[v].v + '\');">OK</button>';
			getObj('Stuff2').innerHTML = '<font class="weakcell" style="color:' + Infos[v].c + '"><b>' + Infos[v].i + '</b></font>';
			getObj('Pic').innerHTML = Infos[v].i;
		}
	}
}

function DB(v, i) {
	if (Processing == 0) {
		getObj('Buttons').innerHTML = Adr('Processing = 1;window.location.replace(\'?Type=' + v + '\');','OK','OK');
		getObj('Stuff2').innerHTML = '<font class="weakcell"><b>' + i + '</b></font>';
		getObj('Pic').innerHTML = '';
	}
}

function ACV(Special, TypeID, PictureID, Itty, ID) {
var Color = LITE;
if (TypeID == 0) {Color = 'gold'}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, Special, TypeID, PictureID, Itty, ID);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=40><img src=\'' + IPath + (TypeID == 1 ? 'm' : 'i') + '/' + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=40 height=40></td><td width=\'100%\' style="color: ' +  Color + '; padding-left: 5px;"><b>' + Itty + '</b><br>' + ID + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, Special, TypeID, PictureID, Itty, ID) {
this.c = Color;
this.s = Special;
this.p = PictureID;
this.v = TypeID;
this.i = Itty;
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].v == 1 ? 'm' : 'i') + '/' + Infos[v].p,Infos[v].i);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}