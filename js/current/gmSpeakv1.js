document.write('<script src="https://lohcdn.com/js/current/formatting.js" language="JavaScript"></script>');

function PostSpeak(speakvalue) {
	getObj('Message').value = tinyMCE.get('Message').getContent();
	getObj('tt').value = speakvalue;
	stufff.submit();
}