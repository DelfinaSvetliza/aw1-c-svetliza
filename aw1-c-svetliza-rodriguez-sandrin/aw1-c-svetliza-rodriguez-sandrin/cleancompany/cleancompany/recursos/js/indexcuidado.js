import { renderizarProductos } from './funciones.js';

// Referenciar el contenedor de productos
const contenedorCuidado = document.getElementById('contenedor-cuidado');

    renderizarProductos('./recursos/json/productos.json', contenedorCuidado, 'cuidado');

