var lastp = -1;
var lastp3 = '';
var lasttab = 1;
var pc = 0;
var Toggle = T;
var Shop = 0;
var counter = 0;
var RaceID;
var p2 = '';
var Profs = new Array(12);
var PageNo = PageNo;
var IPath = 'https://lohcdn.com/game/r/';
var FormProcessing = 0;
var returnVal = null;

function TabName(i) {
    return (i == 1 ? "Step 1" : (i == 2 ? "Step 2" : (i == 3 ? "Step 3" : "Finish")))
}

function getObj(objn) {
    if (document.getElementsByName(objn).length <= 1) {
        return document.getElementById(objn);
    } else {
        return document.getElementsByName(objn);
    }
}


function GoP(PageNo) {
    FormProcessing = 1;
    getObj('P').value = PageNo;
    getObj('NewForm').submit();
}

function GoP2(PageNo, s) {
    if (FormProcessing == 0) {
        FormProcessing = 1;
        getObj('P').value = PageNo;
        getObj('Server').value = s;
        getObj('NewForm').submit();
    } else {
        alert('You have already clicked on the button, please wait for your character to be created');
    }
}

function DrawHeaders(hn, pc) {
    var strTest = '';
    var v = 0;
    var tn = '';
    var i = 0;
    for (i = 1; i <= 4; i++) {
        v = v + 1;

        var tn = TabName(i);
        strTest += ("<td valign=bottom></td><td style='background-image: URL(https://lohcdn.com/images/blankbutton" + (i < PageNo ? "2" : "1") + ".png); background-position: bottom; background-color: transparent; width:100px;' align=center><a class='tab' href='javascript:GoP(" + i + ");' style='" + (i < PageNo ? "color: #66ff66;" : (i == PageNo ? "color: yellow;" : "")) + "' title='" + tn + "'>" + tn + "</a></td>")
        if (v >= 20) {
            strTest += "</tr><tr>";
            v = 0;
        }
    }
    return "<table cellpadding=1 cellspacing=1 border=0 height='25px'><tr><td width=160 class=title>" + hn + "</td>" + strTest + "<td valign=bottom></td></tr></table>";
}

function updatecn() {
    getObj('CharacterName').value = getObj('CN2').value
    DC2();

}

function setTutorial() {
    if (getObj('Tutorialx').checked == true) {
        getObj('Tutorial').value = 1;
    } else {
        getObj('Tutorial').value = 0;
    }
    DC2();

}

function DrawFooters(vn, p) {
    var strTest = '';
    strTest = "<td valign=bottom></td><td style='background-image: URL(https://lohcdn.com/images/blankbutton2.png); background-position: bottom; background-color: transparent; width:100px' align=center><a class='tab' href=\"javascript: window.top.hidePopWin(true);\" title=\"Close this window\">Close</a></td>";
    return "<table cellpadding=1 cellspacing=1 border=0 height='25px'><tr><td width=240>&nbsp;</td>" + strTest + "<td valign=bottom></td></tr></table>";
}

function AM(IID, PictureID, Itty, p2p, pt) {
    var Color = 'white';
    var c2 = 'black';
    if (IID == getObj('ProfessionID').value) {
        lastp3 = Itty;
    }
    Profs[counter] = new Array(4);
    Profs[counter][0] = IID;
    Profs[counter][1] = PictureID;
    Profs[counter][2] = Itty;
    Profs[counter][3] = p2p;
    Profs[counter][4] = pt;

    counter = counter + 1;
}

function DC(stuff) {
    lastp = stuff;
    getObj('thepic').value = '';
    getObj('ProfessionID').value = Profs[stuff][0];
    var y = stuff;
    lastp3 = Profs[stuff][2];
    GoP(2);
}

