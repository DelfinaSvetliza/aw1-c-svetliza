import { renderizarProductos } from './funciones.js';

// Referenciar el contenedor de productos
const contenedorCuidado = document.getElementById('contenedor-cuidado');

// Verificar si el contenedor existe antes de renderizar
if (contenedorCuidado) {
    renderizarProductos('./recursos/json/productos.json', contenedorCuidado, 'cuidado');
} else {
    console.error('No se encuentra el contenedor de productos');
}
