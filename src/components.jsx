import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartCount } from "./CartSlice";

export function Navbar() {
  const cartCount = useSelector(selectCartCount);

  return (
    <header className="navbar">
      <NavLink to="/" className="brand">
        <span className="brand-mark">PN</span>
        <div>
          <h1>Paradise Nursery</h1>
          <p>Bring nature home</p>
        </div>
      </NavLink>

      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Plants</NavLink>
        <NavLink to="/cart" className="cart-link">
          Cart
          <span className="cart-badge">{cartCount}</span>
        </NavLink>
      </nav>
    </header>
  );
}

