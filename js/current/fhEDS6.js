
var Skill = Skill;
var Countt = 0;
var GoPage = GoPage;
var Bb = Bb;
var IPath = window.top.FHIPR;
var IPath2 = window.top.FHIPI;
var Processing = 0;
var IC1 = 0;
var IC2 = 0;
var Infos1 = new Array();
var Infos2 = new Array();
var ACC = 0;
var Actuals = new Array();
var LastV = -1;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(PictureID, sn, ItemName, PName, ItemID, Level, Skill2,a, rm) {
if (PictureID == '0') {PictureID = ''}
var Color = LITE;
if (Skill2 <= Skill) {Color = '#66ff66'} else {Color = '#ff6666'}
if (Infos1[IC1] == null) {
	Infos1[IC1] = new Array();
}
Infos1[IC1] = new newInfo1(Color, PictureID, sn, ItemName, PName, ItemID, Level, Skill2,a, rm);
document.write('<tr id="I1-' + IC1 + '" onmouseover="PC1(' + IC1 + ')" onmouseout="RC1(' + IC1 + ')" onclick="DC1(' + IC1 + ')" style="color: ' +  Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'200\'>' + ItemName + '</td><td width=\'100\'>' + GetAName(a) + '</td></tr>');
IC1 = IC1 + 1;
}

function newInfo1(Color, PictureID, sn, ItemName, PName, ItemID, Level, Skill2,a, rm) {
this.c = Color;
this.sn = sn;
this.p = PictureID;
this.t = ItemName;
this.a = a;
this.a2 = (Math.round(Skill / 2000) + 5);
this.rm = rm;
this.v = ItemID;
this.q2 = (Math.round(Skill / 5) + 15);
this.n = PName;
this.s = Skill2;
this.l = Level;
}

function RC1(v) {
getObj('I1-' + v).style.cursor = '';
getObj('I1-' + v).style.backgroundColor='';
}

function PC1(v) {
window.top.InfoTip(IPath + (Infos1[v].p == '' ? 'na.gif' : Infos1[v].p),Infos1[v].t);
getObj('I1-' + v).style.cursor = 'pointer';
getObj('I1-' + v).style.backgroundColor=BGCOLOR_S
}

function AC3(iid, ItemName) {
var PictureID = 'zucrba.gif';
var Color = 'white'
if (Infos2[IC2] == null) {
	Infos2[IC2] = new Array();
}
Infos2[IC2] = new newInfo2(Color, PictureID, iid, ItemName, 0, 0);
document.write('<tr id="I2-' + IC2 + '" onmouseover="PC2(' + IC2 + ')" onmouseout="RC2(' + IC2 + ')" onclick="DC2(' + IC2 + ')" style="color: ' +  Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath2 + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'200\'>' + ItemName + '</td><td width=\'100\'>[Pool]</td></tr>');
IC2 = IC2 + 1;
}

function newInfo2(Color, PictureID, iid, ItemName, l, x) {
this.c = Color;
this.l = l;
this.p = PictureID;
this.t = ItemName;
this.x = x;
this.v = iid;
this.q2 = (Math.round(Skill / 5) + 15);
}

function AC4(iid, ItemName, l) {
var PictureID = 'zucrba.gif';
var Color = 'gold'
if (Infos2[IC2] == null) {
	Infos2[IC2] = new Array();
}
Infos2[IC2] = new newInfo2(Color, PictureID, iid, ItemName, l, 1);
document.write('<tr id="I2-' + IC2 + '" onmouseover="PC2(' + IC2 + ')" onmouseout="RC2(' + IC2 + ')" onclick="DC2(' + IC2 + ')" style="color: ' +  Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath2 + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'200\'>' + ItemName + '</td><td width=\'100\'>[Pool]</td></tr>');
IC2 = IC2 + 1;
}

function RC2(v) {
getObj('I2-' + v).style.cursor = '';
getObj('I2-' + v).style.backgroundColor='';
}

