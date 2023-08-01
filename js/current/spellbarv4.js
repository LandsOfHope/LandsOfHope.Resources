var t_SpellsT = 0;
var QueueTimer = 0;
var spellcounter = spellcounter;
var Spells = new Array();
var refreshspeed = refreshspeed;
clearInterval(t_SpellsT);
t_SpellsT = 0;
t_SpellsT = setInterval(ASMC, refreshspeed * 1000)

function DrawSpells(DivIn) {
	DivIn = 'Spells';
	var strout = '';
	var y = 0;
	for (y = 0; y < Spells.length; y++) {
		strout += '<div id="SM' + y + '" title="' + Spells[y][1] + '" onmouseover="window.top.InfoTip(\'' + Spells[y][4] + '\', \'<b>' + Spells[y][1] + '</b><br>\' + (' + y + ' == 1 ? (' + Spells[y][3] + ' <= 0 ? \'You are <b>not</b> in jail\' : \'You are in jail, sentance remaining:<br>\') : \'\') + (' + Spells[y][3] + ' >= 0 ? getdhm2(' + Spells[y][3] + ',0) : \'\') + \'\');" onclick="' + (Spells[y][6] != '' ? 'window.top.Interface.location.replace(\'' + Spells[y][6] + '\');' : (Spells[y][5] != '' ? 'Cl(' + Spells[y][5] + ');' : '')) + '" style=\'visibility: ' + Spells[y][8] + (Spells[y][8] == 'hidden' ? ';display: none' : '') + '; cursor: pointer; width: ' + (Spells[y][5].indexOf('-') != -1 && y > 1 ? '30px' : '30px') + '; height: 32px; font-size: 7pt; color: ' + (Spells[y][5] == '' ? '#ff6666' : 'gold') + '; vertical-Align: top; float: left;\' align=center><img src="' + Spells[y][4] + '" width=16 height=16><br>' + (Spells[y][3] < 0 ? '' : getdhm2(Spells[y][3], 1)) + '</div>';
	}
	if (getObj(DivIn) == null) {
	} else {
		getObj(DivIn).innerHTML = strout;
	}
}

function ASM(TimerType, URL, Named, PictureID, Mins, URL2) {
	var y = spellcounter;
	Spells[y] = new Array(8);
	Spells[y][7] = 0
	ASMS(spellcounter, TimerType, URL, Named, PictureID, Mins, URL2);
}

function ASMS(SlotX, TimerType, URL, Named, PictureID, Mins, URL2) {
	var defdis = 'visible';
	if (SlotX == 0) {
		var Piccy = FHIPS + 'Q';
		SetQueueTimer(Mins);
		Mins = (Mins < 0 ? -1 : Math.round(Mins))
	} else {
		if (SlotX == 1) {
			var Piccy = FHIPS + 'J';
			if (Mins <= -1) {
				defdis = 'hidden';
			}
		} else {
			var Piccy = (PictureID == '' ? FHIPI + 'na' : FHIPS + PictureID);
		}

		Mins = (Mins == -1 ? -1 : (Mins < -1 ? 1 : Mins))
	}

	if (URL == '-2' || URL == '-4') {
		var Piccy = FHIPS + 'T';
	}

	var warningtime = 180;
	if (TimerType == 1) {
		warningtime = 0;
	}

	clearTimeout(Spells[SlotX][7]);
	Spells[SlotX][7] = 0;
	if (Mins > 0 && SlotX != 0) {
		var tmpmins = 0;
		tmpmins = Mins * 1000;
		Spells[SlotX][7] = setTimeout(() => SpellU(SlotX), tmpmins);
	} else {
		if (SlotX == 0) {
			Spells[SlotX][7] = -1;
		}
	}

	Spells[SlotX][0] = warningtime; //wt
	Spells[SlotX][1] = Named; //t
	Spells[SlotX][2] = TimerType; //tt
	Spells[SlotX][3] = Mins; //m
	Spells[SlotX][4] = Piccy + '.png'; //p
	Spells[SlotX][5] = URL; //URL
	Spells[SlotX][6] = URL2; //URL2
	Spells[SlotX][8] = defdis;

	spellcounter = spellcounter + 1;
}

function ASMX(SlotX, TimerType, URL, Named, PictureID, Mins, URL2) {
	ASMS(SlotX, TimerType, URL, Named, PictureID, Mins, URL2);
	window.top.DrawSpells();
}

