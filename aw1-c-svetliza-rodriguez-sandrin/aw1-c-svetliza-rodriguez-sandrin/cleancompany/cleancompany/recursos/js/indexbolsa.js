import { renderizarProductos } from './funciones.js';

// Referenciar el contenedor de productos
const contenedorBolsa = document.getElementById('contenedor-bolsa');

// Verificar si el contenedor existe antes de renderizar
if (contenedorBolsa) {
    renderizarProductos('./recursos/json/productos.json', contenedorBolsa, 'bolsas');
} else {
    console.error('No se encuentra el contenedor de productos');
}
