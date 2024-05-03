import React from "react";

class AddUserInfor extends React.Component {
    state = {
        name: '',
        address: '',
        age: '',
        company: ''
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
        console.log('check state from new user: ', this.state)
        this.props.handleAddNewUser({
            id: Math.floor(Math.random() * 100 + 1) + '-random',
            name: this.state.name,
            age: this.state.age,
            company: this.state.company
        })
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

export default AddUserInfor;