import React from "react";

export default class EmployeeListComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Anshul Gupta",
            age: 20,
            designation: "Developer"
        }
    }

    myPartialJSXData() {
        return <h2>This is Partial JSX. you can save and send Partial JSX Contents</h2>;
    }

    changeUserName = () => {
        this.setState({
            age: 500
        })
        this.forceUpdate();
    }

    changeUserAge = () => {
        this.setState({
            age: 30
        })
    }

    changeInputValues = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <div>
                <b>This is Mayank.. And I contain some State Variables {this.state.name}</b>
                <p>My Age: is: {this.state.age}</p>
                <p>My Designation is: {this.state.designation}</p>
                <input type="button" value="Click Me to Change User Name" onClick={this.changeUserName}/><br></br><br></br>
                <input type="button" value="Click Me" onClick={this.changeUserAge}/><br></br><br></br>

                <input type="text" value={this.state.name} onChange={this.changeInputValues}/><br></br><br></br>
                {this.myPartialJSXData()}
            </div>
        );
    }
}