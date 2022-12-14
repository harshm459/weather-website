const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=afcc7af75cfdef9cb8f29451d217bec6&query=" + encodeURIComponent(latitude) + "," + encodeURIComponent(longitude) + "&units=f"
    
    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback("Unable to connect to weather service.", undefined);
        } else if (body.error) {
            callback("Unable to find location.", undefined);
        } else {
            callback(undefined,"" +body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " f degree , But it feels like " + body.current.feelslike + " f degrees out. And humidity is "+ body.current.humidity+"%." );
        }

    })
}

module.exports = forecast