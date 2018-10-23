var myArgs = process.argv;
console.log(obfuscate(myArgs[2]));

function obfuscate(password) {
  password = password.split('');
  var replace = {
    'a' : '4',
    'e' : '3',
    'o' : '0',
    'l' : '1'
  };
  for(var i = 0; i < password.length; i++) {
    password[i] = replace[password[i]] || password[i];
  }
  return password.join('');
}