import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductoPorId } from "../data/mockData";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductoPorId(id).then(data => {
      setItem(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <p style={{ padding: "20px" }}>Cargando...</p>;
  if (!item) return <p style={{ padding: "20px" }}>Producto no encontrado</p>;

  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;