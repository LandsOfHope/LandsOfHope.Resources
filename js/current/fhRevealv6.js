var Skill = Skill;
var IPath = window.top.FHIPR;
var Processing = 0;
var PageNo = PageNo;
var CC = 0;
var Characters = new Array();

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function DC(v) {
getObj('Stuff2').innerHTML = '<b>' + Characters[v].t + '</b><br>Level: ' + Characters[v].l + (Math.abs(Characters[v].a) > 0 ? '<br>Allegiance: ' + window.top.GetAName(Characters[v].a) : '') + (Characters[v].b > 0 ? '<br>Bounty: <b>' + window.top.BSGM2(Characters[v].b) + '</b>' : '') + (Characters[v].i == 0 ? '<br>This player has been revealed.' : '' + '<br>Detect Hidden: ' + Characters[v].i) ;
getObj('Pic').innerHTML = "<img src='" + IPath + Characters[v].p + "'>";
if (Processing == 0) {
	getObj('Buttons').innerHTML = (Characters[v].i == 0 ? '<' + strClicky2 + ' onclick="if (Processing == 0) {Processing = 1; window.location.replace(\'fhpref.asp?CharsAt=' +Characters[v].v + '&rf=1\')};" style=\'width: 85\'>Attack</button>' + (Characters[v].b > 0 ? '<' + strClicky2 + ' onclick="if (Processing == 0) {Processing = 1; window.location.replace(\'fhprec.asp?CharsAt=' +Characters[v].v + '\')};" style=\'width: 85\'>Capture</button>' : '') : '<' + strClicky3 + ' onclick="if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt=' +Characters[v].v + '&P=' + PageNo + '\')};" style=\'width: 85\'>Reveal</button>');
}
}

function RC(stuff) {
stuff.style.cursor = '';
stuff.style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(''+ IPath + Characters[v].p, '' + Characters[v].t + '<br>' + (Characters[v].i == 0 ? '' : '' + '<br>DH: ' + Characters[v].i + '/' + Skill))
getObj('CC' + v).style.cursor = 'pointer';
getObj('CC' + v).style.backgroundColor=BGCOLOR_S;
}

function AC(bid, b, i, v, PictureID, l, Itty, a) {
var Color = window.top.GetAColor(a);
if (Characters[CC] == null) {
	Characters[CC] = new Array();
}
Characters[CC] = new newChar(Color, bid, b, i, v, PictureID, l, Itty, a);

document.write('<tr width="300" id="CC' + CC + '" onclick="DC(' + CC + ')" onmouseover="PC(' + CC + ')" onmouseout="RC(this)"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="*" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td><td width=100>' + (b > 0 ? '' + window.top.BSGM2(b) + '</b>' : '') + '</td></tr>');
CC = CC + 1;
}

function GoP(PageNo) {
window.location.replace('?P=' + PageNo);
}

function newChar(Color, bid, b, i, v, PictureID, l, Itty, a) {
this.c = Color;
this.bid = bid;
this.a = a;
this.b = b;
this.i = i;
this.v = v;
this.l = l;
this.p = PictureID;
this.t = Itty;
}