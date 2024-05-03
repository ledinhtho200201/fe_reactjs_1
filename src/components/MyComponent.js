// class component
// function component
import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "thaothoi", age: 26, company: "secomuns" },
            { id: 2, name: "thuan chan", age: 13, company: "yep" },
            { id: 3, name: "thu uyen", age: 23, company: "lotus" },
        ]
    };

    handleAddNewUser = (newUser) => {
        console.log('>>> check param from child: ', newUser)
        this.setState({
            listUsers: [newUser, ...this.state.listUsers]
        })
    }

    // JSX
    render() {
        return (
            <>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}
                />
                <hr />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                />
            </>
        );
    }
}

export default MyComponent;