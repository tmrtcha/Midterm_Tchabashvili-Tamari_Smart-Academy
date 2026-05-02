"use client";

import { useEffect, useState } from "react";
import ProductItem from "../../components/ProductItem";

export default function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    }

    getProducts();
  }, []);

  return (
    <div>
      <h1>Cart Page</h1>

      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
