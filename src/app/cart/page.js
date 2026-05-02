"use client";

import { useEffect, useState } from "react";
import ProductItem from "../../components/ProductItem";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  function removeFromCart(id) {
    const updatedCart = cart.filter((item) => item.id !== id);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1>Cart Page</h1>

      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onRemove={removeFromCart}
          />
        ))
      )}
    </div>
  );
}
