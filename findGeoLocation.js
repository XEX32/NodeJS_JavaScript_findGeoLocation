const readline = require("readline");
// import readline module


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// create interface for input and output

let userInput = '';
let bodyResponse = '';

function requestFunctionAndParse()
{
    const request = require('request');

    request('https://ipinfo.io/' + userInput.toString(), function (error, response, body) 
    {
    
    console.error('error:', error);
    // Print the error if one occurred

    console.log('statusCode:', response && response.statusCode);
    // Print the response status code if a response was received
    bodyResponse = JSON.parse(body);
    // Parse JSON response

    let obj = JSON.parse(body);

    for (const [key, value] of Object.entries(obj)) 
    {
      console.log(`${key}: ${value}`);
      // Loop through all keys and values in object and print them
    }
  });
}

rl.question("What is the IP?\n", function (string) {
    userInput = string;
    requestFunctionAndParse();
    // close input stream
    rl.close();  
});
