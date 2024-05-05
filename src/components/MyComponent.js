// class component
// function component
import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState(
        [
            { id: 1, name: "thaothoi", age: 26, company: "secomuns" },
            { id: 2, name: "thuan chan", age: 13, company: "yep" },
            { id: 3, name: "thu uyen", age: 23, company: "lotus" },
        ]
    )

    const handleAddNewUser = (newUser) => {
        console.log('>>> check param from child: ', newUser, 'listusers: ', listUsers)
        setListUsers([newUser, ...listUsers])
    }

    const handleDeleteAUser = (userId) => {
        let cloneListUsers = listUsers;
        cloneListUsers = cloneListUsers.filter(item => item.id !== userId);
        setListUsers(cloneListUsers)
    }

    return (
        <>
            <AddUserInfor
                handleAddNewUser={handleAddNewUser}
            />
            <hr />
            <DisplayInfor
                listUsers={listUsers}
                handleDeleteAUser={handleDeleteAUser}
            />
        </>
    )
}

export default MyComponent;