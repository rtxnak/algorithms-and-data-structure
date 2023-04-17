const elementaryFunctionsHasMap = new Map();

elementaryFunctionsHasMap.set('addition', (arrayOfNumbers) => {
  return arrayOfNumbers.reduce((a, b) => a + b, 0)
})

elementaryFunctionsHasMap.set('subtraction', (arrayOfNumbers) => {
  return arrayOfNumbers.reduce((a, b) => a - b)
})

elementaryFunctionsHasMap.set('multiplication', (arrayOfNumbers) => {
  return arrayOfNumbers.reduce((a, b) => a * b)
})

elementaryFunctionsHasMap.set('division', (a, b) => {
  if (b === 0) {
    return "the dividend must not be 0"
  }
  return a / b
})

const array = [ 1, 2, 3 ];

console.log('addition:', elementaryFunctionsHasMap.get('addition')(array))
console.log('subtraction:', elementaryFunctionsHasMap.get('subtraction')(array))
console.log('multiplication:', elementaryFunctionsHasMap.get('multiplication')(array))
console.log('division:', elementaryFunctionsHasMap.get('division')(4,2))
console.log('wrong division:', elementaryFunctionsHasMap.get('division')(4,0))

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map