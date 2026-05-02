"use client";

import { useEffect, useState } from "react";
import ProductItem from "../../components/ProductItem";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function getCart() {
      const cartRes = await fetch("https://fakestoreapi.com/carts/1");
      const cartData = await cartRes.json();

      const productsRes = await fetch("https://fakestoreapi.com/products");
      const productsData = await productsRes.json();

      const fullCart = cartData.products.map((item) => {
        const product = productsData.find((p) => p.id === item.productId);

        return {
          ...product,
          quantity: item.quantity,
        };
      });

      setCart(fullCart);
    }

    getCart();
  }, []);

  function increaseQuantity(id) {
    const updated = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity < 10 ? item.quantity + 1 : 10,
          }
        : item,
    );

    setCart(updated);
  }

  function decreaseQuantity(id) {
    const updated = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 1,
          }
        : item,
    );

    setCart(updated);
  }

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div>
      <h1>Cart Page</h1>

      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>

      {cart.length === 0 ? (
        <p>Loading...</p>
      ) : (
        cart.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
          />
        ))
      )}
    </div>
  );
}
