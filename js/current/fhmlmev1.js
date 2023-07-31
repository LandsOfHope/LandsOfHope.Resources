var IPath = window.top.FHIPB;
var FHIPO = window.top.FHIPO;
var p2 = 'na.gif';
var Countt = 0;

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(d, ItemName, ItemID, f, s, rp, e, su) {
var p= 'na.gif';
var Color = 'white'
document.write('<tr><td>Name: </td><td><input name=IN id=IN value="' + ItemName + '"></td></tr>');
document.write('<tr><td>Description: </td><td><textarea name=d id=d style=\'width: 170px; height: 45px;\'>' + d + '</textarea></td></tr>');
document.write('<tr onmouseover=\'InfoTip("","Allow the tile to be sold, set its sell value below.")\'><td>Tile For Sale:</td><td><input name=f id=f value=1 ' + (f != 0 ? 'checked' : '') + ' type=checkbox></td></tr>');
document.write('<tr onmouseover=\'InfoTip("","How much money you are willing to sell this tile for.")\'><td>Sale Price:</td><td><input name=sp id=sp value='  + s + ' type=hidden>' +  FormMoney('sp', s) + '</td></tr>');
document.write('<tr onmouseover=\'InfoTip("","When checked, anyone wishing to build here will need a Permit to do so. If unchecked anyone can build here.")\'><td>Permit:</td><td><input name=rp id=rp value=1 ' + (rp != 0 ? 'checked' : '') + ' type=checkbox></td></tr>');
document.write('<tr onmouseover=\'InfoTip("","Determines if things can spawn here or not.")\'><td>Enemies: </td><td><input name=e id=e value=1 ' + (e != 0 ? 'checked' : '') + ' type=checkbox></td></tr>');
document.write('<tr><td colspan=2 id=Butt>' + Adr('getObj(\'stufff\').submit();', 'Save changes', 'Save') + '</td></tr>');
document.write('<tr><td></td></tr>');

p2 = (p == '' ? 'na.gif' : p);
}
