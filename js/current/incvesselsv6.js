var SH = 1;
var CUF = CUF;
var ALG = ALG;
var MH = 1;
var SR = SR;
var FHIP = FHIP;
var FHIPI = FHIP + 'i/';
var FHIPO = FHIPO;
var FHIPM = FHIP + 'm/';
var FHIPB = FHIP + 'b/';
var FHIPV = FHIP + 'v/';
var FHIPR = FHIP + 'r/';
var FHIPP = FHIPP;
var LastVessel = '';
var VC = 0;
var LastSelectedVessel = -1;
var Vessels = new Array();

function VO(v) {
	getObj('V' + v).style.cursor = '';
	getObj('V' + v).style.backgroundColor='';
}

function V(v) {
	if (Vessels[v].vd == 0) {
		window.top.DoingStuff = 1;
		if (Vessels[v].nnpc == 1) {
			PF(Vessels[v].vid,263)
		} else 	{
			if ((Vessels[v].a == CUF && CUF != 0) || Vessels[v].vcid > 0) {
				PF(Vessels[v].vcid,101)
			} else {
				PF(Vessels[v].vid,256)
			}
		}
	} else {
		//Target is dead
	}

}

function VV(v) {
if (window.top.DoingStuff == 0) {
	LastSelectedVessel = v;
	getObj('V' + v).style.cursor = 'pointer';
	getObj('V' + v).style.backgroundColor=BGCOLOR_S
	var ccol = Vessels[v].c;
	getObj('Buttons').align='left';
	var isNPC = (Vessels[v].vcid <= 0 ? 1 : 0);
	var strBasic = '<table height="93px" cellpadding=0 cellspacing=0 class="itemtext"><tr><td style="color: ' + ccol + '"><b>' + Vessels[v].i + '</b></td></tr>'
	strBasic = strBasic + '<tr><td>' + (Vessels[v].nnpc == 1 ? 'Your Fleet' : (Vessels[v].a == CUF && CUF != 0 ? 'Ally' : 'Enemy')) + ' Vessel'

	LastVessel = Vessels[v].i;
	var strGM =  '' + (Math.abs(SR) == 20 ? '<br>' + Adir('PF(' + Vessels[v].vid + ', 262)','GM ' + LastVessel + '','star','Edit') : '');
	var strother = '<tr height="100%"><td></td></tr><tr><td></td></tr></table>'
	window.top.InfoTip(FHIPV + Vessels[v].p2, '<font color="' + ccol + '"><b>' + Vessels[v].i + '</b></font><br>Click on the vessel to initiate its default action, or use the Action buttons to trigger a specific one.' + (isNPC != 0 ? '' : '') )

	getObj('Info').innerHTML = strBasic +  (isNPC == 1 ? ' NPC' : ' PC') + (Vessels[v].vd != 0 ? ' Disabled' : '') + '</td></tr>' + (Vessels[v].vb > 1 ? '<tr><td>' + window.top.PSGM(Vessels[v].vb) + '</td></tr>' : '') + strother;
	getObj('Buttons').innerHTML = '' + (Vessels[v].vcid != 0 ? Adir('PF(' + Vessels[v].vcid + ',101)','Send Message to ' + LastVessel + '','email','Signal') + Adir('EmotePicker("Select the emote to send to ' + LastVessel + ':",2,null,"Emote ' + LastVessel + '");','Send emote to ' + LastVessel + '','flag_blue','Emote') + (Vessels[v].nnpc == 1 ? Adir('window.location.replace("fhcargo.asp?ItemTypeID=' + Vessels[v].vid + '");','Trade cargo to ' + LastVessel + '','user_go','Trade') : (Vessels[v].a == CUF && CUF != 0 ? Adir('VesselPicker("Select the vessel to trade from:",1, null, "Trade From");','Trade goods to ' + LastVessel + '','user_go','Trade') : '')) : '') + (Vessels[v].nnpc == 1 ? Adir('PF(' + Vessels[v].vid + ',263)','Manage ' + LastVessel + '','briefcase','Manage') : '') + ((Vessels[v].a == CUF && CUF != 0) || Vessels[v].nnpc == 1 || Vessels[v].vcid > 0 ? '' : (Vessels[v].vd == 0 ? Adir('PF(' + Vessels[v].vid + ',256)','Attack ' + LastVessel + '','Attack','Attack') + '<br>' : '')  + '' + (Vessels[v].vd != 0 ? Adir('PF(' + Vessels[v].vid + ',266)','Scupper ' + LastVessel + '','bomb','Scupper') + Adir('PF(' + Vessels[v].vid + ',258)','Plunder ' + LastVessel + '','coins','Plunder') + (Vessels[v].vb > 0 ? Adir('PF(' + Vessels[v].vid + ',260)','Impound ' + LastVessel + '','link','Impound') : '') : Adir('PF(' + Vessels[v].vid + ',259)','Sabotage ' + LastVessel + '','bomb','Sabotage'))) + '<br>' + Adir('PF(' + Vessels[v].vid + ',255)','Inspect ' + LastVessel + '','Info','Inspect') + strGM;
} else {
	getObj('Buttons').innerHTML = '';
}
}


