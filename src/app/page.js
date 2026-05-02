"use client";

import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    }

    getProducts();
  }, []);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div>
      <h1>Products</h1>
      <h2>Cart Items: {cart.length}</h2>

      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToCart={addToCart}
        />
      ))}
    </div>
  );
}
