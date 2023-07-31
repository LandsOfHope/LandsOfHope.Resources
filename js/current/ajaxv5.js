var xmlobj;
var ajaxget;
var ajaxsendpm;
var ajaxgetpm;
var chatrefresht = 0;
var pmrefresht = 0;
var lastpmrefresh = '';
var lastchatrefresh = '';
function ajaxerror(e1, et, e3) {
	if (e1 == null && et == null) {
		window.top.SendCommand('Your browser may not support AJAX (' + e3 + '), this may mean the game will not function correctly. Try going to File > Chat Options and turning off chat for improved performance.');
	} else {
		if (window.top.ErrorsOn != 0) {
			if (e1 == 12029) {
				window.top.SendCommand('Chat Error: The chat system is currently unable to connect to the chat server, please check you are still connected to the internet. Chat will attempt to connect automatically every few seconds.');
			} else {
				window.top.SendCommand('Chat Error at ' + e3 + ': ' + e1 + ', ' + et);
			}
		}
	}
}

function getXmlHttpRequestObject() {
	if (window.XMLHttpRequest) {
		return new XMLHttpRequest();
	} else {
	        try{ return new ActiveXObject("MSXML3.XMLHTTP") }catch(e){}
	        try{ return new ActiveXObject("MSXML2.XMLHTTP.3.0") }catch(e){}
	        try{ return new ActiveXObject("Msxml2.XMLHTTP") }catch(e){}
	        try{ return new ActiveXObject("Microsoft.XMLHTTP") }catch(e){}
	}
}

function sendRequest(doc){
	if (xmlobj != null) {
		// open socket connection
		xmlobj.open('GET',doc,true);
		// send GET request
		xmlobj.setRequestHeader("Cache-Control", "no-cache");
		xmlobj.onreadystatechange = function(){
 
			if (xmlobj.readyState == 4 && xmlobj.status == 200) {
 
				if (xmlobj.responseText){
					var r = eval(xmlobj.responseText);
				}
				setChatRefresh();
			} else if (xmlobj.readyState == 4 && xmlobj.status != 200) {
				ajaxerror(xmlobj.status, xmlobj.statusText, 'Routine 1b');
			}
		};


		xmlobj.send(null);
	} else {
		ajaxerror(null, null, 'Routine 1 in ' + doc);
	}
}

function sendRefresh(doc){
	if (ajaxget != null) {
		// open socket connection
		ajaxget.open('GET',doc + '&ws=' + window.top.getObj('WindowSize').value,true);
		ajaxget.setRequestHeader("Cache-Control", "no-cache");
		ajaxget.onreadystatechange = function(){
 
			if (ajaxget.readyState == 4) {
				if (ajaxget.status == 200) {
 
					if (ajaxget.responseText){
 	
						var r = eval(ajaxget.responseText);
					}
				} else {
					ajaxerror(ajaxget.status, ajaxget.statusText, 'Routine 2b');
				}
				lastchatrefresh = doc;
				setChatRefresh();
			}
		};
		ajaxget.send(null);
	} else {
		ajaxerror(null, null, 'Routine 2');
	}
}

function setChatRefresh() {
	if (chatrefresht != 0) {
		clearTimeout(chatrefresht  )
	}
	if (lastchatrefresh != '') {
		chatrefresht  = setTimeout('sendRefresh(\'' + lastchatrefresh + '\');', getChatRate());
	}
}

function sendRequest2(doc){
	if (ajaxsendpm != null) {
		// open socket connection

		ajaxsendpm.open('GET',doc,true);
		ajaxsendpm.setRequestHeader("Cache-Control", "no-cache");
		ajaxsendpm.onreadystatechange = function(){
 
			if (ajaxsendpm.readyState == 4 && ajaxsendpm.status == 200) {
 
				if (ajaxsendpm.responseText){
 
					var r = eval(ajaxsendpm.responseText);
				}
				setPMRefresh();
			} else if (ajaxsendpm.readyState == 4 && ajaxsendpm.status != 200) {
				ajaxerror(ajaxsendpm.status, ajaxsendpm.statusText, 'Routine 3b');
			}
		};
		ajaxsendpm.send(null);
	} else {
		ajaxerror(null, null, 'Routine 3');
	}
}

function sendPMRefresh(doc){
	if (ajaxgetpm != null) {
		// open socket connection
		ajaxgetpm.open('GET',doc,true);
		ajaxgetpm.setRequestHeader("Cache-Control", "no-cache");
		ajaxgetpm.onreadystatechange = function(){
 
			if (ajaxgetpm.readyState == 4) {
				if (ajaxgetpm.status == 200) { 
					if (ajaxgetpm.responseText){
 	
						var r = eval(ajaxgetpm.responseText);
					}
				} else {
					ajaxerror(ajaxgetpm.status, ajaxgetpm.statusText, 'Routine 4b');
				}
				lastpmrefresh = doc;
				setPMRefresh();
			}
		};
		ajaxgetpm.send(null);
	} else {
		ajaxerror(null, null, 'Routine 4');
	}
}

function setPMRefresh() {
	if (pmrefresht != 0) {
		clearTimeout(pmrefresht)
	}
	if (lastpmrefresh  != '') {
		pmrefresht = setTimeout('sendPMRefresh(\'' + lastpmrefresh  + '\');', getChatRate());
	}
}


function getChatRate() {
	var cr = window.top.ChatRate;
	if (cr < 5) {
		cr = 15;
	}
	cr = cr * 1000;
	return cr;
}
				
//sendRequest("fetchitem.php?item_id="+itemId+"&inv_id="+invId+"&t="+type+"&p="+pid+"&uid="+1190194002);
//savedItemData[index] = xmlobj.responseText+finalStr;