function resetspells() {
	var y = 0;
	for (y = 0; y < Spells.length; y++) {
		if (Spells[y] != null) {
			if (Spells[y][7] > 0) {
				clearTimeout(Spells[y][7]);
			}
		}
	}
	spellcounter = 0;
	Spells = new Array();
}

function SetQueueTimer(qs) {
	ClearQueueTimer();
	if (qs > 0) {
		QueueTimer = setTimeout(ShowQueue, qs * 1000);
	}
}

function ClearQueueTimer() {
	clearTimeout(QueueTimer);
}

function ShowQueue() {
	var y = 0;
	Spells[y][7] = 0
	window.top.PGS('beep.wav');
	window.top.SendCommand('<font style=\'color: #FF9933;\'><b>Queue Notice</b>: All items you had queued are now ready for retrieval, go to the Inventory > Queue screen to place them in your Inventory.</font>')
	var objsm = getObj("SM" + y);
	if (objsm != null) {
		Spells[y][3] = -1;
	}
	window.top.DrawSpells();
}

function getdhm2(harhar, xy) {
	if (harhar < 0) {
		if (xy == 1) {
			var strout = '<b></b>';
		} else {
			var strout = '<b>Special Ability</b>';
		}
	} else {
		if (harhar > 86400 && xy == 1) {
			var w = Math.floor(Math.floor(((harhar / 60) / 60) / 24) / 7);
			var d = (Math.floor(((harhar / 60) / 60) / 24) - (w * 7));
			var strout = (w > 0 ? '<b>' + (w) + '</b>w' : '<b>' + (d) + '</b>d');
		} else {
			var w = Math.floor(Math.floor(((harhar / 60) / 60) / 24) / 7);
			var d = (Math.floor(((harhar / 60) / 60) / 24));
			var h = Math.floor(((harhar / 60) / 60) - (d * 24))
			var m = Math.floor(((harhar / 60)) - Math.floor((h * 60) + ((d * 24) * 60)))
			var s = (Math.floor((harhar) - (Math.floor((h * 60) + ((d * 24) * 60)) + (m) * 60)))
			if (xy == 1) {
				var strout = (w > 0 ? '<b>' + (w) + '</b>w' : '' + (d > 0 ? '<b>' + (d) + '</b>d' : (h > 0 ? '<b>' + (h) + '</b>h' : (m > 0 ? '<b>' + (m) + '</b>m' : (s > 0 && s < 60 ? '<b>' + (s) + '</b>s' : '')))));
			} else {
				var strout = (w > 0 ? '<b>' + (w) + '</b>weeks' : '' + (d > 0 ? '<b>' + (d) + '</b>d, ' : '') + (h > 0 ? '<b>' + (h) + '</b>hrs ' : '') + (m > 0 ? '<b>' + (m) + '</b>mins ' : '') + (s > 0 && s < 60 ? '<b>' + (s) + '</b>s' : ''));
			}
		}
	}
	return strout;
}



function ASMC() {
	var y = 0;
	var newHTML = '';
	var timeleft = 0;
	for (y = 0; y < Spells.length; y++) {
		if (Spells[y] != null) {
			if (Spells[y][7] != 0) {
				if (getObj("SM" + y) == null) {
				} else {
					timeleft = Math.round(Spells[y][3]);
					timeleft = timeleft - (1 * refreshspeed)
					Spells[y][3] = timeleft
					if (timeleft <= 0 && y != 0) {
					} else {
						var dh = getdhm2(timeleft, 1);
						if (timeleft <= Math.round(Spells[y][0]) && Math.round(Spells[y][0]) > 0) {
							if (y == 0) {
							} else {
								window.top.SendCommand('<font id=tred>The ' + (Spells[y][2] == 0 ? 'spell' : 'timer') + ' <b>' + Spells[y][1] + '</b> ' + (Spells[y][7] == 0 ? 'beeps at you ... *BEEP* *BEEP*' : 'runs out in ' + getdhm2(timeleft, 0) + '.') + '</font>')
							}
							Spells[y][0] = 0
						}
					}

				}
			}
		}
	}
	window.top.DrawSpells();
}

function SpellU(spellnumber) {
	var y = spellnumber;
	if (Spells[y] != null) {
		clearTimeout(Spells[y][7]);
		Spells[y][3] = -1;
	}
	window.top.DrawSpells();
	//Seems Firefox goofs out if this is run right after logging in.
	setTimeout(() => window.top.sendRequest('fhuncast.asp'), 5000);

}