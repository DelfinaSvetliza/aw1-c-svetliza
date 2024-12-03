import { renderizarProductos } from './funciones.js';

// Referenciar el contenedor de productos
const contenedorLimpieza = document.getElementById('contenedor-productos');


    renderizarProductos('./recursos/json/productos.json', contenedorLimpieza, 'productoLimpieza');

