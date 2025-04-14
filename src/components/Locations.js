import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faClock,
  faCar,
  faSubway,
  faBus,
} from "@fortawesome/free-solid-svg-icons";

const Locations = () => {
  // Mock locations data
  const locations = [
    {
      id: 1,
      name: "Ideal Café - MG Road",
      address: "123 MG Road, Bangalore, Karnataka 560001",
      phone: "+91 98765 43210",
      hours: "10:00 AM - 10:00 PM",
      coordinates: "12.9715987,77.5945627",
      transport: {
        metro: "MG Road Metro Station (500m)",
        bus: "MG Road Bus Stop (200m)",
        parking: "Available (Paid)",
      },
    },
    {
      id: 2,
      name: "Ideal Café - Koramangala",
      address: "456 5th Block, Koramangala, Bangalore, Karnataka 560034",
      phone: "+91 98765 43211",
      hours: "10:00 AM - 11:00 PM",
      coordinates: "12.9351929,77.6244803",
      transport: {
        metro: "Koramangala Metro Station (1km)",
        bus: "Koramangala Bus Stop (300m)",
        parking: "Available (Free)",
      },
    },
    {
      id: 3,
      name: "Ideal Café - Whitefield",
      address: "789 ITPL Road, Whitefield, Bangalore, Karnataka 560066",
      phone: "+91 98765 43212",
      hours: "10:00 AM - 10:00 PM",
      coordinates: "12.9698,77.7499",
      transport: {
        metro: "Whitefield Metro Station (800m)",
        bus: "ITPL Bus Stop (400m)",
        parking: "Available (Free)",
      },
    },
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Our Locations</h1>

      <Row>
        {locations.map((location) => (
          <Col key={location.id} md={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <h3>{location.name}</h3>
                <div className="mb-3">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                  <span>{location.address}</span>
                </div>
                <div className="mb-3">
                  <FontAwesomeIcon icon={faPhone} className="me-2" />
                  <span>{location.phone}</span>
                </div>
                <div className="mb-3">
                  <FontAwesomeIcon icon={faClock} className="me-2" />
                  <span>{location.hours}</span>
                </div>

                <div className="transport-info mb-3">
                  <h5>Transport Options:</h5>
                  <div className="mb-2">
                    <FontAwesomeIcon icon={faSubway} className="me-2" />
                    <span>{location.transport.metro}</span>
                  </div>
                  <div className="mb-2">
                    <FontAwesomeIcon icon={faBus} className="me-2" />
                    <span>{location.transport.bus}</span>
                  </div>
                  <div className="mb-2">
                    <FontAwesomeIcon icon={faCar} className="me-2" />
                    <span>{location.transport.parking}</span>
                  </div>
                </div>

                <div className="map-container mb-3">
                  <iframe
                    title={`${location.name} Map`}
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.123456789012!2d${location.coordinates.split(",")[1]}!3d${location.coordinates.split(",")[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNCJF!5e0!3m2!1sen!2sin!4v1234567890`}
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>

                <Button
                  variant="primary"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${location.coordinates}`}
                  target="_blank"
                  className="w-100"
                >
                  Get Directions
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-4">
        <h3>Coming Soon</h3>
        <p>We're expanding! New locations opening soon in:</p>
        <ul className="list-unstyled">
          <li>Indiranagar</li>
          <li>Jayanagar</li>
          <li>Electronic City</li>
        </ul>
      </div>
    </Container>
  );
};

export default Locations; 