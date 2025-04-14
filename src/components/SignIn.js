import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic validation
    if (isLogin) {
      if (!formData.email || !formData.password) {
        setError("Please fill in all fields");
        return;
      }
      // Implement login logic here
      console.log("Login attempt:", formData);
    } else {
      if (!formData.email || !formData.password || !formData.name || !formData.confirmPassword) {
        setError("Please fill in all fields");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return;
      }
      // Implement signup logic here
      console.log("Signup attempt:", formData);
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">
                {isLogin ? "Sign In" : "Create Account"}
              </h2>

              {error && <Alert variant="danger">{error}</Alert>}
              {success && <Alert variant="success">{success}</Alert>}

              <Form onSubmit={handleSubmit}>
                {!isLogin && (
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                    />
                  </Form.Group>
                )}

                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                  />
                </Form.Group>

                {!isLogin && (
                  <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm password"
                    />
                  </Form.Group>
                )}

                <Button variant="primary" type="submit" className="w-100 mb-3">
                  {isLogin ? "Sign In" : "Create Account"}
                </Button>

                <div className="text-center">
                  <p className="mb-0">
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <Button
                      variant="link"
                      onClick={() => {
                        setIsLogin(!isLogin);
                        setError("");
                        setSuccess("");
                      }}
                    >
                      {isLogin ? "Sign Up" : "Sign In"}
                    </Button>
                  </p>
                </div>
              </Form>

              <div className="text-center mt-3">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn; 