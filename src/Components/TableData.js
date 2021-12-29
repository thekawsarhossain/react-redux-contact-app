import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { deleteToContacts } from '../redux/slice/contactSlice';

const TableData = () => {

    const dispatch = useDispatch();

    // getting data from redux here 
    const contacts = useSelector(state => state.contacts.allContacts)

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    {/* <th>Id</th> */}
                    <th>Name</th>
                    <th>Number</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    contacts.map((contact) => <tr key={contact.name}>
                        {/* <td>{contact.length}</td> */}
                        <td>{contact.name}</td>
                        <td>{contact.number}</td>
                        <td><Button variant="danger" onClick={() => dispatch(deleteToContacts(contact.name))}>Delete</Button> </td>
                    </tr>)
                }
            </tbody>
        </Table>
    );
};

export default TableData;