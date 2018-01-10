import React from "react";
import WeatherForm from "WeatherForm";
import WeatherMessage from "WeatherMessage";
import OpenWeatherMap from "OpenWeatherMap";

var Weather = React.createClass({
    getInitialState: function() {
            return {
                isLoading: false
            }
    },
    handleSearch: function(location) {
        var that = this;
        this.setState({isLoading: true});
        OpenWeatherMap.getTemp(location).then(function(temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function(errorMessage) {
            that.setState({
                isLoading: false
            });
            alert(errorMessage);
        });
    },
    render: function() {
        var {location, temp, isLoading} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching Weather...</h3>
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp}/>
            }
        }
        return (
            <div>
                <h3>Get Temperature</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;
