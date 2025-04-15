import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useLoginMutation, useRegisterMutation } from "../../hooks/use-auth";

const Login: React.FC = () => {
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  const loginMutation = useLoginMutation();
  const registerMutation = useRegisterMutation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: formData.role,
    };

    if (isRegister) {
      registerMutation.mutate(payload, {
        onSuccess: (data) => {
          alert("Registration successful!");
          setIsRegister(false); // Switch to login mode
        },
        onError: (error: any) => {
          alert(error.response?.data?.message || "Registration failed");
        },
      });
    } else {
      loginMutation.mutate(payload, {
        onSuccess: (data) => {
          localStorage.setItem("token", data.token); // ✅ store JWT
          localStorage.setItem("isLoggedIn", "true");
          navigate("/dashboard");
        },
        onError: (error: any) => {
          alert(error.response?.data?.message || "Login failed");
        },
      });
    }
  };

  return (
    <PageContainer fluid>
      <FormWrapper>
        <Title>{isRegister ? "Register" : "Login"}</Title>
        <Form onSubmit={handleSubmit}>
          {isRegister && (
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          )}
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>
          {isRegister && (
            <Form.Group className="mb-3" controlId="formRole">
              <Form.Label>Role</Form.Label>
              <Form.Select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </Form.Select>
            </Form.Group>
          )}
          <Button variant="primary" type="submit" className="w-100">
            {isRegister ? "Register" : "Login"}
          </Button>
        </Form>
        <ToggleText>
          {isRegister ? "Already registered? " : "Not registered yet? "}
          <Button variant="link" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "Login" : "Register"}
          </Button>
        </ToggleText>
      </FormWrapper>
    </PageContainer>
  );
};

export default Login;

const PageContainer = styled(Container)`
  min-height: 100vh;
  background-color: ${(props) => props.theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormWrapper = styled.div`
  background-color: ${(props) => props.theme.white || "#fff"};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.primary};
  text-align: center;
  margin-bottom: 1.5rem;
`;

const ToggleText = styled.div`
  margin-top: 1rem;
  text-align: center;
  color: ${(props) => props.theme.text || "#333"};
`;
