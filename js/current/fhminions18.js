var Infos = new Array();
var IC = 0;
var InventoryItemID = InventoryItemID;
var CharsAt = CharsAt;
var H = H;
var PageNo = PageNo;
var BuildingID = BuildingID;
var Shop = 0;
var IPath = window.top.FHIPR;
var OPath = window.top.FHIPO;
var Processing = 0;
var LastV = -1;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function tgl(ShopNum) {
if (getObj('Shop' + ShopNum).innerHTML == '') {
	DS(ShopNum);
} else {
	getObj('Shop' + ShopNum).innerHTML = '';
}
}

function DS(ShopNum) {
var strout = '';
var y = 0;
for (y = 0; y < IC; y++) {
	if (Infos[y].shop == ShopNum) {
		strout = strout + GetRow(y)
	}
}
getObj('Shop' + ShopNum).innerHTML = '<table id=Min' + ShopNum + ' cellspacing=0 cellpadding=1 width="100%" class=\'weakercell\'>' + strout + '</table>';
}

function AH(ShopC, SkillGroup) {
document.write("<tr><td colspan=3 style=\"" + strButtonx + "\" " + strClicksns + " onclick=\"tgl(" + ShopC + ")\" id=Head" + ShopC + ">" + SkillGroup + "</td></tr><tr><td colspan=2 id=Shop" + ShopC + "></td></tr>");
}


function AM(z, v, o, l, m, f, t, n, s, r, e,Named, Picture, g, cp, x2, tok, taunt, care) {
var Color = 'green';
if (f != 0) {Color = 'orange'}
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, z, v, o, l, m, f, t, n, s, r, e,Named, Picture, g, cp, x2, tok, taunt, care);
IC = IC + 1;
}

function newInfo(Color, z, v, o, l, m, f, t, n, s, r, e,Named, Picture, g, cp, x2, tok, taunt, care) {
this.c = Color;
this.tok = tok
this.p = Picture;
this.shop = Shop;
this.i = Named;
this.x2 = x2;
this.taunt = taunt;
this.cp = cp;
this.z = z;
this.g = g;
this.v = v;
this.o = o;
this.l = l;
this.m = m;
this.t = t;
this.f = f;
this.n = n;
this.s = s;
this.r = r;
this.e = e;
this.care = care;
}

function GetRow(v) {
return '<tr id="I' + v + '" onmouseover="PC(' + v + ')" onmouseout="RC(' + v + ')" onclick="DC(' + v + ')"><td><img width=15 height=15 src="' + IPath + (Infos[v].p == '' || Infos[v].p == '0' ? 'na.gif' : Infos[v].p) + '"></td><td width="300" style="color: ' + Infos[v].c + '; padding-left: 5px;">' + Infos[v].i + '</td><td>' + Infos[v].l + '</td><td width=16>' + (Infos[v].taunt != 0 ? '<img src="' + OPath + 'transmit.png' + '" title="Taunting enabled">' : '') + '</td><td width=16>' + (Infos[v].cp == 1 ? '<img src="' + OPath + 'attack.png' + '" title="Combat pet">' : '') + '</td><td width=16>' + (Infos[v].f == 1 ? '<img src="' + OPath + 'flag_yellow.png' + '" title="Following you">' : '') + '</td></tr>';
}


function GoP(PageNo) {
window.location.replace('?H=' + H + '&CharsAt=' + CharsAt + '&P=' + PageNo);
}

