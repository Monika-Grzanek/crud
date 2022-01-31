import { Navbar, Nav, Container } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return(
        <Navbar expand="lg" variant="dark" bg="primary" className="mt-4 mb-4 rounded">
            <Container>
                <Navbar.Brand>Blog.app</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;