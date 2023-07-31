var counteri = 0;
var PageNo = PageNo;
var Extra = Extra;
var IPath = window.top.FHIP
document.write('<script src="js/formatting.js" language="JavaScript"></script>');


function AM(PictureID, PP, Color, ItemName, Cost, v, Desc, x) {
counteri = counteri + 1
if (PictureID == '') {PictureID = 'na.gif'}
document.write('<tr><td width="40" class="nav3"><img src=\'' + IPath + PP + '/' + PictureID + '\' width=40 height=40></td><td><b style="Color: ' + Color + '">' + (ItemName) + '</b><br>Cost: $' + (Cost * 5) + '/ ' + Cost + 'hc<br>' + Desc + '</td><td>' + Adr('window.location.replace(\'fhcatalog2.asp?e=' + x + '\')','Buy ' + ItemName,'Buy' ) + '</td></tr>');
}

function AH(Header) {
counteri = 0;
document.write("<tr><td class='theader' colspan=2>" + Header + "</td></tr>");
}

function AHF() {
}

function PC(stuff) {
}

function RC(stuff) {
}
