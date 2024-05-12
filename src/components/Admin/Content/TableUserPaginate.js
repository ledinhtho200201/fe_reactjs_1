import ReactPaginate from "react-paginate";
import { useEffect, useState } from 'react';


const TableUserPaginate = (props) => {
    const { listUsers, pageCount, fetchListUsersWithPagenate, handleClickButtonUpdate, handleClickButtonView, handleClickButtonDelete } = props

    const handlePageClick = (event) => {
        fetchListUsersWithPagenate(event.selected + 1)
        props.setCurrentPage(event.selected + 1)
        console.log(`User requested page number ${event.selected}`);
    };

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
                                <td colSpan={5}>Data not found</td>
                            </tr>
                        }


                    </tbody>
                </table>
                <div className="user-pagination d-flex justify-content-center">
                    <ReactPaginate
                        nextLabel="Next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={pageCount}
                        previousLabel="< Prev"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                        forcePage={props.currentPage - 1}
                    />
                </div>
            </div>
        </>
    )
}

export default TableUserPaginate;