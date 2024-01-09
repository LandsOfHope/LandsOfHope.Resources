var rcsbuttons = new Array();
var hs = 0;
var mastervalue = 0;
var PageLoaded = PageLoaded;

function AddButton(bid, text, url, picture1) {
	rcsbuttons[bid] = new Array();
	rcsbuttons[bid] = new UpdateButtonx(bid, text, url, picture1);
}

function ClearSubMenu(bid) {
	rcsbuttons[bid].submenus = new Array();
}

function AddSubMenu(bid, text, url, picture1, js) {
	var l = rcsbuttons[bid].submenus.length;
	rcsbuttons[bid].submenus[l] = new Array();
	rcsbuttons[bid].submenus[l] = new UpdateSubMenux(bid, text, url, picture1, js);
}

function UpdateButtonx(bid, text, url, picture1) {
	this.bid = bid;
	this.text = text;
	this.url = url;
	this.picture1 = picture1;
	this.picture2 = ''
	this.picture3 = '';
	this.clicktimer = 0;
	this.submenus = new Array();
}

function UpdateSubMenux(bid, text, url, picture1, js) {
	this.bid = bid;
	this.text = text;
	this.js = js;
	this.url = url;
	this.picture1 = picture1;
}

function getObj(objn) {
	if (document.getElementsByName(objn).length <= 1) {
		return document.getElementById(objn);
	} else {
		return document.getElementsByName(objn);
	}
}

function HideSubMenu() {
	var rcspopup = getObj('rcspopup');
	if (rcspopup != null) {
		rcspopup.parentNode.removeChild(rcspopup);
	}
}

function findPos(obj) {
	if (obj == null) {
		return [0, 0];
	} else {
		var posX = obj.offsetLeft; var posY = obj.offsetTop;
		while (obj.offsetParent) {
			posX += obj.offsetParent.offsetLeft;
			posY += obj.offsetParent.offsetTop;
			if (obj == document.getElementsByTagName('body')[0]) { break }
			else { obj = obj.offsetParent; }
		}
		return [posX, posY]
	}
}

function getScrollXY() {
	var scrOfX = 0, scrOfY = 0;
	if (typeof (window.pageYOffset) == 'number') {
		//Netscape compliant
		scrOfY = window.pageYOffset;
		scrOfX = window.pageXOffset;
	} else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
		//DOM compliant
		scrOfY = document.body.scrollTop;
		scrOfX = document.body.scrollLeft;
	} else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
		//IE6 standards compliant mode
		scrOfY = document.documentElement.scrollTop;
		scrOfX = document.documentElement.scrollLeft;
	}
	return [scrOfX, scrOfY];
}

function ShowSubMenu(b, divx, mv) {
	if (mv == null) {
		mv = 0;
	}
	mastervalue = mv;
	if (hs > 0) {
		clearTimeout(hs);
	}
	if (divx == null) {
		divx = 'rcsbutton' + b;
	}
	var mt = '';
	if (mt == null) {
		mt = '';
	}
	var strout = '' + (b == -1 ? mt : '');
	var x = 0;
	if (b != -1) {
		for (x = 0; x < rcsbuttons[b].submenus.length; x++) {
			strout += '<div id="rcssm' + x + '" style="margin: 2px; padding: 1px; border: 1px solid RGB(86, 78, 76); background-Color: RGB(86, 78, 76); cursor: pointer;" onmouseover="RCSSMOver(' + b + ',' + x + ');" onclick="RCSSMClick(' + b + ',' + x + ');" onmouseout="RCSSMOut(' + b + ',' + x + ');"><table cellpadding=0 cellspacing=0 style="font-family: Helvetica; font-size: 8pt;"><tr><td style="width: 20px;" id="prcssm' + x + '"><img src=\'https://lohcdn.com/images/circle0a.png\' width=12 height=12></td><td style="color:white;">' + rcsbuttons[b].submenus[x].text + '</td></tr></table></div>'
		}
	}
	strout += ''

	var rcspopup = getObj('rcspopup');
	if (rcspopup != null) {
		rcspopup.parentNode.removeChild(rcspopup);
	}

	var rcspopdiv = document.createElement("div");
	rcspopdiv.style.position = "absolute";
	rcspopdiv.style.border = "1px solid RGB(86, 78, 76)";
	if (b == -1) {
		rcspopdiv.style.width = "480px";
		rcspopdiv.style.height = "70px";
		rcspopdiv.style.zIndex = 50000;
	} else {
		rcspopdiv.style.width = "140px";
		rcspopdiv.style.zIndex = 56000;
	}
	//Add image width and height
	var l = findPos(getObj(divx))[0] + 10;
	if (b == -4) {
		var t = (findPos(getObj(divx))[1] + 5) - getObj('tabs').scrollTop;
	} else {
		var t = (findPos(getObj(divx))[1] + 5);
	}
	rcspopdiv.style.left = l;
	rcspopdiv.style.top = t;
	rcspopdiv.style.display = "";
	rcspopdiv.id = "rcspopup";
	rcspopdiv.style.backgroundColor = 'RGB(86, 78, 76)';
	rcspopdiv.innerHTML = strout;

	if (b == -1) {
	} else {
		hs = setTimeout(HideSubMenu, 5000);
	}
	document.body.appendChild(rcspopdiv);

}

