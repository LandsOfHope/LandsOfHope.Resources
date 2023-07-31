var ToolTip = 0;
var ShowLabel = 1;
var pagestr = pagestr;

var strClicksns = FormatS();
var strClicks = "" + FormatS();
var strClicky = "button " + strClicks

// class=\"positive\"
// onmouseover=\"this.className = \'positive:hover\';\" onmouseout=\"this.className = \'positive\';\" 

function FormatS() {
	return "";
}

function AdBr() {
document.write("<br>");
}

function AdB(Actions, Titles, Names) {
document.write("<" + strClicky + "  onclick=\"window.location.replace(\'" + Actions + "\');\" title=\"" + Titles + "\">" + Names + "</button>");
}

function Pages(Count, CurPage) {
var strTest = '';
var v = 0;
var i = 0;
for (i = 1; i <= Count; i++) 
{         
	v = v + 1;
	strTest += AddPageButton(i, CurPage, i);

	if (v >= 20) {
		strTest += '</br>';
		v = 0;
	}
}
if (Count == 0) {
	strTest += AddPageButton2();
}

getObj('Pages').innerHTML = '<table><tr><td class=\'weakercell\'>Page: </td><td>' + strTest + '</td></tr></table>';
}

function AddPageButton(i, CurPage, ii) {
	return '<a ' + (CurPage != i ? ' style="width:20" onclick="GoP(\'' + i + '\')"' : ' style="width:20; font-weight: bold;"') + '>' + ii + '</a>';        
}

function GoP(p) {
	window.location.replace('?P=' + p + (pagestr != null ? '' + pagestr : ''));
}

function AddNavButton(CurPage, Count, PageLimit, ii, offsetp) {
	return '<a style="width:20" onclick="PagesL(' + Count + ',' + CurPage + ',' + PageLimit + ',' +offsetp + ')">' + ii + '</a>';        
}

function AddPageButton2() {
	return '<a style="width:20; font-weight: bold">1</a>';
}

function PagesL(Count, CurPage, PageLimit, offsetp) {
var strTest = '';
var v = 0;
var startp = 1;
var endp = Count;
var starth = '';
var endh = '';
var minp = Math.floor(PageLimit / 2);
var maxp =PageLimit + minp;

if (offsetp == 0) {offsetp = CurPage}
if (offsetp > Count) {offsetp = Count - minp}

if (Count > PageLimit + minp) {
	startp = offsetp - minp;
	if (startp < 1) {startp = 1};
	if (offsetp  < 1) {offsetp = 1};
	endp = startp + maxp;
	if (endp > Count) {
		endp = Count;
	}
	starth = AddNavButton(CurPage, Count, PageLimit,'<<',1) + AddNavButton(CurPage, Count, PageLimit, '<',(startp - PageLimit) - 1);
	endh = AddNavButton(CurPage, Count, PageLimit, '>',(endp + minp) + 1) + AddNavButton(CurPage, Count, PageLimit, '>>',Count - PageLimit);
}

if (Count == 0) {
	strTest += AddPageButton2();
} else {
	for (i = startp; i <= endp; i++) 
	{         
		strTest += AddPageButton(i, CurPage, i);

	}
}
getObj('Pages').innerHTML = '<table><tr><td class=\'weakercell\'>Page: </td><td>' + starth + '' + strTest + '' + endh + '</td></tr></table>';
}


function PagesAZ(CurPage) {
var strTest = '';
var v = 0;
for (i = 1; i <= 26; i++) 
{         
	strTest += AddPageButton(String.fromCharCode(i + 64), CurPage, String.fromCharCode(i + 64));

	if (i == 13) {
		strTest += '<br>';
	}
}

getObj('Pages').innerHTML = '<table><tr><td>' + strTest + '<td></tr></table>';
}

function Ada(Actions, Titles, Names) {
document.write("<" + strClicky + " onclick=\"" + Actions + ";\" title=\"" + Titles + "\">" + Names + "</button>");
}

function Adf(Actions, Titles, Names) {
document.write("<" + strClicky + " onclick=\"" + Actions + ";\" title=\"" + Titles + "\">" + Names + "</button>");
}

function fxn(stuff) {
  var str = '';
  var s;

	for (s = 0; s < stuff.value.length; s++) {
		if (stuff.value.charCodeAt(s) >= 48 && stuff.value.charCodeAt(s) <= 57) {
			str = str + '' + stuff.value.charAt(s);
		}
	}
	stuff.value = str;
	if (stuff.value == '' || stuff.value == null) {
		stuff.value = 0;
	}
	if (stuff.value.length > 1 && stuff.value.charCodeAt(0) == 48)  {
		stuff.value = stuff.value.substr(1,stuff.value.length - 1)
	}
}

function getObj(objn) {
	if (document.getElementsByName(objn).length <= 1) {
		return document.getElementById(objn);
	} else {
		return document.getElementsByName(objn);
	}


}