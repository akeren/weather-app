require('dotenv').config();
const getGeocode = require('./utils/geocode');
const getWeatherForcast = require('./utils/forcast');

const address = process.argv[2];
if (!address) {
  console.warn('Please provide an address!');
} else {
  getGeocode(address, (error, { longitude, latitude, location }) => {
    if (error) {
      return console.error(error);
    }
    console.log(location);
    getWeatherForcast(
      longitude,
      latitude,
      (error, { temperature, message }) => {
        if (error) {
          return console.error(error);
        }
        console.log(message);
      }
    );
  });
}
