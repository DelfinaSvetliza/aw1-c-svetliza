import { renderizarProductos } from './funciones.js';

// Referenciar el contenedor de productos
const contenedorInicio = document.getElementById('contenedor-inicio');


    renderizarProductos('./recursos/json/productos.json', contenedorInicio, 'inicio');


