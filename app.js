const getGeocode = require('./utils/geocode');
const getWheatherForcast = require('./utils/forcast');

getGeocode('Makurdi', (error, response) => {
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
