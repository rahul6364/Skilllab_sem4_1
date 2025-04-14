import React from "react";
import { Carousel, Card, Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  // Mock data for demonstration
  const popularDishes = [
    {
      id: 1,
      name: "Gadbad Ice Cream",
      description: "A delightful mix of multiple ice cream flavors with dry fruits",
      image: "https://tse3.mm.bing.net/th?id=OIP.FRxGm-k14xLorEAlCtXJLgHaHa&pid=Api&P=0&h=180",
      price: "₹199",
    },
    {
      id: 2,
      name: "Chocolate Sundae",
      description: "Rich chocolate ice cream with chocolate sauce and nuts",
      image: "https://tse3.mm.bing.net/th?id=OIP.TmKROGh3gpRG8MIPANa-4AHaFj&pid=Api&P=0&h=180",
      price: "₹149",
    },
    {
      id: 3,
      name: "Fruit Salad",
      description: "Fresh seasonal fruits with ice cream",
      image: "https://tse3.mm.bing.net/th?id=OIP.zqt2GRt1wWUA1xejK7CHPAHaHd&pid=Api&P=0&h=180",
      price: "₹129",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "J Arjun",
      rating: 5,
      comment: "Best ice cream in town! The Gadbad is a must-try.",
    },
    {
      id: 2,
      name: "Chirag shetty",
      rating: 4,
      comment: "Loved the variety of flavors and the cozy ambiance.",
    },
    {
      id: 3,
      name: "nandan poojary",
      rating: 5,
      comment: "Great service and amazing desserts. Will definitely come back!",
    },
    {
      id: 4,
      name: "Rohith L",
      rating: 5,
      comment: "The chocolate sundae is absolutely delicious! Perfect place for dessert lovers.",
    },
    {
      id: 5,
      name: "M S Dhoni",
      rating: 5,
      comment: "The fruit salad with ice cream is a perfect combination. Great place to relax and enjoy!",
    },
    {
      id: 6,
      name: "Virat Kohli",
      rating: 5,
      comment: "Amazing variety of ice creams. The Gadbad is my favorite! Perfect for family outings.",
    },
  ];

  return (
    <div>
      {/* Hero Banner */}
      <Carousel className="carousel-fade">
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100 carousel-image"
              src="https://tse2.mm.bing.net/th?id=OIP.N_ZozyhX_aGY7ivn6dW0AQHaE3&pid=Api&P=0&h=180"
              alt="First slide"
            />
          </div>
          <Carousel.Caption className="bg-dark bg-opacity-50 p-4 rounded">
            <h1>Welcome to Ideal Café</h1>
            <p>Experience the finest ice creams and desserts in town</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100 carousel-image"
              src="https://tse1.mm.bing.net/th?id=OIP.pBJu4ZODrDKo8z-enU7DawAAAA&pid=Api&P=0&h=180"
              alt="Second slide"
            />
          </div>
          <Carousel.Caption className="bg-dark bg-opacity-50 p-4 rounded">
            <h1>Summer Special</h1>
            <p>Try our new mango and strawberry flavors</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Popular Dishes */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Popular Dishes</h2>
        <Row>
          {popularDishes.map((dish) => (
            <Col key={dish.id} md={4} className="mb-4">
              <Card className="h-100">
                <Card.Img 
                  variant="top" 
                  src={dish.image} 
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{dish.name}</Card.Title>
                  <Card.Text>{dish.description}</Card.Text>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="h5 mb-0">{dish.price}</span>
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Testimonials */}
      <Container className="my-5">
        <h2 className="text-center mb-4">What Our Customers Say</h2>
        <Row>
          {testimonials.map((testimonial) => (
            <Col key={testimonial.id} md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body className="text-center">
                  <div className="mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} className="text-warning" />
                    ))}
                  </div>
                  <Card.Text className="mb-3">{testimonial.comment}</Card.Text>
                  <Card.Text className="text-muted">- {testimonial.name}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Exclusive Offers */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Exclusive Offers</h2>
        <Row>
          <Col md={6} className="mb-4">
            <Card bg="primary" text="white" className="h-100">
              <Card.Body>
                <Card.Title>Happy Hours</Card.Title>
                <Card.Text>
                  Get 20% off on all ice creams from 4 PM to 6 PM
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card bg="success" text="white" className="h-100">
              <Card.Body>
                <Card.Title>Weekend Special</Card.Title>
                <Card.Text>
                  Buy 2 ice creams and get 1 free on weekends
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home; 