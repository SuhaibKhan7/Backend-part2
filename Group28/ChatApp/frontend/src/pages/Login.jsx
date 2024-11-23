import { useContext } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { AuthContext } from "../Context/AuthContext";

import useAuth0Login from "../services/LoginWithAuth";
function Login() {
//copy here 

  const { login, setLogin, handleSubmit } = useContext(AuthContext);

  const loginWithAuth0 = useAuth0Login();
  
  console.log(loginWithAuth0);

  const handleLogin = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            onChange={handleLogin}
            name="username"
            value={login.username}
          />
          <Form.Text className="text-muted">
            Please Enter your unique username
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleLogin}
            name="password"
            value={login.password}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

      <button onClick={loginWithAuth0}>Login with google</button>
    </>
  );
}

export default Login;
