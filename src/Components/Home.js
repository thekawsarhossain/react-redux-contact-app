import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, FormControl } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToContacts } from '../redux/slice/contactSlice';
import TableData from './TableData';

const Home = () => {

    const dispatch = useDispatch();

    // modal states here 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // user inputed data here 
    const [info, setInfo] = useState({});

    const handleFrom = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...info };
        newInfo[field] = value;
        setInfo(newInfo)
    }

    const handleAdd = () => {
        dispatch(addToContacts(info))
        setShow(false)
    }

    return (
        <Container>
            <Row className='mt-5'>
                <Col className="col-md-10">
                    <TableData />
                </Col>
                <Col>
                    <Button variant="danger" onClick={handleShow} >Add Contact</Button>
                    {/* <!-- Modal information here  --> */}
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add new Contact here </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {/* getting data from here [start here]  */}
                            <FormControl
                                placeholder="Name"
                                name="name"
                                onChange={handleFrom}
                            />
                            <FormControl
                                className="mt-2"
                                placeholder="Number"
                                name="number"
                                type="number"
                                onChange={handleFrom}
                            />
                            {/* getting data [ends here] */}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleAdd}>
                                Add Contact
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    {/* modal ends here */}
                </Col>
            </Row>
        </Container>
    );
};

export default Home;