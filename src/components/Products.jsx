import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LOCAL_CATS = ["smartphones", "laptops", "fragrances"];

export default function Products() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch("https://dummyjson.com/products/categories")
      .then((res) => {
        if (!res.ok) throw new Error("No fue posible obtener categorías");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length) {
          setCats(data);
        } else {
          setCats(LOCAL_CATS);
        }
      })
      .catch(() => {
        setCats(LOCAL_CATS);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p style={{ textAlign: "center", padding: 30 }}>Cargando categorías...</p>;
  if (error) return <p style={{ textAlign: "center", padding: 30 }}>Error: {error}</p>;

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2 style={{ marginBottom: 20 }}>Categorías</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 16,
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        {cats.map((cat) => (
          <Link
            key={cat}
            to={`/category/${encodeURIComponent(cat)}`}
            style={{
              display: "block",
              padding: 16,
              borderRadius: 8,
              textDecoration: "none",
              border: "1px solid #e6e6e6",
              background: "#fff",
              color: "#333",
              textTransform: "capitalize",
            }}
          >
            <h3 style={{ margin: "6px 0" }}>{cat.replace(/[-_]/g, " ")}</h3>
            <p style={{ margin: 0, color: "#666", fontSize: 14 }}>Ver productos de {cat}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
