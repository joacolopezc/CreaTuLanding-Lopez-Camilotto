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
    <div>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <button onClick={restar}>-</button>
        <span>{cantidad}</span>
        <button onClick={sumar}>+</button>
      </div>
      <button 
        onClick={() => onAdd(cantidad)}
        style={{ marginTop: "10px" }}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;