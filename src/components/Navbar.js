"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "20px", background: "#ddd" }}>
      <Link href="/">Products</Link> | <Link href="/profile">Profile</Link> |{" "}
      <Link href="/cart">Cart</Link>
    </nav>
  );
}
