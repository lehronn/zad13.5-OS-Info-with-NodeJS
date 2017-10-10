var OSinfo = require('./modules/getOsInfo');

process.stdin.setEncoding('utf-8');

console.log('Hello, let`s write some commands:');

process.stdin.on('readable', function() {
  var input = process.stdin.read();
  
  if (input !== null) {
    var instruction = input.trim();
    switch(instruction) {
      case "exit":
        process.stdout.write('Program is quitting now.\n');
        process.exit();
      case "getOSinfo":
        OSinfo.print();
        break;
      case "nodejs-ver":
        console.log(process.versions.node);
        console.log('\n');
        break;
      case "lang":
        console.log(process.env.LANG);
        console.log('\n');
        break;
      case "help":
        console.log('available command is:\n exit for exit program\n help for help\n lang and nodejs-ver for infos. Thats all.\n');
        break;
      default:
        process.stderr.write('Wrong instruction! For help - write help command.\n');
        break;
    }
  }
});
