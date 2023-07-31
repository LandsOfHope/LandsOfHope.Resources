var Mask = Mask;
var Mask2 = Mask2;
var IN = IN;
var PageNo = PageNo;
var CharsAt= CharsAt;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AM(v, Itty, l, PictureID) {
var Color = '#66ff66';

if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, v, Itty, l, PictureID);

//  i="' + Itty + '" l=' + l+ ' v=' + v + ' p="' + PictureID+ '"
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')"  onclick="DC(' + IC + ')" style="color: ' +  Color + '; padding-left: 5px"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width=\'100%\'>' + Itty + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, v, Itty, l, PictureID) {
this.c = Color;
this.i = Itty;
this.l = l;
this.v = v;
this.p = PictureID;
}

function GoP(PageNo) {
window.location.replace('?M=' + Mask + '&Mask2=' + Mask2 + '&IN=' + IN + '&I=' + CharsAt + '&P=' + PageNo + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b> (' + Infos[v].v + ')<br>Level: ' + Infos[v].l;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = Adr('window.location.replace(\'gmNII3.asp?C=' + Infos[v].v + '&Mask2=' + Mask2 + '&M=' + Mask + '&I=' + CharsAt + '&C2=' + Infos[v].i + '&IN=' + IN + '&Q=1\');','Give 1','Give 1') + Adr('window.location.replace(\'gmNII3.asp?C=' + Infos[v].v + '&Mask2=' + Mask2 + '&M=' + Mask + '&I=' + CharsAt + '&C2=' + Infos[v].i + '&IN=' + IN + '&Q=100\');','Give 100','Give 100') + Adr('window.location.replace(\'gmNII3.asp?C=' + Infos[v].v + '&Mask2=' + Mask2 + '&M=' + Mask + '&I=' + CharsAt + '&C2=' + Infos[v].i + '&IN=' + IN + '&Q=1000\');','Give 1000','Give 1000') + Adr('prompt(\'Give more:\',' + v + ', 1);','Give more','Give more');

//<' + strClicky + ' onclick="window.location.replace(\'gmNII3.asp?C=' + Infos[v].v + '&Mask2=' + Mask2 + '&M=' + Mask + '&I=' + CharsAt + '&C2=' + Infos[v].i + '&IN=' + IN + '&Q=\' + prompt(\'Give how many?\',\'1\') + \'\')">Give More</button>
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
	window.top.InfoTip('','' + Infos[v].i + '<br>Level: ' + Infos[v].l);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			var v = pb;
			window.top.Interface.location.replace('gmNII3.asp?C=' + Infos[v].v + '&Mask2=' + Mask2 + '&M=' + Mask + '&I=' + CharsAt + '&C2=' + Infos[v].i + '&IN=' + IN + '&Q=' + returnVal);
		}
	}
}