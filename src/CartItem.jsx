import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  selectCartCount,
  selectCartItems,
  selectCartTotal,
  updateQuantity,
} from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const [checkoutMessage, setCheckoutMessage] = useState("");

  const handleIncrement = (id) => {
    dispatch(updateQuantity({ id, amount: 1 }));
  };

  const handleDecrement = (id) => {
    dispatch(updateQuantity({ id, amount: -1 }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    setCheckoutMessage("Coming Soon");
  };

  return (
    <>
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

      <section className="page-shell">
        <div className="cart-header">
          <div>
            <p className="eyebrow">Shopping Cart</p>
            <h2>Your indoor jungle is almost ready</h2>
          </div>
          <div className="cart-total-card">
            <span>Total Cart Amount</span>
            <strong>${total.toFixed(2)}</strong>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h3>Your cart is empty</h3>
            <p>Start by picking a few plants from our collection.</p>
            <Link to="/products" className="secondary-link">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {cartItems.map((item) => (
                <article className="cart-card" key={item.id}>
                  <img src={item.image} alt={item.name} className="cart-image" />
                  <div className="cart-copy">
                    <h3>{item.name}</h3>
                    <p>Unit Price: ${item.price.toFixed(2)}</p>
                    <p>Total Cost: ${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <div className="cart-actions">
                    <div className="quantity-controls">
                      <button type="button" onClick={() => handleDecrement(item.id)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button type="button" onClick={() => handleIncrement(item.id)}>
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      className="delete-button"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="cart-footer">
              <button
                type="button"
                className="primary-button"
                onClick={handleCheckout}
              >
                Checkout
              </button>
              <Link to="/products" className="secondary-link">
                Continue Shopping
              </Link>
            </div>
            {checkoutMessage ? <p>{checkoutMessage}</p> : null}
          </>
        )}
      </section>
    </>
  );
}

export default CartItem;
