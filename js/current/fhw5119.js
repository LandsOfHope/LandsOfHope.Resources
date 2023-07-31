var Welcome2 = 0;
var cn = cn;
var yn = yn;
var Wms = new Array()
var CharsAt = CharsAt;
Wms[0] = '%name% Hello young one, so you are awake at last i see. Welcome to the estate of Baron Drako you are its newest servant. I am sure you have a lot of questions as you arrived late last night in somewhat of a hurry by all accounts.';
Wms[1] = '%you2% Who are you ?';
Wms[2] = '%name% i am a servant of Baron Drako of course.';
Wms[3] = '%you2% Do you know how i got here?';
Wms[4] = '%name% All i know is you were brought in late last night rather secretly it seems, didnt even know to make a cot up for you until the Guardmaster thumped on the door.';
Wms[5] = '%you2% Do you know my name?';
Wms[6] = '%name% Yes your name is %you% i would say your around 20 years old. You took a rather nasty knock on the head which could explain your lack of memory.';
Wms[7] = '%you2% Could you perhaps tell me where my clothes and belongings are ?';
Wms[8] = '%name% You arrived dressed in some filthy rags which we burnt, in a moment i will help you get some new clothes.<br><br>However right now i wish you to listen to what i have to say.';
Wms[9] = '%you2% Alright go ahead i am listening';
Wms[10] = '%name% You are now the property of Baron Drako, this means you do not sneeze without asking permission first. You exist solely to serve you do not complain, cry or cause trouble you only do and please our master.<br><br>Do you understand ?';
Wms[11] = '%you2% I get the picture, i am not sure how i got here but know i will find a way to free myself of this slavery!';
Wms[12] = '%name% Good luck with that, i think you will find that Drako is not as mean as some masters and if you serve him well he will reward you.<br><br>Now that you are up to speed please equip the tools and items your master has seen to give you.<br><br>I have a task for you to do as well!';
Wms[13] = '%you2% That would be great!';

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function ShowStoryx() {
	var strS = '';
	Welcome2 = Welcome2 - 1
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
		strWelcome = strWelcome.replace(re, '<b>' + cn + '</b>: ')
		strWelcome = strWelcome.replace(re2, '<b>' + yn + '</b>: ')
		strWelcome = strWelcome.replace(re3, '<b>Me</b>: ')
		return strWelcome
	} else {
		confirm('Are you ready to continue ?', 1);
		return '';
	}
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			window.top.Interface.location.replace('fhshopq.asp?CharsAt=' + CharsAt);
		}
	}
}
