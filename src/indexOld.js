import React from "react";
import ReactDOM from "react-dom";

var inlineStyles = {
    headerStyle: {
        color: 'pink',
        border: '1px solid red',
        marginTop: '15px',
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingLeft: '10px'
    }, initialBoldElement: {
        border: '1px solid green',
        margin: '10px',
        padding: '15px'
    }
}

function HeaderComponent(properties) {
    return (
        <div>
            <b className="initial-text" style={inlineStyles.initialBoldElement}>Hello World.. This is my Header Component.. {properties.name}... {properties.designation}</b><br></br><br></br>
            <b className="other-text">This is my new Demo... Please comment....</b>
            <h2 style={properties.somestyle}>This is to be styled using Object Literals</h2>
        </div>
    );
}

function FooterComponent() {
    return <div style={{'color': "blue"}}>Hello Again.. This is my Footer Component..</div>
}

var somestyle = {
    color: '#0000ff',
    border: '1px solid red',
    marginTop: '15px',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '10px'
}

ReactDOM.render((
    <div>
        <HeaderComponent somestyle={somestyle} name="Mayank" designation="Developer"></HeaderComponent><br></br><br></br>
        <FooterComponent></FooterComponent>
    </div>
), document.getElementById("root"));