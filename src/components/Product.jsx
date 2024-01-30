/* eslint-disable react/prop-types */
// Product.jsx

import { useContext } from "react";
import { ProductContext } from "../context";

const Product = ({
  title,
  thumbnail,
  description,
  price,
  id,
  inCart,
  count,
}) => {
  const { addToCart, increment, decrement } = useContext(ProductContext);

  const handleIncrement = (id) => {
    increment(id);
  };

  const handleDecrement = (id) => {
    decrement(id);
  };
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img className="card-img-top" src={thumbnail} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">$ {price}</li>
        </ul>
        {!inCart ? (
          <button
            className="btn btn-primary mt-2"
            onClick={() => addToCart(id)}
          >
            Add to Cart
          </button>
        ) : (
          <div className="col-md-3 d-flex align-items-center mt-2">
            <button
              className="btn btn-outline-secondary me-2"
              onClick={() => handleDecrement(id)}
            >
              -
            </button>
            <span>{count}</span>
            <button
              className="btn btn-outline-secondary ms-2"
              onClick={() => handleIncrement(id)}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
