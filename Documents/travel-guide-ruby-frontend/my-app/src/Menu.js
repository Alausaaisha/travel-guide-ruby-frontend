import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu(){
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#">Technomads</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/review">Review</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>  
    );
}

export default Menu;
