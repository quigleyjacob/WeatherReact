import React from "react";

var WeatherForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();
        var location = this.refs.location.value;
        var updates = {};
        if (location.length > 0) {
            this.refs.location.value = "";
            this.props.onSearch(location);
        }
    },
    render: function() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type="text" ref="location" placeholder="Search Weather"/>
                </div>
                <div>
                    <button className="hollow button expanded">Get Weather</button>
                </div>
            </form>
        );
    }
});

module.exports = WeatherForm;
