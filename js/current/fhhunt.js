var CharsAt = CharsAt;
var Processing = 0;
var PageNo = PageNo;
var IPath = window.top.FHIPI;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function GoP(PageNo) {
    window.location.replace('?CharsAt=' + CharsAt + '&P=' + PageNo + '');
}

function AM(hid, Picture, Named, ha, hi, hl) {
    var Color = '#6464FF';
    //c="' + Color + '" hi="' + hi + '" hid=' + hid + ' ha=' + ha + ' n="' + Named + '" p="' +(Picture == '' || Picture == '0' ? 'na.gif' : Picture) + '" c="' + Color + '"
    document.write('<tr><td valign=top><img width=40 height=40 src="' + IPath + (Picture == '' || Picture == '0' ? 'na.gif' : Picture) + '"></td><td width="270" style="padding-left: 5px"><b style="color: ' + Color + ';">' + Named + '</b><br>' + hi + '</td><td width=300 valign=top><b>More Information</b><br>' + (ha == 0 ? 'This hunt is not currently active.' : hl) + '</td></tr>');
}