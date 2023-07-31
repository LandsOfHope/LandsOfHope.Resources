var CharsAt = CharsAt;
var SkillID = SkillID;
var SV = SV;
var PageNo = PageNo;
var Mat = Mat;
var DefaultShop = 0;
var ML = 0;
var Shop = 0;
var SkillName = '';
var IPath = window.top.FHIPI;
var Plans = new Array();
var PC = 0;
var LastPlan = -1;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function tgl(ShopNum) {
if (getObj('Shop' + ShopNum).innerHTML == '') {
	DrawShop(ShopNum);
}
else
{
	getObj('Shop' + ShopNum).innerHTML = '';
}
}


function Anop(sk) {
	getObj('Stuff2').innerHTML = '<b>No ' + sk + ' Plans</b><br>Either you do not know any Plans for this skill OR you do not have enough skill to use the plans you do know.<Br><br>You should seek out a plan trainer to try to learn more plans.';

}

function Anop2(sk, sk2) {
	getObj('Stuff2').innerHTML = '<b>No Skill</b><br>To be able to use this screen you must have ' + sk + ' skill, and have learnt some Plans for this crafting skill.<Br><br>You should seek out a trainer to teach you this skill.<br><br>' + sk2;
}

function Anop3(sk) {
	getObj('Stuff2').innerHTML = '<b>No Readied ' + sk + ' Plans</b><br>Either you have not readied any Plans for this skill OR you do not have enough skill to use the plans you do know.<Br><br>Click the All button at the bottom of the screen to view all plans again.';

}

function DrawShop(ShopNum) {
var strout = '';
var y = 0;
for (y = 0; y < Plans.length; y++) {
	if (Plans[y].category == ShopNum) {
		strout = strout + '<tr width="250" id="P' + y + '" style="color:'+ Plans[y].c + (Plans[y].rp!= 0 ? '; font-weight: bold' : '') +'" onclick="DC(' + y + ')" onmouseover="PCP(' + y + ')" onmouseout="RC(this)"><td><img src=\'' + IPath + Plans[y].p + '\' width=15 height=15></td><td width="300" style="padding-left: 5px">' + Plans[y].i + (Plans[y].q > 1 ? ' * ' + Plans[y].q : '') + '</td><td>' + Plans[y].r2 + '</td><td width=20>' + (Plans[y].rp != 0 ? 'R' : '') + '' + (Plans[y].porp == 0 ? 'P' : '') + '' + (Plans[y].ivi != 0 ? 'V' : '') + '</td></tr>';
	}
}
getObj('Shop' + ShopNum).innerHTML = '<table width="100%" class=\'itemText\' cellpadding=1 cellspacing=0>' + strout + '</table>';
}

function GoP(PageNo) {
window.location.replace('?SkillID=' + SkillID + '&P=' + PageNo + '&CharsAt=' + CharsAt);
}


function newPlan(Color, MIID, MID, Picture, Named, Other, q, q2, rp, tid, porp, ivi) {
this.c = Color;
this.v = MIID;
this.value = MID;
this.p = (Picture == '' ? 'na.gif' : Picture);
this.tid = tid;
this.porp = porp;
this.i = Named;
this.ivi = ivi;
this.rp = rp;
this.q2 = q2;
this.q = q;
this.r = 1;
this.t2 = 1;
this.r2 = Other;
this.s = SkillName;
this.category = Shop;
}

function AM(Color, MIID, MID, Picture, Named, Other, q, q2, rp, tid, porp, ivi) {
if (Plans[PC] == null) {
	Plans[PC] = new Array();
}
Plans[PC] = new newPlan(Color, MIID, MID, Picture, Named, Other, q, q2, rp, tid, porp, ivi);
PC = PC + 1;
}

function ColumnHeaders() {
document.write('<tr class=\'boldcell\'><td></td><td>' + CH('Plan Name', 'MakeName') + '</td><td>' + CH('Skill', 'SkillValue') + '</td></tr>');
}

function AH(ShopC, SkillGroup) {
document.write((SkillGroup != SkillName ? "<tr><td colspan=3 style=\"" + strButtonx + "\" " + strClicksns + " onclick=\"tgl(" + ShopC + ")\">" + SkillGroup + "</td></tr>" : "") + "<tr><td colspan=2 id=Shop" + ShopC + "></td></tr>");
}

function CH(strdisplay, ob1) {
	return '<a href="?SkillID=' + SkillID + '&CharsAt=' + CharsAt + '&CO=' + ob1 + '">' + strdisplay + '</a>';
}

function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor='';
}

function DDC(valin) {
	window.frames['ResultsOfit'].location.replace('fhmake3.asp?ItemID=' + valin + '&ML=' + ML + '&CharsAt=' + CharsAt);
}


