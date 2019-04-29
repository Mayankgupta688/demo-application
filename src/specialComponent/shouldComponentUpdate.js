import React from "react";

export default class ShouldComponentUpdate extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank",
            age: 20,
            designation: "Developer",
            salary: 20000
        }
    }

    updateEmployeeSalary = () => {
        this.setState({
            salary: 30000
        })
    }

    updateEmployeeAge = () => {
        this.setState({
            age: 30
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.name !== nextState.name || this.state.age !== nextState.age || this.state.designation !== nextState.designation) {
            return true;
        }
        return false;
    }

    render() {
        alert("Component Re-Rendered")
        return (
            <div>
                <p>My Name is: {this.state.name}</p>
                <p>My Age is: {this.state.age}</p>
                <p>My Designation is: {this.state.designation}</p>
                <p>
                    <input type="button" onClick={this.updateEmployeeAge} value="Update Age"></input><br></br><br></br>
                    <input type="button" onClick={this.updateEmployeeSalary} value="Update Salary"></input>
                </p>
            </div>
        )
    }
}