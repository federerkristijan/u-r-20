import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <div>The Products Page</div>
      <ul>
        <li>
          <Link to="/products/book">Book</Link>
        </li>
        <li>
          <Link to="/products/food">Food</Link>
        </li>
        <li>
          <Link to="/products/cat">Cat</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
