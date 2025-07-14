import React from "react";

function Item({ name }) {
  const [isInCart, setIsInCart] = React.useState(false);

  function handleAddToCartClick() {
    setIsInCart((prev) => !prev);
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <button onClick={handleAddToCartClick}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;