import React from "react";

export default class ComponentWillRecieveProps extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            age: ""
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name: "Anshul"
            })
        }, 3000)
    };

    render() {
        return (
            <div>
                <ChildComponent name={this.state.name} age={this.state.age} />
            </div>
        )
    }
}


class ChildComponent extends React.Component {
    componentWillReceiveProps(props) {
        alert("Props Updated");
    }

    render() {
        return (
            <div>
                <p>My Name is: {this.props.name}</p>
                <p>My Age is: {this.props.age}</p>
            </div>
        )
    }
}