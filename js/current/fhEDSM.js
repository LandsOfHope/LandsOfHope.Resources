
var Countt = 0;
var GoPage = GoPage;
var BRN = BRN;
var BPN = BPN;
var BN = BN;
var BA = BA;
var BL = BL;
var IPath = window.top.FHIPM;
var Processing = 0;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(PictureID, c2, SpawnName, ItemName, PName, ItemID, Level, RName,a) {
if (PictureID == '0') {PictureID = ''}
var Color = LITE;
if (a == 0) (Color = '#ff6666')
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, PictureID, c2, SpawnName, ItemName, PName, ItemID, Level, RName,a);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' +  Color + '; padding-left: 5px;"><td width=15><img style=\'background-color: ' + c2 + '\' src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + ItemName + '</td><td><input type=checkbox id=ItemID style=\'width: 12px; height: 12px;\' name=ItemID value=' + ItemID + '></td></tr>');
IC = IC + 1;
}

function newInfo(Color, PictureID, c2, SpawnName, ItemName, PName, ItemID, Level, RName,a) {
this.c = Color;
this.sn = SpawnName;
this.p = PictureID;
this.t = ItemName;
this.c2 = c2;
this.a = a;
this.r = RName;
this.v = ItemID;
this.n = PName;
this.l = Level;
}


function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br><center><b>Current Spawn</b></center>Name: ' + Infos[v].sn + '<br>Profession: ' + Infos[v].n + '<br>Race: ' + Infos[v].r + '<br>Level: ' + Infos[v].l + '<br><br><center><b>New Spawn</b></center>Name: ' + BN + '<br>Profession: ' + BPN + '<br>Race: ' + BRN + '<br>Level: ' + BL + '<br>Allegiance: ' + BA + ' ' + GetAName(BA);
	getObj('Pic').innerHTML = "<img width=20 height=20 style='background-color:" + Infos[v].c2 + "' src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?ItemID=' +Infos[v].v + '&P=' + GoPage + '\');}', 'Spawn','Spawn');
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && Processing == 0) {
			if (Math.round(returnVal) != BL && Math.round(returnVal) <= BL && Math.round(returnVal) > 0) {
				Processing = 1;
				window.top.Interface.location.replace('fhEDSM.asp?rl=' + returnVal);
			}
		}
	}
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
	if (IC <= 1) {
		if (Infos[x].c == '#ff6666' && how == true) {
			getObj("ItemID").checked = true;
		} else if (Infos[x].c == LITE && how == false) {
			getObj("ItemID").checked = true;
		} else {
			getObj("ItemID").checked = false;
		}
	} else {
		for (x = 0; x < IC; x++) {
			if (Infos[x].c == '#ff6666' && how == true) {
				getObj("ItemID")[x].checked = true;
			} else if (Infos[x].c == LITE && how == false) {
				getObj("ItemID")[x].checked = true;
			} else {
				getObj("ItemID")[x].checked = false;
			}
		}
	}
}
}
