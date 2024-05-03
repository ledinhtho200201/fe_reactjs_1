// class component
// function component
import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
    // JSX
    render() {
        const listUsers = [
            { id: 1, name: "thaothoi", age: 26, company: "secomuns" },
            { id: 2, name: "thuan chan", age: 13, company: "yep" },
            { id: 3, name: "thu uyen", age: 23, company: "lotus" },
        ];
        return (
            <>
                <UserInfor />
                <hr />
                <DisplayInfor listUsers={listUsers} />
            </>
        );
    }
}

export default MyComponent;