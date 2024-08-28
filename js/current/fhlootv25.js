var TargetL = TargetL;
var Skill = Skill;
var CharID = CharID;
var PageNo = PageNo;
var What = What;
var Processing = 0;
var IPath = window.top.FHIPI;
var OPath = window.top.FHIP + 'icons/';
var BagID = BagID;
var LootItems = new Array();
var LootCount = 0;
var Bags = new Array();
var BagCount = 0;

document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(GoP) {
	window.location.replace('?CharsAt=' + CharID + '&P=' + GoP + '&B=' + BagID);
}

function GetAT(aa) {
	return (aa > 0 ? (aa == 1 ? 'Cloth' : (aa == 2 ? 'Leather' : (aa == 3 ? 'Mail' : 'Plate'))) : '');
}

//getObj('Stuff2').innerHTML = '<b>' + LootItems[v].n + '</b>' + (LootItems[v].i == 'True' ? (LootItems[v].s != '' ? '<br>Needs: ' + LootItems[v].s : '' ) + '<br>Rarity: <b>' + LootItems[v].l + '</b><br>Value: ' + window.top.BSGM(LootItems[v].b) + '' :  (LootItems[v].a != '' ? '<br>Appraisal: ' + LootItems[v].a : '' ));

function DoLoot(currentitem, actionid, v, b) {
	window.location.replace('?CharsAt=' + CharID + '&ItemID=1&P=' + PageNo + '&InventoryItemID=' + currentitem + '&B=' + b + '');
}

function DoLoot2(actionid) {
	if (Processing == 0) {
		Processing = 1;
		window.location.replace('?CharsAt=' + CharID + '&ItemID=' + actionid + '&P=' + PageNo + '&B=' + BagID + '');
	}
}


function PromptReturn(returnVal, postback) {
	if (returnVal != null) {
		if (returnVal != false) {
			if (postback > 0) {
				var II = LootItems[postback];
				window.top.sendRequest('fhlink' + (II.c == '#7CFC00' ? 's' : (II.c == '#CCCCFF' ? 'tc' : '')) + '.asp?Type=I&CharsAt=' + II.v + '&Name=' + II.n + '&c=' + encodeURIComponent(II.c) + '&l1=i&l2=' + II.p);
			}
		}
	}
}