function PC2(v) {
window.top.InfoTip(IPath2 + (Infos2[v].p == '' ? 'na.gif' : Infos2[v].p),Infos2[v].t);
getObj('I2-' + v).style.cursor = 'pointer';
getObj('I2-' + v).style.backgroundColor=BGCOLOR_S
}


function AC2(PictureID, sn, ItemName, PName, ItemID, Level, Skill2,a, rm, sx, sp) {
if (PictureID == '0') {PictureID = ''}
var Color = 'gold'
if (Actuals[ACC] == null) {
	Actuals[ACC] = new Array();
}
Actuals[ACC] = new newActual(Color, PictureID, sn, ItemName, PName, ItemID, Level, Skill2,a, rm, sx, sp);
document.write('<tr id="A' + ACC + '" onmouseover="PCA(' + ACC + ')" onmouseout="RCA(' + ACC + ')" onclick="DCA(' + ACC + ')" style="color: ' +  Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'200\'>' + ItemName + '</td><td width=\'100\'>' + GetAName(a) + '</td></tr>');
ACC = ACC + 1;
}

function newActual(Color, PictureID, sn, ItemName, PName, ItemID, Level, Skill2,a, rm, sx, sp) {
this.c = Color;
this.sn = sn;
this.p = PictureID;
this.t = ItemName;
this.a = a;
this.sx = sx;
this.sp = sp;
this.a2 = (Math.round(Skill / 2000) + 5);
this.rm = rm;
this.q2 = (Math.round(Skill / 5) + 15);
this.v = ItemID;
this.n = PName;
this.s = Skill2;
this.l = Level;
}

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '');
}

function DC2(v) {
	LastV = v;
	getObj('Stuff2').innerHTML = '<b>' + Infos2[v].t + '</b>' + (Infos2[v].l == 0 ? '<br>Max Level: ' + Infos2[v].q2 : '<br>Level: ' + Infos2[v].l + (Infos2[v].l < Infos2[v].q2 ? '<br>Max Level: ' + Infos2[v].q2 : '<br>Fixed Level'));
	getObj('Pic').innerHTML = "<img src='" + IPath2 + (Infos2[v].p == null ? 'na.gif' : Infos2[v].p) + "'>";
	getObj('Buttons').innerHTML = '' + (Infos2[v].x == 0 ? Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt2=' +Infos2[v].v + '&P=' + GoPage + '\');}', 'Use' ,'Use') : Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt2=1&P=' + GoPage + '\');}','Remove','Remove') + (Infos2[v].q2 > 1 ? Adr('prompt(\'The level you wish to spawn?\',2,\'' + Infos2[v].q2 + '\');','Update level','Level') : ''))
}

function DC1(v) {
	LastV = v;
	getObj('Stuff2').innerHTML = '<b>' + Infos1[v].t + '</b><br>Respawn Interval: ' + (Infos1[v].rm == 0 ? 'Almost Instantly' : '' + Infos1[v].rm + 'mins') + '<br>Race: ' + Infos1[v].sn + '<br>Profession: ' + Infos1[v].n + '<br>Allegiance ' + Infos1[v].a + ' (' + GetAName(Infos1[v].a) + ')' + (Infos1[v].l == 0 ? '<br>Max Level: ' + Infos1[v].q2 : '<br>Level: ' + Infos1[v].l + (Infos1[v].l < Infos1[v].q2 ? '<br>Max Level: ' + Infos1[v].q2 : '<br>Fixed Level')) + '<br>Dungeon Mastery Skill: ' + Infos1[v].s;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos1[v].p == null ? 'na.gif' : Infos1[v].p) + "'>";
	getObj('Buttons').innerHTML = '' + Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt2=' +Infos1[v].v + '&P=' + GoPage + '\');}', 'Spawn','Spawn') + (Infos1[v].q2 > 1 ? Adr('prompt(\'The level you wish to spawn?\',1,\'' + Infos1[v].q2 + '\');','Spawn Level','Level') : '');
}

