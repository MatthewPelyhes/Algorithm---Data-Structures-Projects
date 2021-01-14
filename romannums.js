// JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
  // We start by creating an array of arrays. Each array holds the basic combinations for that specific decimal place 
  const numeralsArr = [
    [
      'I','II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'

    ],
    [
      'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'
    ],
    [
      'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'
    ],
    [
      'M', 'MM', 'MMM'
    ]

  ];

  /* We turn the number that is passed through into a string so that we can use the split method on it and turn it into an array of digits.
  We then use the map method to convert those digits from strings to numbers. We then reverse the array so that the index for each decimal place
  matches the decimal place index in the numeralsArr. For example, we reverse an input of [6, 3] (originally passed through as 63), so that we have
  [3, 6]. The 3 is in the first decimal place, and now it is in the first index place in the array as well. This helps to simplify our conversion
  using numeralsArr. 
  */
  const numStrArr = String(num).split('').map(Number).reverse();
 
  // Next, we create an array to hold the digits that have been converted to their roman numberal counterparts
  let result = [];
  
  // We create a counter variable which will correlate to the index of the numeralsArr we are accessing
  let counter = 0;

   /* Using a for/of statement we push the roman numberal character that is in the first decimal place (increasing decimal places with each iteration),
   and is the counterpart of the digit passing through. We subtract 1 since the array is zero-indexed.
   */
  for(let digit of numStrArr){
    result.push(numeralsArr[counter][digit - 1])
    counter++
  }

  // We reverse the result so that it is back in its original order and join the characters together, and return it.
  return result.reverse().join('');
 }
 
 console.log(convertToRoman(891));