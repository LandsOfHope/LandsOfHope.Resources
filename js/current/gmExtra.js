var IC = 0;
var Infos = new Array();
var Type2 = Type2;
var Mask = Mask;
var IPath = window.parent.opener.top.FHIP
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');


function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p), Infos[v].en);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(e, Piccy, pp, eh, en) {
	var Color = LITE;
	if (eh == '') {
		Color = '#ff6666';
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, e, Piccy, pp, eh, en);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + pp + '/' + (Piccy == '' ? 'na.gif' : Piccy) + '\' width=15 height=15></td><td width=\'100%\'>' + en + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, e, Piccy, pp, eh, en) {
	this.c = Color;
	this.e = e;
	this.p = IPath + pp + '/' + (Piccy == '' ? 'na.gif' : Piccy);
	this.en = en;
	this.eh = eh;
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].en + '</b>';
	getObj('Pic').innerHTML = "<img src='" + Infos[v].p + "'>";
	getObj('CharsAt').value = Infos[v].e;
	tinyMCE.get('name').setContent(Infos[v].eh);
}
