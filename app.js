const axios = require('axios');

const getGeocode = require('./utils/geocode');

/* const darkskyURL =
  'https://api.darksky.net/forecast/29264f98e04d8987d6fec747080e51c5/37.8267,-122.4233';

const getWeather = async url => {
  try {
    const response = await axios.get(url);
    const temperature = response.data.currently.temperature;
    const precipProbability = response.data.currently.precipProbability;
    const dailySummary = response.data.daily.data[0].summary;
    console.log(
      `${dailySummary} It's currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`
    );
  } catch (error) {
    console.error('Unable to find wheather location.');
  }
};
 */

/*
 ** calling the function
 */
//getWeather(darkskyURL);
getGeocode('Makurdi', (error, response) => {
  console.error('Error:', error);
  console.log('Data:', response);
});
