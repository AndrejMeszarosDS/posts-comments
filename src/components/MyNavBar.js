import { Navbar, Container } from "react-bootstrap";

const MyNavBar = () => {
  return (
    <Container fluid className="bg-secondary p-0">
      <Container className="p-0">
        <Navbar collapseOnSelect expand="md" bg="secondary" variant="dark">
          <Navbar.Brand>Posts-comments solution</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="d-none"
          ></Navbar.Collapse>
        </Navbar>
      </Container>
    </Container>
  );
};
export default MyNavBar;
