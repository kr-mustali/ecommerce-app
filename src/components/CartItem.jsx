/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ProductContext } from "../context";

export default function CartItem({ item }) {
  const { remove, increment, decrement } = useContext(ProductContext);

  const handleIncrement = (id) => {
    increment(id);
  };

  const handleDecrement = (id) => {
    decrement(id);
  };

  const handleRemove = (id) => {
    remove(id);
  };
  return (
    <div>
      <div key={item.id} className="row border p-3 mb-4">
        <div className="col-md-2">
          <img src={item.thumbnail} alt={item.title} className="img-fluid" />
        </div>
        <div className="col-md-2">
          <h3>{item.title}</h3>
          <p>Price: ${item.price}</p>
        </div>
        <div className="col-md-3 d-flex align-items-center">
          <button
            className="btn btn-outline-secondary me-2"
            onClick={() => handleDecrement(item.id)}
          >
            -
          </button>
          <span>{item.count}</span>
          <button
            className="btn btn-outline-secondary ms-2"
            onClick={() => handleIncrement(item.id)}
          >
            +
          </button>
        </div>
        <div className="col-md-3 d-flex align-items-center">
          <button
            className="btn btn-danger"
            onClick={() => handleRemove(item.id)}
          >
            Remove
          </button>
        </div>
        <div className="col-md-2  d-flex align-items-center">
          <span>Item Total: ${item.total}</span>
        </div>
      </div>
    </div>
  );
}
