import { useState } from "react";

function ItemCount({ stock, onAdd }) {
  const [cantidad, setCantidad] = useState(1);

  function sumar() {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  }

  function restar() {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{ 
        display: "flex", 
        gap: "10px", 
        alignItems: "center",
        marginBottom: "10px"
      }}>
        <button 
          onClick={restar}
          style={{
            width: "40px",
            height: "40px",
            fontSize: "20px",
            border: "1px solid #4CAF50",
            backgroundColor: "white",
            cursor: "pointer",
            borderRadius: "4px"
          }}
        >
          -
        </button>
        <span style={{ 
          fontSize: "20px",
          minWidth: "30px",
          textAlign: "center"
        }}>
          {cantidad}
        </span>
        <button 
          onClick={sumar}
          style={{
            width: "40px",
            height: "40px",
            fontSize: "20px",
            border: "1px solid #4CAF50",
            backgroundColor: "white",
            cursor: "pointer",
            borderRadius: "4px"
          }}
        >
          +
        </button>
      </div>
      <button 
        onClick={() => onAdd(cantidad)}
        style={{ 
          width: "100%",
          padding: "12px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;