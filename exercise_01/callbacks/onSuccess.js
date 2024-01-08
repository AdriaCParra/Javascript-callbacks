/**
 * Define 'onSuccess' function and signature
 * It receives a string and returns an array with all words contained in it
 *
 * input:
 *  - value: string
 *
 * output:
 *  - array
 */

/**
 *
 * @param {string} value
 * @returns {array}
 */
const onSuccess = (value) => {
  return value.split(" ");
};

export default onSuccess;
