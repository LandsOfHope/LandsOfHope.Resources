var PageNo = PageNo;
var ItemID = ItemID;
var Level = Level;
var CharID = CharID;
var IN = IN;
var IP =  window.top.FHIPI + IP;
var IL = IL;
var Processing = 0;
var IPath = window.top.FHIPS;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
window.location.replace('?CharsAt=' + CharID + '&P=' + PageNo + '');
}


function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(Infos[v].p,Infos[v].t);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}

function DC(v) {
var strword = (Math.abs(Infos[v].it) == 0 ? 'Inscription' : 'Poisoning')
if (Processing != 0) {
	alert('Please wait for your first ' + strword + ' to finish before clicking again.');
} else {
	var sv =  Math.round(Infos[v].sv / 5);
	getObj('Pic').innerHTML = "<img src='" + IP + "'>";
	getObj('OK').innerHTML = '<b>' + Infos[v].t + '</b><br>' + IN + '<br>Effect: ' + Infos[v].d + ' ' + Infos[v].mt + ' ' + Infos[v].ef + '<br>' + strword + ': ' + Infos[v].sv + '<Br>Chance: ' + Infos[v].e + '%' + (IL < sv ? '<br>Current Equip Level: ' + IL + '<br>Equip Level (min): ' + (Level < sv ? '<font id=tred>' + sv + '<br>Fitting this Inscription will prevent you from equipping this item until you are the level shown above.' : '<font id=tgreen>' + sv) + '</font>' : '');
	getObj('Buttons').innerHTML = Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt=' + CharID + '&ItemID=' + ItemID + '&XX=' + (Math.abs(Infos[v].it) == 0 ? '0' : '1') + '&L=' + sv + '&InventoryItemID=' + Infos[v].v + '\');}','Apply','Apply');
	}
}

function AD(it, v, Named, PictureID, e, sv, ef, mt, d) {
var Color = LITE;
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(Color, it, v, Named, PictureID, e, sv, ef, mt, d);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na' : PictureID) + '.png"></td><td width="300" style="color: ' + Color + '' + (Level < Math.round(sv / 5) ? '; border: 1px dotted red' : '') + '; padding-left: 5px;">' + Named + '</td><td>' + sv + '</td></tr>');
IC = IC + 1;
}

function newInfo(Color, it, v, Named, PictureID, e, sv, ef, mt, d) {
this.c = Color;
this.it = it;
this.p = (PictureID == '' || PictureID == '0' ? 'na' : PictureID);
this.t = Named;
this.ef = ef;
this.mt = mt;
this.d = d;
this.e = e;
this.sv = sv;
this.v = v;
}