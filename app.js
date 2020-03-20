const axios = require('axios');

const getGeocode = require('./utils/geocode');
const getWheatherForcast = require('./utils/forcast');

getWheatherForcast(8.53611, 7.73056, (error, response) => {
  console.error('Error', error);
  console.log('Data', response);
});

getGeocode('Makurdi', (error, response) => {
  console.error('Error:', error);
  console.log('Data:', response);
});
