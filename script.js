// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["#", "&", "%", "$", "@", "!", "^", "*", "?"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
  var passLength = window.prompt("what is the desired length of your password? (must be 8-128)");
  var uppercase = window.confirm("would you like to include uppercase letters?");
  var lowercase = window.confirm("would you like to include lowercase letters?");
  var numbers = window.confirm("would you like to include any numbers?");
  var special = window.confirm("would you like to include any special characters?");

  if (uppercase === false && lowercase === false && numbers === false && special === false) {
    alert("please try again");
  }

  if (passLength < 8 || passLength > 128 || !passLength) {
    alert("password length must be 8-128, please try again.");
  }

  var password = [];

  function random(a) {
    var i = Math.floor(Math.random * a.length);
    return a[i];
  };

  for (var i = 0; i < password.length;) {
    if (uppercase === true && i < password.length) {
      var a = uppercaseLetters;
      var newArr = random(a);
      password.push(newArr);
      i++;
    }
    if (lowercase === true && i < password.length) {
      var a = lowercaseLetters;
      var newArr = random(a);
      password.push(newArr);
      i++;
    }
    if (numbers === true && i < password.length) {
      var a = digits;
      var newArr = random(a);
      password.push(newArr);
      i++;
    }
    if (special === true && i < password.length) {
      var a = specialChar;
      var newArr = random(a);
      password.push(newArr);
      i++;
    }
    password = password.sort(function (a,b) { return 0.5 - Math.random() });
    password = password.join('');
  
    return password;
  
  };
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


