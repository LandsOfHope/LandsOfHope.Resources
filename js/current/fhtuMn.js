var Processing = 0;
document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function PromptReturn(returnVal, pb) {
	if (returnVal != null) {
		if (pb != null && Processing == 0) {
			Processing = 1;
			getObj('Messy').submit();
		}
	}
}