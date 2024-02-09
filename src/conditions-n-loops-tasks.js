/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return !(String(number)[0] === '-');
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b) {
    if (a > c) {
      return a;
    }
    return c;
  }
  if (b > c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  ) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  let twoSidesIsEqual = false;
  if (a === b || a === c || b === c) {
    twoSidesIsEqual = true;
  }
  let triangleIsPossible = true;
  if (a > c + b || c > b + a || b > a + c) {
    triangleIsPossible = false;
  }
  let sideIsNotZero = true;
  if (a === 0 || b === 0 || c === 0) {
    sideIsNotZero = false;
  }
  return twoSidesIsEqual && triangleIsPossible && sideIsNotZero;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let result = '';
  const numberOfX = Math.floor(num / 10);
  let i = 1;
  while (i <= numberOfX) {
    result += 'X';
    i += 1;
  }
  if (num % 10 < 4) {
    i = 1;
    while (i <= num % 10) {
      result += 'I';
      i += 1;
    }
  } else if (num % 10 === 4) {
    result += 'IV';
  } else if (num % 10 > 4 && num % 10 !== 9) {
    i = 1;
    result += 'V';
    while (i <= (num % 10) - 5) {
      result += 'I';
      i += 1;
    }
  } else {
    result += 'IX';
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  let i = 0;
  while (i < numberStr.length) {
    switch (numberStr[i]) {
      case '0':
        result += 'zero';
        break;
      case '1':
        result += 'one';
        break;
      case '2':
        result += 'two';
        break;
      case '3':
        result += 'three';
        break;
      case '4':
        result += 'four';
        break;
      case '5':
        result += 'five';
        break;
      case '6':
        result += 'six';
        break;
      case '7':
        result += 'seven';
        break;
      case '8':
        result += 'eight';
        break;
      case '9':
        result += 'nine';
        break;
      case '-':
        result += 'minus';
        break;
      case '.':
        result += 'point';
        break;
      default:
        result += 'point';
        break;
    }
    if (i !== numberStr.length - 1) {
      result += ' ';
    }
    i += 1;
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let reverseStr = '';
  let i = 1;
  while (str[str.length - i]) {
    reverseStr += str[str.length - i];
    i += 1;
  }
  return str === reverseStr;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let count = 0;
  let i = 0;
  while (i < str.length) {
    if (str[i] === letter) {
      return count;
    }
    i += 1;
    count += 1;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const numStr = String(num);
  const digitStr = String(digit);
  let i = 0;
  while (i < numStr.length) {
    if (numStr[i] === digitStr) {
      return true;
    }
    i += 1;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let i = 1;
  while (i < arr.length) {
    let y = 0;
    let sumBefore = 0;
    let sumAfter = 0;
    while (y < i) {
      sumBefore += arr[y];
      y += 1;
    }
    y = 1;
    while (y + i < arr.length) {
      sumAfter += arr[y + i];
      y += 1;
    }
    if (sumAfter === sumBefore) {
      return i;
    }
    i += 1;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 *
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]

 */
function getSpiralMatrix(size) {
  let i = 0;
  const result = [];

  while (i < size) {
    result[i] = [];
    let y = 0;
    while (y < size) {
      result[i][y] = 0;
      y += 1;
    }
    i += 1;
  }

  i = 0;
  let count = 1;
  let horizontalMovement = true;
  let verticalMovement = false;
  let reverse = false;
  let deepFactor = 0;
  let switchQuantity = 0;
  let angleNumber = 1;
  while (count <= size ** 2) {
    if (horizontalMovement) {
      if (reverse) {
        result[size - 1 - deepFactor][size - 1 - deepFactor - i] = count;
      } else {
        result[0 + deepFactor][deepFactor + i] = count;
      }
    } else if (verticalMovement) {
      if (reverse) {
        result[size - 1 - deepFactor - i][deepFactor] = count;
      } else {
        result[0 + deepFactor + i][size - 1 - deepFactor] = count;
      }
    }
    if (i === size - 2 - deepFactor * 2) {
      horizontalMovement = !horizontalMovement;
      verticalMovement = !verticalMovement;
      i = 0;
      angleNumber += 1;
      switchQuantity += 1;
      if (!(angleNumber % 2 === 0)) {
        reverse = !reverse;
      }
      if (switchQuantity % 4 === 0) {
        deepFactor += 1;
      }
    } else {
      i += 1;
    }

    count += 1;
  }
  return result;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const result = [];
  let i = 0;
  while (i < matrix.length) {
    result[i] = [];
    let y = 0;
    while (y < matrix.length) {
      result[i][y] = '-';
      y += 1;
    }
    i += 1;
  }

  let deepFactor = 0;
  let operationCode = 1;
  i = 0;
  while (deepFactor < Math.floor(matrix.length / 2)) {
    if (operationCode === 1) {
      result[i + deepFactor][result.length - 1 - deepFactor] =
        matrix[deepFactor][i + deepFactor];
    } else if (operationCode === 2) {
      result[result.length - 1 - deepFactor][
        result.length - 1 - deepFactor - i
      ] = matrix[i + deepFactor][matrix.length - 1 - deepFactor];
    } else if (operationCode === 3) {
      result[result.length - 1 - deepFactor - i][deepFactor] =
        matrix[matrix.length - 1 - deepFactor][
          matrix.length - 1 - deepFactor - i
        ];
    } else if (operationCode === 4) {
      result[deepFactor][i + deepFactor] =
        matrix[matrix.length - 1 - deepFactor - i][deepFactor];
    }

    i += 1;
    if (i === matrix.length - deepFactor) {
      operationCode += 1;
      i = 1;
      if (operationCode === 5) {
        i = 0;
        deepFactor += 1;
        operationCode = 1;
      }
    }
  }
  if (matrix.length % 2 !== 0) {
    result[Math.ceil(result.length / 2) - 1][Math.ceil(result.length / 2) - 1] =
      matrix[Math.ceil(matrix.length / 2) - 1][
        Math.ceil(matrix.length / 2) - 1
      ];
  }
  i = 0;
  const result2 = matrix;
  while (i < result2.length) {
    let y = 0;
    while (y < result2.length) {
      result2[i][y] = result[i][y];
      y += 1;
    }
    i += 1;
  }
  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const arr1 = arr;
  let isSorted = false;
  let i = 0;
  let factor = 1;
  while (!isSorted) {
    let elementPlusIndexDelta = Math.round(arr1.length / 1.247 ** factor);
    if (elementPlusIndexDelta < 1) {
      elementPlusIndexDelta = 1;
    }
    while (i + elementPlusIndexDelta < arr1.length) {
      if (arr1[i] > arr1[i + elementPlusIndexDelta]) {
        const element = arr1[i];
        arr1[i] = arr1[i + elementPlusIndexDelta];
        arr1[i + elementPlusIndexDelta] = element;
      }
      i += 1;
    }
    i = 0;
    while (i < arr1.length - 1) {
      let y = 0;
      isSorted = true;
      while (i + y + 1 < arr1.length) {
        if (arr1[i] > arr1[i + 1 + y]) {
          isSorted = false;
          break;
        }
        y += 1;
      }
      if (!isSorted) {
        break;
      }
      i += 1;
    }
    factor += 1;
  }
  return arr1;
}
/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(/* str, iterations */) {
  throw new Error('Not implemented');
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(/* number */) {
  throw new Error('Not implemented');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
