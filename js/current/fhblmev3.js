
var Skill = Skill;
var IPath = window.top.FHIPB;
var p2 = 'na.gif';
var Countt = 0;
var bp = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(d, ItemName, ItemID, f, u, h, CharacterID, n, bpx) {
var p= 'na.gif';
var Color = 'white'
bp = bpx;
document.write("<input name=u id=u type=hidden value='" + u + "'><input name=h size=5 type=hidden maxlength=5 id=h value='" + h + "'><input name=f type=hidden id=f value='" + f + "'>")
document.write('<tr><td>Name: </td><td><input name=IN id=IN value="' + ItemName + '"></td></tr>');
document.write('<tr><td>Desc: </td></td></tr><tr><td colspan=2><textarea name=d id=d style=\'width: 250px; height: 45px;\'>' + d + '</textarea></td></tr>');
document.write('<tr><td>Marker: </td><td><input type=checkbox name=n ' + (n != 0 ? 'checked' : '') + ' value=1></textarea></td></tr>');
document.write("<tr><td colspan=2>" + FormBoxes(u, f, h) + "</td></tr>");
document.write("<tr><td colspan=2 id=Butt>" + Buttons2() + "</td></tr>");
document.write('<tr><td></td></tr>');
p2 = (p == '' ? 'na.gif' : p);
}

function Buttons2() {
	return Adr('presave();getObj(\'d\').value = tinyMCE.get(\'d\').getContent();getObj(\'editform\').submit()','Save','Save');
}

function presave() {
	if (getObj('cs') != null) {
		var cs = getObj('cs').value;
		var as = getObj('as').value;
		var ws = getObj('ws').value;
		var fs = getObj('fs').value;
		if (cs > Math.abs(Skill)) {
			cs = Math.abs(Skill);
		}
		if (as > Math.abs(Skill)) {
			as = Math.abs(Skill);
		}
		if (ws > Math.abs(Skill)) {
			ws = Math.abs(Skill);
		}
		if (fs > Math.abs(Skill)) {
			fs = Math.abs(Skill);
		}

		if (cs > 0) {
			getObj('f').value = -cs
		} else {
			getObj('f').value = as
		}
		if (fs > 0) {
			getObj('u').value = -fs
		} else {
			getObj('u').value = ws
		}
		getObj('h').value = getObj('h2').value;

	}
}

function FormBoxes(u, f, h) {
	var cs = 0;
	var as = 0;
	var ws = 0;
	var fs = 0;

	if (f < 0) {
		cs = Math.abs(f);
	} else {
		as = Math.abs(f);
	}

	if (u < 0) {
		fs = Math.abs(u);
	} else {
		ws = Math.abs(u);
	}
	return (Skill > 0 && bp > 0 ? "<img src=\"" + window.top.FHIPO + "weather_rain.png\"><input title=\"Water survival required\" name=ws id=ws value="  + ws + " size=5 maxlength=5 style=\"width: 30px;\" onkeypress=\"return fxkp(event);\" onpaste=\"event.returnValue = false;\"><img src=\"" + window.top.FHIPO + "weather_sun.png\"><input title=\"Fire survival required\" name=fs id=fs value="  + fs + " size=5 maxlength=5 style=\"width: 30px;\" onkeypress=\"return fxkp(event);\" onpaste=\"event.returnValue = false;\"><img src=\"" + window.top.FHIPO + "weather_clouds.png\"><input title=\"Air survival required\" name=as id=as value=" + as + " size=5 maxlength=5 style=\"width: 30px;\" onkeypress=\"return fxkp(event);\" onpaste=\"event.returnValue = false;\"><img src=\"" + window.top.FHIPO + "weather_snow.png\"><input title=\"Cold survival required\" name=cs id=cs value=" + cs + " size=5 maxlength=5 style=\"width: 30px;\" onkeypress=\"return fxkp(event);\" onpaste=\"event.returnValue = false;\"><img src=\"" + window.top.FHIPO + "eye.png\"><input name=h2 id=h2 value=" + h + " size=5 maxlength=5 title=\"Detect hidden required\" style=\"width: 30px;\" onkeypress=\"return fxkp(event);\" onpaste=\"event.returnValue = false;\"> (" + Math.abs(Skill) + ")" : "");
}

function GoP(PageNo) {
window.location.replace('?P=' + PageNo + '');
}
