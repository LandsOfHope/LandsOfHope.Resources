
var Skill = Skill;
var PageNo = PageNo;
var IPath = window.top.FHIPI;
var Processing = 0;
var Infos = new Array();
var IC = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(PictureID, ItemName, ItemID, Skill2, s, sn, e ,rid, rn, rp, rq, rc) {
if (PictureID == '0') {PictureID = ''}
var Color = 'white'
if (Skill2 <= Skill) {var Color = '#66ff66'} else {var Color = '#ff6666'}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, PictureID, ItemName, ItemID, Skill2, s, sn, e ,rid, rn, rp, rq, rc);

//v=' + ItemID + ' s=' + s + ' rid=' + rid + ' rn="' + rn + '" rp="' + rp + '" rq=' + rq + ' rc=' + rc + ' e="' + e + '" sn="' + sn + '" sv=' + Skill2 + ' p="' + (PictureID == '' ? 'na' : PictureID) + '" class="it"
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')"  onclick="DC(' + IC + ')" style="color: ' +  Color + '; padding-left: 5px"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + ItemName + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, PictureID, ItemName, ItemID, Skill2, s, sn, e ,rid, rn, rp, rq, rc) {
this.c = Color;
this.t = ItemName;
this.p = PictureID;
this.v = ItemID;
this.sv = Skill2;
this.s = s;
this.rid = rid;
this.rn = rn;
this.rp = rp;
this.rq = rq;
this.rc = rc;
this.e = e;
this.sn = sn;
}

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '');
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Bejewel Skill: ' + Infos[v].sv + '<br>' + Infos[v].e + (Infos[v].rid > 0 ? '<br>Requirements:<br>' + (Infos[v].rc > 0 ? '<font id=tgreen>' : '<font id=tred>') + '' + Infos[v].rq + ' * ' + Infos[v].rn + '</font>' : '');
	getObj('Pic').style.backgroundColor=Infos[v].c;
	getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p) + "'>";
	getObj('Buttons').innerHTML = (Infos[v].rc > 0 || Infos[v].rid == 0 ? '<' + strClicky3 + ' onclick="if (Processing == 0) {Processing = 1; window.top.PGS(\'paper.wav\'); window.location.replace(\'?CharsAt2=' +Infos[v].v + '&aok=' + Infos[v].sv + '&P=' + PageNo + '\'); this.disabled=true;}" style=\'width: 85\'>Assemble</button>' : '');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
	window.top.InfoTip('' + IPath + Infos[v].p, '' + Infos[v].t + '');
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor=BGCOLOR_S
}
