import { renderizarProductos } from './funciones.js';

// Referenciar el contenedor de productos
const contenedorCategoria = document.getElementById('contenedor-categoria');

// Verificar si el contenedor existe antes de renderizar
if (contenedorCategoria) {
    renderizarProductos('./recursos/json/productos.json', contenedorCategoria, 'articulos');
} 