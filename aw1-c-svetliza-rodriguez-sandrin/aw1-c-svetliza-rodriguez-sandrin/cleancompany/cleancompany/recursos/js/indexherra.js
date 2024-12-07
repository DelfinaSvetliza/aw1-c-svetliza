import { renderizado, renderizarProductosCarro } from "./funciones.js";

// Obtén los datos y realiza el renderizado
const contenedor = document.getElementById("contenedor-herramientas");
let productosEnCarro = JSON.parse(localStorage.getItem("carro")) || [];

function actualizarCarrito(productos) {
    const contenedorCarro = document.getElementById("contenedor-carro");
    if (productosEnCarro.length === 0) {
        contenedorCarro.innerHTML = "No hay productos en el carrito";
    } else {
        renderizarProductosCarro(productos, productosEnCarro, contenedorCarro);
    }
    actualizarContadorCarro(productosEnCarro);
}

function actualizarContadorCarro() {
    const contadorItems = document.getElementById("carro-contidad-items");
    const totalItems = productosEnCarro.reduce((total, item) => total + (item.cantidad || 0), 0);
    contadorItems.textContent = totalItems; 
}

function asignarEventoBotones(productos) {
    const botonesProductos = document.querySelectorAll('[data-btn-carro]');
    botonesProductos.forEach(boton => {
        boton.addEventListener("click", () => {
            const idProducto = parseInt(boton.dataset.id);
            const productoEnCarro = productosEnCarro.find(item => item.id === idProducto);

            if (productoEnCarro) {
                productoEnCarro.cantidad += 1;
            } else {
                productosEnCarro.push({ id: idProducto, cantidad: 1 });
            }

            localStorage.setItem("carro", JSON.stringify(productosEnCarro));
            actualizarCarrito(productos);
        });
    });
}

// Cargar los productos de la categoría de bolsas
fetch('./recursos/json/productos.json')
    .then(respuesta => respuesta.json())
    .then(datos => {
        renderizado(datos, "herramientas", contenedor);
        asignarEventoBotones(datos.productos);
    });

// Manejo del popup del carrito
const botonAbrirPopup = document.getElementById('abrir-popup-carro-herramienta');
botonAbrirPopup.addEventListener("click", () => {
    const popupCarro = document.getElementById("popup-carro-herramienta");
    popupCarro.open ? popupCarro.close() : popupCarro.showModal();
});

actualizarCarrito([]);
actualizarContadorCarro();
