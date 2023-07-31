var FID = FID;
var FHIP = 'https://res.landsofhope.com/game/'
var IPath = FHIP + "r/"
var IPath2 = FHIP + "i/"
var IPath4 = FHIP + "m/"
var IPath3 = ""
var height = 0; //height of the game area
var width = 0;	//width of the game area
var speed = 0	//speed, higher = slower
var points = 0;
var di = 0;
var charges = 5;
var x = 0;
var y = 0;
var n = 0;
var o = 0;
var hw = 0
var end = '';
var file = '';
var length = 1;
var prizes = new Array();
var k = 0;
var tScroll;
var prizesfound = 0;
var prizecount = 0;
var d = 0;
var gameover = 0;
var i = 0;
var food = 0;
var marker = '';
var blank = '';
var terrain = '';
var tilec = 1280602;
var terrain2 = '';
var terrainx = '';
var tilecx = 1280602;
var terrainx2 = '';
var totalprizes = 0;
var digspot = 'hole.gif';

document.write('<script src="js/formatting.js" language="JavaScript"></script>');
function InitGame(IPathM, markerx, blankx, terrainx1, terrain2x1, tilecx1, terrainx, terrain2x, tilecx2, w, h, tries, tp, digp) {
	charges = tries;
	digspot = digp;
	totalprizes = tp;
	IPath3 = FHIP + IPathM + "/";
	marker = IPath3 + markerx;
	blank = IPath3 + blankx;
	terrain =  terrainx;
	terrain2 = terrain2x;
	tilec = tilecx2;
	terrainx =  terrainx1;
	terrainx2 = terrain2x1;
	tilecx = tilecx1;
	Start(w, h);
}

function Start(w, h) {
var a = 0;
var b = 0;
end ='';
file = '';
k = 0
speed = 130;
points = 0;
o = 0;
i = 0;
di = 0;
x = 0;
prizesfound = 0;
y = 0;
n = 0;
d = 0;
length = 1;
food = 0;
width = w;
//20
height = h;
//14
hw = (height * width);
width += 2;
var tilenum = 0;
var strblank2;
var strout = '';
for (b = 0; b < height+2; b++) {
	strout += "<tr>";
	var strFile = IPath3 + terrainx;
	var strB = IPath3 + terrainx2;
	strblank2 = "<td style=\"background-Image: URL('" + strFile + "'); cursor: pointer; width: 20px; height: 20px;\"><img src='" + blank + "'  style=\"background-Image: URL('" + strB + "')\" width=20 height=20></td>";
	strout += strblank2;

	for (a = 0; a < width- 2; a++) {
		if ((b == 0) || (b == height+1)) {

			strout += strblank2;
		}
		else {
			var strB = blank;

			var rndnum = Math.floor((Math.random() * 3));
			if (rndnum == 0) {rndnum = ''};
			var strB = IPath3 + terrain + rndnum + ".gif";

			var rndnum = Math.floor((Math.random() * 10));
			if (rndnum <= 1) {rndnum = '';
				var strFile = IPath3 + terrain2 + rndnum + ".gif";
			} else {
				var strFile = IPath3 + terrain2 + rndnum + ".gif";
			}
			tilenum = tilenum + 1;
			prizes[tilenum] = 0;
			var Prize = Math.floor(Math.random() * hw);
			if (Prize == 1 || Prize == hw - 5) {
				prizes[tilenum] = 1;
				prizecount = prizecount + 1
			}
			strout += "<td onclick='Search(this," + tilenum + ")' style=\"background-Image: URL('" + strFile + "'); cursor: pointer; width: 20px; height: 20px;\"><img src='" + blank + "'  style=\"background-Image: URL('" + strB + "')\" width=20 height=20></td>";
		}
	}
	strout += strblank2;

	strout += "</tr>" //";
}
getObj("Inv").innerHTML = "<table cellspacing=0 align=center cellpadding=0 style=\"background-Image: URL(https://res.landsofhope.com/game/images/seafloor.png);\">" + strout + "</table>";
getObj("Stuff2").innerHTML = "<table cellpadding=1 cellspacing=1 class=weakcell><tr><td colspan=2 id=fakescore name=fakescore>" + charges + " attempts remain</td></tr><tr><td><img src='" + marker + "' width=15 height=15>:</td><td id=fakescore2 name=fakescore2>0 cargo found</td></tr><tr><td colspan=2><center>Click on any tile to start</center></td></tr><tr><td colspan=2><b>Objectives</b><br>Locate the sunken <img src='" + marker + "' width=15 height=15> by clicking on any tile in the central area of the map.</td></tr></table>";
document.images[1].src = blank; 
blank = document.images[1].src;
}

function Search(stuff, t) {
	//Search
	var s = 0;
	if (charges > 0 && t != 0) {
		if (prizes[t] == 1) {
			//alert('You found a Prize !')
			stuff.innerHTML = "<img src='" + blank + "'  style=\"background-Image: URL('" + marker + "')\" width=20 height=20>"
			prizesfound = prizesfound + 1;
			prizes[t] = -1
			window.top.PGS('beep.wav');
			charges = charges - 1;
			stuff.onclick = '';
		} else if (prizes[t] == -1) {
			stuff.onclick = '';
		} else {
			charges = charges - 1;
			stuff.innerHTML = "<img src='" + blank + "'  style=\"background-Image: URL('" + IPath3 + digspot + "')\" width=20 height=20>"
			window.top.PGS('miss.wav');
			stuff.onclick = '';
		}

	}
	getObj("fakescore").innerHTML = charges + " attempts remain";
	if (prizesfound > 0)  {
		getObj("fakescore2").style.color = 'gold';
	}
	getObj("fakescore2").innerHTML = prizesfound + " cargo found";
	if (charges <= 0 && prizesfound > 0 || (prizesfound > 0 && totalprizes <= prizesfound)) {
		//Submit
		gameover = 1;
		s = prizesfound;
	} else if (charges <= 0) {
		gameover = 1;
		s = -1;
	}
	if (gameover == 1) {
		getObj("Inv").innerHTML = "<table cellspacing=0 align=center cellpadding=0 style=\"background-Image: URL(https://res.landsofhope.com/game/images/seafloor.png);\"></table>";
		window.location.replace('fhduty.asp?FID=' + FID + '&score=' + s);
	}
}


