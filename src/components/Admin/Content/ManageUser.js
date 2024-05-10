import ModalCreateUser from './ModalCreateUser';
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import TableUser from './TableUser';
import { useEffect, useState } from "react";
import { getAllUsers } from '../../../services/apiServices'
import ModalUpdateUser from './ModalUpdateUser';

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [listUsers, setListUsers] = useState([])
    const [dataUpdate, setDataUpdate] = useState({})

    // const handleShowHideModal = (value) => {
    //     setShowModalCreateUser(value);
    // }

    useEffect(() => {
        fetchListUsers();
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }

    const handleClickButtonUpdate = (user) => {
        setShowModalUpdateUser(!showModalUpdateUser)
        setDataUpdate(user)
    }

    const resetUpdateDate = () => {
        setDataUpdate({})
    }

    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className='btn-add-new'>
                    <button className='btn btn-primary' onClick={() => setShowModalCreateUser(!showModalCreateUser)}><FcPlus />Add new users</button>
                </div>
                <TableUser
                    listUsers={listUsers}
                    handleClickButtonUpdate={handleClickButtonUpdate}
                />
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    // setShow={handleShowHideModal}
                    fetchListUsers={fetchListUsers}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUsers={fetchListUsers}
                    resetUpdateDate={resetUpdateDate}
                />
            </div>
        </div>
    )
}

export default ManageUser;