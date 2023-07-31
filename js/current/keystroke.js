var bulTime = 0;
var doneonce = 0;
var keynow =new Date();
var useevents = 0;

if (skipmacro == null) {
	var skipmacro= 0;
}


if (window.Interface == null) {
	if (window.parent.Interface == null) {
		//'This is a window within the Interface window and should not apply
	}
	else if (skipmacro != 0) {
	} else {
		window.onload= function anonymous(event) {VETLOAD(event)};
		useevents = 1;
	}
} else {
	useevents = 1;
}

if (useevents != 0) {
	if (document.onkeydown == null) {
		document.onkeydown= function anonymous(event) {VETKEY(event)};
	}
//	document.onmousedown= function anonymous(event) {VETMOUSE(event)};
}

function VETLOAD(e) {
	window.top.ButtonDirty = 0;
}

//function VETMOUSE(e) {
//	e = e || window.event;
//	if (e == null) {
//	} else {
		//if (e.button == 1 || e.button == 2) {
		//} else {
		//	e.cancelBubble = true;
		//	e.returnValue = false;
		//}
//	}
//}

function VETKEY(e) {
	e = e || window.event;
	if (e == null) {
	} else {
	if (e.ctrlKey != 0) {
		if (e.keyCode == 78) {
			e.returnValue = false;
		} else if (e.keyCode != 17) {
		}
	} else if (e.keyCode == 27) {
		e.returnValue = false;
		//e.keyCode = 0;
		e.cancelBubble = true;
		window.top.HM3(0,0,0);
	} else if (e.keyCode == 113) {
		if (window.top.getObj('message') != null) {
			window.top.getObj('message').focus();
		}
	} else if (e.keyCode == 116) {
		if (window.top.SystemUser == 0) {
			e.returnValue = false;
			e.keyCode = 0;
		} else {
			window.location.reload(-1);
		}
	
	} else if (e.keyCode >= 37 && e.keyCode <= 40) {
		if (window.Interface == null && window.location.href.indexOf('fh.asp') == -1) {
		} else {
			var dmk = e.keyCode;
			e.returnValue = false;
//			e.keyCode = 0;
			e.cancelBubble = true;
			//'Main Window - This is the main window.
			window.top.DoMove(dmk)
		}
		
	}
	}
}