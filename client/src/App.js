import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav";
import Workshop from "./pages/Workshop";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Workshop />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/Services" element={<Services />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/sign-up" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
