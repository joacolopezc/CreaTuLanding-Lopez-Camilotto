import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartWidget from "./CartWidget";

const categories = [
  { id: "medicinales", label: "Medicinales" },
  { id: "aromaticas", label: "Aromáticas" },
  { id: "macetas", label: "Macetas" }
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function goToCategory(id) {
    setOpen(false);
    navigate(`/category/${id}`);
  }

  return (
    <nav style={{ 
      backgroundColor: "#4CAF50", 
      padding: "15px",
      marginBottom: "20px"
    }}>
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <h2>Tierra Mailott</h2>
        </Link>
        
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Inicio
          </Link>

          {/* Dropdown de Productos */}
          <div ref={dropdownRef} style={{ position: "relative" }}>
            <button
              onClick={() => setOpen(!open)}
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
                fontSize: "16px"
              }}
            >
              Productos ▾
            </button>

            {open && (
              <div style={{
                position: "absolute",
                top: "100%",
                left: 0,
                backgroundColor: "white",
                border: "1px solid #ddd",
                borderRadius: "4px",
                marginTop: "5px",
                minWidth: "150px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                zIndex: 1000
              }}>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => goToCategory(cat.id)}
                    style={{
                      display: "block",
                      width: "100%",
                      padding: "10px 15px",
                      border: "none",
                      background: "transparent",
                      textAlign: "left",
                      cursor: "pointer",
                      color: "#333"
                    }}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link to="/contacto" style={{ color: "white", textDecoration: "none" }}>
            Contacto
          </Link>

          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;