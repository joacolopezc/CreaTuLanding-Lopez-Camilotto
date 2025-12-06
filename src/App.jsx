import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";

function Home() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Bienvenidos a Tierra Mailott</h1>
      <p>Tienda de plantas medicinales y aromáticas</p>
      <img 
        src="https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=800" 
        alt="Plantas" 
        style={{ 
          maxWidth: "100%", 
          height: "400px", 
          objectFit: "cover",
          borderRadius: "8px",
          marginTop: "20px"
        }}
      />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;