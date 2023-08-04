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
		try { return new ActiveXObject("MSXML3.XMLHTTP") } catch (e) { }
		try { return new ActiveXObject("MSXML2.XMLHTTP.3.0") } catch (e) { }
		try { return new ActiveXObject("Msxml2.XMLHTTP") } catch (e) { }
		try { return new ActiveXObject("Microsoft.XMLHTTP") } catch (e) { }
	}
}

function sendRequest(doc) {
	if (xmlobj != null) {
		// open socket connection
		xmlobj.open('GET', doc, true);
		// send GET request
		xmlobj.setRequestHeader("Cache-Control", "no-cache");
		xmlobj.onreadystatechange = function () {

			if (xmlobj.readyState == 4 && xmlobj.status == 200) {

				if (xmlobj.responseText) {
					var r = eval(xmlobj.responseText);
				}
			} else if (xmlobj.readyState == 4 && xmlobj.status != 200) {
				ajaxerror(xmlobj.status, xmlobj.statusText, 'Routine 1b');
			}
		};


		xmlobj.send(null);
	} else {
		ajaxerror(null, null, 'Routine 1 in ' + doc);
	}
}