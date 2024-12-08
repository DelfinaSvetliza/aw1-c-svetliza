// Renderiza los productos según la categoría
export function renderizado(datos, categoriaNombre, contenedor) {
    const productos = datos.productos;
    const categoriaIds = datos.categorias[0][categoriaNombre];

    const productosMostrar = productos.filter(producto =>
        categoriaIds.includes(producto.id)
    );
    if (productosMostrar.length === 0) {
        console.log('no hay productos');
    }

    const contenidoHTML = productosMostrar.map(producto => `
        <article>
            <img src="${producto.imagen}" alt="${producto.nombre}" class="imgart">
            <h4>${producto.nombre}<br>$${producto.precio}</h4>
            <button
                class="productos__boton"
                data-btn-carro
                data-id="${producto.id}"
            >
                <img src="./recursos/imagenes/carrito.png" alt="Carrito" />
            </button>
        </article>
    `).join("");

    contenedor.innerHTML = contenidoHTML;
}

// Renderiza los productos dentro del carrito
export function renderizarProductosCarro(productos, productosCarro, contenedor) {
    const productosAgregados = productos.filter(producto =>
        productosCarro.some(item => item.id === producto.id)
    );

    const contenidoHTML = productosAgregados.map(producto => {
        const itemCarro = productosCarro.find(item => item.id === producto.id);
        return `
            <li>
                <span>${producto.nombre}</span> - 
                <span>${itemCarro.cantidad} x $${producto.precio}</span> = 
                <span>$${(itemCarro.cantidad * producto.precio).toFixed(2)}</span>
                <button data-id="${producto.id}" class="eliminar-producto">Eliminar</button>
            </li>
        `;
    }).join("");

    const totalPrecio = productosAgregados.reduce((total, producto) => {
        const itemCarro = productosCarro.find(item => item.id === producto.id);
        return total + (itemCarro.cantidad * producto.precio);
    }, 0);

    contenedor.innerHTML = contenidoHTML;
    contenedor.innerHTML += `<p>Total: $${totalPrecio.toFixed(2)}</p>`;

    asignarEventosEliminar(productos, productosCarro, contenedor);
}

// Asigna eventos a los botones de eliminar producto
function asignarEventosEliminar(productos, productosCarro, contenedor) {
    const botonesEliminar = contenedor.querySelectorAll('.eliminar-producto');
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', () => {
            const idProducto = boton.dataset.id;
            eliminarProducto(idProducto, productos, productosCarro, contenedor);
        });
    });
}

// Elimina un producto del carrito
export function eliminarProducto(idProducto, productos, productosCarro, contenedor) {
    const indice = productosCarro.findIndex(item => item.id === parseInt(idProducto));

    if (indice !== -1) {
        productosCarro.splice(indice, 1);
        localStorage.setItem("carro", JSON.stringify(productosCarro));

        renderizarProductosCarro(productos, productosCarro, contenedor);
        actualizarContadorCarro(productosCarro); 
    }
}






