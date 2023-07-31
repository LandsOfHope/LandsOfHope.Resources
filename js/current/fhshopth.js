var CharsAt = CharsAt;
var Processing = 0;
var IPath = window.top.FHIP;
var IC = 0;
var Infos = new Array();
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AM(iid, apx1, Named, a1, ct) {
    var Color = '#6464FF';
    var ta1 = 1;
    var ap1 = window.parent.GetPerc(ta1, a1)
    var ap1t = window.top.PercentBoxR(ap1, 'cyan', '' + a1 + ' / ' + ta1 + '')
    var Picture = apx1;
    //c="' + Color + '" iid=' + iid + ' a1=' + a1 + ' apx1="' + apx1 + '" n="' + Named + '" p="' +(Picture == '' || Picture == '0' ? 'na.gif' : Picture) + '" c="' + Color + '"
    document.write('<tr><td valign=top><img width=40 height=40 src="' + IPath + (Picture == '' || Picture == '0' ? 'na.gif' : Picture) + '"></td><td width="180" style="padding-left: 5px;" class="weakcell"><b style="color: ' + Color + ';">' + Named + '</b>' + ap1t + '<br></td><td>' + (a1 == 0 ? Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'fhshopthci.asp?CharsAt=' + CharsAt + '&ID=' + iid + '\');}', 'View clue Info', 'Info') : '') + '</td></tr><tr><td colspan=4 class="weakcell">' + ct + '</td></tr>');
}

function AvC(v, Itty, PictureID, t) {
    if (PictureID == '0') { PictureID = '' }
    var Color = LITE;
    // t="' + t + '" cr=0 v=' + v + ' i="' + Itty +'" p="' + (PictureID == '' ? 'na.gif' : PictureID) + '" class="it" c="' + Color + '"
    document.write('<tr style="padding-left: 5px;"><td width=\'300px\'><table class="weakcell" width="300px"><tr><td colspan=3><b style="color: ' + Color + '">' + Itty + '</b></td></tr><tr><td colspan=3 class=weakercell><img align=left src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\'>' + t + '<br><br>Use the <b>View Clue Info</b> buttons to find possible locations for the clue, then travel to those locations and use a <b>Magnifying glass</b> to search for the clue.<br><br>If you need a magnifying glass I can sell you one, click the Buy Tools button below.</td></tr></table></td></tr>');
}


function AvC3() {
    var Color = LITE;
    var Itty = '';
    Itty = 'No Treasure Hunts are currently active, perhaps you should come back when I have something to offer !.'
    document.write('<tr style="padding-left: 5px;"><td width=\'100%\'><table class="weakcell"style="color: ' + Color + ';"><tr><td>' + Itty + '</td></tr></table></td></tr>');
}

function AvC4(c) {
    var Color = 'gold';
    var Itty = 'You have all of the clues needed to complete this treasure hunt.'
    document.write('<tr style="padding-left: 5px;"><td width=\'100%\'><table class="weakcell"style="color: ' + Color + ';"><tr><td>' + Itty + '</td></tr><tr><td colspan=3>' + (c > 0 ? Adr('if (Processing == 0) {Processing = 1; window.location.replace(\'fhshopth.asp?CharsAt=' + CharsAt + '&ID=-' + c + '\');}', 'Complete Hunt', 'Complete Hunt') : '') + '</td></tr></table></td></tr>');
}