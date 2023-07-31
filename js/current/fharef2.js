var counter = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(ItemID, Color, Itty, fa, ev) {
var PictureID = '';
if (PictureID == '0') {PictureID = ''}
counter = counter + 1
var bg = 'color1'
if ((counter / 2) == Math.round(counter / 2)) {bg = 'color2'}

//ev=' + ev + ' v=' + ItemID + ' fa="' + fa + '" p="' + (PictureID == '' ? 'na.gif' : PictureID) + '" 
document.write('<tr class="' + bg + '" style="color: ' +  Color + '; padding-left: 5px;"><td width=\'250\'>' + (ev == 0 ? '<i>' : '') + Itty  + (ev == 0 ? '</i> - unverified' : '') + '</td><td>' + fa + '</td><td>' + (Color == 'white' || Color == 'gold' ? '<input type=checkbox id=ItemID name=ItemID onclick=\'DC()\' title="' + Color + '" value=\'' + ItemID + '\'>' : '') + '</td></tr>');
}

function DC() {
	var SADC = SAC();
	var SADCP = Math.abs(SAC2('gold'));
	var SADCN = Math.abs(SAC2('white'));
	getObj('Stuff').innerHTML = '<b>' + SADC + ' selected<br>' + SADCN + ' normal referrals<br>' + SADCP + ' pay referrals</b>' + (SADC == 5 ? '<br><b>CONGRATULATIONS</b><Br>You now have enough referrers to qualify for an extra Character slot.<br>' + Adr('getObj(\'Reward\').value = 1; getObj(\'refform\').submit()', 'Redeem the selected referrals for an extra slot', 'Get Slot') + '' : '<br>You need 5 selected referrals to qualify for an extra slot.')  + (SADCP == 5 ? '<br><b>CONGRATULATIONS</b><Br>You now have enough referrers to qualify for 1HC.<br>' + Adr('getObj(\'Reward\').value = 2; getObj(\'refform\').submit()', 'Redeem the selected referrals for 1HC', 'Get 1HC') + '' : '<br>You need 5 selected p2p referrals to qualify for 1HC.'); 
}

function SAC2(how) {
	var x = 0;
	var SACC = 0;
	if (getObj("ItemID") != null) 
	{
		if (getObj("ItemID").length <= 1) {
			getObj("ItemID").checked = how;
		} else {
			for (x = 0; x < getObj("ItemID").length; x++) {
				if (getObj("ItemID")[x].checked != 0 && getObj("ItemID")[x].title == how) {
					SACC = SACC + 1;
				}
			}
		}
	}
	return SACC;
}

function SAC() {
	var x = 0;
	var SACC = 0;
	if (getObj("ItemID") != null) 
	{
		if (getObj("ItemID").length <= 1) {
			getObj("ItemID").checked = how;
		} else {
			for (x = 0; x < getObj("ItemID").length; x++) {
				if (getObj("ItemID")[x].checked != 0) {
					SACC = SACC + 1;
				}
			}
		}
	}
	return SACC;
}