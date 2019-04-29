import React from 'react';
import { allResolved } from 'q';

export default class LifeCycleComponents extends React.Component {
    constructor() {
        super();

        this.state = {
            name: "Myaank"
        }
    }

    // Component Initialisation

    componentWillMount() {
        alert("Component Stated the process of Mounting")
    }

    componentDidMount() {
        alert("Component Mounted");
    }

    componentWillUnmount() {
        alert("Component n mounted");
    }

    componentWillUpdate() {
        alert("Component Updation in progress....")
    }

    componentDidUpdate() {
        alert("Component Updated....")
    }

    updateValues = () => {
        this.setState({
            name: "Anshul"
        })
    }

    shouldComponentUpdate(nextProps, newState) {
        alert('New Value: ' + this.state.name)
        alert("Decide if the component need to be updated")
        return true;
    }

    render() {
        return (
            <div>
                <p>Hello Life Cycle events {this.state.name}</p>
                <input type="button" onClick={this.updateValues} value="Update" />
            </div>
        )
    }
}