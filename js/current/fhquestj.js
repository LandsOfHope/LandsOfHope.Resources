
var PageNo = PageNo;
var Type = Type;
var counter = 0;
var strWhat = strWhat;
var IPath = window.top.FHIPR;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');


function AM2(QuestName, Quest) {
var Color = LITE;
document.write('<tr><td width="460px"><b>' + QuestName + '</b></td></tr><tr><td width="460px">' + Quest + '</td></tr>');
counter = counter + 1;
}


function GoP(PageNo) {
window.location.replace('?Type=' + Type + '&P=' + PageNo + '');
}
