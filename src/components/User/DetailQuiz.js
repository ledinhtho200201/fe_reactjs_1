import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState, } from "react";
import { getDataQuiz } from "../../services/apiServices";
import _ from "lodash";
import "./DetailQuiz.scss";

const DetailQuiz = (props) => {
    const params = useParams();
    const location = useLocation();
    const quizId = parseInt(params.id);
    // let { quizTitle } = location.state;
    console.log('location', location)

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
                // Group the elements of Array based on `id` property
                .groupBy("id")
                // `key` is group's name (id), `value` is the array of objects
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
            <div className="left-content">
                <div className="title">
                    Quiz {quizId} : {location?.state?.quizTitle}
                </div>
                <div className="q-body">
                    <img />
                </div>
                <div className="q-content">
                    <div className="question">
                        Question 1: How are you doing?
                    </div>
                    <div className="answer">
                        <div className="a-child">A. hahaha</div>
                        <div className="a-child">B. hahaha</div>
                        <div className="a-child">C. hahaha</div>
                    </div>
                </div>
                <div className="footer">
                    <button className="btn btn-secondary">Prev</button>
                    <button className="btn btn-primary">Next</button>

                </div>
            </div>
            <div className="right-content">
                count down

            </div>
        </div>
    )
}

export default DetailQuiz;