// JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
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

  const numStrArr = String(num).split('').map(Number).reverse();
  let result = [];

  let counter = 0;
  for(let digit of numStrArr){
    result.push(numeralsArr[counter][digit - 1])
    counter++
  }

  return result.reverse().join('');
 }
 
 console.log(convertToRoman(891));