import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../components/CartContext";
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  const { addToCart } = useCart();
  const [agregado, setAgregado] = useState(false);

  if (!item) return null;

  function handleAgregar(cantidad) {
    addToCart(item, cantidad);
    setAgregado(true);
  }

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <div style={{ display: "flex", gap: "30px" }}>
        <img 
          src={item.thumbnail} 
          alt={item.title}
          style={{ width: "400px", height: "400px", objectFit: "cover" }}
        />
        <div>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p><strong>Precio: ${item.price}</strong></p>
          <p>Stock: {item.stock}</p>
          <p>Categoría: {item.category}</p>
          
          {!agregado ? (
            <ItemCount stock={item.stock} onAdd={handleAgregar} />
          ) : (
            <div>
              <p>✓ Producto agregado al carrito</p>
              <Link to="/cart">Ir al carrito</Link>
              <br/>
              <Link to="/products">Seguir comprando</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;