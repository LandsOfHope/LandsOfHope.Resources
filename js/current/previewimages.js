var MyType = '';
var Images = new Array();
var IPath = '' + window.top.FHIP + 'p/';
var ImageType = new Array();
var ImageCount = 0;
var ImageTypeCount = 0;

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AIM(Iii) {
	Images[ImageCount] = Iii;
	ImageCount = ImageCount + 1;
}

function AMT(Iii, ITC) {
	ImageType[ImageTypeCount] = Iii;
	ImageTypeCount = ImageTypeCount + 1;
}

function DrawImageTypes(BuildingID, ImageTypex) {
	MyType = ImageTypex;
	var i = 0;
	var v = 0;
	document.write("<table height=265 width=\"100%\" cellspacing=0 cellpadding=1 class='weakcell'>");
	v = 0;
	var y = 0;
	for (y = 0; y < ImageTypeCount; y++) {
		if (v == 0) {
			document.write("<tr>");
		}
		document.write('<td onmouseover="this.style.backgroundColor=\'' + BGCOLOR_S + '\';" onmouseout="this.style.backgroundColor=\'\';" style="cursor: pointer;" onclick="ChangeType(' + y + ');" width="50%">' + ImageType[y] + '</td>');
		if (v == 1) {
			document.write("<td width='100%'></td></tr>");
			v = 0;
		} else {
			v = v + 1;
		}	
	}

	document.write("<tr height='100%'><td colspan=10 width='100%'>&nbsp;</td></tr></table>");
}

function DrawImages(BuildingID, ImageTypex) {
	var MyType = ImageTypex;
	var i  = 0;
	var v = 0;
	var strBG = '';
	document.write("<table height=265 width=\"100%\" cellspacing=0 cellpadding=1>");
	v = 1
	document.write("<tr><td><img onmousedown='return ChangeImage(event, -1)' src='" + IPath + "np.jpg' title='No Image' width=58 height=58></td>");
	var y = 0;
	for (y = 0; y < ImageCount; y++) {
		if (v == 0) {
			document.write("<tr>");
		}
		document.write("<td><img onmousedown='return ChangeImage(event, " + y + ")' src='" + IPath + Images[y] + "' width=58 height=58 title='" + Images[y] + "'></td>");
		if (v == 3) {
			document.write("<td width='100%'></td></tr>");
			v = 0;
		} else {
			v = v + 1;
		}	
	}


	document.write("<tr height='100%'><td colspan=10 width='100%'>&nbsp;</td></tr></table>");
}

function ChangeType(v) {
	NewType = ImageType[v];
	BuildingID = getObj("CharsAt").value
	//NewType= replace(NewType, " & ","%20%26%20")

	window.location.replace("?CharsAt=" + BuildingID + "&Type=" +  NewType);
}

function ChangeImage(e, v) {
	var buttonx = 0;
	e = e || window.event;
	if (v != -1) {
		var strImg = Images[v];
	} else {
		var strImg = 'np.jpg';
	}
	if (strImg == "") {strImg = "np.jpg"}

	getObj("Type").value = MyType
	getObj("RIMG").value = strImg
	getObj("PIMG").src = "" + IPath + strImg
	return false;
}