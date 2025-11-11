import React from "react";
import Item from "./Item";

export default function ItemList({ items = [] }) {
  if (!items || items.length === 0) {
    return <p style={{ textAlign: "center", color: "#666" }}>No hay productos para mostrar.</p>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 20,
        maxWidth: 1000,
        margin: "0 auto",
        paddingTop: 10,
      }}
    >
      {items.map((item) => (
        <div key={item.id}>
          <Item product={item} />
        </div>
      ))}
    </div>
  );
}
