export function renderizarProductos( rutaJson, contenedor, categoriaNombre) {
    // Cargar el archivo JSON
    fetch('./recursos/json/productos.json')
        .then(response => {
            return response.json();
        })
        .then(datos => {
            renderizado(datos, categoriaNombre, contenedor)
        })
}

function renderizado(datos, categoriaNombre, contenedor){
    const productos = datos.productos; // Arreglo de productos
            // Acceder a la categoría que se pasa como parámetro
            const categoriaIds = datos.categorias[0][categoriaNombre]; 

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
                        <h4>${producto.nombre}<br>$${producto.precio}</h4>
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
}





