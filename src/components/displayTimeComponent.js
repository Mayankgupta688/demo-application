import React from "react";
import ReactDOM from "react-dom";

function initializeDOMData() {
    ReactDOM.render(<div>Current Time: {new Date().toLocaleTimeString()}</div>, document.getElementById("root"));
}

setInterval(function() {
    initializeDOMData()
}, 1000);