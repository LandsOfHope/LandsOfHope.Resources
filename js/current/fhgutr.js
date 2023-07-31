var GuildGold = GuildGold;
var Money = Money;
var Treasurer = Treasurer;
var Processing = 0;
var IPath = window.top.FHIPS;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function dt(stuff, valin) {
	if (Math.abs(valin) > Math.abs(stuff)) {
		alert('You do not have that amount of money to deposit!');
		return false;
	} else {
		return true;
	}
}

function ww(stuff, valin) {
	if (Math.abs(valin) > Math.abs(stuff)) {
		alert('You do not have that amount of money in the bank!');
		return false;
	} else {
		return true;
	}
}

function BuildScreen() {
	getObj('Buttons').innerHTML = '' + (GuildGold != 0 && Treasurer == 1 ? '<br><form style=\'margin: 0px;\' action=\'\' method=\'post\' onsubmit=\'return ww(' + GuildGold + ', getObj("Withdraw").value)\'><input name=Withdraw id=Withdraw value=\'' + GuildGold + '\' type=hidden>' + FormMoney('Withdraw', GuildGold) + Adf2('','','Withdraw') + '</form>' : '') + (Money != '0' ? '<br><form action=\'\' method=\'post\' onsubmit=\'return dt(' + Money + ', getObj("Deposit").value)\' style=\'margin: 0px;\'><input name=Deposit id=Deposit value=\'' + Money + '\' type=hidden>' + FormMoney('Deposit', Money) + Adf2('','','Deposit') + '</form>' : '');
}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip(IPath + Infos[v].p,Infos[v].i);
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}
