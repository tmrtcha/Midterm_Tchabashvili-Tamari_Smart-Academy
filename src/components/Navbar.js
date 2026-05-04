"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 20px",
        background: "#ffffff",
        borderBottom: "1px solid #eee",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Logo */}
      <div style={{ fontWeight: "bold", fontSize: "22px", color: "#111" }}>
        amazon
      </div>

      {/* Menu */}
      <div style={{ display: "flex", gap: "20px", fontSize: "14px" }}>
        <Link href="/products">Products</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/cart">Cart</Link>
      </div>

      {/* Search placeholder */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          border: "1px solid #ddd",
          padding: "6px 10px",
          borderRadius: "5px",
        }}
      >
        🔍 <span style={{ color: "#888" }}>Search</span>
      </div>
    </nav>
  );
}
