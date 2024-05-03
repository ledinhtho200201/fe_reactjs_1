import React from "react";

class DisplayInfor extends React.Component {
    render() {
        console.log('>>>check ne: ', this.props)
        const { name, age, company } = this.props;
        return (
            <p style={{ color: "red" }}>Hello, his name is {name}, age {age} and her company is {company} from Display Infor component</p>
        );
    }
}

export default DisplayInfor;