function RC(v) {
	window.top.hideTip();
	getObj('LI' + v).style.cursor = '';
	getObj('LI' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('' + IPath + LootItems[v].p, '<b>' + LootItems[v].n + '</b>' + (LootItems[v].i == 'True' ? (LootItems[v].s != '' ? '<br>Needs: ' + LootItems[v].s : '') + '<br>Rarity: <b>' + LootItems[v].l + '</b><br>Value: ' + window.top.BSGM(LootItems[v].b) + '' : (LootItems[v].a != '' ? '<br>Appraisal: ' + LootItems[v].a : '')));
	getObj('LI' + v).style.cursor = 'pointer';
	getObj('LI' + v).style.backgroundColor = BGCOLOR_S
}

function RC2(stuff) {
	window.top.hideTip();
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function PC2(stuff) {
	stuff.style.cursor = 'pointer';
	stuff.style.backgroundColor = BGCOLOR_S
}

function AvM(v) {
	var Color = LITE;
	if (LootItems[LootCount] == null) {
		LootItems[LootCount] = new Array();
	}
	LootItems[LootCount] = new LootItem2(Color, v, 'Corpse Money', 2);

	document.write('<tr width="615" id="LI' + LootCount + '" onclick="DC2(' + LootCount + ')" onmouseover="PC2(this);" onmouseout="RC2(this);"><td><img width=15 height=15 src="' + IPath + 'na.gif"></td><td width="600" colspan=4 style="color: ' + Color + '; padding-left: 5px">' + window.top.BSGM3(v) + '</td></tr>');
	LootCount = LootCount + 1;
}

function LootItem2(Color, v, Itty, loottype) {
	this.c = Color;
	this.v = v;
	this.n = Itty;
	this.loottype = loottype;
}


function AvA(v) {
	var Color = LITE;
	if (LootItems[LootCount] == null) {
		LootItems[LootCount] = new Array();
	}
	LootItems[LootCount] = new LootItem2(Color, v, 'Contract', 7);

	document.write('<tr width="615" id="LI' + LootCount + '" onclick="DC7(' + LootCount + ')" onmouseover="PC2(this);" onmouseout="RC2(this);"><td><img width=15 height=15 src="' + IPath + 'zuptstpe.gif"></td><td width="600" colspan=4 style="color: ' + Color + '; padding-left: 5px">' + window.top.BSGM3(v) + '</td></tr>');
	LootCount = LootCount + 1;
}

function AvS(v, tut, al, lix, g) {
	var strxClicky = strClicks;

	document.write('<table class="weakcell" width="615px" cellspacing=0 cellpadding=1>');
	if (tut == 0) {
		document.write('<tr>')
		var Color = 'brown';
		if (g == 20) {
			var Color = 'gold';
			document.write('<td width="50%" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px"><button style="width:100%;color: ' + Color + ';" ' + strxClicky + ' onclick="DoLoot2(20);">Honor</button><br>Perform a ritual to honor the dead.</td>');
			var Color = 'red';
			document.write('<td width="50%" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px"><button style="width:100%;color: ' + Color + ';" ' + strxClicky + ' onclick="DoLoot2(21);">Dishonor</button><br>Perform a ritual to dishonor the dead.</td>');
		} else {
			if (g == 19) {
				document.write('<td width="25%" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px;"><button style="width:100%;color: ' + Color + ';" ' + strxClicky + ' onclick="DoLoot2(18);">Sever Spirit</button><br>Skinning: ' + Skill + '<br></td>');
				var Color = 'yellow';
				document.write('<td width="25%" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px"><button style="width:100%;color: ' + Color + ';" ' + strxClicky + ' onclick="DoLoot2(16);">Specimen Trap</button><br><b>Dr Filbert`s Gift</b></td>');
			} else {
				document.write('<td width="25%" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px;"><button style="width:100%;color: ' + Color + ';" ' + strxClicky + ' onclick="DoLoot2(8);">Skin Corpse</button><br>Skinning: ' + Skill + '<br><b>Gathering Skill</b></td>');
			}

			if (lix != 0) {
				var Color = 'gold';
				document.write('<td width="25%" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px"><button style="width:100%;color: ' + Color + ';" ' + strxClicky + ' onclick="DoLoot2(15);">Salvage</button><br>Deconstruction: ' + Skill + '<br><b>Salvager Ability</b></td>');
			} else {
				if (g == 19) {
				} else {
					var Color = LITE;
					document.write('<td width="25%" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px"><button style="width:100%;color: ' + Color + ';" ' + strxClicky + ' onclick="DoLoot2(9);">Intercede</button><br>Intercession: ' + Skill + '<br><b>Priest Class Skill</b></td>');
					var Color = '#ff66ff';
					document.write('<td width="25%" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px"><button style="width:100%;color: ' + Color + ';" ' + strxClicky + ' onclick="DoLoot2(6);">Soul Trap Corpse</button><br>Spirit Magic: ' + Skill + '<br><b>Shaman Class Skill</b></td>');
				}
			}
			if (al == 3 && g != 19) {
				var Color = 'red';
				document.write('<td width="25%" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px"><button style="width:100%;color: ' + Color + ';" ' + strxClicky + ' onclick="DoLoot2(12);">Blood Drain Corpse</button><br>Level ' + TargetL + '+ Required<br><b>Reaper Ability</b></td>');
			}
		}
		document.write('</tr>')
	} else {
		var Color = '#ff66ff';
		document.write('<tr width="100%" v="' + v + '" p="sg3.gif"><td width="100%" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px"><button style="width:100%;color: ' + Color + ';" ' + strxClicky + ' onclick="DoLoot2(13);">Destroy Corpse - Remove Soul</button><br>This corpse will not decay until you remove its soul. After you leave the Estate at level 5 you can gain Skinning and destroy corpses by skinning them.</td></tr>');
	}
	document.write('</table>')
}

function DC2(v) {
	if (Processing == 0) {
		DoLoot2(5);
	}
}

function DC7(v) {
	if (Processing == 0) {
		DoLoot2(7);
	}
}

function LootItem(Color, l, v, s, a, i, b, m, PictureID, Itty, aa) {
	this.c = Color;
	this.l = l;
	this.v = v;
	this.s = s;
	this.a = a;
	this.i = i;
	this.b = b;
	this.m = m;
	this.p = PictureID;
	this.n = Itty;
	this.aa = aa;
	this.loottype = 1;
}

function AvC(Color, l, v, s, a, i, b, m, PictureID, Itty, aa) {
	if (l == 'C') { l = 'Common' }
	else if (l == 'N') { l = 'Uncommon' }
	else if (l == 'R') { l = 'Rare' }
	else if (l == 'V') { l = 'Very Rare' }
	else if (l == 'U') { l = 'Unique' }
	else if (l == 'A') { l = 'Artifact' }

	if (Itty.indexOf('(E)') != -1) {
		Color = 'gold';
	} else {
	}
	if (LootItems[LootCount] == null) {
		LootItems[LootCount] = new Array();
	}

	LootItems[LootCount] = new LootItem(Color, l, v, s, a, i, b, m, PictureID, Itty, aa);
	document.write('<tr width="615" title="Double click to loot ' + LootItems[LootCount].n + ' to Sell Bag" id="LI' + LootCount + '" ondblclick="DoLoot(' + LootItems[LootCount].v + ', 1, ' + LootCount + ',67);" onmouseout="RC(' + LootCount + ')"><td width=16><img width=16 height=16 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="240" style="color: ' + Color + '; padding-left: 5px" onmouseover="PC(' + LootCount + ')">' + Itty + '</td><td width=60>' + (i == 'True' ? Adir('PopupStuff(' + LootCount + ');', 'View information for ' + Itty + '', 'info', '') : Adir('if (Processing == 0) {Processing = 1; window.location.replace(\"?CharsAt=' + CharID + '&ItemID=4&P=' + PageNo + '&InventoryItemID=' + LootItems[LootCount].v + '&B=' + BagID + '\")};', 'Identify ' + Itty + ' (' + a + ')', 'info', '')) + Adir('PopupCompare(' + v + ');', 'Compare ' + Itty + '', 'briefcase', '') + '</td><td width=60>' + GetAT(aa) + '</td><td width=240>' + (Color != '#C86464' ? GetButtons(LootCount) : '') + '</td></tr>');
	LootCount = LootCount + 1;
}

function PopupStuff(v) {
	PopupItemInfo(LootItems[v].v, LootItems[v].n);
}

function GetButtons(v) {
	var strout = '';
	var i = 0;
	for (i = 0; i < BagCount; i++) {
		strout += '<div onmouseover="this.style.backgroundColor=\'' + BGCOLOR_S + '\';window.top.InfoTip(\'' + IPath + Bags[i].p + '\', \'<b>' + Bags[i].t + '</b><br>Loot ' + LootItems[v].n + ' to ' + Bags[i].t + '\');" title="Loot ' + LootItems[v].n + ' to ' + Bags[i].t + '" onmouseout="this.style.backgroundColor=\'' + Bags[i].c + '\';" style=\'background-color: ' + Bags[i].c + ' ;float: left; width: 20px; height: 20px; margin: 1px; padding: 1px; cursor: pointer;\' onclick=\'DoLoot(' + LootItems[v].v + ', 1, ' + v + ',' + Bags[i].n + ');\'><img width=20 height=20 src="' + IPath + Bags[i].p + '"></div>';
	}
	return strout;
}

function AdC(n, Names, Color, PictureID) {
	if (PictureID == '') { PictureID = 'bg3.gif' };
	var Titles2 = 'Set the loot bag to ' + Names;

	if (Bags[BagCount] == null) {
		Bags[BagCount] = new Array();
	}
	Bags[BagCount] = new BagItem(n, Names, Color, PictureID);
	BagCount = BagCount + 1;
}

function BagItem(n, Names, Color, PictureID) {
	this.c = Color;
	this.n = n;
	this.t = Names;
	this.p = PictureID;
}