var myArgv = process.argv.slice(2);

for (var i = 0; i < myArgv.length; i++) {
 var string = "";
 for (var j = myArgv[i].length - 1; j >= 0; j--) {
   string += myArgv[i][j];
 }
 console.log(string);
}