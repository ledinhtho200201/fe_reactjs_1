import ModalCreateUser from './ModalCreateUser';
import './ManageUser.scss';

const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <ModalCreateUser />
                <div>
                    <button>Add new users</button>
                </div>
                <div>
                    table users
                </div>
            </div>
        </div>
    )
}

export default ManageUser;