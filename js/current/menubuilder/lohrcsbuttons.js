var rcsbuttons = new Array();

function AddButton(bid, text, url, picture1) {
	rcsbuttons[bid] = new Array();
	rcsbuttons[bid] = new UpdateButtonx(bid, text, url, picture1);
}


function AddSubMenu(bid, text, url, picture1) {
	var l = rcsbuttons[bid].submenus.length;
	rcsbuttons[bid].submenus[l] = new Array();
	rcsbuttons[bid].submenus[l] = new UpdateSubMenux(bid, text, url, picture1);
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

function UpdateSubMenux(bid, text, url, picture1) {
	this.bid = bid;
	this.text = text;
	this.url = url;
	this.picture1 = picture1;
	//this.clicktimer = 0;
}

function AddButtonImage(b, s, p) {
	if (s == 2) {
		rcsbuttons[b].picture2 = p;
	} else {
		rcsbuttons[b].picture3 = p;
	}
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

function ShowSubMenu(b) {
	var strout = '';
	var x = 0;
	for (x = 0; x < rcsbuttons[b].submenus.length; x++) {
		strout += '<div title="' + rcsbuttons[b].submenus[x].text + '" id="rcssm' + x + '" style="color: white; margin: 1px; padding: 0px; border: 1px solid RGB(30, 12, 4); background-Color: RGB(30, 12, 4); cursor: pointer;" onmouseover="RCSSMOver(' + b + ',' + x + ');" onclick="RCSSMClick(' + b + ',' + x + ');" onmouseout="RCSSMOut(' + b + ',' + x + ');"><table cellpadding=0 cellspacing=0 style="font-family: Helvetica; font-size: 8pt; color: white;"><tr><td style="width: 20px;">' + (rcsbuttons[b].submenus[x].picture1 != '' ? '<img src=\'https://lohcdn.com/menubuilder/' + rcsbuttons[b].submenus[x].picture1 + '\' width=16 height=16>' : '') + '</td><td>' + rcsbuttons[b].submenus[x].text + '</td></tr></table></div>'
	}
	strout += ''

	var rcspopup = getObj('rcspopup');
	if (rcspopup != null) {
		rcspopup.parentNode.removeChild(rcspopup);
	}

	var rcspopdiv = document.createElement("div");
	rcspopdiv.style.position = "absolute";
	rcspopdiv.style.border = "1px solid black";
	rcspopdiv.style.width = "140px";
	rcspopdiv.style.zIndex = 1000;
	rcspopdiv.style.backgroundColor = "RGB(30, 12, 4)";
	rcspopdiv.style.left = getObj('HEADERX').offsetLeft + getObj('rcsbutton' + b).offsetLeft + getObj('rcsbuttonbox').offsetLeft;
	rcspopdiv.style.top = getObj('rcsbutton' + b).offsetTop + getObj('rcsbuttonbox').offsetTop + 112;
	rcspopdiv.style.display = "";
	rcspopdiv.id = "rcspopup";
	//rcspopdiv.mouseout = HideSubMenu();
	rcspopdiv.innerHTML = strout;

	document.body.appendChild(rcspopdiv);

}

function RCSSMOver(b, x) {
	var bb = getObj('rcssm' + x);
	if (bb != null) {
		if (rcsbuttons[b] != null) {
			bb.style.border = '1px solid RGB(129, 87, 5)';
			bb.style.backgroundColor = 'RGB(129, 87, 5)';
		}
	}
}

function RCSSMOut(b, x) {
	var bb = getObj('rcssm' + x);

	if (bb != null) {
		if (rcsbuttons[b] != null) {
			bb.style.border = '1px solid RGB(30, 12, 4)';
			bb.style.backgroundColor = 'RGB(30, 12, 4)';
		}
	}
}

function RCSSMClick(b, x) {
	var bb = getObj('rcssm' + x);
	if (bb != null) {
		if (rcsbuttons[b] != null) {
			bb.style.backgroundColor = 'RGB(103, 46, 3)';
			if (rcsbuttons[b].submenus[x].url != '') {
				window.location.assign(rcsbuttons[b].submenus[x].url);
			}
		}
	}
}


function RCSBOver(b) {
	var bb = getObj('rcsbutton' + b);
	if (bb != null) {
		if (rcsbuttons[b] != null) {
			bb.style.backgroundImage = 'URL("https://lohcdn.com/menubuilder/images/' + rcsbuttons[b].picture2 + '")';
			if (rcsbuttons[b].submenus.length > 0) {
				ShowSubMenu(b);
			} else {
				HideSubMenu();
			}
			clearTimeout(rcsbuttons[b].clicktimer);
		}
	}
}

function RCSBOut(b) {
	var bb = getObj('rcsbutton' + b);

	if (bb != null) {
		if (rcsbuttons[b] != null) {
			bb.style.backgroundImage = 'URL("https://lohcdn.com/menubuilder/images/' + rcsbuttons[b].picture1 + '")';
			clearTimeout(rcsbuttons[b].clicktimer);
		}
	}
}

function RCSBClick(b) {
	var bb = getObj('rcsbutton' + b);
	if (bb != null) {
		if (rcsbuttons[b] != null) {
			bb.style.backgroundImage = 'URL("https://lohcdn.com/menubuilder/images/' + rcsbuttons[b].picture3 + '")';
			rcsbuttons[b].clicktimer = setTimeout(() => RCSBOver(b), 150);
			if (rcsbuttons[b].url != '') {
				window.location.assign(rcsbuttons[b].url);
			}
		}
	}
}