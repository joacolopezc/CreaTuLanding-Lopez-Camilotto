# Tierra Mailott - E-commerce de Plantas Medicinales y Aromáticas

Tienda online desarrollada con React que ofrece plantas medicinales y aromáticas, macetas y accesorios.

## 🛠️ Herramientas y Tecnologías

### Tecnologías principales

- **React 19.1.1** - Librería de JavaScript para construir interfaces de usuario
- **Vite 7.1.7** - Build tool moderna con servidor de desarrollo rápido y HMR (Hot Module Replacement)
- **React Router DOM 7.1.1** - Librería de enrutamiento para navegación entre páginas
- **Material-UI (MUI) 7.3.4** - Librería de componentes UI basada en Material Design
  - @mui/material - Componentes principales
  - @mui/icons-material - Iconos de Material Design
- **Emotion 11.14** - Librería CSS-in-JS (requerida por MUI)
  - @emotion/react
  - @emotion/styled

### Herramientas de desarrollo

- **ESLint 9.36.0** - Linter para mantener calidad y consistencia del código
- **@vitejs/plugin-react 5.0.4** - Plugin de Vite para React con Fast Refresh
- **Vite Config** - Configuración personalizada de Vite

## 🚀 Comandos para ejecutar la aplicación

### Instalación inicial

Antes de ejecutar el proyecto por primera vez, instala las dependencias:

```bash
npm install
```

### Comandos disponibles

#### Modo desarrollo
Inicia el servidor de desarrollo con hot-reload:

```bash
npm run dev
```

El servidor estará disponible en `http://localhost:5173` (puerto por defecto de Vite)

#### Build de producción
Genera una versión optimizada para producción:

```bash
npm run build
```

Los archivos generados estarán en la carpeta `dist/`

#### Verificar código
Ejecuta ESLint para verificar la calidad del código:

```bash
npm run lint
```

#### Preview de producción
Previsualiza el build de producción localmente:

```bash
npm run preview
```

## 📁 Estructura del proyecto

```
CreaTuLanding-Lopez-Camilotto/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Navbar.jsx       # Barra de navegación
│   │   ├── Cart.jsx         # Vista del carrito
│   │   ├── CartWidget.jsx   # Widget del carrito en navbar
│   │   ├── CartContext.jsx  # Context API para estado del carrito
│   │   ├── Products.jsx     # Vista de productos
│   │   ├── ItemList.jsx     # Lista de productos
│   │   ├── Item.jsx         # Tarjeta de producto individual
│   │   ├── ItemDetail.jsx   # Detalle de producto
│   │   ├── ItemDetailContainer.jsx
│   │   ├── ItemListContainer.jsx
│   │   └── ItemCount.jsx    # Contador de cantidad
│   ├── data/
│   │   └── mockData.js      # Datos de productos simulados
│   ├── assets/
│   │   └── imagenes/        # Imágenes de productos
│   ├── App.jsx              # Componente principal con rutas
│   ├── main.jsx             # Punto de entrada de la aplicación
│   ├── App.css              # Estilos del App
│   └── index.css            # Estilos globales
├── public/                  # Archivos estáticos públicos
├── index.html               # HTML principal
├── vite.config.js          # Configuración de Vite
├── eslint.config.js        # Configuración de ESLint
└── package.json            # Dependencias y scripts

```

## 🌟 Características

- Navegación entre páginas con React Router
- Carrito de compras con Context API
- Filtrado de productos por categorías
- Detalle de cada producto
- Diseño responsive con Material-UI
- Hot Module Replacement para desarrollo rápido

## 📦 Categorías de productos

- Plantas medicinales (albahaca, romero, menta, etc.)
- Plantas aromáticas
- Macetas y accesorios
- Sustratos

## 🔧 Configuración adicional

### ESLint

El proyecto usa ESLint con reglas específicas para React. La configuración se encuentra en `eslint.config.js`

### Vite

Vite está configurado con el plugin de React. Para personalizar la configuración, edita `vite.config.js`

## 📝 Notas

- Este proyecto usa Vite en lugar de Create React App para mejor rendimiento
- Fast Refresh está habilitado para una mejor experiencia de desarrollo
- El React Compiler no está habilitado por defecto

## 👥 Autor

Lopez Camilotto Joaquín
