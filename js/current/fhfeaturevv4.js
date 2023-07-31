var Search = Search;
var Type2 = Type2
var CharsAt = CharsAt;
var PageNo = PageNo;
var PageNo2 = PageNo2;
var counter = 0;
var IPath = window.top.FHIPR;

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function GoP(PageNox) {
	window.location.replace('?CharsAt=' + CharsAt + '&Type=' + Type2 + '&P=' + PageNo + '&P2=' + PageNox + '&Search=' + Search);
}


function AM(v, n, ct, Message, PictureID, eok) {
	var BID = CharsAt;
	counter = counter + 1
	var bg = ''
	var Color = ct;
	var ctt = '';
	if (ct == '6666ff') {
		Color = '#' + ct;
		ctt = '<br>Support Member'
	}
	if ((counter / 2) == Math.round(counter / 2)) { bg = BGCOLOR_S }
	document.write('<tr width="280" style="background-color: ' + bg + '"><td><table class="weakcell" cellpadding=0 cellspacing=0><tr><td width=32><img src="' + IPath + PictureID + '" align=left width=32 height=32></td><td width="100%" style="color: ' + Color + '; background-color: ' + bg + ';" valign=top><b>' + n + '</b>' + ctt + '</td><td valign=right>' + (window.top.SystemUser != 0 ? '<img src="https://lohcdn.com/game/icons/comment_delete.png" title="Delete comment" style="cursor: pointer;" class="xbtn" onclick="javascript:window.location.replace(\'?CharsAt=' + CharsAt + '&Type=' + Type2 + '&P=' + PageNo + '&P2=' + PageNo2 + '&D=' + v + '&Search=' + Search + '\');"><br>' : '') + (eok != 0 ? '<img src="https://lohcdn.com/game/icons/comment_edit.png" title="Edit comment" style="cursor: pointer;" class="xbtn" onclick="tinyMCE.get(\'postcm\').setContent(getObj(\'box' + v + '\').innerHTML); getObj(\'E\').value = ' + v + ';">' : '') + '</td></tr></table></td></tr>');
	document.write('<tr width="280" class="weakcell" style="color: white;background-color: ' + bg + ';padding-bottom: 2px;">' + '<td valign=top style="border-bottom: 1px dashed ' + Color + '" id=box' + v + '>' + Message + '</td></tr>');
}

function DC(stuff) {
	//	window.location.replace('fhbugv.asp?OB=' + OB + '&CharsAt=' + stuff.v);
}

function DCN(stuff) {
	//	window.location.replace('fhbugn.asp?OB=' + OB + '&CharsAt=' + stuff);
}

function DB(stuff) {
	//	window.location.replace('fhbug.asp?Type=' + stuff);
}


function PC(stuff) {
	stuff.style.cursor = 'pointer';
	stuff.style.backgroundColor = BGCOLOR_S
}

function RC(stuff) {
	stuff.style.cursor = '';
	stuff.style.backgroundColor = '';
}
