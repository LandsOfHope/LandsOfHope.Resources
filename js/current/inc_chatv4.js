var ChatSendT = 0;
var ChatLoaded = 0;
var ChatDelayed = '';

var ChatArray = new Array(50)
var StartupMessage = 'Welcome to Lands of Hope , this Status window is where you will see various responses from your Interactions with the world of Myzan.<br><br>If you have any questions please use the Shoutbox or Character > Messages (Message Support) screen to contact someone to help you!';

function ShowStartup() {
	var ctmp = 0;
	for (ctmp = 1; ctmp <= 50; ctmp++) {
		ChatArray[ctmp] = '';
	}
	ChatArray[50] = StartupMessage
	getObj('Readout').innerHTML = ChatArray[50];
}

function SendCommand(strMessage) {
	var ChatOut = '';
	if (strMessage.substr(0, 2) == '/t') {
		strMessage = strMessage.substr(3);
	}
	strMessage = Converturls(strMessage)

	var x = 0;
	for (x = 1; x <= 50; x++) {
		ChatArray[x - 1] = '' + ChatArray[x];
	}
	ChatArray[50] = strMessage;

	var z = 50;
	x = 0;
	for (x = 1; x <= 50; x++) {
		if (ChatArray[z] != '') {
			ChatOut = ChatOut + ChatArray[z] + '<br>';
		}
		z = z - 1;
	}

	getObj('Readout').innerHTML = '' + ChatOut + '';
}


function ClearCommand() {
	var x = 0;
	for (x = 1; x <= 50; x++) {
		ChatArray[x] = '';
	}
	SendCommand('<font id=tgreen>Status successfully cleared ... </font>');
}

function Converturls(strin) {
	return strin;
}

function ClipboardCopy() {
	if (getObj('holdtext') == null) {
		alert('Can not copy text.');
	} else {
		getObj('holdtext').innerText = getObj('Readout').innerText;
		Copied = getObj('holdtext').createTextRange();
		Copied.execCommand("Copy");
	}
}

function ChatSend(strSend) {
	ChatDelayed = ChatDelayed + strSend
	ChatSend2();
}


function ChatSend2() {
	clearTimeout(ChatSendT);
	if (window.top.ChatLoaded != 0) {
		window.top.SendCommand('' + ChatDelayed + '')
		ChatDelayed = '';
	}
	if (ChatDelayed != '') {
		ChatSendT = setTimeout(ChatSend2, 1000);
	}
}

function sH(strin) {
	if (strin == undefined) { strin = '' }

	if (window.event == null) {
		window.top.Interface.event.returnValue = false;
		if (strin == '') { strin = window.top.Interface.location.pathname };
	}
	else {
		window.event.returnValue = false;
		if (strin == '') { strin = window.location.pathname };
	}
	window.top.showHelp('manual.asp?Search=' + strin);
}