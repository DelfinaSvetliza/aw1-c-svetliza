import { renderizarProductos } from './funciones.js';

// Referenciar el contenedor de productos
const contenedorBolsa = document.getElementById('contenedor-bolsa');

// Verificar si el contenedor existe antes de renderizar

    renderizarProductos('./recursos/json/productos.json', contenedorBolsa, 'bolsas');

