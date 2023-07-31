var YourTimers = new Array();
var tc = 0;
var times = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');
AddTimer('Testing', 60000, 'It is time!', 0);
AddTimer('Testing 2', 180000, 'It is time 2!', 1);

function ToggleOnOff(x) {
	var yt = YourTimers[x];
	if (yt != null) {	
		if (yt.on == 0) {
			yt.counter2 = Math.abs(yt.time / 60000);
			yt.on = 1;
		} else {
			yt.on = 0;
		}
	}
	RefreshTimers();
}

function Delete(x) {
	YourTimers[x] = null;
	RefreshTimers();
}

function RefreshTimers() {
	var strout = '';
	var x = 0;
	for (x = 0; x < tc; x++) {
		var yt = YourTimers[x];
		if (yt != null) {
			if (yt.on != 0) {
				strout += '<div><table style="color: green; width: 350px;"><tr><td width=200>' + yt.timername + '</td><td align=left>' + yt.counter2 + 'minute</td><td><button onclick="ToggleOnOff(' + x + ');">Off</button><button onclick="Delete(' + x + ');">Delete</button></td></tr></table></div>';
			} else {
				strout += '<div><table style="color: red; width: 350px;"><tr><td width=200>' + yt.timername + '</td><td align=left align=left>' + yt.counter2 + 'minute</td><td><button onclick="ToggleOnOff(' + x + ');">On</button><button onclick="Delete(' + x + ');">Delete</button></td></tr></table></div>';
			}
		}
	}
	strout += '<div><table><tr><td>Timer Name:</td><td><input name=timername id=timername value="New Timer"></td></tr><tr><td>Minutes:</td><td><input name=timermin id=timermin value="1"></td></tr><tr><td>Message:</td><td><input name=timermessage id=timermessage value="This message will happen when the timer goes off."></td></tr><tr><td><input name=repeat id=repeat value=1 type=checkbox>Repeat timer</td></tr><tr><td><button onclick="AddTimer(getObj(\'timername\').value, getObj(\'timermin\').value * 60000, getObj(\'timermessage\').value,getObj(\'repeat\').checked); RefreshTimers();">Add</button></td></tr></table></div>';
	getObj('TimerBox').innerHTML = strout;
}

function Timers() {
	RefreshTimers();
	clearTimeout(times);
	times = setTimeout('Timers2();', 60000);
}

function Timers2() {
	var x = 0;
	for (x = 0; x < tc; x++) {
		var yt = YourTimers[x];
		if (yt != null) {
			if (yt.on != 0) {
				yt.counter = yt.counter + 1;
				yt.counter2 = yt.counter2 - 1;
				if (yt.counter2 <= 0 ) {
					if (yt.repeat != 0) {
						yt.counter2 = Math.abs(yt.time / 60000)				
					} else {
						yt.on = 0;
					}
					if (window.opener != null && yt.reminder != 0) {
						window.opener.ChatSend(yt.reminder);
					}
				}
			}
		}
	}
	//Timers();
	RefreshTimers();
	clearTimeout(times);
	times = setTimeout('Timers2();', 60000);
}

function AddTimer(timername, time, reminder, repeat) {
	YourTimers[tc] = new Array();
	YourTimers[tc] = new newTZ(tc, timername, time, reminder, repeat);
	tc = tc + 1;
}

function newTZ(tid, timername, time, reminder, repeat) {
	this.tid = tid;
	this.timername = timername;
	this.time = time;
	this.reminder = reminder;
	this.repeat = repeat;
	this.counter = 0;
	this.on = 1;
	this.counter2 = Math.abs(time / 60000);
}