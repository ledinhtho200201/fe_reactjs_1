import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState, } from "react";
import { getDataQuiz, postSubmitQuiz } from "../../services/apiServices";
import _ from "lodash";
import "./DetailQuiz.scss";
import Question from "./Question";
import ModalResult from "./ModalResult";
import RightContent from "./Content/RightContent";

const DetailQuiz = (props) => {
    const params = useParams();
    const location = useLocation();
    const quizId = parseInt(params.id);

    const [dataQuiz, setDataQuiz] = useState([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [isShowModalResult, setIsShowModalResult] = useState(false);
    const [dataModalResult, setDataModalResult] = useState({})

    useEffect(() => {
        fetchQuestions()
    }, [quizId])

    const fetchQuestions = async () => {
        let res = await getDataQuiz(quizId);
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
                        item.answers.isSelected = false;
                        answers.push(item.answers)
                    })
                    return (
                        { questionId: key, answers: answers, questionDescription, image }
                    )
                })
                .value()
            setDataQuiz(data)
        }
    }

    const handlePrev = () => {
        if (currentQuestionIndex - 1 < 0) return;
        setCurrentQuestionIndex(currentQuestionIndex - 1)
    }

    const handleNext = () => {
        if (dataQuiz && dataQuiz.length > currentQuestionIndex + 1)
            setCurrentQuestionIndex(currentQuestionIndex + 1)
    }

    const handleCheckbox = (questionId, answerId) => {
        let dataQuizClone = _.cloneDeep(dataQuiz); //react hook doesn't merge state
        let question = dataQuizClone.find(item => +item.questionId === +questionId)
        if (question && question.answers) {
            question.answers = question.answers.map(item => {
                if (+item.id === +answerId) {
                    item.isSelected = !item.isSelected;
                }
                return item;
            })
        }
        let index = dataQuizClone.findIndex(item => +item.questionId === +questionId)
        if (index > -1) {
            dataQuizClone[index] = question;
            setDataQuiz(dataQuizClone);
        }
    }

    const handleFinishQuiz = async () => {
        console.log('>>>check data before submit: ', dataQuiz)
        let payload = {
            quizId: quizId,
            answers: []
        };
        let answers = []
        if (dataQuiz && dataQuiz.length > 0) {
            dataQuiz.forEach(question => {
                let questionId = +question.questionId;
                let userAnswerId = [];

                question.answers.forEach(a => {
                    if (a.isSelected === true) {
                        userAnswerId.push(a.id)
                    }
                })
                answers.push({
                    questionId: questionId,
                    userAnswerId: userAnswerId
                })
            })
            payload.answers = answers;
            //submit api
            let res = await postSubmitQuiz(payload);
            console.log('check res: ', res)
            if (res && res.EC === 0) {
                setDataModalResult({
                    countCorrect: res.DT.countCorrect,
                    countTotal: res.DT.countTotal,
                    quizData: res.DT.quizData,
                })
                setIsShowModalResult(true);
            } else {
                alert('something wrongs...')
            }

        }
    }

    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    Quiz {quizId} : {location?.state?.quizTitle}
                </div>
                <hr />
                <div className="q-body">
                    <img />
                </div>
                <div className="q-content">
                    <Question
                        index={currentQuestionIndex}
                        data={dataQuiz && dataQuiz.length > 0
                            ?
                            dataQuiz[currentQuestionIndex]
                            : []
                        }
                        handleCheckbox={handleCheckbox}
                    />
                </div>
                <div className="footer">
                    <button className="btn btn-secondary" onClick={() => handlePrev()}>Prev</button>
                    <button className="btn btn-primary" onClick={() => handleNext()}>Next</button>
                    <button className="btn btn-warning" onClick={() => handleFinishQuiz()}>Finish</button>
                </div>
            </div>
            <div className="right-content">
                <RightContent
                    dataQuiz={dataQuiz}
                    handleFinishQuiz={handleFinishQuiz}
                    setIndex={setCurrentQuestionIndex}
                />

            </div>
            <ModalResult
                show={isShowModalResult}
                setShow={setIsShowModalResult}
                dataModalResult={dataModalResult}
            />
        </div>
    )
}

export default DetailQuiz;