var os = require('os');
var getOS = require('./getOsInfo');

var uptime = os.uptime();
var result;
var resultH;
var resultM;
var resultS;

//function stm(uptime) {
//resultM = Math.floor(uptime/60);
//resultS = (uptime % 60);
//console.log(resultM + 'min. ' + resultS + 'sec.');
//}

function sth(uptime) {
var resultH = Math.floor(uptime / 3600);
var resultM = Math.floor((uptime % 3600) / 60);
var resultS = (uptime % 60);
console.log(resultH + 'h. ' + resultM + 'min. ' + resultS + 'sec.');
}

exports.print = sth;
