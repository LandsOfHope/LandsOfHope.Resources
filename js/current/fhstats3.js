var DoingStuff = 0;
var IC = 0;
var CharsAt = CharsAt;
var PageNo = PageNo;
var SC = 0;
var AA = AA;
var FHIPPER = 'https://res.landsofhope.com/game/';
var CPath = FHIPPER + "r/"
var IPath = FHIPPER + "i/"
var BPath = FHIPPER + "b/"

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function ACS(Statty, sv, sv2, bonus, mv) {
var Color = LITE;
document.write('<tr width="255"><td width="135" style="color: ' + Color + '; padding-left: 5px;">' + Statty + '</td><td width=90 style="background-color: ' + BGCOLOR_S + '; border: 1px solid ' + BORDER1_S + '; color: ' + (((sv2 > 0 && sv >= sv2))  ? '#ff6666' : '#66ff66') + '"><center>' + sv + (bonus != 0 ? ' (' + bonus + ')' : '') +  (sv2 >= 0 ? '/' + sv2 : '') + '</center></td></tr>');
}

function AR(v, PictureID, CharacterName, l, BN) {
var Color = LITE;
document.write('<tr width="255"><td width=15><img src=\'' + CPath + PictureID+ '\'></td><td width="205" style="color: ' + Color + '; padding-left: 5px;"><b>' + CharacterName + '</b><br>Location: ' + BN + '<br>Level: ' + l + '</td></tr>');
}

function AB(PictureID, CharacterName, bt) {
var Color = LITE;
document.write('<tr width="255"><td width=15><img src=\'' + BPath + PictureID+ '\'></td><td width="205" style="color: ' + Color + '; padding-left: 5px;"><b>' + CharacterName + '</b><br>' + bt + '</td></tr>');
}

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '&A=' + AA + '&CharsAt=' + CharsAt);
}

function SPages(Count, CurPage) {
var strTest = '';
var v = 0;
var i = 0;
for (i = 1; i <= Count; i++) 
{         
	v = v + 1;
	
	if (Count > 8 && (i == 2 || i == 3)) {
	} else {
		strTest += '<td class="btn" ' + (CurPage != i ? 'onmouseover="this.className = \'btn btnhov\';" onmouseout="this.className = \'btn\'" style="width:60" onclick="GoP(' + i + ')"' : ' style="width:60; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold"') + '>' + (i == 1 ? 'Info' : (i == 2 ? 'Guild' : (i == 3? 'Occupants' : (i == 4 ? 'Skills' : '')))) + '</td>';        
	}
	if (v >= 20) {
		strTest += '</tr><tr>';
		v = 0;
	}
}
if (Count == 0) {
	strTest += '<td class="btn" style="width:60; background-Color: ' + BGCOLOR_S + '; border: 1px outset ' + BORDER1_S + '; font-weight: bold">Info</td>';        
}

getObj('Pages').innerHTML = '<table><tr><td class=\'weakercell\'>Tabs: </td>' + strTest + '</tr></table>';
}
