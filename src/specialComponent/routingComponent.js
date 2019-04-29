import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

export default class RoutingComponent extends React.Component {
    
    render() {
        return (
            <div>
                <h1>Page Title</h1>

                <div>
                    <p>This is the Common Area for the Page</p>

                    <BrowserRouter>

                        <nav>
                            <Link style={{'marginRight': '10px'}} to="/">Home</Link>
                            <Link style={{'marginRight': '10px'}} to="/about">About</Link>
                            <Link style={{'marginRight': '10px'}} to="./help">Help</Link>
                        </nav><br></br><br></br>

                        <Route exact path="/" component={HomeComponent}></Route>
                        <Route exact path="/about" component={AboutComponent}></Route>
                        <Route exact path="/help" component={HelpComponent}></Route>

                    </BrowserRouter>

                </div>
            </div>
        )
    }
        
}

function HomeComponent() {
    return <b>Home Component</b>
}

function AboutComponent() {
    return <b>About Component</b>
}

function HelpComponent() {
    return <b>Help Component</b>
}