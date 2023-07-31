// Global variables
var IPath = "https://res.landsofhope.com/game/o/"


function Asp(x, y, l, t) {
var Picture = 'gkp.gif';
var Color2 = 'gold';
document.write('<img title=\'X: ' + x + ', Y: ' + y + ', Level: ' + l + ' ' + t + '\' style=\'cursor: pointer; position: absolute; width: 5; height: 5; left: ' + ((x * 5) + 20) + '; top: ' + ((y * 5) + 72) + '; border: 1px dashed ' + Color2 + ';\' src=\'' + IPath + Picture + '\' p="' + Picture +'" l=' + l + ' xx=' + x + ' yy=' + y + '>')
}
