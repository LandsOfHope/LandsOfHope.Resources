var Processing = 0;
var CharsAt = CharsAt;
var PageNo = PageNo;
var Crimes = Crimes;
var IPath = window.top.FHIPR;
var BountyLimit = BountyLimit;
var IC = 0;
var LastV = -1;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AM(v, PictureID, l2, b, Named) {
var Color = '#66ff66';
if (b >= BountyLimit) {Color = '#ff6666';}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, v, PictureID, l2, b, Named);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" ><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="300" style="color: ' + Color + '; padding-left: 5px;">' + Named + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, v, PictureID, l2, b, Named) {
this.c = Color;
this.z = v;
this.p = PictureID;
this.t = Named;
this.l2 = l2;
this.v = b;
}

function AMW(Named, PictureID, b, cc) {
var Color = '#66ff66';
document.write('<tr width="250"><td width="315" style="color: ' + Color + '; padding-left: 5px;"><table class=itemtext><tr><td><img src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td>' + Named + '<br>Current Bounty: ' + window.top.BSGM(b) + '<br><i>Wanted for ' + cc + ' crimes against Myzans !</i></td></tr><tr><td colspan=2>' + Adr('if (Processing ==0) {confirm(\'Turn yourself in and spend 30minutes in jail and lose your ' + window.top.BSGM2(b)  + ' bounty?\', -5)}','Surrender','Surrender') + '</td></tr></table></td></tr>');
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && Processing == 0) {
			if (pb == -5) {
				Processing = 1;
				window.top.Interface.location.replace('fhsa.asp?CharsAt=' + CharsAt + '&Arrest=1');
			} else {
				Processing = 1;
				window.top.Interface.location.replace('fhsa.asp?Type=' + LastV + '&P=' + PageNo + '&CharsAt=' + CharsAt + '&ItemID=' +  Infos[pb].z + '');
			}
		}
	}
}

function DC(v) {
	getObj('Stuff2').innerHTML = '<b>' + Infos[v].t + '</b><br>Level: ' + Infos[v].l2 + '<br>Current Bounty: ' + window.top.BSGM(Infos[v].v) + '' + (Infos[v].v < BountyLimit ? '<br>Limit: <font id=tgreen>' + window.top.BSGM(BountyLimit) + '</font>' : '<br>Limit: <font id=tred>' + window.top.BSGM(BountyLimit) + '<br>This NPC can not set a bounty higher than there limit, find another Bounty Master.</font>' ) + '' + (Crimes <= 0 ? '<br>Rate: 2bp = +1bp to Bounty' : '<br>Rate: 10bp = +1bp to Bounty');
	getObj('Pic').innerHTML = '<img src=\'' + IPath + Infos[v].p + '\'>';
	var x = 0;
	var y = 0;
	var varvar = 1;
	var strwhat = '';

	if (Infos[v].v < BountyLimit) {

		for (x = 1; x <= 15; x++) {
			y = Math.floor(((BountyLimit - Infos[v].v) / 100) * (x * 5))
			varvar = varvar + 1
			strwhat += "<div style=\"float: left; width:115px; height: 15px; padding: 1px; margin: 1px;\" " + strClicks + " onclick=\"DC3(" + v + ", " + y + ")\">" + window.top.BSGM3(y) + "</div>";        
		}
		getObj('Buttons').innerHTML = '<table width="100%" cellpadding=0 cellspacing=0><tr><td><div style=\'height: 170; overflow: auto; width: 300\'>' + strwhat + '</div></td><td id=New></td></tr></table>';
	}
	else {
		getObj('Buttons').innerHTML = ''
	}

}

function DC3(v, inwhat) {
	if (Processing == 0) {
		LastV = inwhat;
		confirm('Are you sure you wish to increase this persons bounty by ' + window.top.BSGM2(inwhat) + ', this will cost ' + window.top.BSGM2(Math.floor(inwhat * (Crimes > 0 ? 10 : 2))) +'?', v);
	}
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Infos[v].t);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function GoP(PageNo) {
window.location.replace('?CharsAt=' + CharsAt + '&P=' + PageNo);
}
