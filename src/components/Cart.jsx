import { Link } from "react-router-dom";
import { useCart } from "../components/CartContext";

function Cart() {
  const { cart, removeFromCart, clearCart, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>El carrito está vacío</h2>
        <Link to="/products">Ver productos</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Carrito de Compras</h2>
      
      {cart.map(item => (
        <div key={item.id} style={{ 
          border: "1px solid #ddd", 
          padding: "15px", 
          marginBottom: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div>
            <h3>{item.title}</h3>
            <p>Precio: ${item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Subtotal: ${item.price * item.quantity}</p>
          </div>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}

      <div style={{ marginTop: "20px" }}>
        <h3>Total: ${getTotalPrice()}</h3>
        <button onClick={clearCart}>Vaciar carrito</button>
      </div>
    </div>
  );
}

export default Cart;