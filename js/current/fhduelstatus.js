var PageNo = PageNo;
var RPath = window.top.FHIPR;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '');
}

function DC(v) {
getObj('Stuff2').innerHTML = Tippy(v);
getObj('Buttons').innerHTML = (Infos[v].what == 2 && Infos[v].sok == 0 ? Adr("window.location.replace('fhduel3.asp?CharsAt=" + Infos[v].v + "');", "Set Stake", "Set Stake") : "") + (Infos[v].what == 1 && Infos[v].sok != 0 ? Adr("window.location.replace('fhpref.asp?CharsAt=" + Infos[v].e + "&D=-" +  Infos[v].v+ "');","Duel","Duel") : "") + Adr("window.location.replace('?CharsAt=" + Infos[v].v + "')", "Cancel", "Cancel"); 
}

function Tippy(v) {
return '<table class="weakcell" width="100%" cellpadding=0 cellspacing=0><tr class="boldcell"><td width="50%" align=center><img src="' + RPath + Infos[v].sp + '"><br>' + Infos[v].sn + '</td><td width=50 align=center>vs</td><td width="50%" align=center><img src="' + RPath + Infos[v].ep + '"><br>' + Infos[v].en + '</td></tr><tr><td colspan=3 align=center color="gold">Stakes</td></tr><tr><td style="border: 1px dashed green">' + (Infos[v].sm != 0 ? 'Money: ' + window.top.BSGM2(Infos[v].sm) : '') + (Infos[v].sin != '' ? '<table cellpadding=1 cellspacing=1 class="weakcell" width="100%"><tr><td><img src="' + IPath + Infos[v].sip + '"></td><td valign=top>' + Infos[v].sin + '<br>' + (Infos[v].sil > 0 ? 'Level: ' + Infos[v].sil : '') + '</td></tr></table>' : '') + '</td><td></td><td style="' + (Infos[v].sok == 0 ? 'border: 1px dashed red' : 'border: 1px dashed green') + '">' + (Infos[v].em != 0 ? 'Money: ' + window.top.BSGM2(Infos[v].em) : '') + (Infos[v].ein != '' ? '<table cellpadding=1 cellspacing=1 class="weakcell" width="100%"><tr><td><img src="' + IPath + Infos[v].eip + '"></td><td valign=top>' + Infos[v].ein + '<br>' + (Infos[v].eil > 0 ? 'Level: ' + Infos[v].eil : '') + '</td></tr></table>' : '') + '</td></tr></table>' + (Infos[v].sok == 0 ? '<br>Waiting for ' + Infos[v].en + ' to set their stake.' : (Infos[v].what == 1 ? '<br>Use the button below to start the Duel' : '<br>Waiting for ' + Infos[v].sn + ' to start the Duel'));
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(RPath + Infos[v].sp,Infos[v].sn + ' vs ' + Infos[v].en);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function AvC(v, what, s, e, sn, sp, en, ep, sm, em, sin, ein, sip, eip, sok, sil, eil) {
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, v, what, s, e, sn, sp, en, ep, sm, em, sin, ein, sip, eip, sok, sil, eil);
// sil=' + sil + ' eil=' + eil + ' v=' + v + ' sok=' + sok + ' what=' + what + '
// s=' + s + ' e=' + e + ' eip="' + eip + '" sip="' + sip + '" ein="' + ein + '"
// sin="' + sin + '" em=' + em + ' sm=' + sm + ' ep="' + ep + '"
//en="' + en + '" sp="' + sp + '" sn="' + sn + '"
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width="215" style="color: ' + Color + ';"><table class="weakcell" width="100%" cellpadding=1 cellspacing=1><tr><td width="50%" align=center><img src="' + RPath + sp + '"><br>' + sn + '</td><td width=20 align=center>vs</td><td width="50%" align=center><img src="' + RPath + ep + '"><br>' + en + '</td></tr></table></td></tr>');
IC = IC + 1;
}

function newInfo(Color, v, what, s, e, sn, sp, en, ep, sm, em, sin, ein, sip, eip, sok, sil, eil) {
this.c = Color;
this.sil = sil;
this.eil = eil;
this.v = v;
this.sok = sok;
this.what = what;
this.s = s;
this.e = e;
this.eip = eip;
this.sip = sip;
this.ein = ein;
this.sin = sin;
this.em = em;
this.sm = sm;
this.ep = ep;
this.en = en;
this.sp = sp;
this.sn = sn;
}
