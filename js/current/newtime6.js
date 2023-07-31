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

function getfhtime (){
var now2 = new Date(2005,03,1,fhh,fhm,fhs);
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

function getLight() {
var now3;
now3 = getfhtime();
if (now3.getHours() < 4) {
	return 80;
}
else if (now3.getHours() < 7) {
	return 85;
}
else if (now3.getHours() < 10) {
	return 90;
}
else if (now3.getHours() < 12) {
	return 95;
}
else if (now3.getHours() < 15) {
	return 100;
}
else if (now3.getHours() < 17) {
	return 95;
}
else if (now3.getHours() < 18) {
	return 90;
}
else if (now3.getHours() < 20) {
	return 85;
}
else {
	return 80;
}
}

function TimeTip() {
	window.top.InfoTip('https://res.landsofhope.com/game/icons/' + gethourpic() + '.png', '' + getstime() + ' ' + gethour());
}

function refreshTime() {
ticktock = ticktock + (8 * 10);
if (timer != 0) {
	clearTimeout(timer);
}
var tmok = 1;
if (getObj('timebar') != null)  {
	window.top.getObj('timebar').style.backgroundImage = "URL(https://res.landsofhope.com/game/icons/" + gethourpic() + "s.png)";
	window.top.getObj('timebar').innerHTML = '' + window.top.ASCII('<small>Myzan Time:</small>',1) + ' ' + window.top.ASCII('<b>' + getstime() + '</b>', 1);
}
var localti = window.top.timeindex;
if (tmok == 1) {
	timer = setTimeout("refreshTime()", 10000);
}
}

if (timer != 0) {
	clearTimeout(timer);
}
timer = setTimeout("refreshTime()", 1000);
