const axios = require('axios');

const url =
  'https://api.darksky.net/forecast/29264f98e04d8987d6fec747080e51c5/37.8267,-122.4233';

const getWeather = async () => {
  try {
    const response = await axios.get(url);
    console.log(response.data.currently);
  } catch (error) {
    console.log(error);
  }
};
getWeather(); //calling the wheather function