function DC2() {
    if (getObj('Results') != undefined) {
        getObj('PreviewPic').innerHTML = (getObj('thepic').value == '' ? '' : '<img src=\'' + IPath + getObj('thepic').value + '\' onerror=\'this.src="https://lohcdn.com/na.gif"\'>');
        getObj('Results').innerHTML = '<table class=\'specialcell\' cellpadding=1 cellspacing=1><tr><td colspan=3><b>Checklist</b></td></tr><tr><td><b>Step 1</b></td><td>Profession ' + (lastp3 != '' ? '' + lastp3 + '</td><td><img src="https://lohcdn.com/game/icons/tick.png" alt="Complete">' : '</td><td><img src="https://lohcdn.com/game/icons/cross.png" alt="Incomplete">') + '</td></tr><tr><td><b>Step 2</b></td><td>Sex ' + (getObj('Sex').value != '' ? '' + (getObj('Sex').value == 'M' ? 'Male' : 'Female') + '</td><td><img src="https://lohcdn.com/game/icons/tick.png" alt="Complete">' : '</td><td><img src="https://lohcdn.com/game/icons/cross.png" alt="Incomplete">') + '</td></tr><tr><td></td><td>Picture' + (getObj('thepic').value != '' ? '</td><td><img src="https://lohcdn.com/game/icons/tick.png" alt="Complete">' : '</td><td><img src="https://lohcdn.com/game/icons/cross.png" alt="Incomplete">') + '</td></tr><tr><tr><td></td><td>Player Name' + (getObj('CharacterName').value != '' ? '</td><td><img src="https://lohcdn.com/game/icons/tick.png" alt="Complete">' : '</td><td><img src="https://lohcdn.com/game/icons/cross.png" alt="Incomplete">') + '</td></tr></table>';
        if (PageNo == 3) {
            if (getObj('Results').innerHTML.indexOf('cross.png') != -1) {
                returnVal = null;
                getObj('Buttons').innerHTML = "Please review the following check list, if any steps show up incomplete please go back and complete them.";
            } else {
                getObj('Buttons').innerHTML = "Congratulations, everything seems to be in order please click the server button below to make your character.<br><table width=500 cellpadding=2 cellspacing=2><tr><td class='box2'><table width=455 height='80px' cellpadding=1 cellspacing=1><tr><td>The Hope server is the main game server, there are currently no other servers (if you used to play you will notice there is no Hellsgate/Trollsgrove anymore just Hope).</td></tr><tr height='100%'><td></td></tr><tr><td align=center><a href='javascript:GoP2(4, 1);' style='color: green' valign=bottom><img src='https://lohcdn.com/images/server1.png' alt='Pick Hope' border=0></a></td></tr></table></td></tr></table></td></tr>";
            }
        }
    }
}


function RC(stuff) {
    stuff.style.cursor = '';
}

function PC(y) {
    getObj('ProfBoxInfo').innerHTML = '<table><tr><td><b>' + Profs[y][2] + '</b></td></tr><tr><td class=\'specialcell\'><div style=\'height: 108; overflow: hidden;\'>' + Profs[y][4] + '<br><a href=\'pesd.asp?CharsAt=' + Profs[y][0] + '\' target=\'_blank\' title=\'More information on ' + Profs[y][2] + '\'>More Info...</a></div></td></tr></table>';
    getObj('p' + y).style.cursor = 'pointer';
}

function DrawProfs() {
    var strout = '';
    var y = 0;
    var p = 0;
    for (y = 0; y < counter; y++) {
        p = p + 1
        strout = strout + '<div style="float: left; width: 140; padding: 2px; height: 32px;" id="p' + y + '" onclick="DC(' + y + ')" onmouseover="PC(' + y + ')" onmouseout="RC(this)" title="Click to pick ' + Profs[y][2] + '" style=\'color: white;\'><img src=\'https://lohcdn.com/images/' + Profs[y][1] + '\' alt=\'Click to pick ' + Profs[y][2] + '\'></div>';

        //<tr><td class=\'specialcell\'><div style=\'height: 68; overflow: hidden;\'>' + Profs[y][4] + '<br><a href=\'pesd.asp?CharsAt=' + Profs[y][0] + '\' target=\'_blank\' title=\'More information on ' + Profs[y][2] + '\'>More Info...</a></div></td></tr>

    }
    if (getObj('ProfBox') != undefined) {
        getObj('ProfBox').innerHTML = '<div width=300 height=130>' + strout + '</div>';
        if (lastp >= 0) {
            getObj('p' + lastp).click();
        }
    }
}