function DDC2(valin) {
	LastPlan = valin;
	prompt('Please enter the level of resource you wish to use for making this item (limit ' + Math.floor(SV / 5) + '):', 1, ML)
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null && pb != null)	 {
		if (pb == 1) {
			ML = returnVal;
			if (ML != null) {
				if (ML > Math.floor(SV / 5)) {
					ML = Math.floor(SV / 5);
				}
				DDC(LastPlan);
			}
		} else {
			window.top.Interface.location.replace('fhmake2.asp?SkillID=' + SkillID + '&P=' + PageNo + '&CharsAt=' + CharsAt + '&Type5=' + Plans[LastPlan].value);
		}

	}
}

function ForgetPlan(v) {
	LastPlan = v;
	confirm('Are you sure you wish to forget how to craft ' + Plans[v].i  + '?', 2, 0)

}

function LinkTo(v) {
	window.top.sendRequest('fhlink.asp?Type=K&CharsAt=' + Plans[v].value + '&Name=' + Plans[v].i + '&l1=i&l2=' + (Plans[v].p == '' ? 'na.gif' : Plans[v].p) + '&o=' + SkillID + '&c=' + encodeURIComponent(Plans[v].c));
}

function DC(v) {
var ppw = 300;
var pph = 300;
if (Plans[v].v == 1070) {
	ppw = 615;
	pph = 300;
}
getObj('Stuff2').innerHTML = '<b>' + Plans[v].i + '</b><br>Skill:' + Plans[v].s + '<br>Current Value: ' + SV + '<br>Plan Skill Value: ' + Plans[v].r2 + '<br>Rarity: ' + Plans[v].q2 + '<br>Quantity: ' + Plans[v].q + '' + (Plans[v].ivi != 0 ? '<br><b>Uncharted Waters Item</b>' : '')
getObj('Buttons').innerHTML = '<' + strClicky1 + ' onclick="window.parent.loadwindow2(\'' + (Plans[v].ivi != 0 ? 'imiv.asp?Test=' + Plans[v].v : (Plans[v].v != 1070 && Plans[v].v != 1936 ? 'im3.asp?Test=' + Plans[v].v : (Plans[v].v == 1936 ? 'bz2.asp?A=-2&CharsAt=-' + Plans[v].tid : 'bz.asp?A=-1&CharsAt=' + Plans[v].tid))) + '&Bonus=0&Material=' + Mat + '\',' + ppw + ',' + pph + ',\'iwindow\',\'' + Plans[v].i + '\');">Info</button><' + strClicky + ' onclick="LinkTo(' + v + ');">Link</button><' + strClicky3 + ' onclick="DDC2(' + Plans[v].value + ')">Ingredient Level</button>' + (Plans[v].rp != 0 ? '<' + strClicky + ' onclick="window.location.replace(\'?SkillID=' + SkillID + '&P=' + PageNo + '&CharsAt=' + CharsAt + '&Type=-' + Plans[v].value + '\');">Unready</button>' : '<' + strClicky + ' onclick="window.location.replace(\'?SkillID=' + SkillID + '&P=' + PageNo + '&CharsAt=' + CharsAt + '&Type=' + Plans[v].value + '\');">Ready</button>') + (Plans[v].porp != 0 ? '<' + strClicky + ' onclick="window.location.replace(\'?SkillID=' + SkillID + '&P=' + PageNo + '&CharsAt=' + CharsAt + '&Type3=-' + Plans[v].value + '\');">Private</button>' : '<' + strClicky + ' onclick="window.location.replace(\'?SkillID=' + SkillID + '&P=' + PageNo + '&CharsAt=' + CharsAt + '&Type3=' + Plans[v].value + '\');">Public</button>') + '<' + strClicky + ' onclick="javascript:ForgetPlan(' + v + ')">Forget</button>';
getObj('Pic').innerHTML = '<img src=\'' + IPath + (Plans[v].p == '' ? 'na.gif' : Plans[v].p) + '\'>';
getObj('Req').innerHTML = '';
DDC(Plans[v].value);
}

function PCP(v) {
window.top.InfoTip('' + IPath + (Plans[v].p == '' ? 'na.gif' : Plans[v].p), '' + Mat + '' + ' ' + Plans[v].i + '<br><b>' + Plans[v].s + '</b><br>Value: ' + Plans[v].r2 + (Plans[v].rp != 0 ? '<br>Readied' : '') + (Plans[v].porp == 0 ? '<br>Private' : ''));
getObj('P' + v).style.cursor = 'pointer';
getObj('P' + v).style.backgroundColor=BGCOLOR_S
}
