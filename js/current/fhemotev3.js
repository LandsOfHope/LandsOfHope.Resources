var PageNo = PageNo;
var CharsAt = CharsAt;
var IPath = window.top.FHIPR;
var OPath = window.top.FHIPO;
var Processing = 0;
var CurrentEML = 0;
var TN = '';
var IC = 0;
var EC = 0;
var Infos = new Array();
var Emotes = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
window.location.replace('?CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function DC2(v) {
window.location.replace('?CharsAt=' + CharsAt + '&ItemID=' + Emotes[v].v + '&T=' + TN + ' &P=' + PageNo + '');
}

function DC(v) {
CharsAt = Infos[v].value;
TN = Infos[v].t;
CurrentEML = Math.abs(Infos[v].v);
Emote1();
getObj('EmoteList').innerHTML = GetEmotes();
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

function RC2(v) {
getObj('E' + v).style.cursor = '';
getObj('E' + v).style.backgroundColor='';
}

function PC2(v) {
window.top.InfoTip(OPath + (Emotes[v].p == '' ? 'na.gif' : Emotes[v].p),Emotes[v].t);
getObj('E' + v).style.cursor = 'pointer';
getObj('E' + v).style.backgroundColor=BGCOLOR_S
}

function AC(value, PictureID, l, l2, v, Named) {
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, value, PictureID, l, l2, v, Named);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img src="' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '" width=15 height=15></td><td width="100%" style="color: ' + Color + ';">' + Named + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, value, PictureID, l, l2, v, Named) {
this.c = Color;
this.v = v;
this.value = value;
this.p = PictureID;
this.t = Named;
this.l = l;
this.l2 = l2;
}		

function ADE1(v, Named, PictureID) {
if (CurrentEML >= 1) {
	var Color = LITE;
	if (Emotes[EC] == null) {
		Emotes[EC] = new Array();
	}
	Emotes[EC] = new newEmote(Color, v, Named, PictureID, 1);
	EC = EC + 1;
}
}		

function ADE2(v, Named, PictureID) {
if (CurrentEML >= 2) {
	var Color = 'green';
	if (Emotes[EC] == null) {
		Emotes[EC] = new Array();
	}
	Emotes[EC] = new newEmote(Color, v, Named, PictureID, 2);
	EC = EC + 1;
}
}


function newEmote(Color, v, Named, PictureID, et) {
this.c = Color;
this.v = v;
this.p = PictureID;
this.t = Named;
this.et = et;
}		


function GetEmotes() {
	var out = '';
	var x = 0;
	for (x = 0; x < EC; x++) {
		out += '<div id="E' + x + '" onmouseover="PC2(' + x + ')" onmouseout="RC2(' + x + ')" onclick="DC2(' + x + ')" style="width: 95px; height: 15px; padding: 1px; margin: 1px; float: left; color: ' + Emotes[x].c + ';"><img src="' + OPath + Emotes[x].p + '" width=15 height=15>' + Emotes[x].t + '</div>'
	}
	return out;
}

function Emote1() {
EC = 0;
Emotes = new Array();
ADE2(15,'Barks', 'na.gif');
ADE2(41,'Bites', 'na.gif');
ADE2(30,'Blush', 'na.gif');
ADE1(13,'Bows', 'na.gif');
ADE2(22,'Cheese and Whine', 'na.gif');
ADE1(14,'Curtsies', 'na.gif');
ADE2(20,'Dances', 'na.gif');
ADE2(21,'Drools', 'na.gif');
ADE2(34,'Eyes', 'na.gif');
ADE2(29,'Flirt', 'na.gif');
ADE1(19,'Giggles', 'na.gif');
ADE1(38,'Go', 'na.gif');
ADE1(3,'Greets', 'na.gif');
ADE1(24,'Grins', 'na.gif');
ADE2(11,'Hail', 'na.gif');
ADE1(4,'Smile', 'na.gif');
ADE2(26,'Hiss', 'na.gif');
ADE2(9,'Huggles', 'na.gif');
ADE2(2,'Hugs', 'na.gif');
ADE2(7,'Kisses', 'kisses.gif');
ADE1(17,'Laughs', 'na.gif');
ADE2(18,'Laughs - II', 'na.gif');
ADE2(16,'Licks', 'licks.gif');
ADE2(10,'Loves', 'loves.gif');
ADE2(25,'Meow', 'na.gif');
ADE1(35,'No', 'na.gif');
ADE2(12,'Pleads', 'na.gif');
ADE2(39,'Roars', 'na.gif');
ADE2(31,'Scream', 'na.gif');
ADE2(5,'Sneers', 'na.gif');
ADE2(27,'Spit', 'na.gif');
ADE2(33,'Stares', 'na.gif');
ADE1(37,'Stop', 'na.gif');
ADE1(40,'Tag', 'na.gif');
ADE2(8,'Tickles', 'tickles.gif');
ADE2(28,'Yawn', 'na.gif');
ADE1(36,'Yes', 'na.gif');
ADE2(32,'Watch', 'na.gif');
ADE1(1,'Waves', 'waves.gif');
ADE2(23,'Whine', 'na.gif');
ADE2(6,'Yells', 'na.gif');
}