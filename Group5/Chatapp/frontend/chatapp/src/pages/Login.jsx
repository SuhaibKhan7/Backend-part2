import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useContext, useState } from "react";
import { postRequest } from "../services/service";
function Login() {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const handleLogin = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
    console.log(login);
  };

  return (
    <Container>
      <Form onSubmit={postRequest("auth/login", login)}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Username</Form.Label>

          <Form.Control
            type="text"
            placeholder="Enter username"
            onChange={handleLogin}
            name="username"
            value={login.username}
          />

          <Form.Text className="text-muted">Enter your username Here</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleLogin}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me?" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
