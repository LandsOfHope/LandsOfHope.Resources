
var IPath = window.top.FHIPB;
var IC = 0;
var Infos = new Array();
var LastV = -1;
var Imgz = new Array('na.gif', 'a1.gif', 'a2.gif', 'a3.gif', 'A4.gif', 'aG.gif', 'AG5.gif', 'AShri.gif', 'aShri2.gif', 'aT1.gif', 'aT2.gif', 'aT3.gif', 'aTree.gif', 'ATree2.gif', 'ATree5.gif', 'Bank.gif', 'Bank2.gif', 'bcas.gif', 'bcav.gif', 'bchur.gif', 'Bchur2.gif', 'Bcol.gif', 'Bcol2.gif', 'Bcol3.gif', 'bcry.gif', 'bcry2.gif', 'bcry3.gif', 'bcry4.gif', 'bdun.gif', 'bdun2.gif', 'bdun3.gif', 'bdun4.gif', 'bdun5.gif', 'bdun6.gif', 'bgar.gif', 'Bgh.gif', 'bgrav.gif', 'bgu.gif', 'Bgu2.gif', 'Bgu3.gif', 'Bgu4.gif', 'bhol.gif', 'Bhol3.gif', 'Bhol4.gif', 'bhou.gif', 'bhou2.gif', 'Bhou3.gif', 'Bhou4.gif', 'bhut.gif', 'Bla.gif', 'Bm1.gif', 'Bm2.gif', 'Bm3.gif', 'Bma.gif', 'Bme.gif', 'Bmin.gif', 'bmine2.gif', 'boh.gif', 'Bpal.gif', 'Bpal2.gif', 'Bpal3.gif', 'bsew.gif', 'bsho.gif', 'bsho2.gif', 'Bshri.gif', 'Bshri2.gif', 'Bstab.gif', 'Bt.gif', 'btav.gif', 'Btem.gif', 'btent.gif', 'btow.gif', 'btwo.gif', 'Bwaf.gif', 'Bwaf2.gif', 'Church3.gif', 'dP.gif', 'dP1.gif', 'dP2.gif', 'DP4.gif', 'DP5.gif', 'DP6.gif', 'foun.gif', 'foun2.gif', 'foun3.gif', 'ge1.gif', 'ge2.gif', 'ge3.gif', 'ge4.gif', 'ge5.gif', 'gh.gif', 'gT.gif', 'gT2.gif', 'gT3.gif', 'gT4.gif', 'hhou.gif', 'hhou2.gif', 'hhou3.gif', 'hhou4.gif', 'hhou5.gif', 'Jail.gif', 'lC.gif', 'lC2.gif', 'lv.gif', 'lv2.gif', 'lv3.gif', 'lv4.gif', 'lv5.gif', 'Lv6.gif', 'M1.gif', 'M2.gif', 'M3.gif', 'M4.gif', 'M5.gif', 'mp.gif', 'mp1.gif', 'mp2.gif', 'Mp4.gif', 'Mp5.gif', 'Mp6.gif', 'Mp7.gif', 'na.gif', 'New1.gif', 'nH.gif', 'nH2.gif', 'nH3.gif', 'nH4.gif', 'nH5.gif', 'nH6.gif', 'nH7.gif', 'NH8.gif', 'or.gif', 'or0.gif', 'or2.gif', 'or3.gif', 'or4.gif', 'pT.gif', 'pT2.gif', 'pT3.gif', 'pT4.gif', 'pT5.gif', 'PT6.gif', 'PT7.gif', 'PT8.gif', 'rf.gif', 'rL.gif', 'rl3.gif', 'rlm.gif', 'rM.gif', 'rM2.gif', 'rMin.gif', 'rMin2.gif', 'Ro.gif', 'rRuin.gif', 'rRuin2.gif', 'rRuin3.gif', 'rRuin4.gif', 'rt.gif', 's1.gif', 's2.gif', 's3.gif', 's4.gif', 'Ss1.gif', 'st.gif', 'st2.gif', 'st3.gif', 'st4.gif', 'wel.gif', 'Wg1.gif', 'wg2.gif', 'wt.gif', 'wt2.gif', 'wt3.gif', 'wt4.gif');


