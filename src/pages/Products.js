import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <div>The Products Page</div>
      <ul>
        <li>
          <Link>Book</Link>
        </li>
        <li>
          <Link>Food</Link>
        </li>
        <li>
          <Link>Cat</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
