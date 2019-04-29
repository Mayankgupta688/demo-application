import React from "react";
import ReactDOM from "react-dom";
import ContextProvidersGrandParents from "./specialComponent/contextProviders";

ReactDOM.render((
    <div>
        <ContextProvidersGrandParents></ContextProvidersGrandParents>
    </div>)
, document.getElementsByTagName("div")[0]);