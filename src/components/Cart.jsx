import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

function Cart() {
  const { cart, removeFromCart, clearCart, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>El carrito está vacío</h2>
        <p>No hay productos en el carrito</p>
        <Link to="/products" style={{ 
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          textDecoration: "none",
          borderRadius: "4px"
        }}>
          Ver productos
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2>Carrito de Compras</h2>
      
      {cart.map(item => (
        <div key={item.id} style={{ 
          border: "1px solid #ddd", 
          padding: "15px", 
          marginBottom: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "4px"
        }}>
          <div>
            <h3>{item.title}</h3>
            <p>Precio: ${item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <p><strong>Subtotal: ${item.price * item.quantity}</strong></p>
          </div>
          <button 
            onClick={() => removeFromCart(item.id)}
            style={{
              padding: "8px 16px",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            Eliminar
          </button>
        </div>
      ))}

      <div style={{ 
        marginTop: "30px",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "4px"
      }}>
        <h3>Total: ${getTotalPrice()}</h3>
        
        <div style={{ 
          display: "flex", 
          gap: "10px", 
          marginTop: "20px",
          flexWrap: "wrap"
        }}>
          <button 
            onClick={clearCart}
            style={{
              padding: "10px 20px",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            Vaciar carrito
          </button>
          
          <Link 
            to="/checkout"
            style={{
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              textDecoration: "none",
              borderRadius: "4px",
              display: "inline-block"
            }}
          >
            Finalizar compra
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;