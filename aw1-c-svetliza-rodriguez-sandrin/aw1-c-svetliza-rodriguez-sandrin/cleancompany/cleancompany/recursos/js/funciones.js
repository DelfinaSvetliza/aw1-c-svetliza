export function renderizarProductos(rutaJson, contenedor, categoriaNombre) {
    // Cargar el archivo JSON
    fetch(rutaJson)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al cargar JSON: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const productos = data.productos; // Arreglo de productos
            // Acceder a la categoría que se pasa como parámetro
            const categoriaIds = data.categorias[0][categoriaNombre]; 

            // Filtrar productos por los IDs de la categoría
            const productosMostrar = productos.filter(producto =>
                categoriaIds.includes(producto.id)
            );

            // Generar el HTML de los productos
            let contenidoHTML = '';
            productosMostrar.forEach(producto => {
                contenidoHTML += `
                    <article>
                        <img src="${producto.imagen}" alt="${producto.nombre}" class="imgart">
                        <h4>${producto.nombre}<br>$${producto.precio.toFixed(2)}</h4>
                        <button
                            class="productos__boton"
                            data-btn-carro
                            data-id="${producto.id}"
                        >
                            <img src="./recursos/imagenes/carrito.png" alt="Carrito" />
                            
                        </button>
                    </article>
                `;
            });

            // Insertar en el contenedor
            contenedor.innerHTML = contenidoHTML;

            // Asignar eventos a los botones
            asignarEventoBotones(productos);
        })
        .catch(error => {
            console.error('Error en renderizarProductos:', error);
        });
}

function asignarEventoBotones(productos) {
    const productosEnCarro = JSON.parse(localStorage.getItem('carro')) || [];
    const botonesProductos = document.querySelectorAll('[data-btn-carro]');

    botonesProductos.forEach(boton => {
        boton.addEventListener('click', () => {
            const idProducto = parseInt(boton.dataset.id);
            if (!productosEnCarro.includes(idProducto)) {
                productosEnCarro.push(idProducto);
                localStorage.setItem('carro', JSON.stringify(productosEnCarro));
            }
            console.log('Productos en el carrito:', productosEnCarro);
        });
    });
}