function findPosX(obj) {
	var curleft = 0;
	if (obj.offsetParent) {
		while (1) {
			curleft += obj.offsetLeft;
			if (!obj.offsetParent) {
				break;
			}
			obj = obj.offsetParent;
		}
	} else if (obj.x) {
		curleft += obj.x;
	}
	return curleft;
}
function findPosY(obj) {
	var curtop = 0;
	if (obj.offsetParent) {
		while (1) {
			curtop += obj.offsetTop;
			if (!obj.offsetParent) {
				break;
			}
			obj = obj.offsetParent;
		}
	} else if (obj.y) {
		curtop += obj.y;
	}
	return curtop;
}

function RCSSMOver(b, x) {
	clearTimeout(hs);
	hs = setTimeout(HideSubMenu, 2500);

	var bb = getObj('rcssm' + x);
	if (bb != null) {
		if (rcsbuttons[b] != null) {
			bb.style.border = '1px solid RGB(86, 78, 76)';
			bb.style.backgroundColor = 'RGB(43, 28, 23)';
		}
		bb = null;
		var bb2 = getObj('prcssm' + x);
		if (bb2 != null) {
			bb2.innerHTML = '<img src=\'https://lohcdn.com/images/circle6.png\' width=12 height=12>'
		}
		bb2 = null;


	}
}

function RCSSMOut(b, x) {
	var bb = getObj('rcssm' + x);

	if (bb != null) {
		if (rcsbuttons[b] != null) {
			bb.style.border = '1px solid RGB(86, 78, 76)';
			bb.style.backgroundColor = 'RGB(86, 78, 76)';
		}
		var bb2 = getObj('prcssm' + x);
		if (bb2 != null) {
			bb2.innerHTML = '<img src=\'https://lohcdn.com/images/circle0a.png\' width=12 height=12>'
		}
		bb2 = null;



	}
}

function RCSSMClick(b, x) {
	var bb = getObj('rcssm' + x);
	if (bb != null) {
		if (rcsbuttons[b] != null) {
			bb.style.backgroundColor = 'RGB(43, 28, 23)';
			if (rcsbuttons[b].submenus[x].js != null) {
				HideSubMenu();
				var jsexec = rcsbuttons[b].submenus[x].js.replace("\{" + 0 + "\}", mastervalue);
				eval(jsexec);
			} else if (rcsbuttons[b].submenus[x].url != '') {
				HideSubMenu();
				window.location.assign(rcsbuttons[b].submenus[x].url);
			}
		}
		var bb2 = getObj('prcssm' + x);
		if (bb2 != null) {
			bb2.innerHTML = '<img src=\'https://lohcdn.com/images/circle3.png\' width=12 height=12>'
		}
		bb2 = null;


	}
}


function RCSBOver(b) {
	clearTimeout(hs);
	hs = setTimeout(HideSubMenu, 2500);

	if (PageLoaded == false || PageLoaded == null) {
	} else {
		var bb = getObj('rcsbutton' + b);
		if (bb != null) {
			if (rcsbuttons[b] != null) {
				bb.innerHTML = window.top.ASCII(rcsbuttons[b].text, 6);
				clearTimeout(rcsbuttons[b].clicktimer);
			}
		}
	}
}

function RCSBOut(b) {
	var bb = getObj('rcsbutton' + b);
	if (bb != null) {
		if (rcsbuttons[b] != null) {
			bb.innerHTML = window.top.ASCII(rcsbuttons[b].text);
			clearTimeout(rcsbuttons[b].clicktimer);
		}
	}
}

function RCSBClick(b) {
	var bb = getObj('rcsbutton' + b);
	if (bb != null) {
		if (rcsbuttons[b] != null) {
			bb.innerHTML = window.top.ASCII(rcsbuttons[b].text, 3);
			rcsbuttons[b].clicktimer = setTimeout(() => RCSBOver(b), 150);
			if (rcsbuttons[b].url != '') {
				if (rcsbuttons[b].url.indexOf(';') != -1) {
					eval(rcsbuttons[b].url);
				} else {
					window.location.assign(rcsbuttons[b].url);
				}
			}
		}
	}
}