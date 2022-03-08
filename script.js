// Random password generator
function generatePassword(length, prefs) {
  var characters = 'abcdefghijklmnopqrstuvwxyz';
  var uppercase  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '0123456789';
  var symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

  if (prefs.upper) { characters = characters + uppercase }
  if (prefs.nums) { characters = characters + numbers }
  if (prefs.symbols) { characters = characters + symbols }

  var charactersLength = characters.length;
  var result = '';

  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
      charactersLength));
  }

  return result;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password text box
function writePassword() {
  var characterAmount = prompt("How long do you want the password to be?");

  var useUppercase = prompt("Do you want uppercase characters (y/n)?") === "y";
  var useNumbers = prompt("Do you want numbers (y/n)?") === "y";
  var useSymbols = prompt("Do you want special characters (y/n)?") === "y";

  var password = generatePassword(characterAmount, { upper: useUppercase, nums: useNumbers, symbols: useSymbols });
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
