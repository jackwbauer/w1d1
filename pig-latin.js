var myArgs = process.argv.splice(2);
console.log(pigLatin(myArgs))

function pigLatin(words) {
  var result = [];
  for(var i = 0; i < words.length; i++) {
    var split = words[i].split('');
    split.push(split.shift(), "ay");
    result.push(split.join(''));
  }
  return result.join(' ');
}