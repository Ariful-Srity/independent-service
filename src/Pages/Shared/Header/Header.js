import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

import './Header.css'

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }





    return (
        <>

            <Navbar collapseOnSelect expand="lg" bg="primary" sticky='top' variant="dark">
                <Container className="navbar">
                    <Navbar.Brand as={Link} to="Home" className="name ">Dr.MST.Sumaiya Akter Alo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="Services" id='Services' className="text-white ">Services</Nav.Link>
                            <Nav.Link as={Link} to="Blogs" id='Blogs' className="text-white ">Blogs</Nav.Link>
                            <Nav.Link as={Link}
                                to="About">About</Nav.Link>

                        </Nav>
                        <Nav>

                            <Nav.Link as={Link} eventKey={2} to="register">
                                Register
                            </Nav.Link>
                        </Nav>



                        <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none bg-dark ' onClick={handleSignOut}>Log out</button>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>

                    </Navbar.Collapse>
                </Container>




            </Navbar>
        </>
    );
};

export default Header;