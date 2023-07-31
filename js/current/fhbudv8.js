var PageNo = PageNo;
var Processing = 0;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();
var LastV = -1;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(z, Itty, v, PictureID, l, it, d, rs, pp) {
var Color = LITE;
PictureID =  window.top.FHIP + pp + '/' + PictureID;

if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, z, Itty, v, PictureID, l, it, d, rs, pp);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + PictureID + '"></td><td width="100%" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, z, Itty, v, PictureID, l, it, d, rs, pp) {
this.c = Color;
this.rs = rs;
this.p = PictureID;
this.i = Itty;
this.it = it;
this.l = l;
this.d = d;
this.z = z;
this.v = v;
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(Infos[v].p,Infos[v].i);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function DD(stuff) {
	GS(6, stuff.v);
}

function DC(v) {
	LastV = v;
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Description:<i>' + Infos[v].d + '</i><br>' + (Infos[v].l < 0 ? 'Not Lockable' : (Infos[v].l == 0 ? 'Unlocked - Anyone can use' : 'Locked (' + Infos[v].l + ') - Admin Friends or Owner Access')) + GetPictures(v);
	getObj('Pic').innerHTML = '<img src=\'' + Infos[v].p + '\'>';
	getObj('Buttons').innerHTML = Adr('confirm(\'This will delete this item and return any items it contained to its owner, continue if you are sure.\', 1);', 'Delete','Delete') + Adr('prompt(\'Description:\',-4, \'' + Infos[v].d + '\',\'Item Description\',\'\',4);','Description','Description') + (Infos[v].rs > 0 || Infos[v].it == 288 || Infos[v].it == 139 || Infos[v].it == 91 || Infos[v].it == 200 ? Adr('prompt(\'Name:\',-5, \'' + Infos[v].i + '\',\'Item Name\',\'\',4);','Rename','Rename') : '') + (Math.abs(Infos[v].it) == 138 || Math.abs(Infos[v].it) == 303 ? Adr('window.location.replace(\'FHBV.asp?ItemTypeID=' + Infos[v].v +'&InventoryItemID=1\');','View','View') : '') + (Infos[v].l > 0 ? Adr('confirm(\'This will unlock this item and make it openable by everyone, are you sure?\', 2);','Unlock','Unlock') : (Infos[v].l == 0 ? Adr('confirm(\'This will lock this item and make it openable by only owners or those on the room admin list, are you sure?\', 3);','Lock','Lock') : ''));
}

function GetPictures(v) {
	var DI = '';
	var x = 0;
	if (Math.abs(Infos[v].it) == 288 || Math.abs(Infos[v].it) == 139) {
		var Imgz = new Array('us1.gif', 'us2.gif', 'po5.gif', 'po2.gif', 'po3.gif', 'po4.gif', 'ceilinghole.gif', 'ceilingholer.gif', 'groundhole.gif', 'groundholer.gif', 'wallholee.gif', 'wallholew.gif', 'doorway.gif', 'doorwayb.gif', 'poolofwater.gif','spiralst1.gif','spiralst2.gif');
		//style=\"border: 1px solid " + (currentimage == Imgz[x] ? "gold" : "#000000") + "
		for (x = 0; x < Imgz.length; x++) {
			DI = DI + "<div style=\"width: 40px; height: 40px; float: left; padding: 1px; margin: 1px;\" onclick=\"setimage('" + Imgz[x] + "'," + v +  ")\" onmouseover='DC2(this)' onmouseout='DC1(this)'><img width=40 height=40 src=\"" + IPath + Imgz[x] + "\"></div>"
		}		
	}
	if (Math.abs(Infos[v].z) == 6249) {
		var Imgz = new Array('6249.gif', 'sc1.gif', 'ans.gif', 'scroll.gif', 'cof1.gif', 'pw1.gif', 'fg2.gif', 'cat1.gif', 'bx5.gif', 'bk4.gif', 'po5.gif', 'gsb.gif', 'zuboprge.gif', 'ba2.gif', 'zuspba.gif');
		//style=\"border: 1px solid " + (currentimage == Imgz[x] ? "gold" : "#000000") + "
		for (x = 0; x < Imgz.length; x++) {
			DI = DI + "<div style=\"width: 40px; height: 40px; float: left; padding: 1px; margin: 1px;\" onclick=\"setimage('" + Imgz[x] + "'," + v +  ")\" onmouseover='DC2(this)' onmouseout='DC1(this)'><img width=40 height=40 src=\"" + IPath + Imgz[x] + "\"></div>"
		}		
	}
	return DI;
}

function setimage(newimg, v) {
	GSD(6, v, newimg);
}

function DC1(stuff) {
stuff.style.cursor = '';
stuff.style.backgroundColor='';
}

function DC2(stuff) {
stuff.style.cursor = 'pointer';
stuff.style.backgroundColor=BGCOLOR_S;
}

function GS(how, v) {
	if (Processing == 0) {
		Processing = 1
		window.top.Interface.location.replace('fhbud.asp?Type=' + how + '&CharsAt2=' + Infos[v].v + '');
	}
}

function GSD(how, v, d) {
	if (Processing == 0) {
		Processing = 1
		window.top.Interface.location.replace('fhbud.asp?Type=' + how + '&CharsAt2=' + Infos[v].v + '&D=' + d);
	}
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && LastV >= 0) {
			if (pb > 0) {
				GS(pb, LastV);
			} else {
				GSD(Math.abs(pb), LastV, returnVal);
			}
		}
	}
}