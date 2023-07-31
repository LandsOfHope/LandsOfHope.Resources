var IPath = window.top.FHIPM;
var IPath2 = window.top.FHIPI;
var Processing = 0;
var PageNo = PageNo;
var LastRoom = -1;
var IC = 0;
var Rooms = new Array();
var InventoryItemID = InventoryItemID;
var Filter = Filter;

document.write('<script src="js/formatting.js" language="JavaScript"></script>');

function AC(BuildingID, BuildingName, MapX, MapY, GameID, BuildingItemID, Quantity, Amount, ItemID, Material, MaterialType) {
var Color = LITE;
if (BuildingItemID == 0) {
	Color = 'green';
} else {
	if (Amount >= Quantity) {
		Color = 'red';
	} else {
		Color = 'yellow';
	}
}
if (Rooms[IC] == null) {
	Rooms[IC] = new Array();
}

var ap1 = window.parent.GetPerc(Quantity, Amount)
var ap1t = window.top.PercentBoxR(ap1,Color,'' + Amount + ' / ' + Quantity + ' (' + ap1 + '%)')

Rooms[IC] = new newInfo(Color, BuildingID, BuildingName, MapX, MapY, GameID, BuildingItemID, Quantity, Amount, ItemID, Material, MaterialType);
document.write('<tr id="I' + IC + '" onmouseover="PC(' + IC + ')" onmouseout="RC(' + IC + ')" style="padding-left: 5px;"><td width=\'100%\'><table cellpadding=1 cellspacing=1 class="weakcell"><tr><td width=275><b style="color: ' +  Color + ';">' + BuildingName + '</b></td><td width=60>' + (Material == '' ? (Quantity == 1 ? Adir('configurex(' + IC + ');', 'Configure Automation', 'package', '') : Adir('placex(' + IC + ');', 'Place Automation', 'package_add', '')) : Adir('retrievex(' + IC + ');', 'Retrieve resource', 'package_go', '')) + '</td><td>' + (Material != '' ? ap1t : '') + '</td></tr><tr><td>Location: ' + MapX + ', ' + MapY + ' ' + window.top.GetRealm(GameID) + '</td><td></td><td>' + (Material != '' ? 'Producing: <b>' + Material  + '</b>' : '') + '</td></tr></table></td></tr>');
IC = IC + 1;
}

function configurex(v) {
	LastRoom = v;
	if (Rooms[v].Material == '') {
		//Allow the configuration of materials
		SelectMaterial('Which materials should this automation produce:', 1, '','Material Selection',null, Rooms[v].MaterialType);
	} else {
		//Show the gather screen
	}
}

function globalmat() {
	var x = 0;
	var m = -1;
	for (x = 0; x < IC; x++) {
		if (Rooms[x].Material == '' && Rooms[x].BuildingItemID > 0) {
			m = x;
			break;
		}
	}
	if (m >= 0) {
		LastRoom = m;
		//Allow the configuration of materials
		SelectMaterial('Which materials should all of this type of automation produce:', 3, '','All Material Selection',null, Rooms[m].MaterialType);
	} else {
		alert('No valid automations found');
	}
}

function placex(v) {
	LastRoom = v;
	SelectAutomation('Place an automation:', 2, '','Automation Selection','', Rooms[v].ItemID);
}

function retrievex(v) {
	LastRoom = v;
	window.location.replace('fhgnome.asp?InventoryItemID=' + InventoryItemID + '&Filter=' + Filter + '&P=' + PageNo + '&Type=1&ItemID=' + Rooms[v].BuildingItemID);
}

function SelectMaterial(message, pb, defaultvalue, title, icon, style) {
	if (title == undefined) {
		title = '';
	}
	if (icon == undefined) {
		icon = '';
	}
	if (style == undefined) {
		style = '';
	}
	window.top.showPopWin("picker_mat.asp?message=" + message + "&defaultvalue=" + defaultvalue + "&title=" + title + "&icon=" + icon + "&style=" + style, 350, 250, PromptReturn, null, title, pb);
}

function SelectAutomation(message, pb, defaultvalue, title, icon, style) {
	if (title == undefined) {
		title = '';
	}
	if (icon == undefined) {
		icon = '';
	}
	if (style == undefined) {
		style = '';
	}
	window.top.showPopWin("picker_aut.asp?message=" + message + "&defaultvalue=" + defaultvalue + "&title=" + title + "&icon=" + icon + "&style=" + style, 350, 250, PromptReturn, null, title, pb);
}

function newInfo(Color, BuildingID, BuildingName, MapX, MapY, GameID, BuildingItemID, Quantity, Amount, ItemID, Material, MaterialType) {
this.c = Color;
this.BuildingID = BuildingID;
this.BuildingName = BuildingName;
this.MapX = MapX;
this.MapY = MapY;
this.GameID = GameID;
this.BuildingItemID = BuildingItemID;
this.Quantity = Quantity;
this.Amount = Amount;
this.ItemID = ItemID;
this.Material = Material;
this.MaterialType = MaterialType;
}

function GoP(p) {
window.location.replace('?P=' + p + '&Filter=' + Filter + '&InventoryItemID=' + InventoryItemID);
}

function PromptReturn(returnVal, pb) {
	var v = LastRoom;
	if (returnVal != null && pb != null && Processing == 0) {
		if (pb == 1) {
			//Select material
			Processing = 1;
			window.location.replace('fhgnome.asp?InventoryItemID=' + InventoryItemID + '&Filter=' + Filter + '&P=' + PageNo + '&Type=2&ItemID=' + Rooms[v].BuildingItemID + '&Mat=' + returnVal);
		} else if (pb == 2) {
			//Select Automation
			Processing = 1;
			window.location.replace('fhgnome.asp?InventoryItemID=' + InventoryItemID + '&Filter=' + Filter + '&P=' + PageNo + '&Type=3&ItemID=' + Rooms[v].BuildingID + '&Auto=' + returnVal);
		} else if (pb == 3) {
			//Select
			Processing = 1;
			window.location.replace('fhgnome.asp?InventoryItemID=' + InventoryItemID + '&Filter=' + Filter + '&P=' + PageNo + '&Type=4&ItemID=' + Rooms[v].BuildingItemID + '&Mat=' + returnVal);
		}
	}

}

function RC(v) {
getObj('I' + v).style.cursor = '';
getObj('I' + v).style.backgroundColor='';
}

function PC(v) {
window.top.InfoTip('', '<b>' + Rooms[v].BuildingName + '</b>');
getObj('I' + v).style.cursor = 'pointer';
getObj('I' + v).style.backgroundColor=BGCOLOR_S
}