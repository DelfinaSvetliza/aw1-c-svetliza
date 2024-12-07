import { renderizado, renderizarProductosCarro } from "./funciones.js";

const contenedor = document.getElementById("contenedor-inicio");
let productosEnCarro = JSON.parse(localStorage.getItem("carro"));

function actualizarContadorCarro() {
    const contadorItems = document.getElementById("carro-contidad-items");
    const totalItems = productosEnCarro.reduce((total, item) => total + (item.cantidad || 0), 0);
    contadorItems.textContent = totalItems; 
}

function actualizarCarrito(productos) {
    const contenedorCarro = document.getElementById("contenedor-carro");
    if (productosEnCarro.length === 0) {
        contenedorCarro.innerHTML = "No hay productos en el carrito";
    } else {
        renderizarProductosCarro(productos, productosEnCarro, contenedorCarro);
    }
    actualizarContadorCarro(productosEnCarro);
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

// Llamar a la función de renderizado al cargar la página
fetch('./recursos/json/productos.json')
    .then(respuesta => respuesta.json())
    .then(datos => {
        renderizado(datos, "inicio", contenedor);
        asignarEventoBotones(datos.productos);
    });

// Manejo del popup del carrito
const botonAbrirPopup = document.getElementById('abrir-popup-carro');
botonAbrirPopup.addEventListener("click", () => {
    const popupCarro = document.getElementById("popup-carro");
    popupCarro.open ? popupCarro.close() : popupCarro.showModal();
});

actualizarCarrito([]);
actualizarContadorCarro();





    


