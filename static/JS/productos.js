class Producto {
    constructor(id_product, category, name, price, image) {
        this.id_product = id_product;
        this.category = category;
        this.name = name;
        this.price = price;
        this.image = image;
    }
}

function muestraProductos() {
    let productossss = JSON.parse(localStorage.getItem('productossss')) || [];
    const tbModificacion = document.querySelector('#tb-modificaciones');
    tbModificacion.innerHTML = '';
    
    productossss.forEach(prod => {
        const tr = `
            <tr>
                <td>${prod.category}</td>
                <td>${prod.name}</td>
                <td>${prod.price}</td>
                <td>
                    <img src="${prod.image}" alt="${prod.name}" width="120px" height="149px">
                </td>
                <td>
                    <button class="boton-borrar" onclick="borrarProducto(${prod.id_product})">BORRAR</button>
                    <button class="boton-modificar" onclick="editarProducto(${prod.id_product})">MODIFICAR</button>
                </td>
            </tr>
        `;
        tbModificacion.insertAdjacentHTML('beforeend', tr);
    });
}

function guardaProductos(event) {
    event.preventDefault();
    const entradaCategory = document.querySelector('#campo-category');
    const entradaName = document.querySelector('#campo-name');
    const entradaPrice = document.querySelector('#campo-price');
    const entradaImage = document.querySelector('#campo-image');
    const idProducto = document.querySelector('#id-product').value;

    let productossss = JSON.parse(localStorage.getItem('productossss')) || [];

    if (idProducto) {
        // Editar producto existente
        productossss = productossss.map(prod => {
            if (prod.id_product == idProducto) {
                return new Producto(
                    prod.id_product,
                    entradaCategory.value,
                    entradaName.value,
                    entradaPrice.value,
                    entradaImage.value
                );
            }
            return prod;
        });
    } else {
        // Agregar nuevo producto
        const newProducto = new Producto(
            productossss.length + 1,
            entradaCategory.value,
            entradaName.value,
            entradaPrice.value,
            entradaImage.value
        );
        productossss.push(newProducto);
    }

    localStorage.setItem('productossss', JSON.stringify(productossss));
    muestraProductos();
    document.querySelector('#form-productos').reset();
    document.querySelector('#id-product').value = '';
}

function borrarProducto(id_product) {
    let productossss = JSON.parse(localStorage.getItem('productossss')) || [];
    productossss = productossss.filter(prod => prod.id_product !== id_product);
    localStorage.setItem('productossss', JSON.stringify(productossss));
    muestraProductos();
}

function editarProducto(id_product) {
    let productossss = JSON.parse(localStorage.getItem('productossss')) || [];
    const producto = productossss.find(prod => prod.id_product === id_product);
    if (producto) {
        document.querySelector('#campo-category').value = producto.category;
        document.querySelector('#campo-name').value = producto.name;
        document.querySelector('#campo-price').value = producto.price;
        document.querySelector('#campo-image').value = producto.image;
        document.querySelector('#id-product').value = producto.id_product;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    muestraProductos();
    document.querySelector('#form-productos').addEventListener('submit', guardaProductos);
});