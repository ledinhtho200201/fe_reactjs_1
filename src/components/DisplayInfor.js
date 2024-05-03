import React from "react";

class DisplayInfor extends React.Component {
    render() {
        const { listUsers } = this.props;
        console.log('>>>check ne: ', listUsers)
        return (
            <>
                {listUsers.map((user, index) => {
                    return (
                        <div key={user.id}>
                            <div> My name's {user.name}</div>
                            <div> My age's {user.age}</div>
                            <div> My company's {user.company}</div>
                            <hr />
                        </div>
                    )
                })
                }

            </>
            // <p style={{ color: "red" }}>Hello, his name is {name}, age {age} and her company is {company} from Display Infor component</p>
        );
    }
}

export default DisplayInfor;