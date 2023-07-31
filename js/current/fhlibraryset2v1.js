
var IPath = window.top.FHIPI;
document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function AM(Value, PictureID, Named, l) {
    var Color = LITE;
    document.write('<tr  style="color: ' + Color + '"><td width=15><img border=0 title="' + Named + '" width=15 height=15 src=\'' + IPath + (PictureID == '' ? 'na.gif' : PictureID) + '\'></td><td><a href="imi.asp?test=' + Value + '">' + Named + '</a></td><td>Level: ' + l + '</td></tr>');
}