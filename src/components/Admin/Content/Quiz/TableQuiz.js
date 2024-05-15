import { useEffect, useState } from "react";
import { getAllQuizForAdmin } from "../../../../services/apiServices";

const TableQuiz = (props) => {
    const [listQuiz, setListQuiz] = useState([]);

    useEffect(() => {
        fetchQuiz();
    }, [])

    const fetchQuiz = async () => {
        let res = await getAllQuizForAdmin();
        if (res && res.EC === 0) {
            setListQuiz(res.DT)
        }
    }

    return (
        <>
            <div>List Quizzes: </div>
            <div className='table-user-container'>
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
                                        <td style={{ display: "flex", "justify-content": "center" }}>
                                            <button className="btn btn-warning mx-3"
                                            // onClick={() => { handleClickButtonUpdate(user) }}
                                            >
                                                Update
                                            </button>
                                            <button className="btn btn-danger"
                                            // onClick={() => { handleClickButtonDelete(user) }}
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
            </div >
        </>
    )
}
export default TableQuiz;