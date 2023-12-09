/**
 * Write a JS function called 'operateWithRandomNumber' to perfom different aritmethic operations with two numbers.
 *
 * input:
 *  - value: number
 *  - callback: function
 *
 * output:
 *  - result: number
 */

/**
 * Perfoms aritmethic operation dependign on provided callback
 * @param {number} value
 * @param {Function} callback
 * @returns aritmethic operation result
 */

const operateWithRandomNumber = (value, callback) => {
  const randomNumber = Math.random() * 10;
  const roundedNumber = Math.floor(randomNumber);

  const result = callback(value, roundedNumber);

  return result;
};

export default operateWithRandomNumber;
