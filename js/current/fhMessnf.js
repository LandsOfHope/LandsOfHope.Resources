var PageNo = PageNo;
var DefaultShop = 0;
var Shop = 0;
var Type2 = Type2;
var IC = 0;
var Infos = new Array();
var IPath = window.top.FHIPR;

document.write('<script src="js/formatting.js" language="JavaScript"></script>');


function DBX(fid, fn, fpp, fp, fc) {
if (Infos[IC] == null) {
	Infos[IC] = new Array();
}
Infos[IC] = new newInfo(fid, fn, fpp, fp, fc);
// fid=" + fid + " fn='" + fn + "' c='" + fc + "' fc='" + fc + "'
document.write("<tr id=\"I" + IC + "\" onclick=\"DB(" + IC + ");\"><td><img src='" + window.top.FHIP + fpp + "/" + fp + "' width=15 height=15></td><td style=\"" + strButtonx + "; width: 225; color: " + fc + "\" " + strClicksns + ">" + fn + "</td></tr>");
IC = IC + 1;
}

function newInfo(fid, fn, fpp, fp, fc) {
this.fc = fc;
this.c = fc;
this.fn = fn;
this.p = fpp + "/" + fp;
this.fid = fid;
}


function SetColor(strc) {
	getObj('fc').value = strc;
	getObj('fc2').style.backgroundColor = (strc == '' ? '' : strc);
}


function DB(v) {
	if (Infos[v].fid < 0) {
		getObj('FolderID').value = Infos[v].fid;
		getObj('Delly').submit();

	} else {
		var Colz = new Array('white','ff6666','66ff66','6666ff','yellow','ff66ff','silver','pink','orange','05B8CC','8F5E99','A020F0','43CD80','99CC32','A0522D','97694F', 'CDC0B0','B4EEB4','00688B','856363', 'B7C3D0', '99CCCC', 'FF7256', 'CC3299');
		var ColzN = new Array('','Red','Green','Blue','Yellow','Magenta','Silver','Pink','Orange','Cerulean','Violet','Purple','Sea Green','Yellow Green','Pale Sienna','Dark Tan', 'Antique White', 'Dark sea green', 'Deep sky blue','Dusty rose', 'Heather blue', 'Eggshell blue', 'Pale coral', 'Violet red');
		var x = 0;
		var xc = 0;
		var stuffx = "<table class='weakcell'><tr><td>Folder Name:</td><td><input name='fn' id=fn size=25 maxlength=20 value='" + Infos[v].fn + "'></td></tr><tr><td>Folder Color:<input name='fc' id=fc type='hidden' value='" + Infos[v].fc + "'></td><td style='background-color: " + Infos[v].fc + "' id=fc2>";

		stuffx = stuffx + "<table height=20 width=88 cellspacing=1 cellpadding=0>";
		for (x = 0; x < Colz.length; x++) {
			if (xc == 0) {
					stuffx = stuffx + "<tr height=9>";
			}
			stuffx = stuffx + "<td width=8 title=\"" + ColzN[x] + "\" onclick=\"SetColor('" + Colz[x] + "');\" bgcolor=\"" + (x == 0 ? 'white' : Colz[x]) + "\" style=\"cursor: pointer\"></td>";
			if (xc == 11) {
				stuffx = stuffx + "</tr>";
				xc = -1;
			}
			xc = xc + 1;

		}
		stuffx = stuffx + "</table>";


		stuffx = stuffx + "</td><tr><tr><td colspan=2>"
		stuffx = stuffx + Adr('getObj(\'FolderID\').value = ' + Infos[v].fid + ';getObj(\'Delly\').submit()', 'Save changes', 'Save') + Adr('getObj(\'FolderID\').value = ' + Infos[v].fid + ';getObj(\'fn\').value = \'SPECIAL DELETE\';getObj(\'Delly\').submit()', 'Delete this folder', 'Delete') + '</td></tr></table>';

		getObj('stuff').innerHTML = stuffx ;


	}
}

function RxC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PxC(v) {
window.top.InfoTip(IPath + (Infos[v].p == '' ? 'na.gif' : Infos[v].p),Infos[v].fn);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}