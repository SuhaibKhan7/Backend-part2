import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
function NavigationBar() {
  const { handleLogout } = useContext(AuthContext);
  const user = localStorage.getItem("user");
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">ChatApp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {!user ? (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </>
            ) : (
              <Nav.Link
                as={Link}
                onClick={() => {
                  console.log("Logout Clicked");
                  handleLogout();
                }}
              >
                logout
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
