const { fetchCoordsByIP } = require('./iss');

// fetchMyIP ((error, ip) => {
  
//   if (error) {
//     console.log(error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });


fetchCoordsByIP('142.118.116.81', (error, coords) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned Coords:' , coords);
});