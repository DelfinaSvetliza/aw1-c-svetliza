import { renderizarProductos, renderizarProductosCarro } from "./funcionescat.js";
// import { helados } from "./helados.js";

// Referenciamos
const contenedor = document.getElementById('contenedor-categoria')

// Invocamos la función
renderizarProductos(contenedor)

// Referenciamos el elemento boton abrir popup
const botonAbrirPopup = document.getElementById('abrir-popup-categoria')

botonAbrirPopup.addEventListener("click", () => {
    const popupCarro = document.getElementById("popup-carro-categoria")
    if(popupCarro.open){
        popupCarro.close()
    }else{
        popupCarro.showModal()
    }
    // console.log('click')
})

// Poner a escuchar los botones de los productos "Agregar carrito"
const productosEnCarro = []
const botonesProductos = document.querySelectorAll('[data-btn-carro]') 

botonesProductos.forEach(boton => {
    // console.log(boton)
    boton.addEventListener('click',()=>{
        const idProducto = parseInt(boton.dataset.id)
        // const produtoElegido = {
        //     id: idProducto,
        //     cantidad: 1
        // }
        // console.log(idProducto)
        // Arreglo
        // productosEnCarro.push(produtoElegido)
        productosEnCarro.push(idProducto)
        // console.log(productosEnCarro)

        // Renderizar el carro
        const contenedorCarro = document.getElementById("contenedor-carro")
        renderizarProductosCarro(productos, productosEnCarro, contenedorCarro)

        // Renderizar el contador cantidad
        // Referenciar el contenedor cantidad items (span)
        const contadorItems = document.getElementById('carro-items-categoria')
        contadorItems.textContent = productosEnCarro.length
    })
})