/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

function ProductProvider(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  const fetchData = () => {
    fetch("https://dummyjson.com/products/category/smartphones")
      .then((response) => response.json())
      .then((data) => {
        const productsWithInCart = data.products.map((product) => ({
          ...product,
          inCart: false,
          count: 0,
          total: 0,
        }));
        setProducts(productsWithInCart);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addToCart = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        const updatedProduct = {
          ...product,
          inCart: true,
          count: 1,
          total: product.price,
        };

        setCart([...cart, updatedProduct]);

        return updatedProduct;
      }
      return product;
    });

    setProducts(updatedProducts);
  };

  const increment = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        const updatedProduct = {
          ...product,
          count: product.count + 1,
          total: (product.count + 1) * product.price,
        };

        const updatedCart = cart.map((cartItem) =>
          cartItem.id === id ? updatedProduct : cartItem
        );

        setCart(updatedCart);

        return updatedProduct;
      }
      return product;
    });

    setProducts(updatedProducts);
  };
  const decrement = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        if (product.count > 1) {
          const updatedProduct = {
            ...product,
            count: product.count - 1,
            total: (product.count - 1) * product.price,
          };

          const updatedCart = cart.map((cartItem) =>
            cartItem.id === id ? updatedProduct : cartItem
          );

          setCart(updatedCart);

          return updatedProduct;
        } else {
          const updatedProduct = {
            ...product,
            inCart: false,
            count: 0,
            total: 0,
          };

          const updatedCart = cart.filter((cartItem) => cartItem.id !== id);

          setCart(updatedCart);

          return updatedProduct;
        }
      }
      return product;
    });

    setProducts(updatedProducts);
  };

  const remove = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        const updatedProduct = {
          ...product,
          inCart: false,
          count: 0,
          total: 0,
        };

        const updatedCart = cart.filter((cartItem) => cartItem.id !== id);

        setCart(updatedCart);

        return updatedProduct;
      }
      return product;
    });

    setProducts(updatedProducts);
  };

  const emptyCart = () => {
    setCart([]);
    fetchData();
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        addToCart,
        cart,
        increment,
        decrement,
        remove,
        emptyCart,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
