



import { Link } from 'react-router-dom'
import { Navbar, Container, Nav} from 'react-bootstrap'


function Header(){
    return(
      <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#">ToDoList App</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">To Do List</Nav.Link>
        <Nav.Link as={Link} to="/archive">Archive</Nav.Link>
        <Nav.Link as={Link} to="/add/0">Create</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    )
}

export default Header