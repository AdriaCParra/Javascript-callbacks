import add from "./callbacks/add.js";
import divide from "./callbacks/divide.js";
import multiply from "./callbacks/multiply.js";
import substract from "./callbacks/substract.js";
import operateWithRandomNumber from "./operateWithRandomNumber.js";

console.log("\n++++++++ Addition ++++++++");
const randomNumberForAdd = operateWithRandomNumber(2, add);
console.log("randomNumberForAdd => ", randomNumberForAdd);

console.log("\n-------- Subtraction --------");
const randomNumberForSubstraction = operateWithRandomNumber(2, substract);
console.log("randomNumberForSubstraction => ", randomNumberForSubstraction);

console.log("\n******** Multiplication ********");
const randomNumberForMultiplication = operateWithRandomNumber(2, multiply);
console.log("randomNumberForMultiplication => ", randomNumberForMultiplication);

console.log("\n:::::::: Division ::::::::");
const randomNumberForDivision = operateWithRandomNumber(2, divide);
console.log("randomNumberForDivision => ", randomNumberForDivision);
