var CharsAt = CharsAt;
var PageNo = PageNo;
var IPath = window.top.FHIPI;
var Processing = 0;
var TC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');


function AvC(tid, tin, tip, ot, ts) {
var Color = LITE;
if (Infos[TC] == null) {
	Infos[TC] = new Array();
}
Infos[TC] = new newInfo(Color, tid, tin, tip, ot, ts);
document.write('<tr id="T' + TC + '" style="color:' + Color +'" onclick="DC(' + TC + ')" onmouseover="PC(' + TC + ');" onmouseout="RC(this)"><td width="40"><img src="https://res.landsofhope.com/game/i/' + tip + '"></td><td width="260" valign=top><b>' + tin + '</b><br><font id=tmagenta>' + ot + '</font></td><td>Rank ' + ts + '</td></tr>');
TC = TC + 1;

}

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '&CharsAt=' + CharsAt);
}

function newInfo(Color, tid, tin, tip, ot, ts) {
this.c = Color;
this.tid = tid;
this.tin = tin;
this.ts = ts;
this.ot = ot;
this.tip = tip;
}

function RC(stuff) {
stuff.style.cursor = '';
stuff.style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('https://res.landsofhope.com/game/i/' + Infos[v].tip , '<b>' + Infos[v].tin + '</b>');
getObj('T' + v).style.cursor = 'pointer';
getObj('T' + v).style.backgroundColor=BGCOLOR_S
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].tin + '</b><br>Rank ' + Infos[v].ts + '<br>' + Infos[v].ot + '<br><br>Use the button button below to gain rewards and combine trophies together to get special items.'
	getObj('Buttons').innerHTML = "<" + strClicky2 + " onclick=\"if (Processing == 0) {Processing = 1; window.location.replace('fhtrophiesr.asp?CharsAt=" + Infos[v].tid + "');}\">Rewards</button>";
}
