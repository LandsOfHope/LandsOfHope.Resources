var IC = 0;
var Infos = new Array();
var PageNo = PageNo;
var AAE = AAE;
var IPath = window.top.FHIP
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function AVC(value, PictureID, Itty, wd, wp, wl, wl2, wq, ip, fund, wi2, wn2, won) {
	var Color = LITE;
	ip = ip + "/";
	if (fund < wp) {
		Color = '#ff6666';
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, value, PictureID, Itty, wd, wp, wl, wl2, wq, ip, fund, wi2, wn2, won);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + ip + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="215" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td><td width="100">' + (wi2 > 0 ? 'Item' : window.top.BSGM2(wp)) + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, value, PictureID, Itty, wd, wp, wl, wl2, wq, ip, fund, wi2, wn2, won) {
	this.c = Color;
	this.z = value;
	this.p = PictureID;
	this.i = Itty;
	this.wd = wd;
	this.wp = wp;
	this.wl = wl;
	this.wq = wq;
	this.ip = ip;
	this.wi2 = wi2;
	this.wn2 = wn2;
	this.wl2 = wl2;
	this.f = fund;
	this.won = won;
}

function PC(v) {
	window.top.InfoTip('' + IPath + Infos[v].ip + Infos[v].p, '' + Infos[v].i + '');
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}

function DC(v) {
	var f = Math.round(Infos[v].f);
	var wp = Math.round(Infos[v].wp);
	if (Infos[v].wi2 != 0) {
		getObj('Stuff2').innerHTML = '<table class="weakcell" cellpadding=1 cellspacing=0><tr><td colspan=2 style="color:' + Infos[v].c + '"><b>' + Infos[v].i.substr(0, 35) + '</b></td></tr><tr><td>Reward:</td><td>' + Infos[v].wn2 + '</td></tr></table>'
		getObj('Stuff3').innerHTML = '<table class="weakcell" cellpadding=1 cellspacing=0><tr><td><input type=hidden name=CharsAt id=CharsAt value=\'' + Infos[v].z + '\'><input type=hidden id=WantQuantity name=WantQuantity value=\'' + Infos[v].wq + '\'><input type=hidden id=Price name=Price value=\'' + wp + '\'><input type=hidden id=Fund name=Fund value=\'0\'><tr><td colspan=2>Disable Completion Notices:<input type=checkbox value=1 id=Non name=Non ' + (Infos[v].won != 0 ? 'checked' : '') + '></td></tr><tr><td colspan=2>Short Note (255 characters):</td></tr><tr><td colspan=2><input name=WantDetails size=50 id=WantDetails maxlength=255 value=\'' + Infos[v].wd + '\'></td></tr></table>';
	} else {
		getObj('Stuff2').innerHTML = '<table class="weakcell" cellpadding=1 cellspacing=0><tr><td colspan=2 style="color:' + Infos[v].c + '"><b>' + Infos[v].i.substr(0, 35) + '</b></td></tr><tr><td>Price:</td><td>' + window.top.BSGM2(wp) + '</td></tr><tr><td>Fund:</td><td>' + window.top.BSGM2(f) + '</td></tr><tr><td colspan=2>' + (f > wp ? 'Can be completed ' + Math.floor(f / wp) + ' more times' : (f < wp ? 'Can not be completed - Delete this Job' : '')) + '</td></tr><tr><td>Quantity:</td><td>' + Infos[v].wq + '</td></tr><tr><td>Level:</td><td>' + (Infos[v].wl < 0 ? 'Any' : Infos[v].wl + '' + (Infos[v].wl2 > Infos[v].wl && Infos[v].wl2 > 0 ? ' - ' + Infos[v].wl2 : '')) + '</td></tr></table>'
		getObj('Stuff3').innerHTML = '<table class="weakcell" cellpadding=1 cellspacing=0><tr><td><input type=hidden name=CharsAt id=CharsAt value=\'' + Infos[v].z + '\'><input type=hidden id=Price name=Price value=\'' + wp + '\'><input type=hidden id=Fund name=Fund value=\'0\'><tr><td colspan=2>Change Price: </td></tr><tr><td colspan=2>' + FormMoney('Price', wp) + '</td></tr><tr><td colspan=2>Add to Fund: </td></tr><tr><td colspan=2>' + FormMoney('Fund', 0) + '</td></tr><tr><td colspan=2>Disable Completion Notices:<input type=checkbox value=1 id=Non name=Non ' + (Infos[v].won != 0 ? 'checked' : '') + '></td></tr><tr><td colspan=2>Short Note (255 characters):</td></tr><tr><td colspan=2><input name=WantDetails id=WantDetails size=50 maxlength=255 value=\'' + Infos[v].wd + '\'></td></tr><tr><td>Quantity:</td><td><input id=WantQuantity name=WantQuantity value=\'' + Infos[v].wq + '\' size=3 maxlength=3></td></tr></table>';
	}
	getObj('Pic').innerHTML = "<img src='" + IPath + Infos[v].ip + (Infos[v].p == '' ? 'na.gif' : Infos[v].p) + "' width=40 height=40>";
	getObj('Buttons').innerHTML = '' + Adf2('', 'Save', 'Save') + Adr('confirm(\'Are you sure you wish to delete this Job?\', ' + Infos[v].z + ');', 'Delete this Job', 'Delete') + Adr('SendLink2(\'' + (Infos[v].wi2 > 0 ? 'L' : 'J') + '\',' + Infos[v].z + ',\'' + Infos[v].ip + '\',\'' + Infos[v].p + '\',1,\'' + Infos[v].i + ' Job\',\'#CC3399\',0);', 'Link', 'Link');
}


function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			window.top.Interface.location.replace('fhwante.asp?ItemTypeID=1&I=' + pb + '&P=' + PageNo);
		}
	}
}