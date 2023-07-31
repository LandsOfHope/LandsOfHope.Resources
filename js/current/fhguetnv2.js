var counter = 0;
var GoPage = GoPage;
var GT = GT;
var IPath = window.top.FHIP;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(pageno) {
	window.location.replace('?GT=' + GT + '&P=' + pageno)
}

function AvC(Note, ND, NT) {
var Color = '#66ff66';
if (Note.indexOf('withdrew') > 0) {
	Color = '#ff6666'
}
if (NT == 1) {
	Color = 'gold'
}
counter = counter + 1;
var bg = '';
if ((counter / 2) == Math.round(counter / 2)) {bg = BGCOLOR_S}
document.write('<tr><td class="btn">' + ND + '</td></tr><tr style="' + (bg != '' ? 'background-color: ' + bg + ';' : '') + ' color: ' +  Color + '; padding-left: 5px;"><td class="weakercell">' + Note + '</td></tr>');
}

function AH(G, SkillGroup) {
return "<td style=\"width: 100px\" " + strClicksns + " onclick=\"window.location.replace(\'fhguetn.asp?GT=" + G + "\')\">" + SkillGroup + "</td>";
}

function DrawHeaders() {
	getObj("Tabs").innerHTML = "<table cellpadding=1 cellspacing=1>" + AH(0, "General") + "" + AH(1, "Recruitment") + "" + AH(2, "Rewards") + "" + AH(3, "Promotions") + "</table>";
}