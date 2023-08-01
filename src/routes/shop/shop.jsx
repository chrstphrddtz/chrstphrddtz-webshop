import { useContext } from "react";
import { ProductsContext } from "../../contexts/products-context";

import ProductCard from "../../components/product-card/product-card";
import "./shop.styles.scss"

export default function Shop() {
  const { products } = useContext(ProductsContext);
  console.log(products);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
