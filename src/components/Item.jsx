import React from "react";
import { Link } from "react-router-dom";


export default function Item({ product }) {
  return (
    <article
      style={{
        border: "1px solid #e6e6e6",
        borderRadius: 8,
        padding: 12,
        background: "#fff",
        textAlign: "left",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        transition: "transform 0.2s",
      }}
    >
      {product.thumbnail && (
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{
            width: "100%",
            height: 140,
            objectFit: "cover",
            borderRadius: 6,
            marginBottom: 8,
          }}
        />
      )}

      <h3 style={{ margin: "6px 0", color: "#333" }}>{product.title}</h3>

      <p style={{ margin: "6px 0", color: "#666", fontSize: 14 }}>
        {product.description?.slice(0, 50)}...
      </p>

      <p style={{ margin: "6px 0", fontWeight: "bold" }}>${product.price}</p>

      <div style={{ marginTop: 8 }}>
        <Link
          to={`/item/${product.id}`}
          style={{
            color: "green",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          Ver detalle
        </Link>
      </div>
    </article>
  );
}
