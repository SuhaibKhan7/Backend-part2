import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const { loginInfo, setLoginInfo, submitLogin } = useContext(AuthContext);
  const handleLogin = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };
  return (
    <Container>
      <Form onSubmit={submitLogin}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Enter Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            onChange={handleLogin}
            name="username"
            value={loginInfo.username}
          />
          <Form.Text className="text-muted">
            Enter your unique Username
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleLogin}
            value={loginInfo.password}
            name="password"
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
