var MC = 0;
var Markers = new Array();
var PageNo = PageNo;
var IPath = window.top.FHIPB;
var Processing = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');


function GoP(PageNo) {
window.location.replace('?P=' + PageNo);
}

function AC(v, Color, Named, dd, ds, npc, PictureID, y) {
if (PictureID == '0') {PictureID = ''}
if (Markers[MC] == null) {
	Markers[MC] = new Array();
}
Markers[MC] = new newInfo(v, Color, Named, dd, ds, npc, PictureID, y);

// v=' + v + ' i="' + Named + '" dd="' + dd + '" ds=' + ds + ' n=' + npc + ' p="' + (PictureID == '' ? 'na.gif' : PictureID) + '"
document.write('<tr width="150" id="M' + MC + '" onclick="DC(' + MC + ')" onmouseover="PC(' + MC + ')" onmouseout="RC(' + MC + ')" style="color: ' +  Color + '; padding-left: 5px"><td width=40><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=40 height=40></td><td width=\'100%\'><b>' + Named + '</b><br>' + (dd != '' ? 'Discovered: ' + dd : 'Skill: ' + ds) + '</td></tr>');
MC = MC + 1;
}


function newInfo(v, Color, Named, dd, ds, npc, PictureID, y) {
this.c = Color;
this.p = PictureID;
this.v = v;
this.i = Named;
this.dd = dd;
this.ds = ds;
this.n = npc;
this.y = y;
}

function DC(v) {
	getObj('Stuff2').innerHTML = Tips(v)
	getObj('Pic').innerHTML = '<img src=\'' + IPath + Markers[v].p + '\'>'
	getObj('Buttons').innerHTML = '' + (Processing == 0 && Markers[v].dd == '' ? '<' + strClicky3 + ' onclick="if (Processing == 0) {this.disabled = true; Processing = 1; window.location.replace(\'?CharsAt=-' + Markers[v].v +'\')};" style=\'width: 85\'>Discover</button>' :'') + (Markers[v].y != 0 ? '<' + strClicky3 + ' onclick="if (Processing == 0) {this.disabled = true; Processing = 1;window.top.HideInterface(); window.top.Ninja.location.replace(\'fh.asp?Redraw=1&BuildingID=' + Markers[v].v +'\')};" style=\'width: 85\'>Enter</button>' : '');
}

function RC(v) {
	getObj('M' + v).style.cursor = '';
	getObj('M' + v).style.backgroundColor='';
}

function Tips(v) {
	return '<b>' + Markers[v].i + '</b><br>' + (Markers[v].dd == '' ? 'Not yet explored' : '' + Markers[v].dd) + '<br>Skill: ' + Markers[v].ds
}

function PC(v) {
	window.top.InfoTip('' + IPath + Markers[v].p, '' + Tips(v));
	getObj('M' + v).style.cursor = 'pointer';
	getObj('M' + v).style.backgroundColor=BGCOLOR_S
}
