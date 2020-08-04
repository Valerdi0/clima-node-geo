const axios = require('axios');
require('dotenv').config()

const getLugarLatLng = async(dir) => {
    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=${process.env.API_KEY}`,
        timeout: 1000,
    });
    const resp = await instance.get();

    if (resp.data.results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.results[0];
    const direccion = data.formatted_address;
    const lat = data.geometry.location.lat;
    const lng = data.geometry.location.lng;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}