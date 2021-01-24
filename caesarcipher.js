// JavaScript Algorithms and Data Structures Projects: Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

const alphabetArr =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', '!', '.', '?']

function rot13(str) {
let arr = str.split('');
let keysArr = [];
let flippedKeys = [];
let deciphered = [];

for(let letter of arr){
  if(alphabetArr.indexOf(letter) === 0){
    keysArr.push(0)
  } else{
  keysArr.push(alphabetArr.indexOf(letter))
  }
}

for(let ind of keysArr) {
  if(ind > 25){
    flippedKeys.push(ind)
  } else if(ind <= 12) {
    flippedKeys.push(ind + 13)
  }else if(ind === 13){
    flippedKeys.push(0)
  } else if(ind <= 25){
    flippedKeys.push(ind - 13)
  }
}

for(let ind of flippedKeys){
  deciphered.push(alphabetArr[ind])
}

return deciphered.join('');  
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));