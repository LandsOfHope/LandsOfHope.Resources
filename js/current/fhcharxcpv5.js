var PageNo = PageNo;
var strWhat = strWhat;
var CharacterName = CharacterName;
var Title = Title;
var PID = PID;
var CharacterID = CharacterID;
var IPath = window.top.FHIPR;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AM(d, v, cpt, cpp, cpn, cpct) {
if (d != 0) {
	var Color = 'gold';
} else {
	var Color = LITE;
}
if (cpct != '') {
	var Color = 'orange';
}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, d, v, cpt, cpp, cpn, cpct);
//d=' + d+ ' cpt="' + cpt + '" v=' + v + ' p="' + cpp + '" cpn="' + cpn+ '"
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width="40"><img src=\'' + IPath + (cpp  != '' ? cpp : PID) + '\'></td><Td width=\'100%\' style=\'color: ' + Color + '\'><b>' + (cpn  != '' ? cpn : CharacterName)+ '</b><br>' + (cpct != '' ? 'Chat Tag: ' + cpct : 'Title: ' + (cpt  != '' ? cpt : Title)) +  (d != 0 ? '<br><i>Original Profile</i>' : '') + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, d, v, cpt, cpp, cpn, cpct) {
this.c = Color;
this.d = d;
this.p = IPath + cpp;
this.cpt = cpt;
this.cpp = cpp;
this.cpn = cpn;
this.cpct = cpct;
this.v = v;
}

function DC(v) {
	if (Infos[v].cpn == '' && Infos[v].cpt == '' && Infos[v].cpct == '') {
		getObj('Stuff2').innerHTML = '<b>' + CharacterName + '</b><br>Title: ' + Title + '<br>This Profile changes your Picture Only';
		getObj('Buttons').innerHTML = Adr('window.location.replace(\'fhcharxcp.asp?type=' + Infos[v].v + '&P=' + PageNo + '\');','Use Picture', 'Use');
	} else {
		var strbuttons = '';
		var strstuff = '';
		 if (Infos[v].cpct != '') {
			strstuff += 'Chat Tag: ' + Infos[v].cpct + '<br>Turning this chat tag on will make it show up no matter which character you are using in chat<Br>.';
			strbuttons += Adr('window.location.replace(\'fhcharxcp.asp?type=' + Infos[v].v + '&Action=10&P=' + PageNo + '\');','Use Chat Tag', 'Tag');
		}
		if (Infos[v].cpn != '' || Infos[v].cpt != '' || Infos[v].cpct != '') {
			strstuff += '<b>' +(Infos[v].cpt  != '' ? Infos[v].cpn : CharacterName) + '</b><br>Title: ' + (Infos[v].cpt  != '' ? Infos[v].cpt : Title) + '';
			strbuttons += Adr('window.location.replace(\'fhcharxcp.asp?type=' + Infos[v].v + '&P=' + PageNo + '\');','Use', 'Use') + (Infos[v].cpn != '' ? Adr('window.location.replace(\'fhcharxcp.asp?type=' + Infos[v].v + '&action=2&P=' + PageNo + '\');','Use Name', 'Name') : '') + (Infos[v].cpt != '' ? Adr('window.location.replace(\'fhcharxcp.asp?type=' + Infos[v].v + '&action=1&P=' + PageNo + '\');','Use Title', 'Title') : '') + (Infos[v].cpp != '' ? Adr('window.location.replace(\'fhcharxcp.asp?type=' + Infos[v].v + '&action=3&P=' + PageNo + '\');','Use Picture','Picture') : '');
		}
		getObj('Stuff2').innerHTML= strstuff;
		getObj('Buttons').innerHTML = strbuttons;
	}
	getObj('Pic').innerHTML = "<img src='" + (Infos[v].cpp  != '' ? Infos[v].p : IPath + PID) + "'>";
}

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '');
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}
