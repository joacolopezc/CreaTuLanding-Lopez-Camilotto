import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <div style={{ 
      border: "1px solid #ddd", 
      padding: "15px",
      borderRadius: "8px",
      transition: "transform 0.2s",
      backgroundColor: "white"
    }}>
      <img 
        src={product.thumbnail} 
        alt={product.title}
        style={{ 
          width: "100%", 
          height: "200px", 
          objectFit: "cover",
          borderRadius: "4px"
        }}
      />
      <h3 style={{ margin: "10px 0" }}>{product.title}</h3>
      <p style={{ 
        color: "#666", 
        fontSize: "14px",
        minHeight: "40px"
      }}>
        {product.description}
      </p>
      <p style={{ 
        fontSize: "20px", 
        fontWeight: "bold",
        color: "#4CAF50",
        margin: "10px 0"
      }}>
        ${product.price}
      </p>
      <Link 
        to={`/item/${product.id}`}
        style={{
          display: "inline-block",
          padding: "8px 16px",
          backgroundColor: "#4CAF50",
          color: "white",
          textDecoration: "none",
          borderRadius: "4px",
          marginTop: "10px"
        }}
      >
        Ver detalle
      </Link>
    </div>
  );
}

export default Item;