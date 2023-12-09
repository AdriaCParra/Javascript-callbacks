/**
 * Define and export function 'divide' to perform a division of two numbers.
 * It logs a message to show type of operation, received values and division result.
 * It returns operation result
 *
 * @param {number} value
 * @param {number} randomValue
 * @returns result
 */

const divide = (value, randomValue) => {
  const result = value / randomValue;

  console.log(
    `Division with values ${value} and ${randomValue} has been succesfully executed with result ${result}`
  );

  return result;
};

export default divide;
