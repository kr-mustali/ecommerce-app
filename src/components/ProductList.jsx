import { useContext } from "react";
import Product from "./Product";
import { ProductContext } from "../context";
const ProductList = () => {
  const { products, loading, error } = useContext(ProductContext);

  return (
    <div>
      <div className="py-5">
        <div className="container">
          <h3 className="text-center mb-4">Our Products </h3>
          {loading && <p className="text-center">Loading...</p>}
          {error && <p className="text-center text-danger">{error}</p>}
          <div className="row justify-content-center">
            {products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                thumbnail={product.thumbnail}
                description={product.description}
                price={product.price}
                inCart={product.inCart}
                count={product.count}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
