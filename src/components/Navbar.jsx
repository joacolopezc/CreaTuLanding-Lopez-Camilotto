import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// categorías simuladas (para el dropdown)
const categories = [
    { id: "smartphones", label: "Smartphones" },
    { id: "laptops", label: "Laptops" },
    { id: "fragrances", label: "Fragancias" },
    { id: "skincare", label: "Cuidado de la piel" },
];

export default function Navbar() {
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
    <nav
    style={{
        backgroundColor: "green",
        margin: 0,
        padding: "12px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }}
    >
    <div>
        <Link
        to="/"
        style={{
            color: "white",
            textDecoration: "none",
            fontSize: 22,
            fontWeight: "bold",
        }}
        >
            Web Tech
        </Link>
    </div>
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Inicio
        </Link>

        {/* Dropdown de Productos */}
        <div ref={dropdownRef} style={{ position: "relative" }}>
            <button
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            style={{
                background: "transparent",
                border: "1px solid white",
                borderRadius: 4,
                color: "white",
                cursor: "pointer",
                padding: "6px 8px",
                fontSize: 16,
            }}
            >
                Productos ▾
            </button>
            {open && (
            <div
            style={{
                position: "absolute",
                right: 0,
                top: "calc(100% + 8px)",
                background: "#fff",
                borderRadius: 8,
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                minWidth: 200,
                zIndex: 20,
                padding: 8,
            }}
            >
                {categories.map((cat) => (
                    <button
                    key={cat.id}
                    onClick={() => goToCategory(cat.id)}
                    style={{
                        display: "block",
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        textAlign: "left",
                        padding: "8px 10px",
                        cursor: "pointer",
                        color: "#333",
                    }}
                    >
                        {cat.label}
                    </button>
                ))}
                
                <div
                style={{
                    borderTop: "1px solid #eee",
                    marginTop: 6,
                    paddingTop: 6,
                }}
                >
                    <Link
                    to="/products"
                    onClick={() => setOpen(false)}
                    style={{
                        color: "#666",
                        textDecoration: "none",
                        fontSize: 13,
                    }}
                    >
                        Ver todas las categorías
                    </Link>
                </div>
            </div>
            )}
            </div>
            <Link to="/contacto" style={{ color: "white", textDecoration: "none" }}>
            Contacto
            </Link>
        </div>
    </nav>
    );
}
