import React from "react";

export default function CartWidget() {
    return (
    <div
    style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        background: "rgba(255,255,255,0.2)",
        padding: "4px 8px",
        borderRadius: 6,
    }}
    >
        <span role="img" aria-label="carrito" style={{ fontSize: 20 }}>
            🛒
        </span>
        <span style={{ color: "white", fontWeight: "bold" }}>0</span>
    </div>
    );
}
