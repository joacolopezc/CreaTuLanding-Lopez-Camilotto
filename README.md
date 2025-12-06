# Tierra Mailott - E-commerce de Plantas Medicinales

Tierra Mailott es una tienda online dedicada a la venta de plantas medicinales y aromáticas. La aplicación permite explorar categorías, ver detalles de productos y gestionar un carrito de compras totalmente funcional.

## Descripción del Proyecto

Este es un e-commerce desarrollado con React y Vite que ofrece:

- Catálogo de plantas medicinales y aromáticas
- Filtrado y navegación por categorías
- Vista detallada de cada producto
- Carrito de compras persistente manejado con Context API
- Sistema de checkout para finalizar compras
- Integración con Firebase/Firestore para almacenar productos y órdenes

## Tecnologías Utilizadas

- **React** - Biblioteca principal para la construcción de la interfaz
- **Vite** - Bundler y servidor de desarrollo
- **React Router** - Navegación entre vistas dentro de la SPA
- **Context API** - Gestión global del estado del carrito
- **Firebase/Firestore** - Base de datos para productos y órdenes

## Estructura del Proyecto

```
src/
├── components/
│   ├── Cart.jsx              # Vista del carrito
│   ├── CartContext.jsx       # Context para manejo global del carrito
│   ├── CartWidget.jsx        # Widget del carrito en navbar
│   ├── CheckoutForm.jsx      # Formulario de finalización de compra
│   ├── Item.jsx              # Tarjeta de producto
│   ├── ItemCount.jsx         # Contador de cantidad
│   ├── ItemDetail.jsx        # Detalle completo del producto
│   ├── ItemDetailContainer.jsx  # Contenedor de detalle
│   ├── ItemList.jsx          # Lista de productos
│   ├── ItemListContainer.jsx # Contenedor de lista
│   ├── Navbar.jsx            # Barra de navegación
│   └── Products.jsx          # Vista de categorías
├── config/
│   └── firebase.js           # Configuración de Firebase
├── data/
│   └── firestore.js          # Funciones de Firestore
├── App.jsx                   # Componente principal
├── main.jsx                  # Punto de entrada
└── index.css                 # Estilos globales
```

## Instalación

1. Clonar el repositorio
```bash
git clone [URL_DEL_REPOSITORIO]
cd joaco-project
```

2. Instalar dependencias
```bash
npm install
```

3. Configurar Firebase
   - Crear un proyecto en [Firebase Console](https://console.firebase.google.com/)
   - Habilitar Firestore Database
   - Copiar las credenciales de configuración
   - Reemplazar los valores en `src/config/firebase.js`

4. Ejecutar en entorno de desarrollo
```bash
npm run dev
```

5. Crear build de producción
```bash
npm run build
```

## Funcionalidades

### Listado de Productos
- Carga dinámica desde Firestore
- Filtrado por categorías
- Renderizado condicional con loaders

### Detalle de Producto
- Información completa del producto
- Selector de cantidad con validaciones
- Stock en tiempo real
- Botón de agregar al carrito

### Carrito de Compras
- Agregar/eliminar productos
- Actualizar cantidades
- Ver total y subtotales
- Vaciar carrito completo

### Checkout
- Formulario con validaciones
- Creación de orden en Firestore
- Mensaje de confirmación con ID de orden
- Limpieza automática del carrito

## Flujo de Usuario

1. El usuario navega por las categorías o productos
2. Selecciona un producto para ver su detalle
3. Agrega productos al carrito con cantidad deseada
4. Revisa el carrito y procede al checkout
5. Completa el formulario con sus datos
6. Recibe un ID de orden como confirmación

## Autor

**Lopez Camilotto Joaquín**

## Comandos Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Crea build de producción
npm run preview  # Previsualiza el build
npm run lint     # Ejecuta el linter
```