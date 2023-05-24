import React, { useEffect, useState } from "react";
import Box from "../../../components/Box";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Brand from "../../../components/Brand";
import { useDispatch, useSelector } from "react-redux";
import { logInFnc } from "../../../store/authSlice";

const Login = () => {
  const { container, formStyle } = styles;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    dispatch(logInFnc(data));
  };

  return (
    <div className={container}>
      <Brand />
      <div>
        <Box>
          <Form className={`m-3 pb-4 ${formStyle}`} onSubmit={handleSubmit}>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button type={"submit"} style={{ width: "100%" }}>
              Log In
            </Button>
          </Form>
          <p className="text-center">
            Don't have an account yet?
            <Button variant="link" onClick={() => navigate("/signup")}>
              Sign Up
            </Button>
          </p>
        </Box>
      </div>
    </div>
  );
};

export default Login;
