import React from "react";

export default class PureComponents extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            name: "Mayank",
            age: 20
        }
    }

    updateAge = () => {
        this.setState({
            age: this.state.age + 10
        })
    }

    render() {

        alert("Component is Re-Rendered");

        return (
            <div>
                <p>My Name is: {this.state.name}</p>
                <p>My Age is: {this.state.age}</p>
                <p>
                    <input type="button" value="Update Age" onClick={this.updateAge} />
                </p>
            </div>
        )
    }
}