function GS(how, stuff) {
//stuff2.disabled = true;
if (Processing == 0) {
	Processing = 1;
	window.location.replace('fhminions.asp?H=' + H + '&P=' + PageNo + '&Type=' + how + '&CharsAt=' + stuff + '');
}
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + Infos[v].p,Infos[v].i + '<Br>Level: ' + Infos[v].l);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function DC(v) {
LastV = v;
getObj('Stuff2').innerHTML = '<b>' + Infos[v].i + '</b>' + (Infos[v].cp == 1 ? '<br>Combat Pet' + (Infos[v].taunt != 0 ? ' - Taunting' : '') : '<br>Non Combat Pet') + (Infos[v].f ==1 ? '<br>Following You' : '<br>Location: '+ Infos[v].s + ' ' + GetRealm(Infos[v].g)) + '<br>Race: ' + Infos[v].r + '<br>Profession: ' + Infos[v].n + '<br>Level: ' + Infos[v].l + '<br>Experience: ' + Infos[v].e + '/' + Infos[v].x2 + (Infos[v].z == 1 ? '<br>Being Ridden/Mount' : (Infos[v].t ==1 ? '<br>Invisible/Hidden' : '')) + (Infos[v].n.indexOf('Vendor') != -1 ? '<br>Use Move Shopkeep function to Move Pet' : '');
getObj('Pic').innerHTML = '<img src=\'' + IPath + Infos[v].p + '\'>';
getObj('Buttons').innerHTML = '' + (Math.abs(Infos[v].e) >= Math.abs(Infos[v].x2) && (Math.abs(Infos[v].l) <= 999) ? '<' + strClicky + ' onclick="GS(8, ' + Infos[v].v + ')" style=\'width: 85\'>Level</button>' : '') + '<' + strClicky + ' onclick="window.location.replace(\'fhstat2.asp?CharsAt=' + Infos[v].v + '\');" style=\'width: 85\'>Info</button><' + strClicky + ' onclick="prompt(\'Please enter the new name for ' + Infos[v].i + '\', 2,\'' + Infos[v].i + '\', \'Rename Pet\',\'r/' + Infos[v].p + '\');" style=\'width: 85\'>Rename</button>' + (Infos[v].z == 1 ? '<' + strClicky2 + ' onclick="GS(6, ' + Infos[v].v + ')" style=\'width: 85\'>Dismount</button>' : (Infos[v].n.indexOf('Vendor') == -1 ? '<' + strClicky2 + ' onclick="GS(' + (Infos[v].cp == 0 ? '50' : '51') + ', ' + Infos[v].v + ')" style=\'width: 85\'>' + (Infos[v].cp == 0 ? 'Combat On' : 'Combat off') + '</button><' + strClicky2 + ' onclick="GS(' + (Infos[v].taunt == 0 ? '60' : '61') + ', ' + Infos[v].v + ')" style=\'width: 85\'>' + (Infos[v].taunt == 0 ? 'Taunting On' : 'Taunting off') + '</button><' + strClicky + ' onclick="window.location.replace(\'fhmop.asp?CharsAt=' + Infos[v].v + '\');" style=\'width: 85\'>Options</button>' + (Infos[v].care == 0 ? '<' + strClicky + ' onclick="window.location.replace(\'fhcare.asp?CharsAt=' + Infos[v].v + '\');" style=\'width: 85\'>Care</button>' : '') + '<' + strClicky2 + ' onclick="GS(' + (Infos[v].care != 0 ? '70' : '71') + ', ' + Infos[v].v + ')" style=\'width: 85\'>' + (Infos[v].care != 0 ? 'Care On' : 'Care off') + '</button><' + strClicky3 + ' onclick="GS(' + (Infos[v].f == 0 ? '2' : '' + (Infos[v].n.indexOf('Vendor') != -1 ? '5' : '3')) + ', ' + Infos[v].v + ')" style=\'width: 85\'>' + (Infos[v].f == 0 ? 'Start Following' : 'Stop Following') + '</button>' : '') + '<' + strClicky + ' onclick="confirm(\'Dismissing this pet will delete it, all its possessions will also be deleted, are you sure you wish to continue ?\', 1);" style=\'width: 85\'>Dismiss</button><' + strClicky2 + ' onclick="window.location.replace(\'fhrt.asp?CharsAt=' + Infos[v].v + '\');this.disabled=true;" style=\'width: 85\'>Take Items</button><' + strClicky + ' onclick="window.location.replace(\'fhvalue.asp?ItemTypeID=1&InventoryItemID=1&CharsAt=' + Infos[v].v + '\');this.disabled=true;" style=\'width: 85\'>Price</button>' + (Infos[v].tok == 1 ? '<' + strClicky1 + ' onclick="window.location.replace(\'fhtrade.asp?CharsAt=' + Infos[v].v + '\');this.disabled=true;" style=\'width: 85\'>Trade</button>' : '') + '<' + strClicky2 + ' onclick="window.location.replace(\'fhresp2.asp?CharsAt=' + Infos[v].v + '\');this.disabled=true;" style=\'width: 85\'>Responses</button><br>Control:<br><' + strClicky + ' onclick="window.location.replace(\'fhequip.asp?CharsAt=' + Infos[v].v + '\');this.disabled=true;" style=\'width: 85\'>Equip</button><' + strClicky2 + ' onclick="window.location.replace(\'fhpetspells.asp?CharsAt=' + Infos[v].v + '\');this.disabled=true;" style=\'width: 85\'>Spells</button><' + strClicky2 + ' onclick="window.location.replace(\'fhpetspellsa.asp?CharsAt=' + Infos[v].v + '\');this.disabled=true;" style=\'width: 85\'>Active</button><' + strClicky2 + ' onclick="window.location.replace(\'fhstyles.asp?Pet=' + Infos[v].v + '\');this.disabled=true;" style=\'width: 85\'>Styles</button>' + (Infos[v].o != 0 ? '<' + strClicky2 + ' onclick="window.location.replace(\'fhinv.asp?InventoryItemID=1&ItemType=1&CharsAt=' + Infos[v].v + '\');this.disabled=true;" style=\'width: 85\'>Inventory</button><' + strClicky2 + ' onclick="window.location.replace(\'fhcraft.asp?CharsAt=' + Infos[v].v + '\');this.disabled=true;" style=\'width: 85\'>Pet Craft</button><' + strClicky2 + ' onclick="window.location.replace(\'fhqueue.asp?CharsAt=' + Infos[v].v + '\');this.disabled=true;" style=\'width: 85\'>Queue</button>' : '') + '<' + strClicky3 + ' onclick="GS(10, ' + Infos[v].v + ')" style=\'width: 85\'>Empty Trade Bag</button><' + strClicky3 + ' onclick="window.location.replace(\'fhstat2.asp?P=11&CharsAt=' + Infos[v].v + '\');" style=\'width: 85\'>Gather/Craft</button>' + '' + (Infos[v].n.indexOf('Vendor') != -1 ? '<br>Vendor Type:<br><' + strClicky + ' onclick="GS(11, ' + Infos[v].v + ')" style=\'width: 85\'>Normal</button><' + strClicky + ' onclick="GS(20, ' + Infos[v].v + ')" style=\'width: 85\'>Other</button>' : '<' + strClicky + ' onclick="window.location.replace(\'fhskill.asp?T=AA&CharsAt=' + Infos[v].v + '\');this.disabled=true;" style=\'width: 85\'>Skills</button>') + '');
}

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null) {
			if (pb == 1) {
				GS(4, Infos[LastV].v);
			} else if (pb == 2) {
				window.top.Interface.location.replace('fhminions.asp?H=' + H + '&P=' + PageNo + '&CharsAt=' + Infos[LastV].v + '&Type=1&NewName=' + returnVal);
			}
		}
	}
}
