import React from "react";

export default class RefContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            userName: "Abc"
        }
    }

    changeInput = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    getValue = () => {
        console.dir(this.refs.userAge.value);
    }

    setData = () => {
        this.refs.userAge.value = "New Value";
    }

    render() {
        return (
            <div>
                User Name: <input type="text" value={this.state.userName} onChange={this.changeInput} /><br></br><br></br>

                User Age: <input type="text" ref="userAge" />

                <p>My User Name is: {this.state.userName}</p>

                <input type="button" value="Click Me" onClick={this.getValue} /><br></br><br></br>

                <input type="button" value="Set Value" onClick={this.setData} />
            </div>
        )
    }
}