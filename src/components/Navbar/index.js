import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getPosts, logout } from '../../redux/actions/mainAction';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
export default function Index() {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.main.userToken);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Truemeds</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {user && (
                            <Nav className="ml-auto">
                                <span
                                    className="nav-link"
                                    onClick={() => {
                                        dispatch(logout());
                                        history.push('/login');
                                    }}
                                >
                                    Logout
                                </span>
                            </Nav>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
