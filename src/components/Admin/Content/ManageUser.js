import ModalCreateUser from './ModalCreateUser';
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import TableUser from './TableUser';
import { useEffect, useState } from "react";
import { getAllUsers } from '../../../services/apiServices'
import ModalUpdateUser from './ModalUpdateUser';
import ModalViewDetailUser from './ModalViewDetailUser';
import ModalDeleteUser from './ModalDeleteUser';

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewDetailUser, setShowModalViewDetailUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
    const [listUsers, setListUsers] = useState([])
    const [dataUpdate, setDataUpdate] = useState({})
    const [dataView, setDataView] = useState({})
    const [dataDelete, setDataDelete] = useState({})

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

    const handleClickButtonView = (user) => {
        setShowModalViewDetailUser(!showModalViewDetailUser)
        setDataView(user)
    }

    const handleClickButtonDelete = (user) => {
        setShowModalDeleteUser(!showModalDeleteUser)
        setDataDelete(user)
    }

    const resetUpdateData = () => {
        setDataUpdate({})
    }

    const resetViewData = () => {
        setDataView({})
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
                    handleClickButtonView={handleClickButtonView}
                    handleClickButtonDelete={handleClickButtonDelete}
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
                    resetUpdateData={resetUpdateData}
                />
                <ModalViewDetailUser
                    show={showModalViewDetailUser}
                    setShow={setShowModalViewDetailUser}
                    dataView={dataView}
                    resetViewData={resetViewData}
                />
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataDelete={dataDelete}
                    fetchListUsers={fetchListUsers}

                />
            </div>
        </div>
    )
}

export default ManageUser;