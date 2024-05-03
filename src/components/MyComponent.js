// class component
// function component
import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'than thoai',
        address: 'Ha Noi',
        age: 23
    };


    // JSX
    render() {
        return (
            <>
                <div>My name is {this.state.name} and I'm from {this.state.address}</div>
            </>
        );
    }
}

export default MyComponent;