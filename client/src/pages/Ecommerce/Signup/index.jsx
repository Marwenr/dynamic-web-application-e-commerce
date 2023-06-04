import React, { useEffect, useState } from "react";
import Box from "../../../components/Box";
import { Alert, Button, Form } from "react-bootstrap";
import styles from "./styles.module.css";
import Brand from "../../../components/Brand";

import { useDispatch, useSelector } from "react-redux";
import { createAccount } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { container, formStyle } = styles;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [err, setErr] = useState({
    displayName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleValidation = () => {
    if (displayName.length < 3 || displayName.length > 12) {
      setErr({ displayName: "Username should be greater than 3 characters" });
      return false;
    } else if (displayName === "admin") {
      setErr({ displayName: "You cannot choose this name" });
      return false;
    } else if (email.length < 3 || email.length > 30) {
      setErr({ email: "Email required" });
      return false;
    } else if (password.length < 6 || email.length > 20) {
      setErr({ password: "Password should be greater than 5 charachters" });
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const data = {
        email,
        password,
        displayName,
      };
      dispatch(createAccount(data));
    }
  };

  return (
    <div className={container}>
      <Brand />
      <div>
        <Box>
          <Form className={`m-3 ${formStyle}`} onSubmit={handleSubmit}>
            <Form.Group className="mb-2" controlId="formBasicUsername">
              <Form.Control
                type="text"
                name="username"
                placeholder="Username"
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </Form.Group>
            {err.displayName && (
              <Alert variant="danger">{err.displayName}</Alert>
            )}

            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            {err.email && <Alert variant="danger">{err.email}</Alert>}

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            {err.password && <Alert variant="danger">{err.password}</Alert>}

            <Button
              type={"submit"}
              style={{ width: "100%" }}
              onClick={handleValidation}
            >
              Sign Up
            </Button>
          </Form>
        </Box>
      </div>
    </div>
  );
};

export default Signup;
