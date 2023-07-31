var Welcome2 = 0;
var cn = cn;
var yn = yn;
var Wms = new Array()
var CharsAt = CharsAt;
Wms[0] = '%name% Hello, i bring word from the Baron';
Wms[1] = '%you2% The B-b-b-a-r-o-n ... am i in trouble ?';
Wms[2] = '%name% I am not sure, a stranger visited the Baron today and it seems this stranger has dealings with you.';
Wms[3] = '%you2% A stranger you say, how strange is strange?';
Wms[4] = '%name% He looks like he has been through a lot in his life, he doesnt look dangerous infact i would say he is a brave soul.';
Wms[5] = '%you2% Do you know his name then?';
Wms[6] = '%name% No, all i know is the Baron wishes to see you right away.';
Wms[7] = '%you2% Forgive me, but where am i supposed to go ?';
Wms[8] = '%name% Follow the path to the big house by the lake you cant miss it.';
Wms[9] = '%you2% Thank you for your help i will be right there.';

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function ShowStoryx() {
	var strS = '';
	Welcome2 = Welcome2  -1
	strS = ReturnStory();
	if (strS != '') {
		getObj('xx').innerHTML = '' + getObj('xx').innerHTML + '<br><br>' + strS 
		Welcome2 = Welcome2 + 1
		strS = ReturnStory();
		if (strS != '') {
			getObj('xx').innerHTML = '' + getObj('xx').innerHTML + '<br><br>' + strS 
			Welcome2 = Welcome2 + 1
			getObj('Buttons').innerHTML = '<center><button style=\'width:134px; height: 40px;\' class=\'tbtn\' onmouseover=\'this.className = \"tbtn btnhov\";\' onmouseout=\'this.className = \"tbtn\";\' onclick=\'javascript:ShowStoryx()\'><b style=\'color: #66ff66; font-size: 14px;\'>Continue &gt;&gt;' + '</b></button></center>';
			Welcome2 = Welcome2 + 1
		}
		getObj('xx').scrollTop = getObj('xx').scrollHeight;

	}

}

function ShowStory() {
	var strS = '';
	strS = ReturnStory();
	if (strS != '') {
		getObj('xx').innerHTML = '' + strS 
		Welcome2 = Welcome2 + 1
		getObj('Buttons').innerHTML = '<center><button style=\'width:134px; height: 40px;\' class=\'tbtn\' onmouseover=\'this.className = \"tbtn btnhov\";\' onmouseout=\'this.className = \"tbtn\";\' onclick=\'javascript:ShowStoryx()\'><b style=\'color: #66ff66; font-size: 14px;\'>Continue &gt;&gt;' + '</b></button></center>';
		Welcome2 = Welcome2 + 1
	}
}


function ReturnStory() {
	var strWelcome = '';
	strWelcome = Wms[Welcome2];
	if (strWelcome != null) {
		var re = /\%name\%/i;
		var re2 = /\%you\%/i;
		var re3 = /\%you2\%/i;
		strWelcome=strWelcome.replace(re, '<b>' + cn + '</b>: ')
		strWelcome=strWelcome.replace(re2, '<b>' + yn + '</b>: ')
		strWelcome=strWelcome.replace(re3, '<b>Me</b>: ')
		return strWelcome
	} else {
		confirm('Are you ready to continue ?', 1);
		return '';
	}
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			window.top.Interface.location.replace('fh.asp?BuildingID=1042&Redraw=1');
		}
	}
}
