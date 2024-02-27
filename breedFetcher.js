//ran $npm init -y    then $npm install request

const request = require ('request');
const cmdLineArg = process.argv;
const breedName = cmdLineArg[2];


const breedFetch = function(name){
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) =>{
    console.log(`Error status:`, err);
    console.log('StatusCode:', response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body);
    if (response.statusCode === 404){
      console.log(`INCORRECT DOMAIN`);
    }
    const obj = JSON.parse(body);
    if(obj.length === 0){
      console.log(`Your breed was not located, try entering something different`);
    }
    else if (response.statusCode === 200){      
      console.log(obj[0].name); //after parsing string-> its returned in the 0 index of an array  
      console.log(obj[0].description);
    }
  });
}

breedFetch(breedName);



/* in node try these commands:

node breedFetcher.js siberian
node breedFetcher.js scottish
node breedFetcher.js savannah
node breedFetcher.js siamese

for testing edge cases
``````````````````````
node breedFetcher.js iPhone13
node breedFetcher.js airplane
*/