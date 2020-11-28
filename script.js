// Assignment Code
let generateBtn = document.querySelector("#generate");

let upp = "ABCDEFGHIJKLMNOP".split("");
console.log(upp);
let low = "abcdefghijklmnop".split("");
console.log(low);
let num = "123456789".split("");
console.log(num);
let specialChar = "!@#$%^&*-+".split("");
console.log(specialChar);
let passwordArray = [];

// function getRandom(max) {
// 	return Math.floor(Math.random() * max);
// }

// Write password to the #password input
function writePassword() {
	let password = generatePassword();
	let passwordText = document.querySelector("#password");
	// passwordText = password;

	passwordText.value = password;

	function generatePassword() {
		let passwordLength = prompt(
			`How long would you like your password to be? Please pick a number from 8 to 128`
		);

		while (
			isNaN(passwordLength) ||
			passwordLength < 8 ||
			passwordLength > 128
		) {
			passwordLength = parseInt(
				prompt(`Please enter a valid number from 8 to 128`)
			);
		}

		let passwordNumber = confirm(
			`Would you like to include numbers to your password?`
		);
		if (passwordNumber === true) {
			passwordArray = passwordArray.concat(num);
			console.log(passwordArray);
		} else {
			passwordNumber === false;
		}
		// ---------------------------------//
		let passwordUpper = confirm(
			`Would you like to include upper case letters to your password?`
		);

		if (passwordUpper === true) {
			passwordArray = passwordArray.concat(upp);
			console.log(passwordArray);
		} else {
			passwordUpper === false;
		}

		// ---------------------------------//
		let passwordLower = confirm(
			`Would you like to include lower case letters to your password?`
		);

		if (passwordLower === true) {
			passwordArray = passwordArray.concat(low);
			console.log(passwordArray);
		} else {
			passwordLower === false;
		}

		// ---------------------------------//

		let passwordSpecialCharacter = confirm(
			`Would you like to include special characters to your password?`
		);

		if (passwordSpecialCharacter === true) {
			passwordArray = passwordArray.concat(specialChar);
			console.log(passwordArray);
		} else {
			passwordSpecialCharacter === false;
		}

		if (
			passwordNumber === false &&
			passwordNumber === false &&
			passwordUpper === false &&
			passwordLower === false
		) {
			alert("Please choose at least 1 password element.");
			passwordText = "Please choose at least 1 password element.";
			return passwordText;
		}
		// If user input is valid, run loop grabbing a character from the password array at random and write result to password text
		else {
			var passwordText = "";
			for (var index = 0; index < passwordLength; index++) {
				var charSelect = Math.floor(Math.random() * passwordArray.length);
				passwordText += passwordArray[charSelect];
			}
			// Return completed password text to the document text box
			console.log(passwordText);
			return passwordText;
		}

		// if (passwordSpecialCharacter === true) {
		// 	passwordArray = passwordArray.concat(specialChar);
		// 	console.log(passwordArray);
		// } else {
		// 	passwordSpecialCharacter === false;
		// }

		// // ---------------------------------//

		// if (
		// 	passwordNumber === false &&
		// 	passwordUpper === false &&
		// 	passwordLower === false &&
		// 	passwordSpecialCharacter === false
		// ) {
		// 	alert("Choose at least one password element");
		// }
		// return passwordText;
	}
	// return passwordText;
	passwordArray = [];
	console.log(passwordArray);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
