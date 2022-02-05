var WeatherService = (function () {
    function WeatherService(city) {
        this.city = city;
    }
    WeatherService.prototype.getWeather = function (callback) {
        var _this = this;
        var url = "http://api.openweathermap.org/data/2.5/weather?API=&APPID=d43debb0b9a3919fef3f0f689e82583e&q=" + this.city;
        var request = new XMLHttpRequest();
        request.addEventListener('load', function () {
            // parse weather data from Ajax call
            _this.weatherData = JSON.parse(request.responseText);
            // invoke callback to notify that we are done
            callback();
        });
        request.open('GET', url);
        request.send();
    };
    return WeatherService;
}());
// create instance of weather service for Seattle
var service = new WeatherService('Seattle');
// invoke the service to get weather data for Seattle
//service.getWeather(() => {
//    console.log(service.weatherData);
//});
// invoke the service to get weather data for Seattle
service.getWeather(function () {
    console.log(service.weatherData);
});
//# sourceMappingURL=FicklenessOfThis.js.map