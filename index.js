//index.js

const { fetchBreedDescription  } = require ('./breedFetcher');

const cmdLineArg = process.argv;
const breedName = cmdLineArg[2];

//Our index.js file should require breedFetcher and call it, like this:
fetchBreedDescription(breedName, (error, respCode ,desc) => {
  let code = respCode.statusCode;
  console.log(`Code is:`, code);
  if (error) {   //executes if error is not null
    console.log('Error in fetching details:', error);
  } 
  else if (respCode.statusCode === 400) {   //executes if error is not null
    console.log('Bad search request within domain');
  } 
  else if (respCode.statusCode === 404) {   //executes if error is not null
    console.log('Content not found');
  } 
  else if(desc.length === 0){
    console.log(`Your breed was not located, try entering something different`);
  }
  else {
    console.log(desc[0].name); 
    console.log(desc[0].description); 
    return desc[0].description;
  }
});



/* run commands:

node index.js siberian
node index.js scottish
node index.js savannah
node index.js siamese

for testing edge cases such as invalid breeds
`````````````````````````````````````````````
node index.js airplane
*/