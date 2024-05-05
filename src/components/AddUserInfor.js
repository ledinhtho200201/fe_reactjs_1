import React, { useState } from "react";

const AddUserInfor = (props) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [age, setAge] = useState('');
    const [company, setCompany] = useState('');

    const handleOnChangeInputName = (event) => {
        setName(event.target.value)
    }

    const handleOnChangeInputAge = (event) => {
        setAge(event.target.value)
    }

    const handleOnChangeInputAddress = (event) => {
        setAddress(event.target.value)
    }

    const handleOnChangeInputCompany = (event) => {
        setCompany(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        props.handleAddNewUser({
            id: Math.floor(Math.random() * 100 + 1) + '-random',
            name: name,
            address: address,
            age: age,
            company: company
        })
    }
    return (
        <>
            <div>My name is {name} and I'm from {age}, company is {company} and my address is {address}</div>
            <form onSubmit={(event) => { handleFormSubmit(event) }}>
                <label>Name</label>
                <input
                    value={name}
                    onChange={(event) => { handleOnChangeInputName(event) }}
                    type="text"
                />
                <br />
                <label>Age</label>
                <input
                    value={age}
                    onChange={(event) => { handleOnChangeInputAge(event) }}
                    type="text"
                />
                <br />
                <label>Address</label>
                <input
                    value={address}
                    onChange={(event) => { handleOnChangeInputAddress(event) }}
                    type="text"
                />
                <br />
                <label>Company</label>
                <input
                    value={company}
                    onChange={(event) => { handleOnChangeInputCompany(event) }}
                    type="text"
                />
                <br />
                <button>Submit</button>
            </form>
        </>
    )
}

export default AddUserInfor;