var Skill = Skill;
var Special = Special;
var CharsAt = CharsAt;
var IPath = window.top.FHIPI;
var OPath = window.top.FHIPO;
var IC = 0;
var BTID = BTID;
var Infos = new Array();
var Processing = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(pq, IID, PictureID, Itty, aq, l, rs) {
	var Color = LITE;
	if (pq > 0) {
		Color = 'gold';
		IID = -IID;
	} else if (aq == 0) {
		Color = '#ff6666';
	} else {
		if (aq > 0 && aq > Skill && (Special > 10 && BTID != 248)) {
			Color = '#ff6666';
		} else {
			Color = '#66ff66';
		}
	}
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Color, pq, IID, PictureID, Itty, aq, l, rs);
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td width="100%" c="' + Color + '" style="color: ' + Color + '; padding-left: 5px">' + Itty + '</td><td width=20>' + (rs > 0 ? '**' : '') + '</td><td width=15>' + (IID == -1797 && Special > 10 && pq > 0 ? '<img src="' + OPath + 'cog.png" style="cursor: pointer" title="Edit Trap" onclick="window.location.replace(\'fhdtrape.asp?CharsAt=' + CharsAt + '\');">' : '<img src="' + OPath + 'magnifier.png" style="cursor: pointer" title="View Item Info" onclick="PopupItemInfo(' + -IID + ',\'' + Itty + '\');">') + '</td></tr>');
	IC = IC + 1;
}

function newInfo(Color, pq, IID, PictureID, Itty, aq, l, rs) {
	this.c = Color;
	this.l = l;
	this.p = PictureID;
	this.i = Itty;
	this.rs = rs;
	this.pq = pq;
	this.q = aq;
	this.v = IID;
}

function Tipz(v) {
	var q = Math.round(Infos[v].q)
	window.top.InfoTip(IPath + (Infos[v].p == null ? 'na.gif' : Infos[v].p), '<b>' + Infos[v].i + '</b><br>Level:' + Infos[v].l + (Special <= 10 ? '<br>Held Quantity: ' + q : '') + '<br>Placed Quantity: ' + Infos[v].pq + '' + (Infos[v].v > 0 ? '<br>' + (Special <= 10 ? (Infos[v].q > 0 ? 'Use the Place button to add this item to the room.' : 'You do not have any such items in your Inventory to place.') : 'DM SKill Needed: <b>' + q + '</b>') : (Infos[v].v < 0 ? (Infos[v].rs == 0 ? '<br>Destroy this item using the Destroy button.' : '<br>Remove this item using the Remove button, check Inventory > Trade Bag.') : '')));
}

function DC(v) {

	var q = Math.round(Infos[v].q)
	getObj('Buttons').innerHTML = (((q <= Skill && q >= 0 && (Special > 10 && BTID != 248)) || q > 0 && (Special <= 10 || BTID == 248)) || Infos[v].v < 0 ? Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'?CharsAt=' + CharsAt + '&l=' + Infos[v].l + '&Special=' + Special + '&Type=' + Infos[v].v + '\');}', (Infos[v].v > 0 ? 'Place' : (Infos[v].rs == 0 ? 'Destroy' : 'Remove')), (Infos[v].v > 0 ? 'Place' : (Infos[v].rs == 0 ? 'Destroy' : 'Remove'))) : '');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	Tipz(v);
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}
