/**
 * Define and export function 'multiplyCommand' to perform a multiplication of two numbers.
 * It logs a message to show type of operation, received values and multiplication result.
 * It returns operation result
 *
 * @param {number} value
 * @param {number} randomValue
 * @returns result
 */

const multiply = (value, randomValue) => {
  const result = value * randomValue;

  console.log(
    `Multiplication with values ${value} and ${randomValue} has been succesfully executed with result ${result}`
  );

  return result;
};

export default multiply;
