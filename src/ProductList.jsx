import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectCartCount, selectCartItems } from "./CartSlice";
import { plantCategories } from "./data";

function ProductList() {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const cartItems = useSelector(selectCartItems);
  const addedIds = new Set(cartItems.map((item) => item.id));

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
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
        <div className="section-heading">
          <p className="eyebrow">Shop Plants</p>
          <h2>Handpicked greenery for every corner of your home</h2>
        </div>

        {plantCategories.map((group) => (
          <div className="category-block" key={group.category}>
            <h3>{group.category}</h3>
            <div className="product-grid">
              {group.plants.map((plant) => {
                const isAdded = addedIds.has(plant.id);

                return (
                  <article className="product-card" key={plant.id}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="product-image"
                    />
                    <div className="product-copy">
                      <h4>{plant.name}</h4>
                      <p>{plant.description}</p>
                      <div className="product-row">
                        <span className="price">${plant.price}</span>
                        <button
                          type="button"
                          disabled={isAdded}
                          onClick={() => handleAddToCart(plant)}
                        >
                          {isAdded ? "Added to Cart" : "Add to Cart"}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default ProductList;
