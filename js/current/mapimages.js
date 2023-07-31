var MyType = '';
var Images = new Array();
var IPath = '' + window.top.FHIPM;
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
	strBG = " class='c" + window.parent.MapT[window.parent.lastx][window.parent.lasty].Color + "'";
	document.write("<table height=265 width=\"100%\" cellspacing=0 cellpadding=1 " + strBG + ">");
	v = 1
	document.write("<tr><td><img onmousedown='return ChangeImage(event, -1)' src='" + IPath + "na.gif' title='No Image' width=20 height=20></td>");
	var y = 0;
	for (y = 0; y < ImageCount; y++) {
		if (v == 0) {
			document.write("<tr>");
		}
		document.write("<td><img onmousedown='return ChangeImage(event, " + y + ")' src='" + IPath + Images[y] + "' width=20 height=20 title='" + Images[y] + "'></td>");
		if (v == 9) {
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
	if (e.which == null) {
		buttonx = e.button;
	} else {
		buttonx = e.which;
	}
	if (v != -1) {
		var strImg = Images[v];
	} else {
		var strImg = 'na.gif';
	}
	if (strImg == "") {strImg = "na.gif"}

	getObj("Type").value = MyType
	if (buttonx == 1) {
		getObj("RIMG").value = strImg
		window.parent.SetPicture(window.parent.lastx, window.parent.lasty, strImg);
		getObj("PIMG").src = "" + IPath + strImg
	} else {
		getObj("RIMG2").value = strImg
		window.parent.SetPictureM(window.parent.lastx, window.parent.lasty, strImg);
		getObj("PIMG2").src = "" + IPath + strImg
	}
	return false;
}