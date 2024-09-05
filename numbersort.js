let randomNumbers = [];

for (let i = 0; i < 15; i++) {
  let randomNumber = Math.floor(Math.random() * 100); 
  randomNumbers.push(randomNumber);
}
randomNumbers.sort((a, b) => b - a);
let countGreaterThan25 = 0;

for (let i = 0; i < randomNumbers.length; i++) {
  if (randomNumbers[i] > 25) {
    countGreaterThan25++;
  }
}
 


console.log("Sorted Numbers (Descending):", randomNumbers);
console.log("Count of Numbers Greater Than 25:", countGreaterThan25);
