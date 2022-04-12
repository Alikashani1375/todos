import React, { useState } from "react";
import { Nav, Container, Navbar, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import "../App.css";
import { Link } from "react-router-dom";

function Menu() {
  const useremail = useSelector((state) => state.useremail);
  const [logedin, setLogedin] = useState(false);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLogedin(true);
    } else {
      setLogedin(false);
    }
  });

  const handlelogout = () => {
    signOut(auth);
  };

  return (
    <div className="d-flex bg-menu flex-row text-white">
      <div className="m-auto">
        <Navbar variant="dark">
          <Container>
            <Navbar.Brand href="/todos">Todo</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/todos/addtodo">Add Todo</Nav.Link>
              <Nav.Link href="/todos/yourtodos">Your Todos</Nav.Link>
              <Link to="/todos/register">Register</Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div className="m-auto">
        Wellcome
        {logedin ? (
          <div className="text-info">
            {useremail}
            <Button className="ms-3 btn btn-secondary" onClick={handlelogout}>
              LogOut
            </Button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Menu;
