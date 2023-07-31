var counter = 0;
var rp = rp;
var rgp = rgp;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AC(ItemID, Itty, PictureID, points, points2, d) {
	var Color = (rgp >= points2 && rp >= points ? 'gold' : '#ff6666');
	PictureID = 'https://lohcdn.com/game/' + PictureID;

	counter = counter + 1
	var bg = 'color1'
	if ((counter / 2) == Math.round(counter / 2)) { bg = 'color2' }

	document.write('<tr class="' + bg + '" style="padding-left: 5px;"><td width=\'300\'><b style="color: ' + Color + ';">' + Itty + '</b><br>' + d + '</td><td width=\'80\'>' + points2 + '<img src="https://lohcdn.com/game/icons/star.png" title="' + points2 + ' Paid referrals"> ' + points + '<img src="https://lohcdn.com/game/icons/status_offline.png" title="' + points + ' Standard referrals"></td><td>' + (rgp >= points2 && rp >= points ? Adr('BuyItem(' + ItemID + ');', 'Buy ' + Itty, 'Buy') : '') + '</td></tr>');
}

function BuyItem(id) {
	getObj('Reward').value = id;
	getObj('refform').submit();
}

//strout = strout & "AC(" & rstview("ReferralID") & ", '" & rstView("Extra") & "', '" & rstview("ExtraPicturePath") & "/" & rstview("ExtraPictureID") & "'," & rstview("ReferralPoints") & "," & rstview("ReferralGoldPoints") & ");" & vbcrlf
