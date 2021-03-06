//reverseString: you should be able to reverse a string
// Example: "abc" => "cba"
function reverseString(str) {
  var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

//capitalize: should return the input in all-caps
// Example: "this is a string" => "THIS IS A STRING"
function capitalize(str) {
  return str.toUpperCase();
}

// splitString: should divide a string into substrings and return an array
// Example: "Jane,Doe,21"  =>  [ "Jane", "Doe", "21" ]
function splitString(str, splitAt = `,`) {
  return str.split(splitAt);
}
module.exports = {
  reverseString,
  capitalize,
  splitString
};