let randomNumbers = [];
let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i < 20; i++) {
  let randomNumber = Math.floor(Math.random() * 100); 
  randomNumbers.push(randomNumber);
}

for (let i = 0; i < randomNumbers.length; i++) {
  if (randomNumbers[i] % 2 === 0) {
    evenNumbers.push(randomNumbers[i]);
  } else {
    oddNumbers.push(randomNumbers[i]);
  }
}

console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);
