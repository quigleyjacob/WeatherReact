import React from "react";
import ReactDOM from "react-dom";
import Main from "Main";
import {Route, Router, IndexRoute, hashHistory} from "react-router";
import Weather from "Weather";
import About from "About";
import Examples from "Examples";

//Load foundation
require("style!css!foundation-sites/dist/foundation.min.css");
$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About} />
            <Route path="examples" component={Examples}/>
            <IndexRoute component={Weather} />
        </Route>
    </Router>,
    document.getElementById("app")
);
