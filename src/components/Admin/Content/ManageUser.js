import ModalCreateUser from './ModalCreateUser'


const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <button>Add new users</button>
                <ModalCreateUser />
            </div>
            <div>
                table users
            </div>
        </div>
    )
}

export default ManageUser;