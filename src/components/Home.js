import { Container, Jumbotron, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <Container
      fluid
      className="w-100  d-flex justify-content-center align-items-center p-2 flex-grow-1"
    >
      <Jumbotron>
        <h2>Hello </h2>
        <p>
          This is a simple posts - comments solution using only react hooks and
          fetch from https://jsonplaceholder.typicode.com/.
        </p>
        <p>
          <Button onClick={() => history.push("/posts")} variant="secondary">
            Cleck here to get the posts.
          </Button>
        </p>
      </Jumbotron>
    </Container>
  );
};
export default Home;
