var SoundTimer = 0;
var LastSound = '';
//var FHIPMS = window.top.FHIP + 'sounds/';
var FHIPMS = 'https://lohcdn.com/game/sounds/';

function PGS(strFile) {

	//window.top.SendCommand('Sound check');

	if (window.top.USS != 0 && window.top.USS != null) {
		strFile = strFile.replace(/wav/i, "mp3");
		//window.top.SendCommand('' + FHIPMS  + '' + strFile);

		clearTimeout(SoundTimer);
		LastSound = '' + strFile;
		//id=Sounds name=Sounds 

		try {
			if (window.top.soundManager != null) {
				var mySound = window.top.soundManager.createSound({
					id: strFile.replace(/.mp3/i, ""),
					url: FHIPMS + '' + strFile
				});
				mySound.play();
			}
		} catch (e) {
		}

	}
}


function PGSNC(strFile) {
	clearTimeout(SoundTimer);
	LastSound = '' + strFile;

	try {
		strFile = strFile.replace(/wav/i, "mp3");
		//window.top.SendCommand('' + FHIPMS  + '' + strFile);
		if (window.top.soundManager != null) {
			var mySound = window.top.soundManager.createSound({
				id: strFile.replace(/.mp3/i, ""),
				url: FHIPMS + '' + strFile
			});
			mySound.play();
		}
	} catch (e) {
	}

}

function PGS2(strfile, strfile2, timer2) {
	if (window.top.USS != 0 && window.top.USS != null) {
		PGS(strfile);
		if (timer2 == null) { timer2 = 500 }
		clearTimeout(SoundTimer);
		SoundTimer = setTimeout('PGS("' + strfile2 + '");', timer2);
	}
}
