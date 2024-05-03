// class component
// function component
import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
    // JSX
    render() {
        const myInfor = ['ab', 'ac', 'bc'];
        return (
            <>
                <UserInfor />
                <DisplayInfor name="thaothoi" age={26} company="ecommus" />
                <hr />
                <DisplayInfor name="thuan chan" age={23} company={"thuy loi"} myInfor={myInfor} />
            </>
        );
    }
}

export default MyComponent;