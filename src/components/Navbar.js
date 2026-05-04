"use client";

import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>amazon</div>

      <div className={styles.menu}>
        <Link href="/products">Products</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/cart">Cart</Link>
      </div>

      <div className={styles.searchBox}>
        <input type="text" placeholder="Search products..." />
        <button>🔍</button>
      </div>
    </nav>
  );
}
