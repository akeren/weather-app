const axios = require('axios');
const geocode = async (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${process.env.MAPBOX_TOKEN}`;
  try {
    const { data } = await axios.get(url);
    if (data.features.length === 0) {
      callback('Unable to find the location. Try another search!', undefined);
    } else {
      callback(undefined, {
        longitude: data.features[0].center[0],
        latitude: data.features[0].center[1],
        location: data.features[0].place_name
      });
    }
  } catch (error) {
    callback(
      'Unable to connect to location service. Check your network connectivity.',
      undefined
    );
  }
};

module.exports = geocode;
