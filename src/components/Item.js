import React, { useState } from "react";

function Item({ name, category }) {

  const [added, setAdded] = useState(false)

  function cartHandler() {
    setAdded((added) => !added)
  }

  return (
    <li className={added ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={cartHandler}>{added ? "Remove From Cart" : "Add to Cart" }</button>
    </li>
  );
}

export default Item;
