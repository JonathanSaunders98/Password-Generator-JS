// Assignment code here
function getCriteria(){
  var promptText = "Choose a number between 8 and 128.";
  var placeholder = "8";
  var length = parseInt(prompt(promptText, placeholder));
  
  while (){
    
  }
  console.log(length)
}

function generatePassword(){
  getCriteria();
  return "test";
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  
