// src/data/mockData.js

import aloeVera from '../assets/imagenes/aloe-vera.jpg';
import menta from '../assets/imagenes/menta.jpg';
import calendula from '../assets/imagenes/calendula.jpg';
import jengibre from '../assets/imagenes/jengibre.jpg';
import lavanda from '../assets/imagenes/lavanda.jpg';
import romero from '../assets/imagenes/romero.jpg';
import albahaca from '../assets/imagenes/albahaca.jpg';
import tomillo from '../assets/imagenes/tomillo.jpg';
import macetaCeramica from '../assets/imagenes/macetaceramica.jpg';
import macetaColgante from '../assets/imagenes/macetacolgante.jpg';
import setMacetas from '../assets/imagenes/setmacetas.jpg';

const productos = [
  {
    id: 1,
    title: "Aloe Vera",
    description: "Planta medicinal ideal para quemaduras y cuidado de la piel.",
    price: 850,
    category: "medicinales",
    stock: 15,
    thumbnail: aloeVera
  },
  {
    id: 2,
    title: "Menta",
    description: "Planta medicinal perfecta para infusiones digestivas.",
    price: 650,
    category: "medicinales",
    stock: 20,
    thumbnail: menta
  },
  {
    id: 3,
    title: "Caléndula",
    description: "Flor medicinal con propiedades antiinflamatorias.",
    price: 720,
    category: "medicinales",
    stock: 12,
    thumbnail: calendula
  },
  {
    id: 4,
    title: "Jengibre",
    description: "Raíz medicinal con propiedades antiinflamatorias.",
    price: 980,
    category: "medicinales",
    stock: 8,
    thumbnail: jengibre
  },
  {
    id: 5,
    title: "Lavanda",
    description: "Planta aromática con flores violetas.",
    price: 890,
    category: "aromaticas",
    stock: 18,
    thumbnail: lavanda
  },
  {
    id: 6,
    title: "Romero",
    description: "Hierba aromática versátil para cocina.",
    price: 620,
    category: "aromaticas",
    stock: 25,
    thumbnail: romero
  },
  {
    id: 7,
    title: "Albahaca",
    description: "Planta aromática esencial en la cocina.",
    price: 580,
    category: "aromaticas",
    stock: 30,
    thumbnail: albahaca
  },
  {
    id: 8,
    title: "Tomillo",
    description: "Hierba aromática de sabor intenso.",
    price: 670,
    category: "aromaticas",
    stock: 22,
    thumbnail: tomillo
  },
  {
    id: 9,
    title: "Maceta de Cerámica",
    description: "Maceta artesanal de cerámica.",
    price: 1250,
    category: "macetas",
    stock: 10,
    thumbnail: macetaCeramica
  },
  {
    id: 10,
    title: "Maceta Colgante",
    description: "Maceta de fibra natural con cuerda.",
    price: 780,
    category: "macetas",
    stock: 15,
    thumbnail: macetaColgante
  },
  {
    id: 11,
    title: "Set de 3 Macetas",
    description: "Conjunto de macetas de barro.",
    price: 1450,
    category: "macetas",
    stock: 8,
    thumbnail: setMacetas
  }
];

const categorias = [
  { id: "medicinales", label: "Medicinales" },
  { id: "aromaticas", label: "Aromáticas" },
  { id: "macetas", label: "Macetas" }
];

export function getProductos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
}

export function getProductosPorCategoria(categoryId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtrados = productos.filter(p => p.category === categoryId);
      resolve(filtrados);
    }, 1000);
  });
}

export function getProductoPorId(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productos.find(p => p.id === parseInt(id));
      resolve(producto);
    }, 1000);
  });
}

export function getCategorias() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categorias);
    }, 800);
  });
}