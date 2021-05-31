import { useEffect, useState } from "react";
import { Container, Card, Image, Alert, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Comments = () => {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  const [user, setUser] = useState([]);
  const [comments, setComments] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [dataError, setDataError] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + postId)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .then((data) => {
        setPost(data);
        return fetch(
          "https://jsonplaceholder.typicode.com/users/" + data.userId
        );
      })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .then((userData) => {
        setUser(userData);
        return fetch(
          "https://jsonplaceholder.typicode.com/posts/" + postId + "/comments"
        );
      })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .then((resComments) => {
        setComments(resComments);
        setDataLoaded(true);
      })
      .catch((error) => {
        console.log(error);
        setDataLoaded(true);
        setDataError(true);
      });
  }, [postId]);

  return (
    <Container
      fluid
      className="p-0 m-0 flex-grow-1 overflow-hidden d-flex h-100 justify-content-center align-items-center"
    >
      {!dataLoaded ? (
        <Image
          src="/images/loading.gif"
          roundedCircle
          style={{ width: "200px", height: "200px" }}
        />
      ) : dataError ? (
        <Alert variant="danger">Server error. Please try again later.</Alert>
      ) : (
        <Card
          className="shadow-sm h-100 w-100"
          style={{ maxWidth: "1100px", maxHeight: "700px" }}
        >
          <Card.Header>
            <h3 className="m-0" style={{ textAlign: "center" }}>
              Post comments
            </h3>
          </Card.Header>
          <Card.Body className="h-100 d-flex flex-column">
            <Card className="w-100 mb-4">
              <Card.Header>
                <strong>Post : </strong>
                {post.title}
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>from : </strong>
                  {user.name}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>body : </strong>
                  {post.body}
                </ListGroup.Item>
              </ListGroup>
            </Card>
            <Container
              fluid
              className=" w-100 p-0 m-0 d-flex flex-column  overflow-auto flex-grow-1"
            >
              {comments.map((comment, id) => (
                <Card className="w-100 mb-4" key={id}>
                  <Card.Header>
                    <strong>Comment : </strong>
                    {comment.name}
                  </Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <strong>from : </strong>
                      {comment.email}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>body : </strong>
                      {comment.body}
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              ))}
            </Container>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};
export default Comments;
