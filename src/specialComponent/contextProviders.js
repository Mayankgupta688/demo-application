import React from "react";

var FamilyContext = React.createContext({});
var FamilyProvider = FamilyContext.Provider;
var FamilyConsumer = FamilyContext.Consumer;

export default class ContextProvidersGrandParents extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "ABC",
            surname: "Aggarwal"
        }
    }

    render() {
        return (
            <FamilyProvider value={this.state.surname}>
                <div>
                    <p>Grand Parent Name: {this.state.name}</p>
                    <p>Grand Parent Surname: {this.state.surname}</p><br></br><br></br>

                    <Parents></Parents>

                </div>
            </FamilyProvider>
        )
    }
}

class Parents extends React.Component {
    constructor(){
        super();
        this.state = {
            name: "Xyz"
        }
    }

    render() {
        return (
            <div>
                <p>Parent Name is: {this.state.name}</p><br></br><br></br>

                <Childrens></Childrens>
            </div>
        )
    }
}

class Childrens extends React.Component {
    constructor(){
        super();
        this.state = {
            name: "Def"
        }
    }

    render() {
        return (
            <div>
                
                <p>Child Name is: {this.state.name}</p>
                
                <FamilyConsumer>
                    { (context) => <p>Child Surname is: {context}</p> }
                </FamilyConsumer>
            </div>
        )
    }
}