const request = require('request');



// const fetchMyIP = (callback) => {
//   request('https://api.ipify.org?format=json', (error, response, body) => {
//     const ip = JSON.parse(body).ip;

//     callback(error,ip);

//   })
// }  


const fetchCoordsByIP = ((ip, callback) => {
  request(`https://ipvigilante.com/json/${ip}`, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching Coordinates for IP: ${body}`), null);
      return;
    }

    const { latitude, longitude } = JSON.parse(body).data;

    callback(null, { latitude, longitude });
})
});


//     if (error) {
//       console.log('error:', error); 
//       return;
//     } // Print the error if one occurred
//     console.log('statusCode:', ip); // Print the response status code if a response was received
// //    console.log('body:', body); // Print the HTML for the Google homepage.


 
module.exports = { fetchCoordsByIP };
//module.exports = { fetchMyIP };