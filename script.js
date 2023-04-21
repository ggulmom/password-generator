// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var lowerSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];

function generatePassword() {

  // prompt for password length
  var passLen = 0
  while( !(passLen >= 8 && passLen <=128) )
    passLen = prompt("Please enter the password length. Length should be between 8 and 128", 8);
  
  var b_char_selected = false;
  var b_inc_lower, b_inc_upper, b_inc_numeric, b_inc_special;

  while( !b_char_selected ) {
    // prompt for lower case inclusion
    while( !(b_inc_lower == 'n' || b_inc_lower =='y') ) {
      b_inc_lower = prompt("Do you want to include Lower Case ? [y/n]", 'y').toLowerCase();
    }
    b_inc_lower = b_inc_lower =='y'
    
    // prompt for upper case inclusion
    while( !(b_inc_upper == 'n' || b_inc_upper =='y') ) {
      b_inc_upper = prompt("Do you want to include Upper Case ? [y/n]", 'n' ).toLowerCase();
    }
    b_inc_upper = b_inc_upper =='y'
    
    // prompt for numeric inclusion
    while( !(b_inc_numeric == 'n' || b_inc_numeric =='y') ) {
      b_inc_numeric = prompt("Do you want to include numeric ? [y/n]", 'n' ).toLowerCase();
    }
    b_inc_numeric = b_inc_numeric =='y'
    
    // prompt for special char inclusion
    while( !(b_inc_special == 'n' || b_inc_special =='y') ) {
      b_inc_special = prompt("Do you want to include special ? [y/n]", 'n' ).toLowerCase();
    }
    b_inc_special = b_inc_special =='y'
    
    // if non char type is selected, alert warning then restart
    b_char_selected = b_inc_lower | b_inc_upper | b_inc_numeric | b_inc_upper;
    if( !b_char_selected )
    {
      window.alert("At least one character type must be selected.")
      b_inc_lower = null;
      b_inc_upper = null;
      b_inc_numeric = null;
      b_inc_special = null;
    }
  }

  // create an array with characters that will be included in the password
  var totalCharSet = [];
  if(b_inc_lower) totalCharSet = totalCharSet.concat(lowerSet);
  if(b_inc_upper) totalCharSet = totalCharSet.concat(upperSet);
  if(b_inc_numeric) totalCharSet = totalCharSet.concat(numericSet);
  if(b_inc_special) totalCharSet = totalCharSet.concat(specialSet);

  var passStr;
  
  passStr = ""
  for (var i = 0; i < passLen; i++) {
    passStr += totalCharSet[Math.floor(Math.random() * (totalCharSet.length))];
  }

  return passStr;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
