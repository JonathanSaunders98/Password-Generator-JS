// Assignment code here

function generatePassword(){
  var promptText = "Choose a number between 8 and 128.";
  var placeholder = "8";
  var length = parseInt(prompt(promptText, placeholder));
  
  promptText = "Sorry, please enter a number between 8 and 128.";
  while ((length >= 8 && length <= 128) === false) {
      length = parseInt(prompt(promptText, placeholder));
    }

  var uppercase = confirm("Include uppercase characters?");
  var numbers = confirm("Include numbers?");
  var characters = confirm("Include special characters?");

  return pswd;
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
  
