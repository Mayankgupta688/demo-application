import React from "react";

export default class ParentContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            isManager: true,
            isArchitect: false,
            isLead: true
        }
    }

    render() {
        return (
            <div>
                {this.props.children[2]}
                {this.state.isManager === true ? <div>Is Manger: true</div>: <div>Is Manger: false</div>}  
                {this.state.isArchitect === true ? <div>Is isArchitect: true</div>: <div>Is isArchitect: false</div>}  
                {this.state.isLead === true ? <div>Is isLead: true</div>: <div>Is isLead: false</div>}  
                {this.props.children[1]}
                {this.props.children[0]}
            </div>
        )
    }
}