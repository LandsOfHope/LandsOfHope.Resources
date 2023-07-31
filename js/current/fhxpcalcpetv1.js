var Level = Level;
document.write('<script src="https://lohcdn.com/js/current/simpleformatting.js" language="JavaScript"></script>');

function Calc1() {
	document.write('<table valign=top><tr><td colspan=2 class=\'boldcell\'>Level to XP Calculator</td></tr><tr><td>Start Level:</td><td><input size=4 maxlength=4 value=1 name=Calc1Box1 id=Calc1Box1></td></tr><tr><td>End Level:</td><td><input size=4 maxlength=4 value=' + Level + ' name=Calc1Box2 id=Calc1Box2></td></tr><tr><td><' + strClicky + ' onclick="getObj(\'Calc1Results\').innerHTML = \'XP Required:<br>\' + GETLEVELXP(getObj(\'Calc1Box1\').value, getObj(\'Calc1Box2\').value)" style=\'width: 100\'>Calculate</button></td></tr><tr><td colspan=2 id=Calc1Results></td></tr></table>');
}

function Calc2() {
	document.write('<table valign=top><tr><td colspan=2 class=\'boldcell\'>XP to Level Calculator</td></tr><tr><td>Experience:</td><td><input size=10 maxlength=10 value=2000 name=Calc2Box1 id=Calc2Box1></td></tr><tr><td>Current Level:</td><td><input size=3 maxlength=3 value=' + Level + ' name=Calc2Box2 id=Calc2Box2></td></tr><tr><td><' + strClicky + ' onclick="getObj(\'Calc2Results\').innerHTML = \'\' + GETLEVEL(getObj(\'Calc2Box1\').value, getObj(\'Calc2Box2\').value)" style=\'width: 100\'>Calculate</button></td></tr><tr><td colspan=2 id=Calc2Results></td></tr></table>');
}

function Calc3() {
	document.write('');
}


function GETLEVELXP(L1, L2) {
	var XP2 = 0;
	var XP3 = 0;
	L1 = Math.abs(L1) - 1;
	if (L1 <= 0) { L1 = 0 };
	if (L2 <= 0) { L2 = 0 };
	L2 = Math.abs(L2) - 1;
	XP2 = ((L1) * (L1 - 1) * 100);
	XP3 = ((L2 + 1) * L2) * 100;
	XP2 = XP3 - XP2;

	if (XP2 < 0) { XP2 = 0 }
	return XP2;
}

function GETLEVEL(XP, L) {
	var XP2 = 0;
	var L2 = 0;
	var loop = 0;
	var XP3 = 0;
	XP = Math.abs(XP);
	L = Math.abs(L);
	L2 = L + 1;
	if (L <= 0) { L = 0 };

	if (L >= 1000) {
		var strr = '1000 (Level Limit)';
	} else {
		if (GETLEVELXP(L, L) > XP) {
			var strr = 'Level: <b>' + L + '</b><br>' + (GETLEVELXP(L, L + 1) - XP) + 'xpx to next level';
		} else {
			//XP2 = GETLEVELXP(L, L) + XP;
			XP2 = XP //2 - GETLEVELXP(L, L);
			do {
				XP3 = GETLEVELXP(L2, L2)
				if (XP2 >= XP3) {
					loop = loop + 1;
				}

				XP2 = XP2 - XP3;
				L2 = L2 + 1;
			}
			while (XP2 > 0 && L2 <= 1000);
			L2 = L + loop;
			if (L2 >= 1000) {
				var strr = '1000 (Level Limit)';
			} else {
				var strr = 'Level: <b>' + L2 + '</b>' + (XP2 < 0 ? '<br>' + Math.abs(XP2) + 'xp to next level' : '<br>' + (GETLEVELXP(L2, L2 + 1) - XP2) + 'xp to next level');
			}
		}
	}
	return strr;
}