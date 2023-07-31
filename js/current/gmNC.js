var RPicM = 'sohum1.gif';
var RPicF = 'sohuf1.gif';
var RPic = 'Human';
var PName = 'Creature';
var CharsAt = CharsAt;
var Processing = 0;
var IPath = window.top.FHIPR;
var RRC = 0;
var Races = new Array();
var PC = 0;
var Profs = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');
document.write('<script src="https://lohcdn.com/js/current/races.js" language="JavaScript"></script>');
document.write('<script src="https://lohcdn.com/js/current/professions.js" language="JavaScript"></script>');

function DCR(v) {
	RPicM = Races[v].m;
	RPicF = Races[v].f;
	RPic = Races[v].i;
	SetPicture();
	getObj('RaceID').value = Races[v].v;
}

function SetPicture() {
	var v = 0;
	var i = 0;
	var Piccy = '';
	for (i = 0; i < 2; i++) {
		if (getObj('Sex')[i].checked == true) {
			if (getObj('Sex')[i].value == 'Male') {
				Piccy = RPicM;
			} else {
				Piccy = RPicF;
			}
		}
	}
	getObj('Pic').innerHTML = "<img src='" + IPath + Piccy + "'> : " + RPic + " " + PName
}

function DCP(v) {
	PName = Profs[v].i;
	SetPicture();
	getObj('ProfessionID').value = Profs[v].v;
}

function AVR(v, Itty, PicM, PicF) {
	var Color = LITE;
	if (Races[RRC] == null) {
		Races[RRC] = new Array();
	}
	Races[RRC] = new newInfo(Color, v, Itty, PicM, PicF);
	document.write('<tr id="R' + RRC + '" onmouseover="PCR(' + RRC + ')" onmouseout="RCR(' + RRC + ')" onclick="DCR(' + RRC + ')"><td><img width=15 height=15 src="' + IPath + (PicM == '' || PicM == '0' ? 'na.gif' : PicM) + '"><img width=15 height=15 src="' + IPath + (PicF == '' || PicF == '0' ? 'na.gif' : PicF) + '"></td><td width="315" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td></tr>');
	RRC = RRC + 1;
}

function newInfo(Color, v, Itty, PicM, PicF) {
	this.c = Color;
	this.i = Itty;
	this.f = PicF;
	this.m = PicM;
	this.v = v;
}

function AVP(v, Itty) {
	var Color = LITE;
	var PictureID = 'na.gif';
	if (Profs[PC] == null) {
		Profs[PC] = new Array();
	}
	Profs[PC] = new newInfo2(Color, v, Itty);
	document.write('<tr id="P' + PC + '" onmouseover="PCP(' + PC + ')" onmouseout="RCP(' + PC + ')" onclick="DCP(' + PC + ')"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="315" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td></tr>');
	PC = PC + 1;
}

function newInfo2(Color, v, Itty) {
	this.c = Color;
	this.i = Itty;
	this.v = v;
}

function RCR(v) {
	getObj('R' + v).style.cursor = '';
	getObj('R' + v).style.backgroundColor = '';
}

function PCR(v) {
	getObj('R' + v).style.cursor = 'pointer';
	getObj('R' + v).style.backgroundColor = BGCOLOR_S
}

function RCP(v) {
	getObj('P' + v).style.cursor = '';
	getObj('P' + v).style.backgroundColor = '';
}

function PCP(v) {
	getObj('P' + v).style.cursor = 'pointer';
	getObj('P' + v).style.backgroundColor = BGCOLOR_S
}