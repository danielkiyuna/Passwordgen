// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  String.fromCharCode(65)
 }

 const passwordCharacters = []
 for (let i = 0; i < characterAmount; i++) {
   const charcterCode = charCodes[Math.floor(Math.random() *
  characterAmount)]
  passwordCharacters.push(String.fromCharCode(charactercode))
  }
 }

 function arrayFromLowToHigh(low, high) {
   const array = []
   for (let i = low; i <= high; i++) {
     array.push(i)
   }
   return array
 }

 function syncCharacterAmount(e) {
   const value = e.target.value
   characterAmountNumber.value = value
   characterAmountRange.value = value
 }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

