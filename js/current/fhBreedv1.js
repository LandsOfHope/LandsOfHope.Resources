
var DefaultShop = 0;
var Shop = 0;
var strWhat = strWhat;
var Skill = Skill;
var Level = Level;
var Processing = 0;
var l2 = 0;
var IPath = window.top.FHIPR;
var l1 = 0;
var IC = 0;
var Infos = new Array();
var Sel1 = -1;
var Sel2 = -1;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(CharacterID, CharacterName, Sex, RaceID, Level, PictureID, Diff2, RaceName, Profession) {
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(CharacterID, CharacterName, Sex, RaceID, Level, PictureID, Diff2, RaceName, Profession);
IC = IC + 1;
}

function newInfo(CharacterID, CharacterName, Sex, RaceID, Level, PictureID, Diff2, RaceName, Profession) {
this.CharacterID = CharacterID;
this.CharacterName = CharacterName;
this.Sex = Sex;
this.RaceID = RaceID;
this.Level = Level;
this.PictureID = PictureID;
this.Diff2 = Diff2;
this.RaceName = RaceName;
this.Profession = Profession;
}

function DrawChars(Sex, RaceID, ShopNum) {
var strout = '';
var Color = LITE;
var y = 0;
for (y = 0; y < IC; y++) {
	if (Sex == '' || (Infos[y].Sex != Sex || (Infos[y].Sex == 'U' && Sex != 'U' )))	 {
		// b="' + Infos[y].RaceName + '" o="' + Infos[y].Profession + '" x=' + Infos[y].Diff2 + '
		//l="' + Infos[y].Level + '" s="' + Infos[y].Sex  + '" ' + (Infos[y].PictureID != '' ? 'p="' + Infos[y].PictureID + '"' : '') + '
		//v=' + Infos[y].CharacterID  + ' r=' + Infos[y].RaceID  + ' class="it"
		strout = strout + '<tr id="S' + ShopNum + 'I' + y + '" onmouseover="PC(' + ShopNum + ', ' + y + ')" onmouseout="RC(' + ShopNum + ', ' + y + ')" onclick="' + (ShopNum == 0 ? 'DC' : 'DD') + '(' + y + ')"><td width="15"><img src="' + IPath + (Infos[y].PictureID == null ? 'na.gif' : Infos[y].PictureID) + '" width=15 height=15></td><td width="180" style="color: ' + Color + '; padding-left: 5px;">' + Infos[y].CharacterName + '</b></td></tr>'
	}
}
getObj('Inv' + ShopNum).innerHTML = '<table width=\'100%\' class=\'itemText\' height=\'205\' cellspacing=1 cellpadding=1 border=0>' + strout + '<tr height=\'100%\'><td></td></tr></table>';
}

function check() {
if (Sel1 == -1 || Sel2 == -1) {
	getObj('Buttons').innerHTML = '';
} else {
	if (Math.abs(Infos[Sel1].RaceID) > 0 && Math.abs(Infos[Sel2].CharacterID) > 0 && (Math.abs(Infos[Sel2].CharacterID) != Math.abs(Infos[Sel1].RaceID))) {
		l1 =  Math.round((Math.abs(Infos[Sel2].Level) + Math.abs(Infos[Sel1].Level)) / 2)
		if (l1 > Level) {l1 = Level};
		if (l2 > l1 || l2 == 0 || l2 <= 0) {
			l2 = l1;
		}
		getObj('Buttons').innerHTML = 'Race: ' + Infos[Sel1].RaceName  + '<br>Prof: ' + Infos[Sel2].Profession + '<br>Level: ' + l2 + ' of ' + l1 + ' <' + strClicky + ' onclick="prompt(\'What level do you wish to breed (up to ' + l1 + ')?\', 1, l2,\'Breed Beasts\',\'\',2);" style=\'width: 25; height:12; font-size: 9px\'>+/-</button><br>Skill Req: ' + (l2 * 5) + '<br>Curent Skill: ' + Skill + ((Skill >= Math.abs(l2 * 5)) ? '<br><' + strClicky2 + ' onclick="if (Processing == 0) {Processing = 1; this.disabled = true;window.location.replace(\'?ItemID=' + Infos[Sel1].RaceID + '&ItemID2=' + Infos[Sel2].CharacterID + '&L=' + l2 + '&R=' + Infos[Sel1].RaceName  + '&P=' + Infos[Sel2].Profession +'\')}" style=\'width: 85\'>Breed</button>' : '');
	} else {
		getObj('Buttons').innerHTML = '';
	}
}
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			l3 = returnVal;
			if (l3 != l2 && l3 <= l1) {
				l2 = l3;
				check();
			}
		}
	}
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].CharacterName + '</b><br>' + Infos[v].RaceName + '<br>Level: ' + Infos[v].Level;
	getObj('First').innerHTML = '<b>Primary (' + Infos[v].RaceName + ')</b><br>Sex: ' + Infos[v].Sex;
	Sel1 = v;
	Sel2 = -1;
	DrawChars(Infos[v].Sex, 0 ,1);
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].PictureID == null ? 'na.gif' : Infos[v].PictureID) + "'>";
	getObj('Stuff3').innerHTML = '';
	getObj('Pic3').innerHTML = '';
	check();
}

function DD(v) {
	getObj('Stuff3').innerHTML = '<b>' + Infos[v].CharacterName + '</b><br>' + Infos[v].Profession + '<br>Level: ' + Infos[v].Level;
	getObj('Second').innerHTML = '<b>Secondary (' + Infos[v].Profession + ')</b><br>Sex: ' + Infos[v].Sex;
	Sel2 = v;
	getObj('Pic3').innerHTML = "<img src='" + IPath + (Infos[v].PictureID == null ? 'na.gif' : Infos[v].PictureID) + "'>";
	check()
}

function RC(s, v) {
getObj('S' + s + 'I' + v).style.cursor = '';
getObj('S' + s + 'I' + v).style.backgroundColor='';
}

function PC(s, v) {
window.top.InfoTip(IPath + Infos[v].PictureID,'' + '<b>' + Infos[v].CharacterName + '</b><br>' + Infos[v].Profession  + '<br>' + Infos[v].RaceName + '<br>Level: ' + Infos[v].Level);
getObj('S' + s + 'I' + v).style.cursor = 'pointer';
getObj('S' + s + 'I' + v).style.backgroundColor=BGCOLOR_S
}
