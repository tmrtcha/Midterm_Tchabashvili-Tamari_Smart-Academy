export default function ProductItem({ product, onAddToCart, onRemove }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} width={100} />
      <p>Price: ${product.price}</p>

      {onAddToCart && (
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      )}

      {onRemove && <button onClick={() => onRemove(product.id)}>Remove</button>}
    </div>
  );
}
