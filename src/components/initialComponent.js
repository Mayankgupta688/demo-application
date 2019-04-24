import React from "react";
import ReactDOM from "react-dom";

var myDetails = {
    name: "Anshul Gupta Dummy Data",
    age: 20,
    designation: "Developer"
}

var displayTemplate = <div><div><b>Hello World.. The name is: {myDetails.name}</b></div></div>;

ReactDOM.render(displayTemplate, document.getElementById("rootData"));