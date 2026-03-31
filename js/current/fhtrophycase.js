var CDN_RESOURCES_URL = new URL(document.currentScript.src).origin;
var CharsAt = CharsAt;
var PageNo = PageNo;
var IPath = window.top.FHIPI;
var Processing = 0;
var TC = 0;
var Infos = new Array();
document.write(`<script src="${CDN_RESOURCES_URL}/js/current/formatting.js" language="JavaScript"></script>`);


function AvC(tid, tin, tip, tpc, tag) {
	var Color = LITE;
	if (Infos[TC] == null) {
		Infos[TC] = new Array();
	}
	Infos[TC] = new newInfo(Color, tid, tin, tip, tpc, tag);
	if (tpc == 0) {
		Color = '#660000';
	} else {
		Color = '#006600';
	}
	document.write(`<div id="T${TC}" onmouseover="PC(${TC});" onclick="DC(${TC})"  onmouseout="RC(this)" style="float: left; width: 50px; height: 50px; padding: 3px; margin: 1px; border: 1px dotted ${Color}; background-color: ${Color};" align=center><img src="${CDN_RESOURCES_URL}/game/i/${tip}" width=40 height=40></div>`);
	TC = TC + 1;
}

function newInfo(Color, tid, tin, tip, tpc, tag) {
	this.c = Color;
	this.tid = tid;
	this.tin = tin;
	this.tip = tip;
	this.tpc = tpc;
	this.tag = tag;
}

function RC(stuff) {
	stuff.style.cursor = '';
}

function PC(v) {
	window.top.InfoTip(`${CDN_RESOURCES_URL}/game/i/${Infos[v].tip}`, `<b>${Infos[v].tin}</b>` + (Infos[v].tpc == 0 ? '<br>Missing piece' : '') + '<br>' + Infos[v].tag);
	getObj('T' + v).style.cursor = 'pointer';
}

function DC(v) {
	window.top.loadwindow2('imi.asp?Test=' + Infos[v].tid + '&Bonus=0&Material=', 300, 300, 'iwindow', Infos[v].tin);
}