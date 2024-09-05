function Calculate(num1, num2, operation) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    console.log("Please enter valid numbers for num1 and num2.");
    return;
  }

  if (typeof operation !== "string") {
    console.log("Please enter a valid string for the operation.");
    return;
  }

  switch (operation.toLowerCase()) {
    case "add":
    case "addition":
    case "+":
      console.log("Result: " + (num1 + num2));
      break;
    case "subtract":
    case "subtraction":
    case "-":
      console.log("Result: " + (num1 - num2));
      break;
    case "multiply":
    case "multiplication":
    case "*":
      console.log("Result: " + num1 * num2);
      break;
    case "divide":
    case "division":
    case "/":
      if (num2 !== 0) {
        console.log("Result: " + num1 / num2);
      } else {
        console.log("Cannot divide by zero.");
      }
      break;
    case "modulus":
    case "mod":
    case "%":
      console.log("Result: " + (num1 % num2));
      break;
    default:
      console.log(
        "Invalid operation. Please choose add, subtract, multiply, divide, or modulus."
      );
      break;
  }
}
let userNum1 = parseFloat(prompt("Enter the first number:"));
let userNum2 = parseFloat(prompt("Enter the second number:"));
let userOperation = prompt(
  "Enter the operation (add, subtract, multiply, divide, modulus):"
);

Calculate(userNum1, userNum2, userOperation);
switch (key) {
  case value:
    
    break;

  default:
    break;
}