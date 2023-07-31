var Mask = Mask;
var PageNo = PageNo;
var Processing = 0;
var Type2 = Type2;
var IPath = window.top.FHIPS;
var IC = 0;
var Infos = new Array();
var LastV = -1;
var Processing = 0;
var LastDefault = '';
var LastForward = '';
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
document.location.replace('?P=' + PageNo + '&Type=' + Type2 + '&Mask=' + Mask);
}

function AM(d, c, i, p, e, Itty) {
var Color = LITE;
var Picture = 'na.gif'
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, Picture, d, c, i, p, e, Itty);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (Picture == '' || Picture == '0' ? 'na.gif' : Picture) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px;">' + Itty + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, PictureID, d, c, i, p, e, Itty) {
this.c = c;
this.Color = Color;
this.d = d;
this.i = i;
this.p = p;
this.e = e;
this.n = Itty;
}

function DC(v) {
	LastV = v;
	getObj('Stuff2').innerHTML = Infos[v].n + '<br>' + Infos[v].e + '<br>' + Infos[v].p + '<br>Leader:' + Infos[v].i + '<br>Members:' + Infos[v].c + '';
	getObj('Buttons').innerHTML = Adr('conf(\'Please enter a new name for this account.\', \'' + Infos[v].n + '\', \'gmEG.asp?Mask=' + Mask + '&Action=11&CharsAt=' +Infos[v].d + '&Name=\');','Rename','Rename') + Adr('window.location.replace(\'gmEG.asp?Mask=' + Mask + '&Action=10&CharsAt=' +Infos[v].d + '&Type=' + Type2 + '&Name=\');','Delete','Delete');
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('',Infos[v].n + '<br>Members: ' + Infos[v].c);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function conf(message1, default1, forward1) {
	LastDefault = default1;
	LastForward = forward1;
	prompt(message1,1,default1);
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && Processing == 0) {
			if (pb == 1) {
				if (LastForward != '') {
					Processing = 1;
					window.top.Interface.location.replace('' + LastForward + returnVal);
				}
			} else 	if (pb == 2) {
				if (returnVal != LastDefault && LastForward != '') {
					Processing = 1;
					window.top.Interface.location.replace('' + LastForward + '');
				}
			}

		}
	}
}