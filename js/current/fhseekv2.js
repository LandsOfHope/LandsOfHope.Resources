var FID = FID;
var CharsAt = CharsAt;
var FHIP = 'https://lohcdn.com/game/'
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
var i = 0;
var food = 0;
var head = '';
var marker = '';
var blank = '';
var terrain = '';
var tilec = 1280602;
var terrain2 = '';
var terrainx = '';
var tilecx = 1280602;
var terrainx2 = '';

document.write('<script src="js/formatting.js" language="JavaScript"></script>');
function InitGame(gamename, IPathM, headx, markerx, blankx, terrainx1, terrain2x1, tilecx1, terrainx, terrain2x, tilecx2, w, h) {
	window.top.getObj('framedivtitle').innerHTML = gamename;
	//getObj("Bob").rows[0].cells[0].innerHTML = "<table width='100%' cellpadding=0 cellspacing=0><tr><td class='menul'>&nbsp;&nbsp;&nbsp;</td><td class='title' width='100%'>" + gamename + "</td><td class='menur'>&nbsp;&nbsp;&nbsp;</td></tr></table>";
	IPath3 = FHIP + IPathM + "/";
	head = IPath3 + headx;
	marker = IPath3 + markerx;
	blank = IPath3 + blankx;
	terrain = terrainx;
	terrain2 = terrain2x;
	tilec = tilecx2;
	terrainx = terrainx1;
	terrainx2 = terrain2x1;
	tilecx = tilecx1;
	Start(w, h);
}

function Start(w, h) {
	var a = 0;
	var b = 0;
	end = '';
	file = '';
	k = 0
	speed = 130;
	points = 0;
	o = 0;
	i = 0;
	di = 0;
	x = 0;
	charges = 5;
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
	for (b = 0; b < height + 2; b++) {
		strout += "<tr>";
		var strFile = IPath3 + terrainx;
		var strB = IPath3 + terrainx2;
		strblank2 = "<td class='c" + tilecx + "' style=\"background-Image: URL('" + strFile + "')\"><img src='" + blank + "'  style=\"background-Image: URL('" + strB + "')\" width=20 height=20></td>";
		strout += strblank2;

		for (a = 0; a < width - 2; a++) {
			if ((b == 0) || (b == height + 1)) {

				strout += strblank2;
			}
			else {
				var rndnum = Math.floor((Math.random() * 3));
				if (rndnum == 0) { rndnum = '' }
				var strFile = IPath3 + terrain + rndnum + ".gif";

				var strB = blank;
				var rndnum = Math.floor((Math.random() * 10));
				if (rndnum <= 1) {
					rndnum = '';
					var strB = IPath3 + terrain2 + rndnum + ".gif";
				} else {
					if (rndnum <= 5) {
						var strB = IPath3 + terrain2 + rndnum + ".gif";
					}
				}
				tilenum = tilenum + 1;
				prizes[tilenum] = 0;
				var Prize = Math.floor(Math.random() * hw);
				if (Prize == 1 || Prize == hw - 5) {
					//var strB = head;
					prizes[tilenum] = 1;
					prizecount = prizecount + 1
				}
				// t=" + tilenum + "
				strout += "<td onclick='Search(this," + tilenum + ")' class='c" + tilec + "' style=\"background-Image: URL('" + strFile + "')\"><img src='" + blank + "'  style=\"background-Image: URL('" + strB + "')\" width=20 height=20></td>";
			}
		}
		strout += strblank2;

		strout += "</tr>" //";
	}
	getObj("Inv").innerHTML = "<table cellspacing=0 align=center cellpadding=0>" + strout + "</table>";
	getObj("Stuff2").innerHTML = "<form name=info id=info method=post action='fhseeker.asp' style='margin: 0px;'><input name=FID id=FID type=hidden value=" + FID + "><input name=CharsAt id=CharsAt type=hidden value=" + CharsAt + "><input name=score id=score type=hidden value=0><input type=button size=28 name=fakescore id=fakescore value='" + charges + " attempts remain' class=worm1><br><img src='" + marker + "' width=15 height=15> : <input type=button size=28 id=fakescore2 name=fakescore2 value='0 Prizes Found' class=worm1></form><br><font size=-2>Click on any Tile to start</font><br><br><b>Objectives</b><br>Locate the hidden <img src='" + marker + "' width=15 height=15> by clicking on any tile in the central area of the map.";
	document.images[1].src = blank;
	blank = document.images[1].src;
}

function Search(stuff, t) {
	//Search
	if (charges > 0 && t != 0) {
		if (prizes[t] == 1) {
			//alert('You found a Prize !')
			stuff.innerHTML = "<img src='" + blank + "'  style=\"background-Image: URL('" + marker + "')\" width=20 height=20>"
			prizesfound = prizesfound + 1;
			prizes[t] = -1
			//stuff.t = 0;
			window.top.PGS('beep.wav');
			charges = charges - 1;
		} else if (prizes[t] == -1) {
		} else {
			charges = charges - 1;
			stuff.innerHTML = "<img src='" + blank + "'  style=\"background-Image: URL('" + IPath3 + "ayou.gif')\" width=20 height=20>"
			window.top.PGS('miss.wav');
			//stuff.t = 0;
		}

	}
	getObj("fakescore").value = charges + " attempts remain";
	getObj("fakescore2").value = prizesfound + " prizes found";
	if (charges <= 0 && prizesfound > 0) {
		//Submit
		getObj("score").value = prizesfound;
		getObj("info").submit()
	} else if (charges <= 0) {
		getObj("score").value = -1;
		getObj("info").submit()
	}
}


