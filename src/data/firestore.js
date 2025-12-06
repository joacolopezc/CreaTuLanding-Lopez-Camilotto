// Funciones para interactuar con Firestore
import { collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

// Obtener todos los productos
export async function getProductos() {
  try {
    const productosCol = collection(db, "productos");
    const snapshot = await getDocs(productosCol);
    const productos = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return productos;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return [];
  }
}

// Obtener productos por categoría
export async function getProductosPorCategoria(categoryId) {
  try {
    const productosCol = collection(db, "productos");
    const q = query(productosCol, where("category", "==", categoryId));
    const snapshot = await getDocs(q);
    const productos = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return productos;
  } catch (error) {
    console.error("Error al obtener productos por categoría:", error);
    return [];
  }
}

// Obtener un producto por ID
export async function getProductoPorId(id) {
  try {
    const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      };
    } else {
      console.log("Producto no encontrado");
      return null;
    }
  } catch (error) {
    console.error("Error al obtener producto:", error);
    return null;
  }
}

// Obtener categorías disponibles
export async function getCategorias() {
  // Categorías fijas del e-commerce
  const categorias = [
    { id: "medicinales", label: "Medicinales" },
    { id: "aromaticas", label: "Aromáticas" },
    { id: "macetas", label: "Macetas" }
  ];
  return categorias;
}

// Crear una orden de compra
export async function crearOrden(orden) {
  try {
    const ordenesCol = collection(db, "ordenes");
    const docRef = await addDoc(ordenesCol, {
      ...orden,
      fecha: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error("Error al crear orden:", error);
    throw error;
  }
}