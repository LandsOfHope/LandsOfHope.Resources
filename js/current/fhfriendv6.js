var IC = 0;
var Infos = new Array();
var PageNo = PageNo;
var Tutorial = Tutorial;
var Following= Following;
var IPath = window.top.FHIPR;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '');
}

function DC(v) {
getObj('Stuff2').innerHTML = Tippy(v);
getObj('Pic').innerHTML = "<img src='" + IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "'>";

getObj('Buttons').innerHTML = Adr("window.location.replace('?ID=" + Infos[v].value + "&P=" + PageNo + "&Type=1')" ,"Remove","Remove") + (Infos[v].n == "Online" || Infos[v].n == "Offline" ? (Infos[v].x != 0 ? Adr("window.location.replace('fhstat2.asp?CharsAt=" + Infos[v].value + "');", "Info", "Info") : "") + Adr("window.location.replace('fhmessn.asp?CharsAt=" + Infos[v].value + "');", "Message", "Message") : "") + Adr("window.location.replace('?ID=" + Infos[v].value + "&P=" + PageNo + "&Type=2');", "", (Infos[v].n == "Pending" ? "Refuse" : "Ban")) + Adr("window.location.replace('?ID=" + Infos[v].value + "&P=" + PageNo + "&Type=3');","", (Infos[v].n == "Pending" ? "Accept" : "Unban")) + (Infos[v].h == 0 ? Adr("window.location.replace('?ID=" + Infos[v].value + "&P=" + PageNo + "&Type=12');", "Hide", "Hide") : Adr("window.location.replace('?ID=" + Infos[v].value + "&P=" + PageNo + "&Type=13');", "Un Hide", "Un Hide")) + (Infos[v].q == 0 ? Adr("window.location.replace('?ID=" + Infos[v].value + "&P=" + PageNo + "&Type=9');", "Watch", "Watch") : Adr("window.location.replace('?ID=" + Infos[v].value + "&P=" + PageNo + "&Type=10');", "Unwatch", "Unwatch")) + Adr("prompt('Please enter a note to describe this friend:'," + v +",'" + Infos[v].i + "', 'Friend Note','r/" + Infos[v].p + "', 5);", "Note", "Note"); 
}

function Tippy(v) {
return '<b>' + Infos[v].i + '</b>' + (Infos[v].t != 0 ? '<br>New Player' : '') + '<br>Level: ' + Infos[v].l +'<br>Allegiance: ' + GetAName(Infos[v].a) + '<br>Status: ' + Infos[v].n + (Infos[v].n == 'Online' ? ', this friend is online atm.' + (Infos[v].h == 0 ? '<br>This person can see your position on their friend screen.' : '<br>Your position is hidden from them.') : (Infos[v].n == 'Offline' ? ', this friend is offline atm.' + (Infos[v].h == 0 ? '<br>This person can see your position on their friend screen.' : '<br>Your position is hidden from them.') : (Infos[v].n == 'Refused' ? ', you have banned this person.' : (Infos[v].n == 'Banned' ? ', this person has banned you.' : ', this person (or you) has not accepted the friendship.')))) + '<br><select onchange="var s = this.options[this.selectedIndex].value;window.location.replace(\'?ID=' + Infos[v].value + '&P=' + PageNo + '&Type=-\' + s);"><option ' + (Infos[v].fcx == 0 ? 'selected' : '') +' value=0>No Folder</option><option ' + (Infos[v].fcx == 1 ? 'selected' : '') +' value=1>True Friends</option><option ' + (Infos[v].fcx == 2 ? 'selected' : '') +' value=2>Associates</option><option ' + (Infos[v].fcx == 3 ? 'selected' : '') +' value=3>Frenemies</option><option ' + (Infos[v].fcx == 4 ? 'selected' : '') +' value=4>Family Members</option><option ' + (Infos[v].fcx == 5 ? 'selected' : '') +' value=5>Guild Mates</option><option ' + (Infos[v].fcx == 6 ? 'selected' : '') +' value=6>Personal</option><option ' + (Infos[v].fcx == 7 ? 'selected' : '') +' value=7>School / College</option><option ' + (Infos[v].fcx == 8 ? 'selected' : '') +' value=8>Sin Bin</option></select><option ' + (Infos[v].fcx == 9 ? 'selected' : '') +' value=9>General</option></select>';
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('' + IPath + Infos[v].p, Tippy(v));
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function AvC(v, n, x, y, g, Itty, PictureID, qq, prof, l, a, t, h, b, fn, fcx) {
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo2(Color, v, n, x, y, g, Itty, PictureID, qq, prof, l, a, t, h, b, fn, fcx);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="200" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td><td ' + (n == 'Online' ? ' style=\'color: #66ff66\'' : (n == 'Offline' ? ' style=\'color: #ff6666\'' : '')) + '>' + n + '</td><td>' + (x != 0 ? '' + x + ', ' + y + ' ' + g : '???') + '</td></tr>');
if (fn != '') {
	document.write('<tr width="300"><td colspan=4><i>' + fn + '</i></td></tr>');
}
IC = IC + 1;
}

function newInfo2(Color, v, n, x, y, g, Itty, PictureID, qq, prof, l, a, t, h, b, fn, fcx) {
this.c = Color;
this.value = v;
this.p = PictureID;
this.fn = fn;
this.b = b;
this.t = t;
this.h = h;
this.l = l;
this.i = Itty;
this.a = a;
this.pi = prof;
this.q = qq;
this.n = n;
this.x = x;
this.y = y;
this.g = g;
this.fcx = fcx;
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			var v = pb;
			window.top.Interface.location.replace("fhfriend.asp?ID=" + Infos[v].value + "&Type=15&P=" + PageNo + "&NewName=" + returnVal);
		}
	}
}