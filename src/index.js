import React from "react";
import ReactDOM from "react-dom";
import ComponentWillRecieveProps from "./specialComponent/componentWillRecieveProps";

ReactDOM.render((
    <div>
        <ComponentWillRecieveProps></ComponentWillRecieveProps>
    </div>)
, document.getElementsByTagName("div")[0]);