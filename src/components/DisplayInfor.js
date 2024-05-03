import React from "react";
import './DisplayInfor.scss';
import logo1 from '../logo.svg';

class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true
    }

    handleShowHideUser = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser,
        })
    }
    render() {
        const { listUsers } = this.props;
        return (
            <div className="display-infor-container">
                <img src={logo1} />
                <div onClick={() => this.handleShowHideUser()} style={{ cursor: 'pointer' }}>

                    {this.state.isShowListUser ? "Hide list Users: " : "Show list Users:"}
                </div>
                {this.state.isShowListUser &&
                    <>
                        {listUsers.map((user, index) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div> My name's {user.name}</div>
                                    <div> My age's {user.age}</div>
                                    <div> My company's {user.company}</div>
                                    <hr />
                                </div>
                            )
                        })
                        }
                    </>
                }

            </div>
            // <p style={{ color: "red" }}>Hello, his name is {name}, age {age} and her company is {company} from Display Infor component</p>
        );
    }
}

export default DisplayInfor;