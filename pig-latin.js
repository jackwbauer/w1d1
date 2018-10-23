var myArgs = process.argv.splice(2);
console.log(pigLatin(myArgs))

function pigLatin(words) {
  var string = "";
  for(var i = 0; i < words.length; i++) {
    if(i > 0) {
      string += " ";
    }
    for(var j = 1; j < words[i].length; j++) {
      string += words[i][j];
    }
    string += words[i][0];
    string += "ay";
  }
  return string;
}