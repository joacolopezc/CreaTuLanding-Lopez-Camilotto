import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product, quantity) {
    const existe = cart.find(item => item.id === product.id);
    
    if (existe) {
      // Si el producto ya está en el carrito, actualizar la cantidad
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      // Si no está, agregarlo
      setCart([...cart, { ...product, quantity }]);
    }
  }

  function removeFromCart(id) {
    setCart(cart.filter(item => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  function getTotalItems() {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }

  function getTotalPrice() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      clearCart,
      getTotalItems,
      getTotalPrice 
    }}>
      {children}
    </CartContext.Provider>
  );
}