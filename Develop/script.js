// Assignment code here

function generatePassword(){
 
// Initial Prompt and conversion of input into integer 
  var promptText = "Choose a number between 8 and 128.";
  var placeholder = "8";
  var length = parseInt(prompt(promptText, placeholder));
  
// while loop for if the user inputs a number less than 8 or greater than 128  
  promptText = "Sorry, please enter a number between 8 and 128.";
  while ((length >= 8 && length <= 128) === false) {
      length = parseInt(prompt(promptText, placeholder));
    }

// Confirm prompts for what types of characers the user desires    
  var uppercase = confirm("Include uppercase characters?");
  var numbers = confirm("Include numbers?");
  var characters = confirm("Include special characters?");

// Values for different types of available characters  
  var lowercaseValue = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbersValue = "0123456789";
  var charactersValue = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Randomizes the default input of lowercase characters  
  var pswd = lowercaseValue.charAt(Math.floor(Math.random() * lowercaseValue.length));
  var allValues = lowercaseValue

// Randomization if uppercase characters are chosen  
  if (uppercase) {
    pswd = pswd + uppercaseValue.charAt(Math.floor(Math.random() * uppercaseValue.length));
    allValues = allValues + uppercaseValue;
  }

// Randomization if numbers are chosen  
  if (numbers) {
    pswd = pswd + numbersValue.charAt(Math.floor(Math.random() * numbersValue.length));
    allValues = allValues + numbersValue;
  }

// Randomization if special characters are chosen  
  if (characters) {
    pswd = pswd + charactersValue.charAt(Math.floor(Math.random() * charactersValue.length));
    allValues = allValues + charactersValue
  }

// Variable to subtract the initial amount of characters chosen from the total inputted lenth  
  var remaining = length - pswd.length
  
// For loop to randomize the remaining characters after the initial character types are chosen  
  for(var i = 0; i < remaining; i++)
    var pswd = pswd + allValues.charAt(Math.floor(Math.random() * allValues.length));
    alert(pswd)
    
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
  
