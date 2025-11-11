import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const LOCAL_PRODUCT = {
  id: 1,
  title: "Iphone 17",
  description: "Este es el último modelo de Apple.",
  price: 100,
  category: "smartphones",
  thumbnail: "https://via.placeholder.com/400",
};

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo obtener el producto");
        return res.json();
      })
      .then((data) => {
        setItem(data);
      })
      .catch(() => {
        setItem(LOCAL_PRODUCT);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return <p style={{ textAlign: "center", padding: 30 }}>Cargando producto...</p>;

  if (error)
    return <p style={{ textAlign: "center", padding: 30 }}>Error: {error}</p>;

  return <ItemDetail item={item} />;
}
