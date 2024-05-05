import React, { useState } from "react";
import './DisplayInfor.scss';
import logo1 from '../logo.svg';

// stateless vs stateful
// class DisplayInfor extends React.Component {
//     render() {
//         console.log('>>> call me render')
//         const { listUsers } = this.props;
//         return (
//             <div className="display-infor-container">

//                 {true &&
//                     <>
//                         {listUsers.map((user, index) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div> My name's {user.name}</div>
//                                     <div> My age's {user.age}</div>
//                                     <div> My company's {user.company}</div>
//                                     <button onClick={() => this.props.handleDeleteAUser(user.id)}>Delete</button>
//                                     <hr />
//                                 </div>
//                             )
//                         })
//                         }
//                     </>
//                 }

//             </div>
//             // <p style={{ color: "red" }}>Hello, his name is {name}, age {age} and her company is {company} from Display Infor component</p>
//         );
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser)
    }

    return (
        <div className="display-infor-container">
            <div style={{ cursor: "pointer" }} onClick={() => handleShowHideListUser()}>
                <span>
                    {isShowHideListUser ? " Hide list users:" : "Show list users: "}
                </span>
            </div>
            {isShowHideListUser &&
                <>
                    {listUsers.map((user, index) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div> My name's {user.name}</div>
                                <div> My age's {user.age}</div>
                                <div> My company's {user.company}</div>
                                <button onClick={() => props.handleDeleteAUser(user.id)}>Delete</button>
                                <hr />
                            </div>
                        )
                    })
                    }
                </>
            }
        </div>
    );
}

export default DisplayInfor;