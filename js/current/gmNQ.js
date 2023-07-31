var CharsAt = CharsAt;
var Processing = 0;
var IPath = window.top.FHIPR;

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function SetQuest(Newmode) {
	
	if (Newmode == 'Item') {
		getObj('Specialx').innerHTML = '<table class=\'weakcell\'><tr><td>Item Name:</td><td><input value=\'\' Name=\'ItemName\'></td><td>Quantity:</td><td><input value=\'1\' Name=\'Quality\' size=3 maxlength=3></td></tr></table>';
		getObj('QuestDescription').innerHTML = 'Please go and find [ItemQuantity] * [ItemName] for me!'
		getObj('QuestIncomplete').innerHTML = 'When you have found [ItemQuantity] * [ItemName], return to me and you can complete the quest!'
		getObj('QuestComplete').innerHTML = 'I see you found the [ItemName] now hand it over and the quest will be completed.'
		getObj('QC1').value = 'Hand over the Item!'
		getObj('QR1').value = 'Excellent, thank you!'
		getObj('QC2').value = ''
		getObj('QR2').value = ''
		getObj('QA2').value = ''
	} else if (Newmode == 'Hunt') {
		getObj('Specialx').innerHTML = '<table class=\'weakcell\'><tr><td>Race Name:</td><td><input value=\'\' Name=\'RaceName\'></td><td>Quantity:</td><td><input value=\'1\' Name=\'RaceKills\' size=3 maxlength=3></td></tr></table>';
		getObj('QuestDescription').innerHTML = 'Please go and kill [KillQuantity] * [KillRace] for me!'
		getObj('QuestIncomplete').innerHTML = 'When you have killed [KillQuantity] * [KillRace], return to me and you can complete the quest!'
		getObj('QuestComplete').innerHTML = 'I see you killed the last [KillRace] you needed.'
		getObj('QC1').value = 'Complete Quest!'
		getObj('QR1').value = 'Excellent, thank you!'
		getObj('QC2').value = ''
		getObj('QR2').value = ''
		getObj('QA2').value = ''
	} else {
		getObj('Specialx').innerHTML = '';
	}
}