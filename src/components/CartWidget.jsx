import { Link } from "react-router-dom";
import { useCart } from "../components/CartContext";

function CartWidget() {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <Link 
      to="/cart" 
      style={{ 
        color: "white", 
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        gap: "5px",
        fontSize: "18px"
      }}
    >
      🛒 
      {totalItems > 0 && (
        <span style={{
          backgroundColor: "#ff5722",
          borderRadius: "50%",
          padding: "2px 8px",
          fontSize: "14px",
          fontWeight: "bold"
        }}>
          {totalItems}
        </span>
      )}
    </Link>
  );
}

export default CartWidget;