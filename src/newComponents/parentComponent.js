import React from "react";
import ChildComponent from "./childComponent";

export default class ParentComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            age: 20, 
            address: "Delhi",
            salary: 100
        }
    }

    incrementSalary = (bonus) => {
        this.setState({
            salary: this.state.salary + bonus,
            name: "Mayank"
        })
    }

    newFunction = () => this.incrementSalary(1000);

    render() {

        if(this.state.name === "") {
            return (
                <div>
                    <p>Hello Guest</p>
                    <input type="button" onClick={this.newFunction} value="Click To Increment"/>
                </div>
            )
        } else return (
            <div>
                <p>Hello {this.state.name !== "" ? this.state.name: "Guest"}</p>
                <p>Parent Component: This is my Salary: {this.state.salary}</p>
                <input type="button" onClick={this.newFunction} value="Click To Increment"/>
                <p>
                    <h3>Below is the Child Component</h3>
                    <ChildComponent incrementSalaryFromChild={this.newFunction} name={this.state.name} age={this.state.age} salary={this.state.salary}></ChildComponent>
                </p>
            </div>
        )
    }
}