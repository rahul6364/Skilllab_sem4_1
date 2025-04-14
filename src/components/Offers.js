import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const Offers = () => {
  // Mock offers data
  const offers = [
    {
      id: 1,
      title: "Happy Hours",
      description: "Get 20% off on all ice creams from 4 PM to 6 PM",
      validUntil: "2024-12-31",
      code: "HAPPY20",
      isNew: true,
    },
    {
      id: 2,
      title: "Weekend Special",
      description: "Buy 2 ice creams and get 1 free on weekends",
      validUntil: "2024-12-31",
      code: "WEEKEND",
      isNew: false,
    },
    {
      id: 3,
      title: "Student Discount",
      description: "Show your student ID and get 15% off on all items",
      validUntil: "2024-12-31",
      code: "STUDENT15",
      isNew: true,
    },
    {
      id: 4,
      title: "Birthday Special",
      description: "Get a free ice cream on your birthday",
      validUntil: "2024-12-31",
      code: "BIRTHDAY",
      isNew: false,
    },
    {
      id: 5,
      title: "Family Pack",
      description: "Order 4 ice creams and get 20% off",
      validUntil: "2024-12-31",
      code: "FAMILY20",
      isNew: true,
    },
    {
      id: 6,
      title: "First Order",
      description: "Get 10% off on your first order",
      validUntil: "2024-12-31",
      code: "FIRST10",
      isNew: false,
    },
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Special Offers</h1>

      <Row>
        {offers.map((offer) => (
          <Col key={offer.id} md={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start">
                  <Card.Title>{offer.title}</Card.Title>
                  {offer.isNew && (
                    <Badge bg="success" className="ms-2">
                      New
                    </Badge>
                  )}
                </div>
                <Card.Text>{offer.description}</Card.Text>
                <div className="mt-3">
                  <p className="mb-1">
                    <strong>Promo Code:</strong>{" "}
                    <span className="text-primary">{offer.code}</span>
                  </p>
                  <p className="mb-0">
                    <strong>Valid Until:</strong>{" "}
                    {new Date(offer.validUntil).toLocaleDateString()}
                  </p>
                </div>
              </Card.Body>
              <Card.Footer className="bg-light">
                <button className="btn btn-primary w-100">Apply Offer</button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-4">
        <h3>How to Use Offers</h3>
        <ol className="text-start">
          <li>Select your items and add them to cart</li>
          <li>Go to the cart page</li>
          <li>Enter the promo code in the designated field</li>
          <li>Click "Apply Offer" to see the discount</li>
          <li>Complete your order to avail the offer</li>
        </ol>
        <p className="text-muted">
          * Terms and conditions apply. Some offers may not be combined with others.
        </p>
      </div>
    </Container>
  );
};

export default Offers; 