var count = 1;
var Processing = 0;
var IPath = window.top.FHIPI;
var IC = 0;
var Infos = new Array();
document.write('<script src="js/formatting.js" language="JavaScript"></script>');


var Scratches = 22;

function Scratch(v) {
	if (Infos[v].image != 1) {
		Scratches = Scratches - 1;
		getObj('I' + v).style.cursor = 'pointer';
		Infos[v].image = Infos[v].image - 2;
		getObj('I' + v).src = 'https://lohcdn.com/images/scratch' + Infos[v].image + '.gif';
		if (Infos[v].image == 1) {
			getObj('I' + v).style.cursor = '';
			getObj('I' + v).title = Infos[v].t
		}
		if (Scratches <= 0) {
			getObj('winners').style.display = '';
		}
	}
}

function AM(Picture, Named) {
	if (Infos[IC] == null) {
		Infos[IC] = new Array();
	}
	Infos[IC] = new newInfo(Picture, Named);
	if (count == 0) {
		document.write('<tr>');
	}
	document.write('<td id="IP' + IC + '"><img id="I' + IC + '" src=\'https://lohcdn.com/images/scratch5.gif\' style=\'cursor: pointer; background-image:URL(https://lohcdn.com/game/' + Picture + ');\' title=\'Scratch me!\' onclick=\'Scratch(' + IC + ')\'></td>');
	count = count + 1
	if (count == 5) {
		document.write('</tr>');
		count = 1;
	}
	IC = IC + 1;
}

function newInfo(Picture, Named) {
	this.p = Picture;
	this.image = 5;
	this.t = Named;
	this.scratching = 0;
}