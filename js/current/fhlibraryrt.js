var PageNo = PageNo;
var county = 0;
var IPath = window.top.FHIPI;
var Processing = 0;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AvC(m, v, d) {
    var Color = LITE;
    var PictureID = 'na.gif';
    //v="'+ v + '" m="' + m + '" d="' + d + '"
    document.write('<tr onclick="if (Processing == 0) {window.location.replace(\'fhlibraryrt2.asp?Type=' + v + '\')}" style="cursor: pointer;"><td width=15><img width=15 height=15 src="' + IPath + (PictureID == '' || PictureID == '0' ? 'na.gif' : PictureID) + '"></td><td><b>' + m + '</b><br>' + d + '</td></tr>');
}

function GoP(PageNo) {
    window.location.replace('?P=' + PageNo + '&Type=' + MT);
}
