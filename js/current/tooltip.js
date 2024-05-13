var ie = document.all ? 1 : 0
var ns = document.layers ? 1 : 0
var ContentInfo = '';
var LoadingContent = 0;
var LayerTemp = 0;
var initialise = 0;
var ToolTipTimer = 0;

function Activate() { initialise = 1 }
function deActivate() { initialise = 0 }

function ReplaceContent(layerName) {
	if (initialise == 0 && LoadingContent == 0) {
		var ExtraTip = 0;
		if (window.top.frames['QuickBar'] != null) {
			if (window.top.frames['QuickBar'].document.getElementById(layerName) != null) {
				ExtraTip = 1;
			}
		}


		if (ExtraTip != 0) {
			if (window.top.frames['QuickBar'].document.getElementById(layerName).innerHTML != ContentInfo) {
				window.top.frames['QuickBar'].document.getElementById(layerName).innerHTML = ContentInfo
			}
		} else {
			if (window.top.getObj(layerName) != null) {
				if (window.top.getObj(layerName).innerHTML != ContentInfo) {
					window.top.getObj(layerName).innerHTML = ContentInfo
				}

				window.top.getObj(layerName).style.display = '';
				clearTimeout(ToolTipTimer);
				ToolTipTimer = setTimeout(hideTip, 2200);
			}
		}
	}
}

function InfoTip(TImg, TContent) {
	if (window.top.ToolTipOn != 0) {
		if (TImg != '' && TImg != null) {
			if (TImg.indexOf('.') == -1) {
				TImg = '';
			}
		}
		ContentInfo = '<div class="weakercell" style="height: 100%; overflow: hidden">' + (TImg != '' && TImg != null ? '<img src="' + TImg + '" style="float: left;">' : '') +
			'' + TContent + '' +
			'</div>';
		ReplaceContent('ToolTip');
	}
}

function InfoMap(TImg2, TImg3, Color, TContent) {
	if (window.top.ToolTipOn != 0) {
		ContentInfo = '<table border="0" width="100%" cellspacing="0" cellpadding="0" style="height: 100%">' +
			'<tr height="20">' + (TImg2 != '' || TImg3 != '' ? '<td width=20 class=\'c' + Color + '\' ' + (TImg2 != '' && TImg3 != '' ? 'background="' + FHIPM + TImg2 + '"' : '') + '><img src="' + FHIPM + (TImg3 == '' ? TImg2 : TImg3) + '">' : '<td>') + '</td><td align=top colspan=2 width="100%" class="weakercell" style="padding-left: 2px">' +
			'' + TContent + '' +
			'</td></tr><tr height="100%"><td></td></tr></table>';
		ReplaceContent('ToolTip');
	}
}

function EnterContent2(URL) {
	initialise = 0;
	LoadingContent = 0;
	ContentInfo = '<iframe border="0" NORESIZE SCROLLING=AUTO HSPACE=0 VSPACE=0 FRAMEBORDER=0 MARGINHEIGHT=0 width="100%" cellspacing="0" cellpadding="0" src="' + URL + '" style="height: 60px"></iframe>'
	ReplaceContent('ToolTip')
	LoadingContent = 1;
}

function getTitles(tText, tc) {
	var match = 0;
	var returnx = '';
	if (tText == 'Test') {
		returnx = 'This is a testing button';
	} else {
		returnx = tc;
	}
	return returnx
}

function hideTip() {
	clearTimeout(ToolTipTimer);
	window.top.getObj('ToolTip').style.display = 'none';
}
