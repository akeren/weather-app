const axios = require('axios');
const forcast = async (longitude, latitude, callback) => {
  const url = `https://api.darksky.net/forecast/${process.env.DARKSKY_SECRET_KEY}/${latitude},${longitude}`;
  try {
    const { data } = await axios.get(url);
    const temperature = data.currently.temperature;
    const precipProbability = data.currently.precipProbability;
    const dailySummary = data.daily.data[0].summary;
    callback(undefined, {
      temperature,
      precipProbability,
      dailySummary,
      message: `${dailySummary} It's currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`
    });
  } catch (error) {
    callback('Unable to find wheather location.', undefined);
  }
};

module.exports = forcast;
