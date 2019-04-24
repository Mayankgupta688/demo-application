import React from "react";

function EmployeeList() {

    var alertUser = function() {
        alert("This is Demo Page");
    }

    var alertUserDataChange = function() {
        alert("You tried changing the text value");
    }

    return (
        <div>
            <b>Total Employee Strength: 10</b><br></br><br></br>
            <div>This is another div at top level</div><br></br><br></br>

            <input type="button" value="Click Me" onClick={alertUser} /><br></br><br></br>
            <input type="text" onChange={alertUserDataChange} onKeyDown={alertUser} /><br></br>
        </div>
    )
}

var name = "Mayank";

var age = "20";

var designation = "Developer";

export { EmployeeList, name, age, designation}