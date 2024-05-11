import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdFileUpload } from "react-icons/md";
import _ from 'lodash';

const ModalViewDetailUser = (props) => {
    const { show, setShow, dataView } = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('USER');
    const [image, setImage] = useState('');
    const [previewImage, setPreviewImage] = useState('');

    const handleClose = () => {
        setShow(false);
        setEmail('');
        setPassword('');
        setUsername('');
        setRole('USER');
        setImage('');
        setPreviewImage('');
        props.resetViewData()
    }

    useEffect(() => {
        if (!_.isEmpty(dataView)) {
            //update state
            setEmail(dataView.email);
            setUsername(dataView.username);
            setRole(dataView.role);
            setImage('');
            if (dataView.image) {
                setPreviewImage(`data:image/jpeg;base64,${dataView.image}`);
            }
        }
    }, [dataView])

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="xl"
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>View detail user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                disabled
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                disabled
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                disabled
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select"
                                onChange={(event) => { setRole(event.target.value) }}
                                value={role}
                                disabled
                            >
                                <option value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor='labelUpload' className="">
                                Your Image
                            </label>
                        </div>
                        <div className="col-md-12 img-preview">
                            {previewImage ?
                                <img src={previewImage} />
                                :
                                <span>No Image</span>
                            }
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalViewDetailUser;