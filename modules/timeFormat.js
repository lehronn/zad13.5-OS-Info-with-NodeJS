function sth(uptime) {
  var resultH = Math.floor(uptime / 3600);
  var resultM = Math.floor((uptime % 3600) / 60);
  var resultS = (uptime % 60);
  
  return resultH + 'h. ' + resultM + 'min. ' + resultS + 'sec.';
}

exports.sth = sth;
