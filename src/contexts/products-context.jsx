import { createContext, useState } from "react";

import PRODUCTS from "../resources/shop-data.json";

export const ProductsContext = createContext({
  products: [],
});

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
