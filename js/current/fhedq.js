var PageNo = PageNo;
var Processing = 0;
var IPath = window.top.FHIPI;
var IC = 0;
var CharsAt = CharsAt;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function DD(stuff) {
	GS(6, stuff.v);
}

function DC(v) {
	LastV = v;
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b><br>Description:<i>' + Infos[v].d + '</i><br>' + (Infos[v].l < 0 ? 'Not Lockable' : (Infos[v].l == 0 ? 'Unlocked - Anyone can use' : 'Locked (' + Infos[v].l + ') - Admin Friends or Owner Access')) + GetPictures(v);
	getObj('Pic').innerHTML = '<img src=\'' + Infos[v].p + '\'>';
	getObj('Buttons').innerHTML = Adr('confirm(\'This will delete this item and return any items it contained to its owner, continue if you are sure.\', 1);', 'Delete','Delete') + Adr('prompt(\'Description:\',-4, \'' + Infos[v].d + '\',\'Item Description\',\'\',4);','Description','Description') + (Infos[v].rs > 0 || Infos[v].it == 288 || Infos[v].it == 139 || Infos[v].it == 91 ? Adr('prompt(\'Name:\',-5, \'' + Infos[v].i + '\',\'Item Name\',\'\',4);','Rename','Rename') : '') + (Math.abs(Infos[v].it) == 138 || Math.abs(Infos[v].it) == 303 ? Adr('window.location.replace(\'FHBV.asp?ItemTypeID=' + Infos[v].v +'&InventoryItemID=1\');','View','View') : '') + (Infos[v].l > 0 ? Adr('confirm(\'This will unlock this item and make it openable by everyone, are you sure?\', 2);','Unlock','Unlock') : (Infos[v].l == 0 ? Adr('confirm(\'This will lock this item and make it openable by only owners or those on the room admin list, are you sure?\', 3);','Lock','Lock') : ''));
}

function GetPictures(selx) {
	var DI = '';
	var Imgz = new Array('sahj.gif', 'desj.gif', 'scroll.gif', 'cw.gif', 'sg1.gif', 'pe5.gif', 'pe8.gif', 'rgb.gif', 'bk4.gif', 'cn1.gif', 'cs1.gif', 'gn2.gif', 'sc1.gif', 'sl2.gif', 'ee1.gif', 'dol.gif', 'am2.gif', 'flr.gif', 'val4.gif', 'diary1.gif','zurapabype.gif', 'zapot2.gif', 'femeen.gif', 'musr10.gif','candle4.gif','zushhp.gif','fesureno.gif');
	var x = 0;
	for (x = 0; x < Imgz.length; x++) {
		DI = DI + "<div style=\"width: 40px; height: 40px; float: left; padding: 1px; margin: 1px;" + (selx == Imgz[x] ? "background-color: gold;" : "") + "\" onclick=\"setimage('" + Imgz[x] + "');\" onmouseover='DC2(this)' onmouseout='DC1(this)'><img width=40 height=40 src=\"" + IPath + Imgz[x] + "\"></div>"
	}		
	return DI;
}

function setimage(newimg) {
	getObj('LootItemPicture').value = newimg;
}

function DC1(stuff) {
stuff.style.cursor = '';
stuff.style.backgroundColor='';
}

function DC2(stuff) {
stuff.style.cursor = 'pointer';
stuff.style.backgroundColor=BGCOLOR_S;
}