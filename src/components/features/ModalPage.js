import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { removePost } from "./../../redux/postsRedux";

const ModalPage = ({id}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(removePost({id}));
    }
    return (
        <>
            <Button onClick={handleShow} size="sm" variant="outline-danger">Remove</Button>
            <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
                <Modal.Header closeButton >
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                This operation will completely remove this post from the app. Are You
                sure You want to do that?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant='danger' onClick={handleSubmit}>
                        Remove
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
  );
}


export default ModalPage;