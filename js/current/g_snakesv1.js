var FID = FID;
var IPath = "https://res.landsofhope.com/game/r/"
var IPath2 = "https://res.landsofhope.com/game/i/"
var IPath4 = "https://res.landsofhope.com/game/m/"
var IPath3 = ""
var height = 0; //height of the game area
var width = 0;	//width of the game area
var speed = 0	//speed, higher = slower
var points = 0;
var di = 0;
var x = 0;
var y = 0;
var n = 0;
var o = 0;
var hw = 0
var end = '';
var file = '';
var length = 1;
var worm = new Array();
var k = 0;
var tScroll;
var d = 0;
var i = 0;
var food = 0;
var head = '';
var marker = '';
var blank = '';
var terrain = '';
var tilec = 1280602;
var terrain2 = '';

//document.onkeydown= function anonymous() {keyDown()};
document.write('<script src="js/formatting.js" language="JavaScript"></script>');
function InitGame(gamename, IPathM, headx, markerx, blankx, terrainx, terrain2x, tilecx) {
	getObj("Bob").rows[0].cells[0].innerHTML = "<font class='title'>" + gamename + "</font>";
	IPath3 = "https://res.landsofhope.com/game/" + IPathM + "/";
	head = IPath3 + headx;
	marker = IPath3 + markerx;
	blank = IPath3 + blankx;
	terrain =  terrainx;
	terrain2 = terrain2x;
	tilec = tilecx;
	Start();
}

function Start() {
var a = 0;
var b = 0;
end ='';
file = '';
worm = new Array();
k = 0
speed = 130;
points = 0;
o = 0;
i = 0;
di = 0;
x = 0;
y = 0;
n = 0;
d = 0;
length = 1;
food = 0;
width = 20;
height = 14;
hw = (height * width);
width += 2;

var strout = '';
for (b = 0; b < height+2; b++) {
	
	strout += "<tr><td><img src=bdh.gif width=0 height=0></td>";
	for (a = 0; a < width- 2; a++) {
		if ((b == 0) || (b == height+1)) {
			strout += "<td><img src=bdh.gif width=0 height=0></td>";
		}
		else {
			var rndnum = Math.floor((Math.random() * 3));
			if (rndnum == 0) {rndnum = ''}
			var strFile = IPath3 + terrain + rndnum + ".gif";

			var strB = blank;
			var rndnum = Math.floor((Math.random() * 10));
			if (rndnum <= 1) {rndnum = '';
				var strB = IPath3 + terrain2 + rndnum + ".gif";
			} else {
				if (rndnum <= 5) {
					var strB = IPath3 + terrain2 + rndnum + ".gif";
				}
			}

			strout += "<td class='c" + tilec + "' style=\"background-Image: URL('" + strFile + "')\"><img src='" + blank + "'  style=\"background-Image: URL('" + strB + "')\" width=20 height=20></td>";
		}
	}
	strout += "<td><img src=bdh.gif width=0 height=0></td></tr>" //";
}
getObj("Inv").innerHTML = "<table cellspacing=0 cellpadding=0>" + strout + "</table>";
getObj("Stuff2").innerHTML = "<input name=FID id=FID type=hidden value=" + FID + "><input id=score name=score type=hidden value=0><input type=button size=28 id=fakescore name=fakescore value=0 class=worm1><br><font size=-2>Press any arrow key to start</font><br><br><button onclick=\"InitGame('Pumpkin Party', 'm','pkin.gif', 'cave2.gif','p.gif','grass','bush','1280602');\">Grass</button><button onclick=\"InitGame('Dark Presents', 'm','present.gif', 'penta.gif','p.gif','stone','srock','16383969');\">Snow</button><button onclick=\"InitGame('Desert Water Showdown', 'm','marker1.gif', 'mine2.gif','p.gif','stone','cycad','5820911');\">Desert</button><br><br><b>Objectives</b><br>Use the arrow keys to move the <img src='" + head + "' width=15 height=15> to collect the <img src='" + marker + "' width=15 height=15><br><i id=thedebug></i>";
document.images[1].src = blank; 
blank = document.images[1].src;

o = getvalidpoint(0);

i = o;
food = getvalidpoint(o);

document.images[i].src = head
document.images[width-1].src="bdh.gif";
end = document.images[width-1].src;
file = document.images[i].src;
height = document.images[0].height;
clearTimeout(tScroll);
runTimer();

}

function getvalidpoint(excludep) {
var z =  ((Math.floor(Math.random() * 14) + 1) * 22) + (Math.floor(Math.random() * 20) + 1); // Math.floor(Math.random() * (hw - 23)) + 23;
var x = (z % 22);
var y = Math.floor(z / 22);
do {
	z = ((Math.floor(Math.random() * 14) + 1) * 22) + (Math.floor(Math.random() * 20) + 1);
	x = (z % 22);
	y = Math.floor(z / 22);
} while(document.images[z].src != blank && x >= 1 && y >= 1 && x <= 22 && y <= 14 && z != excludep && z > 0);
return z;
}

function runTimer() {
if (d != 0) { n++; }
if (d == 1) { i--; }
if (d == 2) { i++; }
if (d == 3) { i += width; }
if (d == 4) { i -= width; }
if (document.images[i].src == end) {
	speed -= 400; i = worm[n-1]; di = 1; die();
}
worm[n] = i;
if(i == food) {
	length++; points += (10*length);
	do {
		food = getvalidpoint(i);
	} while (document.images[food].src != blank);

	if (di == 0) {
		getObj('score').value = points;
		getObj('fakescore').value = getObj('score').value;
	   }
}
getObj('thedebug').innerHTML = 'Debug: H=' + (i % 22) + ', ' + Math.floor(i / 22)  + ' F=' + food + ' ' + (food % 22) + ' ' + Math.floor(food / 22);

if (n > length){
	o = worm[n-length];
}
if ((document.images[i].src == file) && (n > 1)) {
	speed -= 400; d = 0; di = 1; die();
}
if(di == 0) {
	document.images[o].src = blank;
	document.images[i].src = head;
	document.images[food].src = marker;
	clearTimeout(tScroll);
	tScroll = window.setTimeout("runTimer();", speed);
   }
}

function keyDown(e) {
e = e || window.event;
k = e.keyCode;
if (k == 37) { d = 1; }
if (k == 39) { d = 2; }
if (k == 40) { d = 3; }
if (k == 38) { d = 4; }
}
function die() {
clearTimeout(tScroll);
i = 0;
o = 0;
food = 0;
getObj('fakescore').value = "Died with " + getObj('score').value;
if (getObj('score').value > 0) {
	confirm('Submit High Score?', 1);
} else {
	confirm('Play Again?', 2);
}
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			if (pb == 1) {
				getObj('info').submit();
			} else {
				Start();
			}
		}
	}
}
