import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

// Import components (we'll create these next)
import Home from "./components/Home";
import Menu from "./components/Menu";
import Offers from "./components/Offers";
import Locations from "./components/Locations";
import Contact from "./components/Contact";
import SignIn from "./components/SignIn";
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />
        <main className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;