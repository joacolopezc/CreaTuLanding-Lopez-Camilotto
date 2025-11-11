import { Link } from "react-router-dom";
import { useCart } from "../components/CartContext";

function CartWidget() {
  const { getTotalItems } = useCart();

  return (
    <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
      🛒 ({getTotalItems()})
    </Link>
  );
}

export default CartWidget;