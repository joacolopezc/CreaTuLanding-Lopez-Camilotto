import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductoPorId } from "../data/firestore";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    // Obtener producto por ID desde Firestore
    getProductoPorId(id).then(data => {
      setItem(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <p>Cargando...</p>
      </div>
    );
  }
  
  if (!item) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <p>Producto no encontrado</p>
      </div>
    );
  }

  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;