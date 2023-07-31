/**
 * Dynamically updates the content of a frame.
 * 
 */
function update(frame, id, html) {

	var doc = eval(frame + '.document');

	if (doc.layers) {
		var l = doc[id];
		l.document.open();
		l.document.write(html);
		l.document.close();
	} else if (doc.all && doc.all[id]) {
		doc.all[id].innerHTML = html;
	} else if (doc.createRange) {
		var l = doc.getElementById(id);
		var r = doc.createRange();
		while (l.hasChildNodes()) {
			l.removeChild(l.lastChild);
		}
		r.setStartAfter(l);
		var docFrag = r.createContextualFragment(html);
		l.appendChild(docFrag);
	}

}

function update2(blankbox, id, html) {
	if (document.getElementById(id) != null) {
		document.getElementById(id).innerHTML = html;
	}

}

function updatePrivateMessages(id, html, bottom) {
	update2('parent.messages', 'pmmessages', html);
	setTimeout('scrollToBottom2(' + bottom + ');', 10);
}

function scrollToBottom2(bottom) {
	var div_id = 'pmmessages';
	var scrollDiv = document.getElementById(div_id);

	//alert(2);
	if (scrollDiv.pageYOffset) {
		scrollDiv.pageYOffset = (bottom == -1 ? scrollheightx(scrollDiv) : 0)
	} else {
		scrollDiv.scrollTop = (bottom == -1 ? scrollheightx(scrollDiv) : 0);
	}
}


function updateRooms(id, html) {
	//update('top', id, html);
}

function setChannelName(n) {
	if (getObj('channelname') != null) {
		getObj('channelname').innerHTML = n;
	}
}


function focusMessageArea() {
	if (getObj('message') != null) {
		getObj('message').focus();
	}
}

function scrollToBottom(bottom) {
	window.top.divScroll.activeScroll();
}

function scrollheightx(scrollDiv) {
	var y = 0;
	var test1 = scrollDiv.scrollHeight;
	var test2 = scrollDiv.offsetHeight;
	if (test1 > test2) {
		y = scrollDiv.scrollHeight;
	} else {
		y = scrollDiv.offsetHeight;
	}
	return y;
}