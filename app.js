const getGeocode = require('./utils/geocode');
const getWheatherForcast = require('./utils/forcast');

const address = process.argv[2];
if (!address) {
  console.warn('Please provide an address!');
} else {
  getGeocode(address, (error, response) => {
    if (error) {
      return console.error(error);
    }
    console.log(response.location);
    getWheatherForcast(
      response.longitude,
      response.latitude,
      (error, forcastData) => {
        if (error) {
          return console.error(error);
        }
        console.log(forcastData.message);
      }
    );
  });
}
