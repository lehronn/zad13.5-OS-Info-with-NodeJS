var os = require('os');
var colors = require('colors');
var timeFormat = require('./timeFormat');

function getOSinfo() {
  var type = os.type();
  var release = os.release();
  var CPU = os.cpus()[0].model;
  var uptime = os.uptime();
  var userInfo = os.userInfo();

  if(type === 'Darwin') {
    type = 'OSX';
  }
    else if(type === 'Windows_NT') {
      type = 'Windows';
    }
  console.log('\nSystem:'.green , type);
  console.log('Release:'.red , release);
  console.log('CPU: '.yellow + CPU);
  console.log('User name:'.blue , userInfo.username);
  console.log('Home dir:'.magenta , userInfo.homedir);
  console.log('Uptime:'.cyan, timeFormat.sth(uptime));
}
exports.getOSinfo = getOSinfo;
