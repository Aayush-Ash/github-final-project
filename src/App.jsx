import { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function LandingPage({ setShowProductList }) {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    setShowProductList(true);
    navigate("/products");
  };

  return (
    <div className="background-image">
      <div className="hero-overlay">
        <h1>Paradise Nursery</h1>
        <h2>Fresh houseplants for calmer, greener living</h2>
        <p className="hero-copy">
          Discover beautiful indoor plants that brighten your rooms, clean the
          air, and make every space feel more alive.
        </p>
        <div className="hero-actions">
          <button
            type="button"
            className="primary-button"
            onClick={handleGetStartedClick}
          >
            Get Started
          </button>
          <Link to="/about" className="secondary-link light-link">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<LandingPage setShowProductList={setShowProductList} />}
        />
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="/products"
          element={showProductList ? <ProductList /> : <ProductList />}
        />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </div>
  );
}

export default App;
