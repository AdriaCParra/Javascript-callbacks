/**
 * Define and export function 'add' to perform an addition of two numbers.
 * It logs a message to show type of operation, received values and additon result.
 * It returns operation result
 *
 * @param {number} value
 * @param {number} randomValue
 * @returns result
 */

const add = (value, randomValue) => {
  const result = value + randomValue;

  console.log(
    `Addition with values ${value} and ${randomValue} has been succesfully executed with result ${result}`
  );

  return result;
};

export default add;
