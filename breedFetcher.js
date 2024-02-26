//ran $npm init -y    then $npm install request

const request = require ('request');
const cmdLineArg = process.argv;
const breedName = cmdLineArg[2];


request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) =>{
  console.log(`error:`, err);
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  const obj = JSON.parse(body);
  console.log(obj[0].name);//after parsing string-> its returned in the 0 index of an array  
  console.log(obj[0].description);
})


/* in node try these commands:

node breedFetcher.js siberian
node breedFetcher.js scottish
node breedFetcher.js savannah
node breedFetcher.js siamese
*/

