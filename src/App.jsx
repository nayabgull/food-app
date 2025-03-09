import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

// Pages Import
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import FoodMenu from "./pages/FoodMenu";
import ContactUs from "./pages/ContactUs";

import "./App.css";
import "./assets/scss/bootstrap.scss";

function App() {
  return (
    <Router basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/food-menu" element={<FoodMenu />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
