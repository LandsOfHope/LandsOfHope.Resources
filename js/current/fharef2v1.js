var counter = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(ItemID, Color, Itty, fa, ev) {
var PictureID = '';
if (PictureID == '0') {PictureID = ''}
counter = counter + 1
var bg = 'color1'
if ((counter / 2) == Math.round(counter / 2)) {bg = 'color2'}

document.write('<tr class="' + bg + '" style="color: ' +  Color + '; padding-left: 5px;"><td width=\'250\'>' + (ev == 0 ? '<i>' : '') + Itty  + (ev == 0 ? '</i> - unverified' : '') + '</td><td>' + fa + '</td></tr>');
}