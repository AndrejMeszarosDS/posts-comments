import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Comments from "./components/Comments";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MyNavBar from "./components/MyNavBar";
import Posts from "./components/Posts";

function App() {
  return (
    <Router>
      <Container
        fluid
        className="p-0 h-100 d-flex flex-column"
        style={{
          backgroundImage: "url(/images/background.jpg)",
          backgroundSize: "cover",
        }}
      >
        <MyNavBar />
        <Switch>
          <Route path="/posts/:postId/comments" component={Comments}></Route>
          <Route path="/posts" component={Posts}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
