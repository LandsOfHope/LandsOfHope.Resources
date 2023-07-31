var GoPage = GoPage;
var BN = BN;
var BIC = BIC;
var IPath = window.top.FHIPM;
var Processing = 0;
var IC = 0;
var Infos = new Array();

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(PictureID, c2, ItemName, ItemID, ic) {
if (PictureID == '0') {PictureID = ''}
var Color = '#66ff66'
if (ic > 0 && BIC > 0 && ic != BIC) {Color = 'white'};
if (ic == 0) {Color = '#ff6666'}

if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, PictureID, c2, ItemName, ItemID, ic);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' +  Color + '; padding-left: 5px;"><td width=15><img style=\'background-color: ' + c2 + '\' src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + ItemName + '</td><td>' + ic + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, PictureID, c2, ItemName, ItemID, ic) {
this.c = Color;
this.ic = ic;
this.p = PictureID;
this.t = ItemName;
this.c2 = c2;
this.v = ItemID;
}

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br><center><b>Current Room</b></center>Name: ' + Infos[v].t + '<br>Spawned Items: ' + Infos[v].ic + '<br><br><center><b>New Item Spawn</b></center>Base Name: ' + BN + '<br>Spawn Items: ' + BIC;
	getObj('Pic').innerHTML = "<img width=20 height=20 style='background-color:" + Infos[v].c2 + "' src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?ItemID=' +Infos[v].v + '&P=' + GoPage + '\');}','Spawn','Spawn') + (Infos[v].ic != 0 ? Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?ItemID=-' +Infos[v].v + '&P=' + GoPage + '\');}','Despawn','Despawn') : '');
}


function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Infos[v].t);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}