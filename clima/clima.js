const axios = require("axios");

const getClima = async(lat, lng) => {
    const resp = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d643755954b0fb17edd5234708922b74&units=metric`
    );

    return resp.data.main.temp;
};

module.exports = {
    getClima,
};