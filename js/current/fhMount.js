var IC = 0;
var Infos = new Array();
var MeMana = MeMana;
var Processing = 0;
var Type2 = Type2;
var Type3 = Type3;
var AOK = AOK;
var Level = Level;
var Pic = Pic;
var IPath = window.top.FHIPR;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');


function CS(how, stuff, mc) {
if (MeMana >= mc) {
	if (Processing == 0) {
		Processing = 1;
		window.frames['ResultsOfit'].location.replace('FHSpells5.asp?Type=' + how + '&CharsAt=' + stuff + '');
	}
} else {
	alert('You are level ' + MeMana + ' you need to be level ' + mc + ' to cast this spell.')
	}
}

function DC(v) {
getObj('Stuff2').innerHTML = Infos[v].i + '<br>Your Level Requirement : ' + Infos[v].mc + '<br>Mount Level Requirement : ' + Infos[v].l  + (Infos[v].b == 0 ? '' : '<br>Duration: ' + Infos[v].b);
getObj('Pic').innerHTML = "<img src='" + IPath + (Pic == '' ? 'na.gif' : Pic) + "'>";
if (Level >= Infos[v].l) {
	getObj('Buttons').innerHTML = '' + (AOK == 1 ? (Infos[v].t >= 0 && Infos[v].t != 3 && Infos[v].t != 6 && Infos[v].v != 236 ? Adr('CS(0, ' + Infos[v].v + ', ' + Infos[v].mc + ');',' Cast ' + Infos[v].i,'Cast') : '') : '') + Adr('window.top.loadwindow2(\'Mz.asp?Test=' + Infos[v].v + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].i + '\');','Info','Info');
} else {
	getObj('Buttons').innerHTML = Adr('window.top.loadwindow2(\'Mz.asp?Test=' + Infos[v].v + '&Bonus=0&Material=\',300,300,\'iwindow\',\'' + Infos[v].i + '\');','Info','Info');
}
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Infos[v].i);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function AC(Color,v, s, mc, t, b ,l) {
var PictureID = '';
PictureID = Pic;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, PictureID, v, s, mc, t, b ,l);
// mc=' + mc + ' t=' + t + ' b=' + b + ' l=' + l + ' p="' + (PictureID == '' ? 'na.gif' : PictureID) + '" v=' + v + '
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' +  Color + '; padding-left: 5px"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + s + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, PictureID, v, s, mc, t, b ,l) {
this.c = Color;
this.mc = mc;
this.p = PictureID;
this.i = s;
this.v = v;
this.l = l;
this.b = b;
this.t = t;
}