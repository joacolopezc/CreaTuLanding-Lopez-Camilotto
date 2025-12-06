import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategorias } from "../data/firestore";

function Products() {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Obtener categorías desde Firestore
    getCategorias().then(data => {
      setCategorias(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Categorías</h2>
      <div style={{ 
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px",
        marginTop: "20px"
      }}>
        {categorias.map(cat => (
          <Link 
            key={cat.id} 
            to={`/category/${cat.id}`}
            style={{
              border: "2px solid #4CAF50",
              padding: "30px 20px",
              textDecoration: "none",
              color: "#333",
              borderRadius: "8px",
              textAlign: "center",
              transition: "all 0.3s",
              backgroundColor: "#fff"
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