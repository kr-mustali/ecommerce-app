import { useContext } from "react";
import { ProductContext } from "../context";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

export default function Cart() {
  const { cart, emptyCart } = useContext(ProductContext);

  return (
    <div className="container mt-5">
      {cart.length > 0 ? (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <CartSummary cart={cart} />
          <button
            className="btn btn-outline-danger  mt-4 ms-2"
            onClick={emptyCart}
          >
            Empty Cart
          </button>
        </>
      ) : (
        <>
          <h3 className="text-center mb-4">Cart Empty </h3>
        </>
      )}
    </div>
  );
}
