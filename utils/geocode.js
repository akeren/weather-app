const axios = require('axios');
const geocode = async (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiYWtlcmVuIiwiYSI6ImNrN3lmNW81bzAxZnkzbXA5eDl6cmhkdjIifQ.QHY5oVZDX_gm_W_GDAw-EQ`;
  try {
    const response = await axios.get(url);
    if (response.data.features.length === 0) {
      callback('Unable to find the location. Try another search!', undefined);
    } else {
      callback(undefined, {
        longitude: response.data.features[0].center[0],
        latitude: response.data.features[0].center[1],
        location: response.data.features[0].place_name
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
