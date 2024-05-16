import { useEffect, useState } from "react";
import { getAllQuizForAdmin } from "../../../../services/apiServices";
import ModalDeleteQuiz from "./ModalDeleteQuiz";
import ModalUpdateQuiz from "./ModalUpdateQuiz"

const TableQuiz = (props) => {
    const [listQuiz, setListQuiz] = useState([]);
    const [showModdalDeleteQuiz, setShowModalDeleteQuiz] = useState(false);
    const [showModdalUpdateQuiz, setShowModalUpdateQuiz] = useState(false);
    const [dataDelete, setDataDelete] = useState({})
    const [dataUpdate, setDataUpdate] = useState({})

    useEffect(() => {
        fetchQuiz();
    }, [])

    const fetchQuiz = async () => {
        let res = await getAllQuizForAdmin();
        if (res && res.EC === 0) {
            setListQuiz(res.DT)
        }
    }

    const handleButtonDeleteQuiz = (quiz) => {
        setShowModalDeleteQuiz(!showModdalDeleteQuiz)
        setDataDelete(quiz)
    }

    const handleButtonUpdateQuiz = (quiz) => {
        setShowModalUpdateQuiz(!showModdalUpdateQuiz)
        setDataUpdate(quiz)
    }

    const resetUpdateData = () => {
        setDataUpdate({});
    }

    return (
        <>
            <div>List Quizzes: </div>
            <div className='table-user-container my-2'>
                <table className="table table-success table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Type</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listQuiz && listQuiz.length > 0 &&
                            listQuiz.map((quiz, index) => {
                                return (
                                    <tr key={`table-user-${index}`}>
                                        <th scope="row">{quiz.id}</th>
                                        <td>{quiz.name}</td>
                                        <td>{quiz.description}</td>
                                        <td>{quiz.difficulty}</td>
                                        <td style={{ display: "flex", justifyContent: "center" }}>
                                            <button className="btn btn-warning mx-3"
                                                onClick={() => { handleButtonUpdateQuiz(quiz) }}
                                            >
                                                Update
                                            </button>
                                            <button className="btn btn-danger"
                                                onClick={() => { handleButtonDeleteQuiz(quiz) }}
                                            >
                                                Delete
                                            </button>
                                        </td>

                                    </tr>
                                )
                            })
                        }
                        {listQuiz && listQuiz.length === 0 &&
                            <tr>
                                <td colSpan={5}>Data quiz not found</td>
                            </tr>
                        }
                    </tbody>
                </table>
                <ModalDeleteQuiz
                    show={showModdalDeleteQuiz}
                    setShow={setShowModalDeleteQuiz}
                    dataDelete={dataDelete}
                    fetchQuiz={fetchQuiz}
                />
                <ModalUpdateQuiz
                    show={showModdalUpdateQuiz}
                    setShow={setShowModalUpdateQuiz}
                    dataUpdate={dataUpdate}
                    fetchQuiz={fetchQuiz}
                    resetUpdateData={resetUpdateData}
                />
            </div >
        </>
    )
}
export default TableQuiz;