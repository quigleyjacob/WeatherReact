var React = require("react");

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>Welcome to the about page!</p>
            <p>This is an experimental app to get used to uing React.</p>
            <p>It is created using <a href="https://foundation.zurb.com/" target="_blank">Foundation</a> and <a href="https://openweathermap.org/" target="_blank">Open Weather Map</a></p>
            <p>Click <a href="https://github.com/quigleyjacob/WeatherReact target="_blank>here</a> to visit the GitHub repository.</p>
        </div>
    );
}

module.exports = About;
