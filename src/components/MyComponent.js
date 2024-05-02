// class component
// function component
import React from "react";

class MyComponent extends React.Component {
    // JSX
    render() {
        return (
            <>
                <div>My first component</div>
                {Math.random()}
            </>
        );
    }
}

export default MyComponent;