function AFV(a, vid, vpid, vcolor, vcid, vname, vlevel, vdisabled, vw, vb, nnpc, vt, vflag, vflagc, anchor) {

	var Extra = '' + (nnpc == 1 ? 'Your ' + vt : (a == CUF && CUF != 0 ? 'Ally' : 'Enemy') + ' ' + vt) + '<br>' + (vb > 1 ? '' + window.top.PSGM(vb) : '');
	var agc = GetAImg(a);
	var agct = GetAName(a);


	var CharTD = '<td width="40" height="40" style="background-image: url(' + FHIPV + vpid + '); background-Position: left; background-Repeat: no-repeat; ' + (vdisabled != '' ? 'filter:gray' : '') + '">' + (vflag != 't.png' ? '<table><tr height=24><td colspan=2></td></tr><tr><td width=24></td><td width=16 bgcolor=\'' + vflagc + '\'><img src=\'https://res.landsofhope.com/game/flags/' + vflag + '\' width=16 height=16></td></table>' : '<table><tr><td width=40 heigh=40></td></tr></table>') + '</td>'

	var Itty2 = vname.substr(0, 30);

	if (Vessels[VC] == null) {
		Vessels[VC] = new Array();
	}
	Vessels[VC] = new newVessel(a, vid, vpid, vcolor, vcid, vname, vlevel, vdisabled, vw, vb, nnpc, vt, vflag, vflagc, agc, Extra, agct, anchor);
	document.write('<tr id="V' + VC + '" onclick="V(' + VC + ');" onmouseover="VV(' + VC + ');" onmouseout="VO(' + VC + ');">' + CharTD + '<td style="color: ' + vcolor + ';padding: 2px" valign=top><table class="itemText" cellspacing=0 cellpadding=0><tr><td style="color: ' + vcolor + '"><b>' + Itty2 + (anchor != 0 ? ' (A)' : '') +  '</b></td></tr><tr><td>' + Extra + '</td></tr></table></td></tr>');
	VC = VC + 1;
}

function newVessel(a, vid, vpid, vcolor, vcid, vname, vlevel, vdisabled, vw, vb, nnpc, vt, vflag, vflagc, agc, Extra, agct, anchor) {
this.c = vcolor;
this.vflag= vflag;
this.vflagc = vflagc;
this.vt = vt;
this.a = a;
this.vw = vw;
this.nnpc = nnpc;
this.vb = vb;
this.i = vname;
this.vpid = vpid;
this.p2 = vpid;
this.vc = vcolor;
this.vid = vid;
this.vcid = vcid;
this.vl = vlevel;
this.anchor = anchor;
this.vd = vdisabled;
}

function VesselPicker(message, pb, defaultvalue, title, icon, style) {
	if (title == undefined) {
		title = '';
	}
	if (icon == undefined) {
		icon = '';
	}
	if (style == undefined) {
		style = '';
	}
	window.top.showPopWin("vpicker.asp?message=" + message + "&defaultvalue=" + defaultvalue + "&title=" + title + "&icon=" + icon + "&style=" + style, 300, 180, PromptReturn, null, title, pb);
}

function EmotePicker(message, pb, defaultvalue, title, icon, style) {
	if (title == undefined) {
		title = '';
	}
	if (icon == undefined) {
		icon = '';
	}
	if (style == undefined) {
		style = '';
	}
	window.top.showPopWin("vemote.asp?message=" + message + "&defaultvalue=" + defaultvalue + "&title=" + title + "&icon=" + icon + "&style=" + style, 300, 180, PromptReturn, null, title, pb);
}

function PromptReturn(returnVal, pb) {
	var v = LastSelectedVessel;
	if (returnVal != null) {
		if (pb != null) {
			if (pb == 1 && v >= 0) {
				Processing = 1;
				window.location.replace('fhtradev.asp?ItemTypeID=' + returnVal + '&CharsAt=' + Vessels[v].vid);
			} else if (pb == -1) {
				v = LastSelectedCharacter;
				if (v >= 0) {
					Processing = 1;
					window.location.replace('fh.asp?EmoteID=' + returnVal + '&other=' + Chars[v].v);
				}
			} else if (pb == 2 && v >= 0) {
				Processing = 1;
				window.location.replace('fh.asp?o=-' + returnVal + '&other=' + Vessels[v].vid);
			}
		}
	}
}

