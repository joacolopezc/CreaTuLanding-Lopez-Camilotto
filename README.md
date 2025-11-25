# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



Tierra Mailott - E-commerce de Plantas Medicinales

Tierra Mailott es una tienda online dedicada a la venta de plantas medicinales y aromáticas. La aplicación permite explorar categorías, ver detalles de productos y gestionar un carrito de compras totalmente funcional. El objetivo del proyecto es ofrecer una experiencia de compra clara, rápida y moderna utilizando tecnologías del ecosistema React.

📘 Descripción del Proyecto

Tierra Mailott es un e-commerce desarrollado con React y Vite que ofrece:

Catálogo de plantas medicinales y aromáticas.

Filtrado y navegación por categorías.

Vista detallada de cada producto.

Carrito de compras persistente manejado con Context API.

Interfaz moderna y responsiva construida con Material-UI (MUI).

Navegación SPA mediante React Router.

El propósito del proyecto es entregar una solución escalable y eficiente, con una arquitectura simple basada en componentes reutilizables y gestión de estado global para el carrito.

🔧 Herramientas Utilizadas

React – Biblioteca principal para la construcción de la interfaz

Vite – Bundler y servidor de desarrollo ultrarrápido

Material-UI (MUI) – Componentes estilizados y sistema de diseño

React Router – Navegación entre vistas dentro de la SPA

Context API – Gestión global del estado del carrito

Componentes modulares

Hooks personalizados

Arquitectura organizada por vistas, componentes y contextos

▶️ Comandos para Ejecutar la Aplicación

1. Instalar dependencias
npm install

2. Ejecutar en entorno de desarrollo
npm run dev
Luego abre la URL que indique Vite (normalmente http://localhost:5173).

3. Crear build de producción
npm run build

4. Previsualizar build
npm run preview

👥 Autor

Lopez Camilotto Joaquín