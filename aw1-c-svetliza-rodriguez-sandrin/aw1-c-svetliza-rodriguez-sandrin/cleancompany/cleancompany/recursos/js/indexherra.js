import { renderizarProductos } from './funciones.js';

// Referenciar el contenedor de productos
const contenedorHerramientas = document.getElementById('contenedor-herramientas');


    renderizarProductos('./recursos/json/productos.json', contenedorHerramientas, 'herramientas');
