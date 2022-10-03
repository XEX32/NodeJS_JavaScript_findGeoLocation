//first use of js on one of my ideas.



// import readline module
const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// create empty user input
let userInput = '';
let bodyResponse = '';

function requestFunctionAndParse()
{
    const request = require('request');

    request('https://ipinfo.io/' + userInput.toString(), function (error, response, body) {
    
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    bodyResponse = JSON.parse(body); // Parse JSON response.

    const obj = JSON.parse(body);

    console.log('IP Adress:', obj.ip);
    console.log('City:', obj.city);
    console.log('Region:', obj.region);
    console.log('Country:', obj.country);
    console.log('Location:', obj.loc);
    console.log('ORG:', obj.org);
    console.log('Postal:', obj.postal);
    console.log('Timezone:', obj.timezone); // Print parsed the ipinfo.io JSON.
    });
}

rl.question("What is the IP?\n", function (string) {
    userInput = string;
    console.log(requestFunctionAndParse());
    // close input stream
    rl.close();  
});