import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "15px" }}>
      <img 
        src={product.thumbnail} 
        alt={product.title}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
      <Link to={`/item/${product.id}`}>Ver detalle</Link>
    </div>
  );
}

export default Item;