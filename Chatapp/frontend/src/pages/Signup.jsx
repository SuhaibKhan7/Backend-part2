import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Singup() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicFullname">
        <Form.Label>Fullname</Form.Label>
        <Form.Control type="text" placeholder="Enter fullname" />
        <Form.Text className="text-muted">Please Enter your FullName</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" />
        <Form.Text className="text-muted">
          Please Enter your unique username
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
        <Form.Text className="text-muted">Please Enter your Email</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
     

      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>

      <Form.Select aria-label="Default select example">
        <option>Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </Form.Select>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me?" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Signup
      </Button>
    </Form>
  );
}

export default Singup;
