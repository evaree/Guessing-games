// let randomNumbers = [] ;
//evenNumbers = [];
//oddNumbers = [];fr
// console.log(randomNumbers)
// for(let i = 1; i <=20; i++) {
//     //generate random number between 0 and 0.9 
//     let randomNumber = Math.random();
//     randomNumber = randomNumber * 100 ;
//     // console.log(randomNumber);
//     //convert to integer
//     randomNumber =  Math.round(randomNumber) + 1;
//     // console.log(randomNumber) ; 

//     randomNumbers.push(randomNumber)
//     //seperate even numbers from odd num
//     for (let number of randomNumbers) {
//         if(number % 2 ===0) {
//              evenNumbers.push(number)
//         }
//         else {
//             oddNumbers.push(number)
//         }
//     }

// } 
// console.log(evenNumbers);
// console.log(oddNumbers);

//number sorter


let randomNumbers = [] ;
for (let k = 0; k <=15 ; k++) {
    let randomNumber = Math.round(Math.random() * 50) ;
    randomNumbers.push(randomNumber)
    
}
console.log(randomNumbers)

for(let i = 0; i < randomNumbers.length; i++) {

}

console.log (randomNumbers) ;
