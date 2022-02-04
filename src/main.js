//txt
var fs = require('fs');
var text = fs.readFileSync("data/1.txt", 'utf-8');
var textByLine = text.split('\n');
console.log(textByLine);
var arrayOfNumbers = textByLine.map(Number);


//max
var max = Math.max.apply(null, arrayOfNumbers);
console.log("Hæsta gildi: " + max);


//min
var min = Math.min.apply(null, arrayOfNumbers);
console.log("Minnsta gildi: " + min);


//variance
const findVariance = (arrayOfNumbers = []) => {
  if(!arrayOfNumbers.length){
     return 0;
  };
  const sum = arrayOfNumbers.reduce((acc, val) => acc + val);
  const { length: num } = arrayOfNumbers;
  const median = sum / num;
  let variance = 0;
  arrayOfNumbers.forEach(num => {
     variance += ((num - median) * (num - median));
  });
  variance /= num;
  return variance;
};
console.log("Frávik: " + findVariance(arrayOfNumbers))
var totalSum = 0;
for(var i in arrayOfNumbers) {
    totalSum += arrayOfNumbers[i];
}
var numsCnt = arrayOfNumbers.length;
var average = totalSum / numsCnt;
console.log('Meðaltal: ' + average);


//median
const median = arrayOfNumbers => {
  let middle = Math.floor(arrayOfNumbers.length / 2);
    arrayOfNumbers = [...arrayOfNumbers].sort((a, b) => a - b);
  return arrayOfNumbers.length % 2 !== 0 ? arrayOfNumbers[middle] : (arrayOfNumbers[middle - 1] + arrayOfNumbers[middle]) / 2;
};
console.log("Miðgildi: " + median(arrayOfNumbers));


//standard deviation
function getStandardDeviation (arrayOfNumbers) {
  const n = arrayOfNumbers.length
  const mean = arrayOfNumbers.reduce((a, b) => a + b) / n
  return Math.sqrt(arrayOfNumbers.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
}
console.log("Staðalfrávik: " + getStandardDeviation(arrayOfNumbers))


//sum
let sum = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
}
console.log("Summa: " + sum);


//range
console.log("Svið: " + min + " - " + max)