import React from 'react';
import { Navbar as Nav } from 'react-bootstrap';

const Navbar = () => {
    return (
        <Nav className='navbar navbar-expand-lg navbar-dark bg-dark py-3'>
            <h4 className='text-light mx-auto'>React Redux Contact app</h4>
        </Nav>
    );
};

export default Navbar;