import _ from "lodash";
import { useState } from "react";
import Lightbox from "react-awesome-lightbox";


const Question = (props) => {
    const { data, index } = props;
    const [isPreviewImage, setIsPreviewImage] = useState(false)

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
                    <img style={{ cursor: "pointer" }}
                        src={`data:image/jpeg;base64,${data.image}`}
                        onClick={() => setIsPreviewImage(true)}
                    />
                    {isPreviewImage === true &&
                        <Lightbox
                            image={`data:image/jpeg;base64,${data.image}`}
                            title={'Question Image'}
                            onClose={() => setIsPreviewImage(false)}
                        >
                        </Lightbox>
                    }
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
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" checked={a.isSelected} value="" onClick={(event) => handleClickCheckbox(event, data.questionId, a.id)} />
                                    <label className="form-check-label" >
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