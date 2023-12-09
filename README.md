# CALLBACKS

<figure style="text-align: center">
   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png" alt="DOM Tree" width="100" />
   <figcaption>JavaScript</figcaption>
</figure>

Callbacks are functions than are invoked as argument to manipulate or propagate the result of an internal operation.

```js
function createUser(fullName) {
  const timestamp = Date.now();
  const userId = `${Math.floor(Math.random() * 100)}-${timestamp}`;

  return {
    id: userId,
    user: fullName,
    createdAt: timestamp,
  };
}

function processUserEntry(name, surname, callback) {
  if (!name || !surname) return {};

  const fullName = `${name} ${surname}`;
  const newUser = callback(fullName);

  return newUser;
}

processUserEntry("Ada", "Lovelace", createUser);
```
