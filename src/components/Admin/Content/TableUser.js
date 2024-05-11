

const TableUser = (props) => {
    const { listUsers, handleClickButtonUpdate, handleClickButtonView, handleClickButtonDelete } = props

    return (
        <>
            <div className='table-user-container'>
                <table className="table table-success table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers && listUsers.length > 0 &&
                            listUsers.map((user, index) => {
                                return (
                                    <tr key={`table-user-${index}`}>
                                        <th scope="row">{user.id}</th>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                        <td>
                                            <button className="btn btn-secondary"
                                                onClick={() => { handleClickButtonView(user) }}>
                                                View
                                            </button>
                                            <button className="btn btn-warning mx-3"
                                                onClick={() => { handleClickButtonUpdate(user) }}>
                                                Update
                                            </button>
                                            <button className="btn btn-danger"
                                                onClick={() => { handleClickButtonDelete(user) }}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        {listUsers && listUsers.length === 0 &&
                            <tr>
                                <td colSpan={4}>Data not found</td>
                            </tr>
                        }


                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableUser;