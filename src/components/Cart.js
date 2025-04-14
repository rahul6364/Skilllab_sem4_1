import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  // Mock cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Vanilla Ice Cream",
      price: 99,
      quantity: 1,
      image: "http://cdn2.simplysated.com/wp-content/uploads/2014/08/Homemade-Vanilla-Ice-Cream-22-1-P7270022.jpg",
      
    },
    {
      id: 2,
      name: "Chocolate Fudge",
      price: 119,
      quantity: 2,
      image: "https://tse1.mm.bing.net/th?id=OIP.HjwewBorp2NXhhDcHSRIdgHaE8&pid=Api&P=0&h=180",
    },
  ]);

  const [deliveryOption, setDeliveryOption] = useState("dine-in");
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // Calculate total
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = subtotal * 0.18; // 18% tax
  const total = subtotal + tax;

  // Handle quantity changes
  const handleQuantityChange = (id, change) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  // Handle item removal
  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement checkout logic here
    console.log("Order submitted:", {
      items: cartItems,
      deliveryOption,
      customerDetails,
      total,
    });
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Your Cart</h1>

      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Body>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{ width: "50px", height: "50px", objectFit: "cover", marginRight: "10px" }}
                          />
                          {item.name}
                        </div>
                      </td>
                      <td>₹{item.price}</td>
                      <td>
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </Button>
                        <span className="mx-2">{item.quantity}</span>
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </Button>
                      </td>
                      <td>₹{item.price * item.quantity}</td>
                      <td>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <h4>Order Summary</h4>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Tax (18%):</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <strong>Total:</strong>
                <strong>₹{total.toFixed(2)}</strong>
              </div>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Delivery Option</Form.Label>
                  <Form.Select
                    value={deliveryOption}
                    onChange={(e) => setDeliveryOption(e.target.value)}
                  >
                    <option value="dine-in">Dine-in</option>
                    <option value="takeaway">Takeaway</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={customerDetails.name}
                    onChange={(e) =>
                      setCustomerDetails({ ...customerDetails, name: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    required
                    value={customerDetails.phone}
                    onChange={(e) =>
                      setCustomerDetails({ ...customerDetails, phone: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    required
                    value={customerDetails.email}
                    onChange={(e) =>
                      setCustomerDetails({ ...customerDetails, email: e.target.value })
                    }
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Proceed to Checkout
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart; 