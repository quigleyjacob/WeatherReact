var React = require("react");
import {Link} from "react-router";

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are a few example locations to try out</p>
            <ol>
                <li><Link to="/?location=Bourbonnais">Bourbonnais, IL</Link></li>
                <li><Link to="/?location=Portand">Portland, OR</Link></li>
            </ol>
        </div>
    );
};

module.exports = Examples;
