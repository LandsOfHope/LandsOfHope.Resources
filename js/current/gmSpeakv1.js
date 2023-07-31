document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function PostSpeak(speakvalue) {
	getObj('Message').value = tinyMCE.get('Message').getContent();
	getObj('tt').value = speakvalue;
	stufff.submit();
}