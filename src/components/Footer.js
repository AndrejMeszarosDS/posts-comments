import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container
      fluid
      className="w-100 bg-secondary text-white d-flex justify-content-center align-items-center p-2"
      style={{ height: "56px" }}
    >
      <h5 className="text-center">Andrej Meszaros @(2021)</h5>
    </Container>
  );
};
export default Footer;
