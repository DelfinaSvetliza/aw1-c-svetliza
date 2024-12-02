import { renderizarProductos } from './funciones.js';

// Referenciar el contenedor de productos
const contenedorLimpieza = document.getElementById('contenedor-productos');

// Verificar si el contenedor existe antes de renderizar
if (contenedorLimpieza) {
    renderizarProductos('./recursos/json/productos.json', contenedorLimpieza, 'productoLimpieza');
} 
