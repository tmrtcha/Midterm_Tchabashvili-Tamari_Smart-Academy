"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function Products() {
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
    <div className={styles.container}>
      <h1 className={styles.title}>Products</h1>

      <div className={styles.grid}>
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/details/${product.id}`}
            className={styles.card}
          >
            <img src={product.image} alt={product.title} />

            <h3>{product.title}</h3>

            <p className={styles.price}>${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
