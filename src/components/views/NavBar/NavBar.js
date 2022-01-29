import { Navbar, NavLink, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
    return(
        <Navbar expand="lg" variant="dark" bg="primary" className="mt-4 mb-4 rounded">
            <Container>
                <Navbar.Brand>Blog.app</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link as={NavLink} href="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} href="/about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;