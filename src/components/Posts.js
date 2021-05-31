import { useEffect, useState } from "react";
import { Container, Card, Table, Image, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [postsLoaded, setPostsLoaded] = useState(false);
  const [postsError, setPostsError] = useState(false);
  const history = useHistory();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then(
        (json) => {
          setPosts(json);
          setPostsLoaded(true);
        },
        (error) => {
          setPostsLoaded(true);
          setPostsError(true);
        }
      );
  }, []);

  return (
    <Container
      fluid
      className="p-0 m-0 flex-grow-1 overflow-hidden d-flex h-100 justify-content-center align-items-center"
    >
      {!postsLoaded ? (
        <Image
          src="/images/loading.gif"
          roundedCircle
          style={{ width: "200px", height: "200px" }}
        />
      ) : postsError ? (
        <Alert variant="danger">Server error. Please try again later.</Alert>
      ) : (
        <Card
          className="shadow-sm h-100 w-100"
          style={{ maxWidth: "1100px", maxHeight: "700px" }}
        >
          <Card.Header>
            <h3 className="m-0" style={{ textAlign: "center" }}>
              Posts
            </h3>
          </Card.Header>
          <Card.Body className="h-100">
            <Container fluid className="h-100 w-100 p-0 m-0 d-flex border">
              <Container fluid className="d-block w-100  m-0 p-0 overflow-auto">
                <Table
                  striped
                  bordered
                  hover
                  className="m-0"
                  style={{
                    borderSpacing: "0",
                    borderCollapse: "separate",
                    border: "0",
                  }}
                >
                  <thead>
                    <tr>
                      <th
                        style={{ top: "0", backgroundColor: "white" }}
                        className="position-sticky align-top"
                      >
                        Title
                      </th>
                    </tr>
                  </thead>
                  <tbody className="overflow-auto">
                    {posts.map((post, id) => (
                      <tr key={id}>
                        <td
                          onClick={() =>
                            history.push("/posts/" + post.id + "/comments")
                          }
                          style={{ cursor: "pointer" }}
                        >
                          {post.title}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Container>
            </Container>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};
export default Posts;
