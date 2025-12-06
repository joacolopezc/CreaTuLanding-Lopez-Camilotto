import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos, getProductosPorCategoria } from "../data/firestore";
import ItemList from "./ItemList";

function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    if (categoryId) {
      // Obtener productos por categoría desde Firestore
      getProductosPorCategoria(categoryId).then(data => {
        setItems(data);
        setLoading(false);
      });
    } else {
      // Obtener todos los productos desde Firestore
      getProductos().then(data => {
        setItems(data);
        setLoading(false);
      });
    }
  }, [categoryId]);

  if (loading) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <p>Cargando productos...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{categoryId ? `Categoría: ${categoryId}` : "Todos los productos"}</h2>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;