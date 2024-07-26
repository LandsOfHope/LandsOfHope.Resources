var timer;
var fhh = 0;
var fhm = 0;
var fhs = 0;
var shx = shx;
var swx = swx;
var SystemUser = SystemUser;
var ticktock = 0;
var cpuo = cpuo;
var nowstatic;
var nowdynamic;

function getfhtime() {
	var now2 = new Date(2005,03, 1, fhh, fhm, fhs);
	now2.setSeconds(fhs + ticktock);
	return now2;
}

function gettime() {
	var now3;
	now3 = getfhtime();
	return (now3.getHours() < 10 ? "0" : "") + now3.getHours() + ":" + (now3.getMinutes() < 10 ? "0" : "") + now3.getMinutes() + ":" + (now3.getSeconds() < 10 ? "0" : "") + now3.getSeconds();
}

function getstime() {
	var now3;
	now3 = getfhtime();
	return (now3.getHours() < 10 ? "0" : "") + now3.getHours() + ":" + (now3.getMinutes() < 10 ? "0" : "") + now3.getMinutes() + "";
}

function getmtime() {
	var now3;
	now3 = getfhtime();
	return (now3.getHours() < 12 ? now3.getHours() + "am" : (now3.getHours() - 12) + "pm");
}

function gethour() {
	var now3;
	now3 = getfhtime();
	if (now3.getHours() < 4) {
		return 'Night';
	}
	else if (now3.getHours() < 7) {
		return 'Dawn';
	}
	else if (now3.getHours() < 12) {
		return 'Morning';
	}
	else if (now3.getHours() < 15) {
		return 'Early Afternoon';
	}
	else if (now3.getHours() < 17) {
		return 'Afternoon';
	}
	else if (now3.getHours() < 20) {
		return 'Evening';
	}
	else {
		return 'Night';
	}
}

function gethourpic() {
	var now3;
	now3 = getfhtime();
	if (now3.getHours() < 4) {
		return 'sky4';
	}
	else if (now3.getHours() < 7) {
		return 'sky1';
	}
	else if (now3.getHours() < 12) {
		return 'sky1';
	}
	else if (now3.getHours() < 15) {
		return 'sky2';
	}
	else if (now3.getHours() < 17) {
		return 'sky2';
	}
	else if (now3.getHours() < 20) {
		return 'sky3';
	}
	else {
		return 'sky4';
	}
}

function getDaylightBrightness(time) {
    const totalMinutes = time.getHours() * 60 + time.getMinutes();

    // Convert 5AM and 8PM to minutes
    const morningThresholdStart = 5 * 60; // 5AM in minutes
    const morningThresholdEnd = 8 * 60; // 8AM in minutes

    const eveningThresholdStart = 17 * 60; // 5PM in minutes
    const eveningThresholdEnd = 20 * 60; // 8PM in minutes

    // Before 5AM or after 8PM, brightness is 0
    if (totalMinutes < morningThresholdStart || totalMinutes > eveningThresholdEnd) {
        return 0;
    }
    // Between 8AM and 5PM, brightness is 1
    else if (totalMinutes > morningThresholdEnd && totalMinutes < eveningThresholdStart) {
        return 1;
    }
    // Calculate brightness for times between 5AM and 8AM
    else if (totalMinutes >= morningThresholdStart || totalMinutes <= morningThresholdEnd) {
        // Linearly increase from 0 to 1 as time goes from 5AM to 12 noon
        return (totalMinutes - morningThresholdStart) / (morningThresholdEnd - morningThresholdStart);
    }
    // Calculate brightness for times between 5PM and 8PM
    else if (totalMinutes >= eveningThresholdStart && totalMinutes <= eveningThresholdEnd) {
        // Linearly decrease from 1 to 0 as time goes from 5PM to 8PM
        return 1 - ((totalMinutes - eveningThresholdStart) / (eveningThresholdEnd - eveningThreshold));
    }
    // Default case to handle any unexpected input
    else {
        return 0;
    }
}

function TimeTip() {
	window.top.InfoTip('https://lohcdn.com/game/icons/' + gethourpic() + '.png', '' + getstime() + ' ' + gethour());
}

function refreshTime() {
	ticktock = ticktock + (8 * 10);
	if (timer != 0) {
		clearTimeout(timer);
	}
	var tmok = 1;
	if (getObj('timebar') != null) {
		window.top.getObj('timebar').style.backgroundImage = "URL(https://lohcdn.com/game/icons/" + gethourpic() + "s.png)";
		window.top.getObj('timebar').innerHTML = '' + window.top.ASCII('<small>Myzan Time:</small>', 1) + ' ' + window.top.ASCII('<b>' + getstime() + '</b>', 1);
	}

	const daylightBrightness = getDaylightBrightness(getfhtime());
	window.top.getObj("Map2").style.setProperty("--mapTimeFilter", `sepia(${(1 - daylightBrightness) * 30}%) brightness(${Math.max(60, daylightBrightness * 100)}%)`);

	if (tmok == 1) {
		timer = setTimeout(refreshTime, 10000);
	}
}

if (timer != 0) {
	clearTimeout(timer);
}
timer = setTimeout(refreshTime, 1000);
