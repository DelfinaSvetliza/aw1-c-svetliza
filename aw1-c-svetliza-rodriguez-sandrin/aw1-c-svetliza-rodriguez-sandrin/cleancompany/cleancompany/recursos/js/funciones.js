export function renderizarProductos(_contenedor) {
    // Levantar y leer un Json
    // fetch('./recursos/datos/tienda.json')
    // fetch('../datos/tienda.json')
    // Asincronicidad

    // Solicito datos
    fetch('./recursos/json/productos.json')
        // Espero y luego convierto a objeto JS
        .then((respuesta) => {
            // console.log(respuesta)
            return respuesta.json()
        }).then(objetoDatos => {
            // console.log(objetoDatos)
            // JSON.parse / JSON.stringify
            // Variable vacia q ue contendra el HTML (formato string)
            renderizado(objetoDatos.productos, _contenedor)
            asignarEventoBotones(objetoDatos.productos) 

        })
}
function asignarEventoBotones(productos) {
    // botones
    // Poner a escuchar los botones de los productos "Agregar carrito"
    const productosEnCarro = []
    const botonesProductos = document.querySelectorAll('[data-btn-carro]')

    botonesProductos.forEach(boton => {
        // console.log(boton)
        boton.addEventListener('click', () => {
            const idProducto = parseInt(boton.dataset.id)
            // const produtoElegido = {
            //     id: idProducto,
            //     cantidad: 1
            // }
            // console.log(idProducto)
            // Arreglo
            // productosEnCarro.push(produtoElegido)
            productosEnCarro.push(idProducto)

            localStorage.setItem('carro',JSON.stringify(productosEnCarro))


            const productosGuardadtdos = JSON.parse(localStorage.getItem('carro'))
            console.log(productosGuardadtdos)
            // console.log(productosEnCarro)

            // Renderizar el carro
            const contenedorCarro = document.getElementById("contenedor-inicio")
            renderizarProductosCarro(productos, productosEnCarro, contenedorCarro)

            // Renderizar el contador cantidad
            // Referenciar el contenedor cantidad items (span)
            const contadorItems = document.getElementById('carro-cantidad-items')
            contadorItems.textContent = productosEnCarro.length
        })
    })
}
function renderizado(arregloProductos, contenedor) {
    const idMostrar = [1, 2, 3, 4]
    const productosMostrar = arregloProductos.filter(producto => idMostrar.includes(producto.id))

    let contenidoHTML = ''
    productosMostrar.forEach((producto) => {
        contenidoHTML += `
        <article >
                <img src="${producto.imagen}" alt=" " class="imgart">
                    <h4>
                        ${producto.nombre}
                        <br>
                        ${producto.precio}
                    </h4>
                    <button
                            class="productos__boton"
                            data-btn-carro
                            data-id="1"
                        >
                        <img
                        src="./recursos/imagenes/carrito.png"
                        alt="Icono carrito compras"
                    />
                           
                        </button>
            </article>
        `
    })
    // Insertamos el contenido
    contenedor.innerHTML = contenidoHTML
}


export function renderizarProductosCarro(_productos, _productosCarro, _contenedor) {
    // Filtrar arreglo original  con el arreglo de los ID
    const productosAgregados = _productos.filter((productoActual) => {
        return _productosCarro.includes(productoActual.id);
    })
    // Variable vacia q ue contendra el HTML (formato string)
    let contenidoHTML = ''
    productosAgregados.forEach((producto) => {
        contenidoHTML += `
         <article >
                <img src="${producto.imagen}" alt=" " class="imgart">
                    <h4>
                        ${producto.nombre}
                        <br>
                        ${producto.precio}
                    </h4>
                    <button
                            class="productos__boton"
                            data-btn-carro
                            data-id="1"
                        >
                        <img
                        src="./recursos/imagenes/carrito.png"
                        alt="Icono carrito compras"
                    />
                            Agregar carrito
                        </button>
            </article>
        `
    })
    // Insertamos el contenido
    _contenedor.innerHTML = contenidoHTML
}


