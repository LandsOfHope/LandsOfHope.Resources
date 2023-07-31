var PageNo = PageNo;
var SN = SN;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function fx1(stuff) {
	var re = /^\$|,|'|"|%|@|#/g;
	stuff.value = stuff.value.replace(re, "");
	if (stuff.value == '' || stuff.value == null) {
		stuff.value = 0;
	}
}

function ColumnHeaders() {
	document.write('<tr class=\'boldcell\'><td>Information</td><td>Buy/Sell</td><td>Price</td><td></td></tr>');
}

function AC(at, IID, ItemName, mv, mp, yp) {
	var Color = 'white';
	var BColor = '';
	if (at == 0) {
		Color = '#00ff00'
		BColor = BGCOLOR_S;
	}
	if (at == 1) {
		Color = '#0000ff'
		BColor = BGCOLOR_S;
	}
	if (yp == 1) {
		Color = 'gold'
		BColor = BGCOLOR_S;
	}

	document.write('<tr style="cursor: pointer; color: ' + Color + '; background-color: ' + BColor + '; padding-left: 5px"><td width=\'300\' valign=top><b>' + ItemName + '</b>' + '</td><td width=\'120\' valign=top>' + (at == 0 ? 'Buying ' : 'Selling ') + '<b>' + mv + '</b>HC</td><td id=\'tgold\' width=\'90\' valign=top>' + window.top.BSGM(mp) + '</td><td>' + (yp == 1 ? '<img src="https://lohcdn.com/game/icons/comment_delete.png" title="Delete" style="cursor: pointer;" class="xbtn" onclick="javascript:window.location.replace(\'?SN=' + SN + '&Type2=2&Type3=' + IID + '&P=' + PageNo + '\');">' : '<img src="https://lohcdn.com/game/icons/arrow_redo.png" title="Complete" style="cursor: pointer;" class="xbtn" onclick="javascript:confirm(\'Are you sure you wish to complete this job?\', ' + IID + ');">') + '</td></tr>');
}


function GoP(PageNo) {
	window.location.replace('?SN=' + SN + '&P=' + PageNo + '');
}

function NewHCSellJob() {
	getObj('newdivd').style.display = '';
	getObj('newdiv').style.display = '';
	getObj('divtableh').innerHTML = "New HC Sell Job"
	getObj('divtable').innerHTML = '<table class=\'weakcell\' height=170><tr><td style=\'filter: Glow(Color=#000000, Strength=2);\'><input name=type2 id=type2 value=3 type=hidden>Sell how many HC:</td><td><input name=sellhc id=sellhc value=0 size=1 maxlength=2 onkeypress=\"fxkp(event);\" onpaste=\"event.returnValue = false;\"></td></tr><tr><td style=\'filter: Glow(Color=#000000, Strength=2);\'>Total asking price:</td><td><input name=price id=price value=\'0\' type=hidden>' + FormMoney('price', 0) + '</td></tr><tr><td colspan=2 style=\'filter: Glow(Color=#000000, Strength=2); color: yellow;\'>Use this job to sell Hope credits you currently own, if you do not have any hope credits you should go and buy some. You can also enter the price that you wish to sell these hope credits for.<br><br>The hope credits are deducted from your hc balance when you add the listing, and will not be available to you unless you delete the job.</td></tr><tr height=\'100%\'><td colspan=2>' + Adr('document.forms[1].submit();', 'Save', 'Save') + '</td></tr></table>'
}
function NewHCBuyJob() {
	getObj('newdivd').style.display = '';
	getObj('newdiv').style.display = '';
	getObj('divtableh').innerHTML = "New HC Buy Job"
	getObj('divtable').innerHTML = '<table class=\'weakcell\' height=170><tr><td style=\'filter: Glow(Color=#000000, Strength=2);\'><input name=type2 id=type2 value=4 type=hidden>Buy how many HC:</td><td><input name=buyhc id=buyhc value=0 size=1 maxlength=2 onkeypress=\"fxkp(event);\" onpaste=\"event.returnValue = false;\"></td></tr><tr><td style=\'filter: Glow(Color=#000000, Strength=2);\'>Total buying price:</td><td><input name=price id=price value=\'15000000\' type=hidden>' + FormMoney('price', 15000000) + '</td></tr><tr><td colspan=2 style=\'filter: Glow(Color=#000000, Strength=2); color: yellow;\'>Use this job if you wish to buy some Hope credits. You can also enter the price that you wish to buy these hope credits for.<br><br>The price is deducted from your held funds the moment you add the listing, so be advised that until the job is deleted or completed you will have less money than before.</td></tr><tr height=\'100%\'><td colspan=2>' + Adr('document.forms[1].submit();', 'Save', 'Save') + '</td></tr></table>'
}

function PromptReturn(returnVal, postback) {
	if (returnVal != null) {
		if (returnVal != false) {
			window.top.Interface.location.replace('fhmarkethc.asp?SN=' + SN + '&Type2=1&Type3=' + postback + '&P=' + PageNo);
		}
	}
}
