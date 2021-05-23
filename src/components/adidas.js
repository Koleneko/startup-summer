const fetch = require('node-fetch');
const readline = require("readline");

async function Request(userName) {
  let response = await fetch(`https://api.github.com/users/${userName}`);

  if (response.ok) {
    // let json = await
    return response.json()
  } else {
   console.log("Ошибка HTTP: " + response.status);
  }
  }
  //
  // let requestResponse = Request('gaearon');

let requestedUser = toString(readline);

console.log(requestedUser)

Request(requestedUser).then(console.log)

// export default Request;
