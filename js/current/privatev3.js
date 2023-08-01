< !--
	var mlohChatPrivateChat = 0;
var dragapproved = false
var minrestore = 0
var lastprivatepage = '';
var initialwidth, initialheight
var dragobj;
var dragoffsetx = 0;
var dragoffsety = 0;
var dragtempx = 0;
var dragtempy = 0;

function drag_drop(e) {
	if (dragobj) {
		e = e || window.event;
		//&&e.button==1
		if (dragapproved) {
			dragobj.style.left = dragtempx + e.clientX - dragoffsetx + "px"
			dragobj.style.top = dragtempy + e.clientY - dragoffsety + "px"
		}
		e.cancelBubble = true;
	}
}

function initializedrag(e, windowname, context) {
	e = e || window.event;
	dragoffsetx = e.clientX;
	dragoffsety = e.clientY;
	dragobj = context;
	dragtempx = parseInt(dragobj.style.left)
	dragtempy = parseInt(dragobj.style.top)

	dragapproved = true
	document.onmousemove = drag_drop
	document.onmouseup = stopdrag
}

function stopdrag() {
	dragapproved = false;
	dragobj = null;
	document.onmousemove = null;
	document.onmouseup = null;
}


function loadwindow2(url, width, height, windowname, windowtitle) {
	if (window.top, preloadpopup == 0) {
		setTimeout(() => window.top.loadwindow2(url, width, height, windowname, windowtitle), 5000);
	} else {
		if (window.frames[windowname + 'f'] == null) {
			window.top.SendCommand('Window Error: Could not find ' + windowname + 'f, action aborted.');
		} else {
			window.frames[windowname + 'f'].document.body.innerHTML = '<table width="100%" height="100%" class="weakcell"><tr><td><center>Loading ...</center></td></tr></table>'
			if (width > 0) {
				getObj(windowname + 'title').innerHTML = windowtitle;
				getObj(windowname).style.width = initialwidth = width + "px";
				getObj(windowname).style.height = initialheight = height + "px";
			}
			getObj(windowname).style.display = ''
			window.frames[windowname + 'f'].location.replace(url);
		}
	}
}

function closeme(windowname) {
	getObj(windowname).style.display = "none"
}


function closeok() {
	if (getObj("autoclose").checked != 0) {
		closeit();
	}
}

// -->