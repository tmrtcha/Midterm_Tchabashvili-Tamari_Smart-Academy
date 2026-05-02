import Link from "next/link";

export default function ProductItem({
  product,
  onAddToCart,
  onRemove,
  onIncrease,
  onDecrease,
}) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
      <Link href={`/product/details/${product.id}`}>
        <h3 style={{ cursor: "pointer" }}>{product.title}</h3>
      </Link>

      <img src={product.image} alt={product.title} width={100} />
      <p>Price: ${product.price}</p>

      {onAddToCart && (
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      )}

      {product.quantity && (
        <div>
          <button
            onClick={() => onDecrease(product.id)}
            disabled={product.quantity === 1}
          >
            -
          </button>

          <span style={{ margin: "0 10px" }}>{product.quantity}</span>

          <button
            onClick={() => onIncrease(product.id)}
            disabled={product.quantity === 10}
          >
            +
          </button>
        </div>
      )}

      {onRemove && <button onClick={() => onRemove(product.id)}>Remove</button>}
    </div>
  );
}
