import ModalCreateUser from './ModalCreateUser';
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import TableUser from './TableUser';
import { useEffect, useState } from "react";
import { getAllUsers, getUserWithPagination } from '../../../services/apiServices'
import ModalUpdateUser from './ModalUpdateUser';
import ModalViewDetailUser from './ModalViewDetailUser';
import ModalDeleteUser from './ModalDeleteUser';
import TableUserPaginate from './TableUserPaginate';

const ManageUser = (props) => {
    const LIMIT_USER = 3;
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

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
        // fetchListUsers();
        fetchListUsersWithPagenate(1);
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }

    const fetchListUsersWithPagenate = async (page) => {
        let res = await getUserWithPagination(page, LIMIT_USER);
        if (res.EC === 0) {
            console.log('paginate', res)
            setListUsers(res.DT.users);
            setPageCount(res.DT.totalPages)
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
                {/* <TableUser
                    listUsers={listUsers}
                    handleClickButtonUpdate={handleClickButtonUpdate}
                    handleClickButtonView={handleClickButtonView}
                    handleClickButtonDelete={handleClickButtonDelete}
                /> */}
                <TableUserPaginate
                    listUsers={listUsers}
                    handleClickButtonUpdate={handleClickButtonUpdate}
                    handleClickButtonView={handleClickButtonView}
                    handleClickButtonDelete={handleClickButtonDelete}
                    pageCount={pageCount}
                    fetchListUsersWithPagenate={fetchListUsersWithPagenate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    // setShow={handleShowHideModal}
                    fetchListUsers={fetchListUsers}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    fetchListUsersWithPagenate={fetchListUsersWithPagenate}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUsers={fetchListUsers}
                    fetchListUsersWithPagenate={fetchListUsersWithPagenate}
                    resetUpdateData={resetUpdateData}
                    currentPage={currentPage}
                />
                <ModalViewDetailUser
                    show={showModalViewDetailUser}
                    setShow={setShowModalViewDetailUser}
                    dataView={dataView}
                    resetViewData={resetViewData}
                    currentPage={currentPage}
                    fetchListUsersWithPagenate={fetchListUsersWithPagenate}
                />
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataDelete={dataDelete}
                    fetchListUsers={fetchListUsers}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    fetchListUsersWithPagenate={fetchListUsersWithPagenate}
                />
            </div>
        </div>
    )
}

export default ManageUser;