document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(PictureID, Pic2, ItemName, ItemID, Flying, Underwater, CharacterID) {
	if (PictureID == '0') { PictureID = '' }
	var Color = 'white'
	document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" onclick="DC(' + IC + ')" style="color: ' + Color + '; padding-left: 5px;"><td width=15><img src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\' width=15 height=15></td><td width=\'100%\'>' + ItemName + '</td><td width="15">' + (Flying != 0 || Underwater != 0 ? '<img src=\'' + IPath + (Underwater > 0 ? 'water.gif' : (Underwater < 0 ? 'flame.gif' : 'cloud.gif')) + '\' width=15 height=15>' : '') + '</td></tr>');
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo2(Color, PictureID, Pic2, ItemName, ItemID, Flying, Underwater, CharacterID);
	IC = IC + 1;
}

function newInfo2(Color, PictureID, Pic2, ItemName, ItemID, Flying, Underwater, CharacterID) {
	this.c = CharacterID;
	this.p = PictureID;
	this.v = ItemID;
	this.color = Color;
	this.f = Flying;
	this.u = Underwater;
	this.t = ItemName;
}

function DC(v) {
	LastV = v;
	getObj('Stuff2').innerHTML = "<b>" + Infos[v].t + "</b><br><input name=iid type=hidden id=iid value='" + Infos[v].v + "'><input name=u type=hidden id=u value='" + Infos[v].u + "'><input name=f type=hidden id=f value='" + Infos[v].f + "'><input type=hidden name=PIMG id=PIMG value=\'' + (Infos[v].p == null ? '' : '' + Infos[v].p) + '\'><br><b>Image:</b><br>" + DrawImages(Infos[v].p);
	getObj('Butt').innerHTML = Buttons2(Infos[v].f, Infos[v].u);
}

function DrawImages(currentimage) {
	var x = 0;
	var DI = '';
	//style=\"border: 1px solid " + (currentimage == Imgz[x] ? "gold" : "#000000") + "
	for (x = 0; x < Imgz.length; x++) {

		DI = DI + "<div style=\"width: 15px; height: 15px; float: left; padding: 1px; margin: 1px;\" onclick=\"setimage('" + Imgz[x] + "')\" onmouseover='DC2(this)' onmouseout='DC1(this)'><img width=15 height=15 src=\"" + IPath + Imgz[x] + "\"></div>"
	}
	return DI;
}

function setimage(newimg) {
	getObj('PIMG').value = newimg;
}

function DC1(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}

function DC2(stuff) {
	stuff.style.cursor = 'pointer';
	stuff.style.backgroundColor = BGCOLOR_S;
}

function Buttons2(f, u) {
	//"<" + strClicky + " title=\"The Air Survival skill required to enter this building.\" onclick=\"SetFlying()\"><img src='" + IPath + "cloud.gif' width=40 height=40><br>" + f + "</button><" + strClicky + " title=\"The Fire survival skill required to enter this building.\" id=u2 onclick=\"SetFire()\"><img src='" + IPath + "flame.gif' width=40 height=40><br>" + (u < 0 ? Math.abs(u) : 0) + "</button><" + strClicky + " title=\"The Water Survival skill required to enter this building.\" id=u1 onclick=\"SetSwimming()\"><img src='" + IPath + "water.gif' width=40 height=40><br>" + (u > 0 ? Math.abs(u) : 0) + "</button><br>"
	return Adr('getObj(\'editform\').submit();', 'Save', 'Save');
}

function SetSwimming() {
	if (getObj('u').value > 0) {
		getObj('f').value = 0;
		in1 = 0
		getObj('u').value = 0;
	} else {
		getObj('f').value = 0;
		in1 = 5
		getObj('u').value = 5;
	}
	getObj('Butt').innerHTML = Buttons2(0, in1);
}

function SetFire() {
	if (getObj('u').value != 0) {
		in1 = 0
		getObj('f').value = 0;
		getObj('u').value = 0;
	} else {
		getObj('f').value = 0;
		in1 = -5
		getObj('u').value = -5;
	}
	getObj('Butt').innerHTML = Buttons2(0, in1);

}

function SetFlying() {
	if (getObj('f').value > 0) {
		in1 = 0
		getObj('u').value = 0;
		getObj('f').value = 0;
	} else {
		getObj('u').value = 0;
		in1 = 5
		getObj('f').value = 5;
	}
	getObj('Butt').innerHTML = Buttons2(in1, 0);
}

function GoP(PageNo) {
	window.location.replace('?P=' + PageNo + '');
}

function RC(v) {
	getObj('I' + v).style.cursor = '';
	getObj('I' + v).style.backgroundColor = '';
}

function PC(v) {
	window.top.InfoTip('', '' + Infos[v].t + '');
	getObj('I' + v).style.cursor = 'pointer';
	getObj('I' + v).style.backgroundColor = BGCOLOR_S
}
