// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = "123456789";
var lowerCase = "abcdefghijklmnopqrstuvwzrx";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!@#$%^&*+_-";

function getRandom(max) {
	return Math.floor(Math.random() * max);
}

function generatePassword(
	Length,
	hasNumbers,
	hasUpperCase,
	hasLowerCase,
	hasSpecial
) {
	let password = "";
	let selection = ["upper", "lower", "number", "special"];
	while (password.length < Length) {
		char = selection[getRandom(4)];
		if (hasUpperCase && char == "upper") {
			password += upperCase[getRandom(26)];
		}
		if (hasLowerCase && char == "lower") {
			password += lowerCase[getRandom(26)];
		}
		if (hasNumbers && char == "number") {
			password += numbers[getRandom(9)];
		}
		if (hasSpecial && char == "special") {
			password += specialChar[getRandom(11)];
		}
	}

	return password;
}

// Write password to the #password input
function writePassword() {
	var passwordLength = prompt(
		"How many characters would you like to have 8-128"
	);
	while (isNaN(passwordLength) || passwordLength > 128 || passwordLength < 8) {
		passwordLength = parseInt(prompt("Please enter a valid number"));
	}

	var includeNumbers = confirm("Would you like to include numbers?");
	console.log(includeNumbers);

	var upperCase = confirm("Would you like to include upper case letters?");
	console.log(upperCase);

	var lowerCase = confirm("Would you like to include lower case letters?");
	console.log(lowerCase);

	var specChar = confirm("Would you like to include special character?");
	console.log(specChar);

	var password = generatePassword(
		passwordLength,
		includeNumbers,
		upperCase,
		lowerCase,
		specChar
	);
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
{
}

console.log(numbers);
console.log(upperCase);
console.log(lowerCase);
console.log(specialChar);
