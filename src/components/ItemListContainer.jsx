import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const LOCAL_PRODUCTS = [
    {
        id: 1,
        title: "Producto local 1",
        description: "Descripción de prueba 1",
        price: 100,
        category: "smartphones",
        thumbnail: "https://via.placeholder.com/200",
    },
    {
            id: 2,
        title: "Producto local 2",
        description: "Descripción de prueba 2",
        price: 150,
        category: "laptops",
        thumbnail: "https://via.placeholder.com/200",
    },
    {
        id: 3,
        title: "Producto local 3",
        description: "Descripción de prueba 3",
        price: 200,
        category: "fragrances",
        thumbnail: "https://via.placeholder.com/200",
    },
];

export default function ItemListContainer({ greeting }) {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        setLoading(true);
        setError(null);
        
        let url = "https://dummyjson.com/products";
        if (categoryId) {
            url = `https://dummyjson.com/products/category/${categoryId}`;
        }
        
        fetch(url)
        .then((res) => {
            if (!res.ok) throw new Error("No se pudieron cargar los productos");
            return res.json();
        })
        .then((data) => {
            if (data && data.products) {
                setItems(data.products);
            } else {
                setItems(LOCAL_PRODUCTS);
            }
        })
        .catch(() => {
        if (categoryId) {
            setItems(LOCAL_PRODUCTS.filter((p) => p.category === categoryId));
        } else {
            setItems(LOCAL_PRODUCTS);
        }
    })
    .finally(() => setLoading(false));
}, [categoryId]);

if (loading)
    return <p style={{ textAlign: "center", padding: 30 }}>Cargando productos...</p>;

if (error)
    return <p style={{ textAlign: "center", padding: 30 }}>Error: {error}</p>;

return (
    <div style={{ padding: "40px", textAlign: "center" }}>
        <h2 style={{ marginBottom: 20 }}>
        {categoryId ? `Categoría: ${categoryId}` : greeting || "Todos los productos"}
        </h2>
        <ItemList items={items} />
    </div>
);
}
