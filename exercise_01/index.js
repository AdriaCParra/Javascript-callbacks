import transformStringToCollection from "./transformStringToCollection.js";
import onSuccess from "./callbacks/onSuccess.js";
import onError from "./callbacks/onError.js";

//test with value as number and log result

console.log(transformStringToCollection(1, onError, onSuccess));

//test with value as array and log result

console.log(transformStringToCollection([], onError, onSuccess));

//test with value as boolean and log result

console.log(transformStringToCollection(true, onError, onSuccess));

//test with value as empty string and log result

console.log(transformStringToCollection("", onError, onSuccess));

//test with value as string and log result

console.log(transformStringToCollection("hello", onError, onSuccess));
