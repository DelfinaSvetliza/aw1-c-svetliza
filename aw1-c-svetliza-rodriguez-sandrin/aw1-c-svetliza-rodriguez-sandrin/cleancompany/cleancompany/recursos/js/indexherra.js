import { renderizarProductos } from './funciones.js';

// Referenciar el contenedor de productos
const contenedorHerramientas = document.getElementById('contenedor-herramientas');

// Verificar si el contenedor existe antes de renderizar
if (contenedorHerramientas) {
    renderizarProductos('./recursos/json/productos.json', contenedorHerramientas, 'herramientas');
} 