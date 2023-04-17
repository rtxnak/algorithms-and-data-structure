const mixedArray = ["a", 10, "", "hola", 122, 15]

function getLettersFromArray(array) {
  const result = array.filter((item) => typeof (item) === 'string')
  return result
}

function getNumbersFromArray(array) {
  const result = array.filter((item) => typeof (item) === 'number')
  return result
}

function getHigherNumberFromArray(array) {
  const arrayOfNumbers = getNumbersFromArray(array)
  const result = arrayOfNumbers.sort((a, b) => a - b).slice(-1).pop();
  return result
}

console.log('a', getLettersFromArray(mixedArray))

console.log('b', getNumbersFromArray(mixedArray))

console.log('c', getHigherNumberFromArray(mixedArray))