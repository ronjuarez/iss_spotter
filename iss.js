const request = require('request');



const fetchMyIP = (callback) => {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    const ip = JSON.parse(body).ip;

    callback(error,ip);

  })
  
  const fetchMyIpCoords = (ip, callback) => {
  request(`https://ipvigilante.com/json/${ip}`(error, response, body))


  }

//     if (error) {
//       console.log('error:', error); 
//       return;
//     } // Print the error if one occurred
//     console.log('statusCode:', ip); // Print the response status code if a response was received
// //    console.log('body:', body); // Print the HTML for the Google homepage.
  };

 


module.exports = { fetchMyIP };