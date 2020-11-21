// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  
    var charNumber = prompt("How many characters would you like to have 8-128");
    while (isNaN(charNumber) || (charNumber > 128) || (charNumber < 8)) {
      charNumber = prompt("Please enter a valid number")
    }

    var includeNumbers = prompt("Would you like to include numbers? (Please enter Yes or No)");
    includeNumbers.toLowerCase;
    var yes= "yes";
    var no= "no";
    console.log(typeof includeNumbers);

    while (includeNumbers != yes || includeNumbers != no) {
      if(includeNumbers === yes) {
        break;
      } 
      if(includeNumbers === no) {
        break;
      }
      alert("Please input Yes or No")
      includeNumbers = prompt("Would you like to include numbers? (Please enter Yes or No)");
      includeNumbers.toLowerCase;
    }
    
  
  var password = generatePassword();  
  var passwordText = document.querySelector("#password");

  

  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
   
    
}

// function message(){
//     prompt("This is the message");
// }

var numbers = [1,2,3,4,5,6,7,8,9]
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
var low = ["a", "b", "c", "d", "e", "f", "g", "h", "i"]
var specialChar = ['!','@', '#', '$', '%', '^','&','*','-'] 

console.log(numbers)
console.log(upper)
console.log(low)
console.log(specialChar)