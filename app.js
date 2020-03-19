const axios = require('axios');

const darkskyUrl =
  'https://api.darksky.net/forecast/29264f98e04d8987d6fec747080e51c5/37.8267,-122.4233';

const getWeather = async url => {
  try {
    const response = await axios.get(url);
    //console.log(response);
    const temperature = response.data.currently.temperature;
    const precipProbability = response.data.currently.precipProbability;
    const dailySummary = response.data.daily.data[0].summary;
    console.log(
      `${dailySummary} It's currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`
    );
  } catch (error) {
    console.log(error);
  }
};
/*
 ** calling the function
 */
getWeather(darkskyUrl);
