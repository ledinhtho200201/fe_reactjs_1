import _ from "lodash";

const Question = (props) => {
    const { data, index } = props;
    if (_.isEmpty(data)) {
        return (<></>)
    }

    const handleClickCheckbox = (event, questionId, answerId) => {
        console.log('qId: ', questionId, 'aId: ', answerId)
        props.handleCheckbox(questionId, answerId)
    }

    return (
        <>
            {data.image ?
                <div className="q-image">
                    <img src={`data:image/jpeg;base64,${data.image}`} />
                </div>
                :
                <div className="q-image"></div>
            }
            <div className="question">
                Question {index + 1}: {data.questionDescription}
            </div>
            <div className="answer">
                {data.answers && data.answers.length &&
                    data.answers.map((a, index) => {
                        return (
                            <div key={`answer-${index}`}
                                className="a-child">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" checked={a.isSelected} value="" onClick={(event) => handleClickCheckbox(event, data.questionId, a.id)} />
                                    <label class="form-check-label" >
                                        {a.description}
                                    </label>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </>
    )
}
export default Question;