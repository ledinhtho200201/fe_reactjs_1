import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDataQuiz } from "../../services/apiServices"

const DetailQuiz = (props) => {
    const params = useParams();
    const quizId = parseInt(params.id);
    console.log(typeof quizId)

    useEffect(() => {
        fetchQuestions()
    }, [quizId])

    const fetchQuestions = async () => {
        console.log('check quizId: ', quizId)
        let res = await getDataQuiz(quizId);
        console.log('check res: ', res)
    }

    return (
        <div className="detail-quiz-container">
            Detail quiz
        </div>
    )
}

export default DetailQuiz;