import React from "react";
import "./styles.css";

import "bootstrap/dist/css/bootstrap.min.css"; //untuk import bootstrap
//bootstrap adalah framework untuk mempercantik UI web dan sifatnya udah jadi tinggal di panggil

import {
  Button,
  Navbar,
  NavDropdown,
  FormControl,
  Form,
  Nav,
  Jumbotron
} from "react-bootstrap"; //import library UI

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //untuk import fontawesome
import { faCoffee, faMapSigns } from "@fortawesome/free-solid-svg-icons"; //untuk import icon di font awesome

/*
//function component
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
*/

//class component
class Login extends React.Component {
  render() {
    const element = (
      <form>
        <p>masukan nama</p>
        <input type="text" />
        <p>masukan alamat</p>
        <textarea />
        <button>Submit</button>
      </form>
    );
    return element;
  }
}

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">
              <FontAwesomeIcon icon={faCoffee} />
              <FontAwesomeIcon icon={faMapSigns} />
              Learn more
            </Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <h1>Header</h1>
        <Content />
      </div>
    );
  }
}

export default App;
