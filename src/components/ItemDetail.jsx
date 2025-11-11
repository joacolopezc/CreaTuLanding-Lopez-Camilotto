import React from "react";
import { Link } from "react-router-dom";


export default function ItemDetail({ item }) {
  if (!item) return null;

  return (
    <div style={{ padding: "40px", maxWidth: 900, margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          alignItems: "flex-start",
          background: "#fff",
          padding: 20,
          borderRadius: 8,
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        }}
      >
        <div style={{ flex: "0 0 340px" }}>
          {item.thumbnail && (
            <img
              src={item.thumbnail}
              alt={item.title}
              style={{
                width: "100%",
                height: 300,
                objectFit: "cover",
                borderRadius: 6,
              }}
            />
          )}
        </div>

        <div style={{ flex: 1 }}>
          <h2 style={{ marginTop: 0, color: "#222" }}>{item.title}</h2>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            {item.description || "Sin descripción disponible."}
          </p>

          <div style={{ marginTop: 16 }}>
            <span style={{ fontSize: 20, fontWeight: 700, color: "green" }}>
              ${item.price}
            </span>
          </div>

          <div style={{ marginTop: 24 }}>
            <Link
              to="/products"
              style={{
                display: "inline-block",
                background: "green",
                color: "#fff",
                padding: "10px 14px",
                borderRadius: 6,
                textDecoration: "none",
              }}
            >
              Volver a categorías
            </Link>
          </div>

          <p style={{ marginTop: 12, color: "#999", fontSize: 13 }}>
            Categoría: <strong>{item.category}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
