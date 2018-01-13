import axios from "axios";

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=c608ecc0bb7a535bfcc6ad30c4b84085&units=imperial";

// c608ecc0bb7a535bfcc6ad30c4b84085
// api.openweathermap.org/data/2.5/weather?


module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestURL).then(function(res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(err) {
            throw new Error("Unable to find weather information for that location");
        });
    }
};