function PromptReturn(returnVal, pb) {
	var v = 0;
	if (returnVal != null) {
		if (pb != null && Processing == 0) {
			if (pb == 1) {
				v = LastV;
				if (returnVal > 0 && returnVal <= Infos1[v].q2) {
					Processing = 1;
					window.top.Interface.location.replace('fheds.asp?CharsAt2=' +Infos1[v].v + '&P=' + GoPage + '&aok=' + returnVal);
				}

			} else if (pb == 2) {
				v = LastV;
				if (returnVal > 0 && returnVal <= Infos2[v].q2) {
					Processing = 1;
					window.top.Interface.location.replace('fheds.asp?CharsAt2=' +Infos2[v].v + '&P=' + GoPage + '&aok=' + returnVal);
				}
			} else if (pb == 3) {
				v = LastV;
				if (returnVal > 0 && returnVal <= Actuals[v].q2) {
					Processing = 1;
					window.top.Interface.location.replace('fheds.asp?CharsAt2=' +Actuals[v].v + '&P=' + GoPage + '&aok=' + returnVal);
				}
			} else if (pb == 4) {
				v = LastV;
				if (returnVal != Actuals[v].t) {
					Processing = 1;
					window.top.Interface.location.replace('fheds.asp?CharsAt2=' +Actuals[v].v + '&P=' + GoPage + '&ann=' + returnVal);
				}
			}
		}
	}
}

function DCA(v) {
	LastV = v;
	getObj('Stuff2').innerHTML = '<b>' + Actuals[v].t + '</b><br>Respawn Interval: ' + (Actuals[v].rm == 0 ? 'Almost Instantly' : '' + Actuals[v].rm + 'mins') + '<br>Race: ' + Actuals[v].sn + '<br>Profession: ' + Actuals[v].n + '<br>Sex: ' + (Actuals[v].sx == '' ? 'Random' : Actuals[v].sx) + '<br>Allegiance: ' + Actuals[v].a + ' (' + GetAName(Actuals[v].a) + ')' + (Actuals[v].l == 0 ? '<br>Max Level: ' + Actuals[v].q2 : '<br>Level: ' + Actuals[v].l + (Actuals[v].l < Actuals[v].q2 ? '<br>Max Level: ' + Actuals[v].q2 : '<br>Fixed Level')) + '<br>Dungeon Mastery Skill: ' + Actuals[v].s;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Actuals[v].p == null ? 'na.gif' : Actuals[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt2=1&P=' + GoPage + '\');}', 'Despawn', 'Despawn') + (Actuals[v].q2 > 1 ? Adr('prompt(\'The level you wish to spawn?\', 3,\'' + Actuals[v].q2 + '\');','Spawn level','Level') + Adr('prompt(\'The name you wish to give the spawn?\',4,\'' + Actuals[v].t + '\');','Rename','Rename') + (Actuals[v].sx != 'M' ? Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt2=' +Actuals[v].v + '&sex=M&P=' + GoPage + '\');}','Male','Male') : '') + (Actuals[v].sx != 'F' ? Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt2=' +Actuals[v].v + '&sex=F&P=' + GoPage + '\');}','Female', 'Female') : '') + (Actuals[v].sx != '' ? Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt2=' +Actuals[v].v + '&sex=N&P=' + GoPage + '\');}','Random Sex', 'Random') + Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'fhedsp.asp\');}', 'Picture','Picture') : '') : '');
}

function RCA(v) {
getObj('A' + v).style.cursor = '';
getObj('A' + v).style.backgroundColor='';
}

function PCA(v) {
window.top.InfoTip(IPath + (Actuals[v].p == '' ? 'na.gif' : Actuals[v].p),Actuals[v].t);
getObj('A' + v).style.cursor = 'pointer';
getObj('A' + v).style.backgroundColor=BGCOLOR_S
}