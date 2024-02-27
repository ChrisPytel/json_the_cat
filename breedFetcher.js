//initially ran ran $npm init -y then $npm install request

const request = require ('request');

const breedFetch = function(name, callback){
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${name}`, (err, response, body) =>{
    console.log(name);
  if (err || response.statusCode !== 200){
      return callback(err, response);
    }
    else{ 
      const deSerialObj = JSON.parse(body);
      callback(err, response, deSerialObj);  
    }
  });
}

module.exports = {
  fetchBreedDescription:  breedFetch
}; // exports the function to communicate across modules