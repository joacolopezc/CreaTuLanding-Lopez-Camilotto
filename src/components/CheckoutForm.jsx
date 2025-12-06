import { useState } from "react";
import { useCart } from "./CartContext";
import { crearOrden } from "../data/firestore";

function CheckoutForm() {
  const { cart, getTotalPrice, clearCart } = useCart();
  const [ordenId, setOrdenId] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // Estado del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    // Validación básica
    if (!formData.nombre || !formData.email || !formData.telefono) {
      alert("Por favor completa todos los campos");
      return;
    }

    setLoading(true);

    try {
      // Crear objeto de orden
      const orden = {
        comprador: {
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono
        },
        items: cart.map(item => ({
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: item.quantity
        })),
        total: getTotalPrice()
      };

      // Guardar en Firestore
      const id = await crearOrden(orden);
      
      // Mostrar ID de orden y limpiar carrito
      setOrdenId(id);
      clearCart();
      
    } catch (error) {
      console.error("Error al procesar la compra:", error);
      alert("Hubo un error al procesar tu compra. Por favor intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  }

  if (ordenId) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>¡Compra realizada con éxito!</h2>
        <p>Tu número de orden es:</p>
        <h3 style={{ 
          backgroundColor: "#4CAF50", 
          color: "white", 
          padding: "10px",
          borderRadius: "5px",
          margin: "20px 0"
        }}>
          {ordenId}
        </h3>
        <p>Guarda este número para hacer seguimiento de tu pedido.</p>
        <p>Te enviaremos un email de confirmación a {formData.email}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h2>Finalizar Compra</h2>
      
      <div style={{ 
        border: "1px solid #ddd", 
        padding: "15px", 
        marginBottom: "20px",
        backgroundColor: "#f9f9f9"
      }}>
        <h3>Resumen de compra</h3>
        <p>Total de productos: {cart.length}</p>
        <p><strong>Total a pagar: ${getTotalPrice()}</strong></p>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Nombre completo:
          </label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ddd",
              borderRadius: "4px"
            }}
            required
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ddd",
              borderRadius: "4px"
            }}
            required
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Teléfono:
          </label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ddd",
              borderRadius: "4px"
            }}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: loading ? "#ccc" : "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: loading ? "not-allowed" : "pointer",
            fontSize: "16px"
          }}
        >
          {loading ? "Procesando..." : "Confirmar Compra"}
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;