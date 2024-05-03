import React from "react";

class UserInfor extends React.Component {
    state = {
        name: 'than thoai',
        address: 'Ha Noi',
        age: 23
    };

    handleClick(event) {
        console.log("My name is: ", this.state.name)
        console.log(event.pageX)
        // react class => merge state
        this.setState({
            name: 'thold',
            age: Math.floor(Math.random() * 100 + 1)
        })
    }

    handleOnMouseOver(event) {
        console.log("Mouse over my button")
        console.log(event.pageX)
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeInputAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <>
                <div>My name is {this.state.name} and I'm from {this.state.age}</div>
                {/* <button onClick={(event) => { this.handleClick(event) }}>Clink me</button>
                <button onMouseOver={(event) => { this.handleOnMouseOver(event) }}>Hover me</button> */}
                <form onSubmit={(event) => { this.handleFormSubmit(event) }}>
                    <input
                        value={this.state.name}
                        onChange={(event) => { this.handleOnChangeInput(event) }}
                        type="text"
                    />
                    <br />
                    <input
                        value={this.state.age}
                        onChange={(event) => { this.handleOnChangeInputAge(event) }}
                        type="text"
                    />
                    <button>Submit</button>
                </form>
            </>
        )
    }
}

export default UserInfor;