function tgl(IID) {
    RaceID = 1;
    if (getObj('Sex').value == 'M') {
        p2 = 'M'
    } else {
        p2 = 'F'
    }
    DC2();
    DrawProfs();
}

function ShowRaces() {
    var i = 0;
    var v = 1;
    for (i = 0; i < getObj('Sexx').length; i++) {
        if (getObj('Sexx')[i].checked == true) {
            getObj('Sex').value = getObj('Sexx')[i].value;
            v = i + 1;
        }
    }

}

function SetPicx(strPic) {
    getObj('thepic').value = strPic;
    DC2();
}

function ShowPics() {
    var i = 0;
    var v = 1;
    for (i = 0; i < getObj('Sexx').length; i++) {
        if (getObj('Sexx')[i].checked == true) {
            getObj('Sex').value = getObj('Sexx')[i].value;
            v = i + 1;
        }
    }

    var strout = '';
    var y = 0;
    var Sex = getObj('Sex').value.toLowerCase();
    var Ethnic = getObj('Ethnic').value;
    if (Sex == '') {
        strout = "<tr><td></td></tr>";
    } else {

        switch(Ethnic) {
            case 'hag': {
                var RacePics = [['mjphag.gif', 'mjphag2.gif', 'mjphag3.gif', 'mjphag4.gif', 'mjphag5.gif', 'mjphag6.gif', 'mjphag7.gif', 'mjphag8.gif']];
            } break;
            case 'glad': {
                var RacePics = [['mjpglad' + Sex + '1.gif', 'mjpglad' + Sex + '2.gif', 'mjpglad' + Sex + '3.gif', 'mjpglad' + Sex + '4.gif']];
            } break;
            default: {
                var RacePics = [
                    [...Array(7).keys().map(i => `sohu${Sex}${i+1}.gif`)],
                    [...Array(5).keys().map(i => `bla${Sex}${i+1}.gif`)],
                    [...Array(5).keys().map(i => `asi${Sex}${i+1}.gif`)],
                ];
            }
        }

        const selectableImg = (pic) => `<td onclick="SetPicx('${pic}')" style="cursor: pointer" width="44" align=center height="44"><img src="${IPath}${pic}" alt="Picture ${pic}"></td>`;
        const imgRow = (pics) => `<tr>${pics.map(selectableImg).join('')}</tr>`;

        strout = RacePics.map(imgRow).join('');
    }
    getObj('PictureBox').innerHTML = "<table>" + strout + "</table>";
}

function ShowRacesE() {
    var i = 0;
    var v = 1;
    for (i = 0; i < getObj('Ethnicx').length; i++) {
        if (getObj('Ethnicx')[i].checked == true) {
            getObj('Ethnic').value = getObj('Ethnicx')[i].value;
            v = i + 1;
        }
    }
    ShowRaces2();
}


function SetSex() {
    var i = 0;
    for (i = 0; i < getObj('Sexx').length; i++) {
        if (getObj('Sexx')[i].value == Sex) {
            getObj('Sexx')[i].checked = true;
        } else {
            getObj('Sexx')[i].checked = false;
        }
    }
    if (getObj("Tutorial").value == 1) {
        getObj("Tutorialx").checked = true;
    } else {
        getObj("Tutorialx").checked = false;
    }
}

function ShowRaces3() {
    ShowRaces2();
}

function ShowRaces2() {
    ShowRaces();
    ShowPics();
    tgl(1);
}