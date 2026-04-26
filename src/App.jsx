import { Link, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import { Navbar } from "./components";

function LandingPage() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <p className="eyebrow">Welcome to Paradise Nursery</p>
        <h2>Fresh houseplants for calmer, greener living</h2>
        <p className="hero-copy">
          Discover beautiful indoor plants that brighten your rooms, clean the
          air, and make every space feel more alive.
        </p>
        <div className="hero-actions">
          <Link to="/products" className="primary-button">
            Get Started
          </Link>
          <Link to="/about" className="secondary-link light-link">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </div>
  );
}

export default App;

