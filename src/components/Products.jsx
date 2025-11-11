import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategorias } from "../data/mockData";

function Products() {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategorias().then(data => {
      setCategorias(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p style={{ padding: "20px" }}>Cargando...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Categorías</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {categorias.map(cat => (
          <Link 
            key={cat.id} 
            to={`/category/${cat.id}`}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              textDecoration: "none",
              color: "black"
            }}
          >
            <h3>{cat.label}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;