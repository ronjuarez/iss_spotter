const { fetchMyIP } = require('./iss');

fetchMyIP ((error, ip) => {
  
  if (error) {
    console.log(error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});