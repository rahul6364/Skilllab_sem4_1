import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const Menu = () => {
  // Mock menu data
  const menuItems = [
    {
      id: 1,
      name: "Vanilla Ice Cream",
      category: "Ice Creams",
      description: "Classic vanilla flavor",
      price: 99,
      rating: 4.5,
      isPopular: true,
      isNew: false,
      image: "http://cdn2.simplysated.com/wp-content/uploads/2014/08/Homemade-Vanilla-Ice-Cream-22-1-P7270022.jpg",
    },
    {
      id: 2,
      name: "Chocolate Fudge",
      category: "Ice Creams",
      description: "Rich chocolate with fudge pieces",
      price: 119,
      rating: 4.8,
      isPopular: true,
      isNew: true,
      image: "https://tse1.mm.bing.net/th?id=OIP.HjwewBorp2NXhhDcHSRIdgHaE8&pid=Api&P=0&h=180",
    },
    {
      id: 3,
      name: "Strawberry Delight",
      category: "Ice Creams",
      description: "Fresh strawberry flavor",
      price: 109,
      rating: 4.3,
      isPopular: false,
      isNew: true,
      image: "https://tse3.mm.bing.net/th?id=OIP.GYAuGSmTbIrPAUd8Sm7i_wHaHa&pid=Api&P=0&h=180",
    },
    {
      id: 4,
      name: "Mango Smoothie",
      category: "Beverages",
      description: "Fresh mango blended with ice",
      price: 129,
      rating: 4.6,
      isPopular: true,
      isNew: false,
      image: "https://tse2.mm.bing.net/th?id=OIP.VqtdQWf1WZ_eSyup3mdKIQHaHa&pid=Api&P=0&h=180",
    },
    {
      id: 5,
      name: "Chocolate Brownie",
      category: "Desserts",
      description: "Warm chocolate brownie with ice cream",
      price: 149,
      rating: 4.7,
      isPopular: true,
      isNew: false,
      image: "https://tse2.mm.bing.net/th?id=OIP.ch-5sJizXiQVx1n94phEvAHaE6&pid=Api&P=0&h=180",
    },
    {
      id: 6,
      name: "French Fries",
      category: "Snacks",
      description: "Crispy golden fries",
      price: 89,
      rating: 4.2,
      isPopular: false,
      isNew: false,
      image: "https://tse4.mm.bing.net/th?id=OIP.LEas0zIyqxhHOW6_uDkiWQHaEK&pid=Api&P=0&h=180",
    },
  ];

  // State for filters and sorting
  const [category, setCategory] = useState("All");
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  // Filter and sort functions
  const filteredItems = menuItems
    .filter((item) => {
      if (category !== "All" && item.category !== category) return false;
      if (filter === "Only Ice Creams" && item.category !== "Ice Creams") return false;
      if (filter === "Popular" && !item.isPopular) return false;
      if (filter === "New Arrivals" && !item.isNew) return false;
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Our Menu</h1>

      {/* Filters and Sorting */}
      <Row className="mb-4">
        <Col md={4}>
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="All">All Categories</option>
              <option value="Ice Creams">Ice Creams</option>
              <option value="Beverages">Beverages</option>
              <option value="Desserts">Desserts</option>
              <option value="Snacks">Snacks</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label>Filter</Form.Label>
            <Form.Select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="All">All Items</option>
              <option value="Only Ice Creams">Only Ice Creams</option>
              <option value="Popular">Popular</option>
              <option value="New Arrivals">New Arrivals</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label>Sort By</Form.Label>
            <Form.Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      {/* Menu Items */}
      <Row>
        {filteredItems.map((item) => (
          <Col key={item.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={item.image} style={{ height: "200px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="h5 mb-0">₹{item.price}</span>
                    <div className="text-warning">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>{i < Math.floor(item.rating) ? "★" : "☆"}</span>
                      ))}
                    </div>
                  </div>
                  <Button variant="primary">Add to Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Menu; 