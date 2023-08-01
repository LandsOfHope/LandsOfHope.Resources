var pic = "";
var FID = FID;
var played = 0;
var IPath = window.top.FHIPR;
var mask1 = '<IMG SRC="' + IPath + 'mpdra9.gif">';
var mask2 = '<IMG SRC="' + IPath + 'mpdra7.gif">';
var mask3 = '<IMG SRC="' + IPath + 'mpdra8.gif">';
var mask4 = '<IMG SRC="' + IPath + 'mpdra6.gif">';

var mask1s = '<IMG width=20 height=20 SRC="' + IPath + 'mpdra9.gif">';
var mask2s = '<IMG width=20 height=20 SRC="' + IPath + 'mpdra7.gif">';
var mask3s = '<IMG width=20 height=20 SRC="' + IPath + 'mpdra8.gif">';
var mask4s = '<IMG width=20 height=20 SRC="' + IPath + 'mpdra6.gif">';
var fancy, stake, level, winner;
var running = 0;
var stopped = 1;
var odds = new Array();
var step = new Array();

var band = '<form name=slots id=slots style="margin: 0px;" method=post action="g_hs.asp"><TABLE border=0 class="weakcell" cellpadding=0 cellspacing=0 WIDTH=300 HEIGHT=160 ALIGN=CENTER CELLPADDING=0 CELLSPACING=0><input name=FID id=FID type=hidden value=' + FID + '><input name=score id=score type=hidden value=0><TR>';
band += '<TD COLSPAN=4 ALIGN=CENTER VALIGN=MIDDLE><INPUT TYPE=TEXT NAME="msg" id="msg" SIZE=24 VALUE="" ></TD></TR>';
band += '<TR><TD ALIGN=CENTER VALIGN=MIDDLE>Your bet: <input type=box size=5 name=bet id=bet value=1 onclick="choose_stake(this.form,this.value);" onkeypress="fxkp2(event);" onpaste="event.returnValue = false;"></TD></TR>';
band += '<TR><TD><TABLE><TR><TD ALIGN=CENTER VALIGN=MIDDLE><INPUT TYPE=TEXT  NAME="box0" id="box0" SIZE=3 VALUE="" onfocus="blur(this)"><BR>' + mask1s + '<INPUT TYPE=RADIO NAME="back" id="back" VALUE="orange" onclick="choose_fancy(this.form,this.value);"></TD>';
band += '<TD ALIGN=CENTER VALIGN=MIDDLE><INPUT TYPE=TEXT  NAME="box1" id="box1" SIZE=3 VALUE="" onfocus="blur(this)"><BR>' + mask2s + '<INPUT TYPE=RADIO NAME="back" id="back" VALUE="pink" onclick="choose_fancy(this.form,this.value);"></TD>';
band += '<TD ALIGN=CENTER VALIGN=MIDDLE><INPUT TYPE=TEXT  NAME="box2" id="box2" SIZE=3 VALUE="" onfocus="blur(this)"><BR>' + mask3s + '<INPUT TYPE=RADIO NAME="back" id="back" VALUE="purple" onclick="choose_fancy(this.form,this.value);"></TD>';
band += '<TD ALIGN=CENTER VALIGN=MIDDLE><INPUT TYPE=TEXT  NAME="box3" id="box3" SIZE=3 VALUE="" onfocus="blur(this)"><BR>' + mask4s + '<INPUT TYPE=RADIO NAME="back" id="back" VALUE="yellow" onclick="choose_fancy(this.form,this.value);"></TD></TR></TABLE></TD></TR>';
band += '<TR><TD>Score: <input type=box size=5 name=gold id=gold READONLY value=10></td></tr>';

band += '<TR><TD ALIGN=CENTER VALIGN=MIDDLE>' + Adr('getObj(\'gold\').value = 10; init();', 'Reset', 'Reset') + Adr('stopplay();', 'End Game', 'End Game') + Adr('lets_go(getObj(\'slots\'));', 'Start Game', 'Start Game') + '</TD></TR>';
band += '</TABLE></FORM>';

var content = ('<DIV ID="trak" STYLE="position:absolute; top: 25; left:5; width:330; height:190;"></DIV>');
content += ('<DIV ID="line" STYLE="position:absolute; top: 25; left:287;width:  1; height:200; background:#FFFFFF;"></DIV>');
content += ('<DIV ID="redc" STYLE="position:absolute; top: 25; left:0; width: 40; height: 40;">' + mask1 + '</DIV>');
content += ('<DIV ID="grnc" STYLE="position:absolute; top: 67; left:0; width: 40; height: 40;">' + mask2 + '</DIV>');
content += ('<DIV ID="bluc" STYLE="position:absolute; top: 109; left:0; width: 40; height: 40;">' + mask3 + '</DIV>');
content += ('<DIV ID="yelc" STYLE="position:absolute; top: 151; left:0; width: 40; height: 40;">' + mask4 + '</DIV>');

function fxkp2(e) {
   e = e || window.event;
   if (e.keyCode < 45 || e.keyCode > 57) e.returnValue = false;
}

function startrace() {
   getObj('rstuff').innerHTML = content;
   getObj('book').innerHTML = band;
   getObj('gold').value = 10;
   init();
}

