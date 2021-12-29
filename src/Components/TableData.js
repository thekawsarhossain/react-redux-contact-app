import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux'

const TableData = () => {

    // getting data from redux here 
    const contacts = useSelector(state => state.contacts.allContacts)

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Number</th>
                </tr>
            </thead>
            <tbody>
                {
                    contacts.map((contact) => <tr key={contact.name}>
                        <td>{contact.length}</td>
                        <td>{contact.name}</td>
                        <td>{contact.number}</td>
                    </tr>)
                }
            </tbody>
        </Table>
    );
};

export default TableData;