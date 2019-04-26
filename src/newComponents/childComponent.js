import React from "react";
import SubChildComponent from "./subChildComponent";

export default function ChildComponent(props) {

    return (
        <p>
            <p>Name value from Parent is: {props.name} {props.salary}</p>
            <input type="button" value="Increment Parent From Child" onClick={props.incrementSalaryFromChild}/><br></br>
            <SubChildComponent name={props.name}></SubChildComponent>
        </p>
    )
}