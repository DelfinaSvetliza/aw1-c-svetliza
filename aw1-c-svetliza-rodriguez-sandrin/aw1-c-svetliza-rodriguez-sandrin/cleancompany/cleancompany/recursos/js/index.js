import { renderizarProductos } from './funciones.js';

// Referenciar el contenedor de productos
const contenedorInicio = document.getElementById('contenedor-inicio');

// Verificar si el contenedor existe antes de renderizar
if (contenedorInicio) {
    renderizarProductos('./recursos/json/productos.json', contenedorInicio, 'inicio');
} 

