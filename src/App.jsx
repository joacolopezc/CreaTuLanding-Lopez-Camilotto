import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import "./index.css";

function Home() {
  return (
    <div
      style={{
        minHeight: "75vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 20px",
        textAlign: "center",
        backgroundColor: "white",
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: "2.6rem",
          fontWeight: "800",
          marginBottom: "20px",
          letterSpacing: "0.5px",
          lineHeight: "1.2",
        }}
      >
        <span style={{ color: "lightgreen" }}>Bienvenidos/as a WebTech</span>
      </h1>

      <p
        style={{
          fontSize: "1.1rem",
          color: "#6666",
          maxWidth: "600px",
          lineHeight: "1.5",
        }}
      >
        Descubrí nuestras últimas novedades en tecnología <br />
        Haz click en <strong>productos</strong> para explorar las categorías.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
          margin: 0,
          padding: 0,
          width: "100%",
        }}
      >
        <Navbar />

        <Routes>
          {/* Página principal */}
          <Route path="/" element={<Home />} />

          {/* Listado general de categorías */}
          <Route path="/products" element={<Products />} />

          {/* Listado de productos filtrado por categoría */}
          <Route path="/category/:categoryId" element={<ItemListContainer />} />

          {/* Detalle individual de producto */}
          <Route path="/item/:id" element={<ItemDetailContainer />} />

          {/* Página de contacto */}
          <Route
            path="/contacto"
            element={
              <div style={{ textAlign: "center", padding: "60px" }}>
                <h2>Contacto</h2>
                <p>
                  Puedes comunicarte con Web Tech a través del correo{" "}
                  <strong>contacto@webtech.com</strong>
                </p>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
