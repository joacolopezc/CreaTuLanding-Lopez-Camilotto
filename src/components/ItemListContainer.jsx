import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos, getProductosPorCategoria } from "../data/mockData";
import ItemList from "./ItemList";

function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    if (categoryId) {
      getProductosPorCategoria(categoryId).then(data => {
        setItems(data);
        setLoading(false);
      });
    } else {
      getProductos().then(data => {
        setItems(data);
        setLoading(false);
      });
    }
  }, [categoryId]);

  if (loading) return <p style={{ padding: "20px" }}>Cargando productos...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{categoryId ? `Categoría: ${categoryId}` : "Todos los productos"}</h2>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;