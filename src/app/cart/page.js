"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

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
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity < 10 ? item.quantity + 1 : 10,
            }
          : item,
      ),
    );
  }

  function decreaseQuantity(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : 1,
            }
          : item,
      ),
    );
  }

  function removeItem(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Shopping Cart</h1>

      <div className={styles.wrapper}>
        {/* LEFT */}
        <div className={styles.items}>
          {cart.length === 0 ? (
            <p>Loading...</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className={styles.item}>
                <img src={item.image} alt={item.title} />

                <div className={styles.info}>
                  <h3>{item.title}</h3>
                </div>

                <div className={styles.quantity}>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>

                <div className={styles.price}>
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                <button
                  className={styles.remove}
                  onClick={() => removeItem(item.id)}
                >
                  🗑
                </button>
              </div>
            ))
          )}
        </div>

        {/* RIGHT */}
        <div className={styles.summary}>
          <h2>Order Summary</h2>

          <div className={styles.row}>
            <span>Shipping</span>
            <span className={styles.free}>Free</span>
          </div>

          <div className={styles.row}>
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <div className={styles.total}>
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <button className={styles.buy}>BUY</button>
        </div>
      </div>
    </div>
  );
}
