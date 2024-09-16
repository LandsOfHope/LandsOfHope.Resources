var xmlobj;
var ajaxget;
var ajaxsendpm;
var ajaxgetpm;
var chatrefresht = 0;
var pmrefresht = 0;
var lastpmrefresh = '';
var lastchatrefresh = '';
function ajaxerror(url, e1, et, e3) {
	if (e1 == null && et == null) {
		window.top.SendCommand('Your browser may not support AJAX (' + e3 + '), this may mean the game will not function correctly. Try going to File > Chat Options and turning off chat for improved performance.');
	} else {
		if (window.top.ErrorsOn != 0) {
			if (e1 == 12029) {
				window.top.SendCommand('AJAX Error: The chat system is currently unable to connect to the chat server, please check you are still connected to the internet. Chat will attempt to connect automatically every few seconds.');
			} else {
				window.top.SendCommand(`AJAX Error (${url}) at ${e3}: ${e1}, ${et}`);
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

async function sendRequest(doc) {
	await fetch(doc, {
		method: 'GET',
		headers: {
			'Cache-Control': 'no-cache'
		}
	}).then(async response => {
		if (response.ok) {
            const responseText = await response.text();
			eval(responseText);
		} else {
			ajaxerror(doc, response.status, response.statusText, 'Routine 1b');
		}
	}).catch(error => {
		ajaxerror(doc, null, null, 'Routine 1 in ' + doc);
	});
}