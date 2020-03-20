const axios = require('axios');

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
}; */

const geocodeURL =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWtlcmVuIiwiYSI6ImNrN3lmNW81bzAxZnkzbXA5eDl6cmhkdjIifQ.QHY5oVZDX_gm_W_GDAw-EQ';

const getGeocode = async url => {
  try {
    const response = await axios.get(url);
    if (response.data.features.length === 0) {
      console.log('Unable to find the location. Try another search!');
    } else {
      const features = response.data.features[0];
      const longitude = features.center[0];
      const latitude = features.center[1];
      console.log(longitude, latitude);
    }
  } catch (error) {
    console.error(
      'Unable to connect to location service. Check your network connectivity.'
    );
  }
};

/*
 ** calling the function
 */
//getWeather(darkskyURL);
getGeocode(geocodeURL);
