import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteQuizForAdmin } from '../../../../services/apiServices';
import { toast } from 'react-toastify';

const ModalDeleteQuiz = (props) => {
    const { show, setShow, dataDelete } = props;

    const handleClose = () => setShow(false);

    const handleSubmitDeleteQuiz = async (quizId) => {
        console.log(
            'check datadelete: ', quizId
        )
        let data = await deleteQuizForAdmin(quizId);

        if (data && data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            // props.setCurrentPage(1);
            await props.fetchQuiz();
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM)
        }
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm delete quiz</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete this quiz: id = <b>{dataDelete.id}</b></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitDeleteQuiz(dataDelete.id)}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteQuiz;