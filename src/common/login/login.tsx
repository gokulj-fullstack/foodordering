import React, { useState } from "react";
import "./login.css";
import Food from "../../assets/images/food.jpg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { users } from "../../config";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passward, setPassward] = useState("");
  const navigate = useNavigate();

  const signIn = () => {
    const userinformation: any = users.find((item: any) => {
      return item.email === email;
    });
    if (userinformation) {
      if (userinformation?.pass == passward) {
        sessionStorage.setItem("userInfo", JSON.stringify(userinformation));
        navigate("/dashboard");
        window.location.reload();
      } else {
        alert("Incorrect Pass");
      }
    } else {
      alert("No user found");
    }
  };

  return (
    <div className="login-container">
      <section className="login-section">
        <section className="login-img-sec">
          <img className="image" src={Food} alt="food" />
        </section>
        <section className="login-input-sec">
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              signIn();
            }}
          >
            <Form.Group className="mb-3 d-grid" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                onChange={(event) => {
                  setPassward(event.target.value);
                }}
              />
            </Form.Group>
            <Button style={{ width: "100%" }} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </section>
      </section>
    </div>
  );
};

export default Login;
