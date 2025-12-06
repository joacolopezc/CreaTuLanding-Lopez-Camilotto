import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
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
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <div style={{ 
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "40px",
        alignItems: "start"
      }}>
        <div>
          <img 
            src={item.thumbnail} 
            alt={item.title}
            style={{ 
              width: "100%", 
              maxHeight: "500px", 
              objectFit: "cover",
              borderRadius: "8px"
            }}
          />
        </div>
        
        <div>
          <h2>{item.title}</h2>
          <p style={{ 
            fontSize: "16px",
            color: "#666",
            marginTop: "15px",
            lineHeight: "1.6"
          }}>
            {item.description}
          </p>
          
          <p style={{ 
            fontSize: "32px",
            fontWeight: "bold",
            color: "#4CAF50",
            margin: "20px 0"
          }}>
            ${item.price}
          </p>
          
          <p style={{ marginBottom: "10px" }}>
            <strong>Stock disponible:</strong> {item.stock} unidades
          </p>
          
          <p style={{ marginBottom: "20px" }}>
            <strong>Categoría:</strong> {item.category}
          </p>
          
          {item.stock > 0 ? (
            !agregado ? (
              <ItemCount stock={item.stock} onAdd={handleAgregar} />
            ) : (
              <div style={{ marginTop: "20px" }}>
                <p style={{ 
                  color: "#4CAF50",
                  fontSize: "18px",
                  marginBottom: "15px"
                }}>
                  ✓ Producto agregado al carrito
                </p>
                <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
                  <Link 
                    to="/cart"
                    style={{
                      display: "inline-block",
                      padding: "12px",
                      backgroundColor: "#4CAF50",
                      color: "white",
                      textDecoration: "none",
                      borderRadius: "4px",
                      textAlign: "center"
                    }}
                  >
                    Ir al carrito
                  </Link>
                  <Link 
                    to="/products"
                    style={{
                      display: "inline-block",
                      padding: "12px",
                      backgroundColor: "#fff",
                      color: "#4CAF50",
                      textDecoration: "none",
                      borderRadius: "4px",
                      border: "1px solid #4CAF50",
                      textAlign: "center"
                    }}
                  >
                    Seguir comprando
                  </Link>
                </div>
              </div>
            )
          ) : (
            <p style={{ 
              color: "#f44336",
              fontSize: "18px",
              fontWeight: "bold"
            }}>
              Producto sin stock
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;