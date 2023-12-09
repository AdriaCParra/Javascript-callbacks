/**
 * Define and export function 'substract' to perform a substraction of two numbers.
 * It logs a message to show type of operation, received values and substraction result.
 * It returns operation result
 *
 * @param {number} value
 * @param {number} randomValue
 * @returns result
 */

const substract = (value, randomValue) => {
  const result = value - randomValue;

  console.log(
    `Substraction with values ${value} and ${randomValue} has been succesfully executed with result ${result}`
  );

  return result;
};

export default substract;
