//JavaScript Algorithms and Data Structures Projects: Palindrome Checker
// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

function palindrome(str) {
  // We start by using a regular expression to remove all non-alphanumeric characters and make the string lowercase
  let originalStr = str.replace(/[\W_]/gi, '').toLowerCase();
  // We create a new variable in which we turn the string into an array, reverse it, and then turn it back into a string
  let revereStr = newStr.split('').reverse().join('');
  // We use an if statement to evaluate if the original string is the exact same as the reversed string
  if(originalStr === revereStr){
    return true;
  } else {
    return false;
  }
  
}



console.log(palindrome('_eye'));