class Producto {
    constructor(id, producto, precio, categoria, imagen) {
        this.id = id;
        this.producto = producto;
        this.precio = precio;
        this.categoria = categoria;
        this.imagen = imagen;
    }
}

function muestraProductos() {
    let productossss = JSON.parse(localStorage.getItem('productossss')) || [];
    const tbModificacion = document.querySelector('#tb-modificaciones');
    tbModificacion.innerHTML = '';
    
    productossss.forEach(prod => {
        const tr = `
            <tr>
                <td>${prod.producto}</td>
                <td>${prod.precio}</td>
                <td>${prod.categoria}</td>
                <td>
                    <img src="${prod.imagen}" alt="${prod.producto}" width="120px" height="149px">
                </td>
                <td>
                    <button class="boton-borrar" onclick="borrarProducto(${prod.id})">BORRAR</button>
                    <button class="boton-modificar" onclick="editarProducto(${prod.id})">MODIFICAR</button>
                </td>
            </tr>
        `;
        tbModificacion.insertAdjacentHTML('beforeend', tr);
    });
}

function guardaProductos(event) {
    event.preventDefault();
    const entradaProducto = document.querySelector('#campo-producto');
    const entradaPrecio = document.querySelector('#campo-valor');
    const entradaCategoria = document.querySelector('#campo-categoria');
    const entradaImagen = document.querySelector('#campo-imagen');
    const idProducto = document.querySelector('#id-producto').value;

    let productossss = JSON.parse(localStorage.getItem('productossss')) || [];

    if (idProducto) {
        // Editar producto existente
        productossss = productossss.map(prod => {
            if (prod.id == idProducto) {
                return new Producto(
                    prod.id,
                    entradaProducto.value,
                    entradaPrecio.value,
                    entradaCategoria.value,
                    entradaImagen.value
                );
            }
            return prod;
        });
    } else {
        // Agregar nuevo producto
        const newProducto = new Producto(
            productossss.length + 1,
            entradaProducto.value,
            entradaPrecio.value,
            entradaCategoria.value,
            entradaImagen.value
        );
        productossss.push(newProducto);
    }

    localStorage.setItem('productossss', JSON.stringify(productossss));
    muestraProductos();
    document.querySelector('#form-productos').reset();
    document.querySelector('#id-producto').value = '';
}

function borrarProducto(id) {
    let productossss = JSON.parse(localStorage.getItem('productossss')) || [];
    productossss = productossss.filter(prod => prod.id !== id);
    localStorage.setItem('productossss', JSON.stringify(productossss));
    muestraProductos();
}

function editarProducto(id) {
    let productossss = JSON.parse(localStorage.getItem('productossss')) || [];
    const producto = productossss.find(prod => prod.id === id);
    if (producto) {
        document.querySelector('#campo-producto').value = producto.producto;
        document.querySelector('#campo-valor').value = producto.precio;
        document.querySelector('#campo-categoria').value = producto.categoria;
        document.querySelector('#campo-imagen').value = producto.imagen;
        document.querySelector('#id-producto').value = producto.id;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    muestraProductos();
    document.querySelector('#form-productos').addEventListener('submit', guardaProductos);
});