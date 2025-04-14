import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all fields" });
      return;
    }
    // Implement contact form submission logic here
    console.log("Contact form submitted:", formData);
    setStatus({
      type: "success",
      message: "Thank you for your message! We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Contact Us</h1>

      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <h3>Get in Touch</h3>
              <Form onSubmit={handleSubmit}>
                {status.message && (
                  <Alert variant={status.type === "success" ? "success" : "danger"}>
                    {status.message}
                  </Alert>
                )}

                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Enter your message"
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <h3>Our Location</h3>
              <div className="mb-4">
                <iframe
                  title="Ideal Café Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.123456789012!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>

              <div className="contact-info">
                <div className="mb-3">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                  <span>123 Ice Cream Street, Bangalore, Karnataka 560001</span>
                </div>
                <div className="mb-3">
                  <FontAwesomeIcon icon={faPhone} className="me-2" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="mb-3">
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  <span>info@idealcafe.com</span>
                </div>
                <div className="mb-3">
                  <FontAwesomeIcon icon={faClock} className="me-2" />
                  <span>Open 7 days a week, 10:00 AM - 10:00 PM</span>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h3>Follow Us</h3>
              <div className="social-links">
                <Button variant="outline-primary" className="me-2">
                  Facebook
                </Button>
                <Button variant="outline-info" className="me-2">
                  Twitter
                </Button>
                <Button variant="outline-danger" className="me-2">
                  Instagram
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact; 