function init() {
   if (!running) {
      fancy = "";
      stake = "";
      level = "";
      stopped = 0;
      var i = 0;
      for (i = 0; i < 4; i++) {
         odds[i] = Math.round(Math.random() * 3) + 1;
         step[i] = eval(10 - odds[i]);
         odds[i] += "/1";
      }

      getObj('msg').value = "Place your bet ..."
      getObj('box0').value = odds[0];
      getObj('box1').value = odds[1];
      getObj('box2').value = odds[2];
      getObj('box3').value = odds[3];

      for (i = 0; i < 4; i++) {
         getObj("back")[i].checked = 0;
      }
      getObj('redc').style.left = 20;
      getObj('grnc').style.left = 20;
      getObj('bluc').style.left = 20;
      getObj('yelc').style.left = 20;
   }
}

function choose_fancy(f, color) {
   if (!running) {
      switch (color) {
         case "orange": level = odds[0]; break;
         case "pink": level = odds[1]; break;
         case "purple": level = odds[2]; break;
         case "yellow": level = odds[3]; break;
      }
      fancy = color;
      if (stake != "") getObj('msg').value = "Bet: " + fancy + " " + stake + " (" + level + ")";
      else getObj('msg').value = "Selected " + fancy + " drake";
   }
}
function choose_stake(f, amount) {
   if (!running) {
      stake = amount;
      if (fancy != "") getObj('msg').value = "Bet: " + fancy + " " + stake + " (" + level + ")";
      else getObj('msg').value = "Stake " + stake;
   }
}

function lets_go(f) {
   if (!running && stopped) init();
   if (!running && !stopped) {
      if (stake > parseInt(getObj('gold').value)) getObj('msg').value = "Cannot bet this amount!";
      else
         if (fancy == "") getObj('msg').value = "Select a color";
         else
            if (stake == "") getObj('msg').value = "Click a bet amount";
            else {
               running = 1;
               played = played + 1;
               Processing = 1;
               run_race();
            }
   }
}

function run_race() {
   var n = Math.floor(Math.random() * 4);
   switch (n) {
      case 0: getObj('redc').style.left = parseInt(getObj('redc').style.left) + step[0];
         if (parseInt(getObj('redc').style.left) >= 288) {
            getObj('redc').style.left = 288;
            winner = "orange";
            running = 0;
            stopped = 1;
         }
         break;

      case 1: getObj('grnc').style.left = parseInt(getObj('grnc').style.left) + step[1];
         if (parseInt(getObj('grnc').style.left) >= 288) {
            getObj('grnc').style.left = 288;
            winner = "pink";
            running = 0;
            stopped = 1;
         }
         break;

      case 2: getObj('bluc').style.left = parseInt(getObj('bluc').style.left) + step[2];
         if (parseInt(getObj('bluc').style.left) >= 288) {
            getObj('bluc').style.left = 288;
            winner = "purple";
            running = 0;
            stopped = 1;
         }
         break;

      case 3: getObj('yelc').style.left = parseInt(getObj('yelc').style.left) + step[3];
         if (parseInt(getObj('yelc').style.left) >= 288) {
            getObj('yelc').style.left = 288;
            winner = "yellow";
            running = 0;
            stopped = 1;
         }
         break;
   }


   if (running) {
      window.setTimeout(run_race, 100);
   } else {
      results();
   }
}

function results() {
   if (document.all) {
      if (winner == fancy) {
         var winnings = parseInt(stake) * parseInt(level.charAt(0));
         document.slots.msg.value = winner + " wins: win " + winnings;
         document.slots.gold.value = parseInt(document.slots.gold.value) + winnings;
         document.slots.score.value = document.slots.gold.value;
      }
      else {
         document.slots.msg.value = winner + " wins: lose " + stake;
         document.slots.gold.value = parseInt(document.slots.gold.value) - parseInt(stake);
         document.slots.score.value = document.slots.gold.value;
      }
      if (parseInt(document.slots.gold.value) == 0) var refill = true;
      if (refill) {
         document.slots.gold.value = 10;
         init();
      }
   }
   if (document.layers) {
      with (document.book) {
         if (winner == fancy) {
            var winnings = parseInt(stake) * parseInt(level.charAt(0));
            document.slots.msg.value = winner + " wins: win " + winnings;
            document.slots.gold.value = parseInt(document.slots.gold.value) + winnings;
            document.slots.score.value = document.slots.gold.value;
         }
         else {
            document.slots.msg.value = winner + " wins: lose" + stake;
            document.slots.gold.value = parseInt(document.slots.gold.value) - parseInt(stake);
            document.slots.score.value = document.slots.gold.value;
         }
         if (parseInt(document.slots.gold.value) == 0) var refill = true;
         if (refill) {
            document.slots.gold.value = 10;
            init();
         }
      }
   }
   Processing = 0
}

function stopplay() {
   if (Math.round(document.slots.gold.value) > 10) {
      document.slots.score.value = document.slots.gold.value;
      document.slots.submit()
   } else {
      window.top.SendCommand('<font id=tred>You do not have a score higher than you started with!!.</font>');
   }
}


function spy() {
   if (Math.abs(document.slots.gold.value) > 0) {
      window.event.returnValue = 'You still have ' + document.slots.gold.value + ' gold, if you close this page you will lose it.';
   }
}
