import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItems } from "./CartSlice";
import { plantCategories } from "./data";

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addedIds = new Set(cartItems.map((item) => item.id));

  return (
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
                  <img src={plant.image} alt={plant.name} className="product-image" />
                  <div className="product-copy">
                    <h4>{plant.name}</h4>
                    <p>{plant.description}</p>
                    <div className="product-row">
                      <span className="price">${plant.price}</span>
                      <button
                        type="button"
                        disabled={isAdded}
                        onClick={() => dispatch(addToCart(plant))}
                      >
                        {isAdded ? "Added" : "Add to Cart"}
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
  );
}

export default ProductList;

