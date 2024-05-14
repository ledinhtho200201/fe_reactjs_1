import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDataQuiz } from "../../services/apiServices";
import _ from "lodash";

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
        if (res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                // Group the elements of Array based on `color` property
                .groupBy("id")
                // `key` is group's name (color), `value` is the array of objects
                .map((value, key) => {
                    let answers = [];
                    let questionDescription, image = null;

                    value.forEach((item, index) => {
                        if (index === 0) {
                            questionDescription = item.description;
                            image = item.image;
                        }
                        answers.push(item.answers)
                    })
                    return (
                        { questionId: key, answers: answers, questionDescription, image }
                    )
                })
                .value()
            console.log(data)
        }
    }

    return (
        <div className="detail-quiz-container">
            Detail quiz
        </div>
    )
}

export default DetailQuiz;