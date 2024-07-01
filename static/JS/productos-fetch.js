const BASEURL = 'http://127.0.0.1:5000';

/**
 * Función para realizar una petición fetch con JSON.
 * @param {string} url - La URL a la que se realizará la petición.
 * @param {string} method - El método HTTP a usar (GET, POST, PUT, DELETE, etc.).
 * @param {Object} [data=null] - Los datos a enviar en el cuerpo de la petición.
 * @returns {Promise<Object>} - Una promesa que resuelve con la respuesta en formato JSON.
 */
async function fetchData(url, method, data = null) {
  const options = {
      method: method,
      headers: {
          'Content-Type': 'application/json',
      },
      body: data ? JSON.stringify(data) : null,  // Si hay datos, los convierte a JSON y los incluye en el cuerpo
  };
  try {   // hace la peticion al server y la captura
    const response = await fetch(url, options);  // Realiza la petición fetch
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();  // Devuelve la respuesta en formato JSON
  } catch (error) {
    console.error('Fetch error:', error);
    alert('An error occurred while fetching data. Please try again.');
  }
}

/**
 * Funcion que permite crear un elemento <tr> para la tabla de productos
 * por medio del uso de template string de JS.
 */
async function muestraProductos(){
    let product =  await fetchData(BASEURL+'/api/productos/', 'GET');
    const tableProducto = document.querySelector('#tabla-objeto-modificaciones #tb-modificaciones');
    tableProducto.innerHTML='';   /*limpio la tabla*/
    product.forEach((prod, index) => {
      let tr = `<tr>
                    <td>${prod.category}</td>
                    <td>${prod.name}</td> 
                    <td>${prod.price}</td>
                    <td>
                        <img src="${prod.image}" width="120px" height="149px">
                    </td>
                    <td>
                        <button class="boton-modificar" onclick='modificaProducto(${prod.id_product})'>MODIFICAR</button>
                        <button class="boton-borrar" onclick='borrarProducto(${prod.id_product})'>BORRAR</button>
                    
                    </td>
                  </tr>`;
      tableProducto.insertAdjacentHTML("beforeend",tr);
    });
}

/**
 * Función para comunicarse con el servidor para poder Crear o Actualizar
 * un registro de pelicula
 * @returns 
 */
async function guardar_base(){
    const idProducto = document.querySelector('#id-product').value;
    const category = document.querySelector('#campo-category').value;
    const name = document.querySelector('#campo-name').value;
    const price = document.querySelector('#campo-price').value;
    const image = document.querySelector('#campo-image').value;
    //VALIDACION DE FORMULARIO
    if (!category || !name || !price || !image) {
      Swal.fire({    // tengo que poner el de registro
          title: 'Error!',
          text: 'Campos incompletos.',
          icon: 'error',
          confirmButtonText: 'Cerrar'
      });
      return;
    }
    // Crea un objeto con los datos de la película
    const productData = {
        category: category,
        name: name,
        price: price,
        image: image,
    };
  let result = null;
  // Si hay un idProducto, realiza una petición PUT para actualizar el producto 
  if(idProducto!==""){
    result = await fetchData(`${BASEURL}/api/productos/${idProducto}`, 'PUT', productData);
  }else{
    // Si no hay idProducto, realiza una petición POST para crear un nuevo producto
    result = await fetchData(`${BASEURL}/api/productos/`, 'POST', productData);
  }
  
  const formProducto = document.querySelector('#form-productos');
  formProducto.reset();
  Swal.fire({    // usar el de registro exitoso
    title: 'Exito!',
    text: result.message,
    icon: 'success',
    confirmButtonText: 'Cerrar'
  })
  muestraProductos();
}


/**
 * Function que permite eliminar una pelicula del array del localstorage
 * de acuedo al indice del mismo
 * @param {number} id_product posición del array que se va a eliminar
 */
function borrarProducto(id_product){
    Swal.fire({
        title: "Esta seguro de eliminar la pelicula?",
        showCancelButton: true,
        confirmButtonText: "Eliminar",
    }).then(async (result) => {
        if (result.isConfirmed) {
          let response = await fetchData(`${BASEURL}/api/productos/${id_product}`, 'DELETE');
          muestraProductos();
          Swal.fire(response.message, "", "success");
        }
    });
    
}

/**
 * Function que permite cargar el formulario con los datos de la pelicula 
 * para su edición
 * @param {number} id_product Id del producto que se quiere editar
 */
async function modificaProducto(id_product){
    //Buscamos en el servidor la pelicula de acuerdo al id
    let response = await fetchData(`${BASEURL}/api/productos/${id_product}`, 'GET');
    const idProducto = document.querySelector('#id-product');
    const category = document.querySelector('#campo-category');
    const name = document.querySelector('#campo-name');
    const price = document.querySelector('#campo-price');
    const image = document.querySelector('#campo-image');
    
    idProducto.value = response.id_product;
    category.value = response.category;
    name.value = response.name; 
    price.value = response.price;
    image.value = response.image;
}

// Escuchar el evento 'DOMContentLoaded' que se dispara cuando el 
// contenido del DOM ha sido completamente cargado y parseado.
document.addEventListener('DOMContentLoaded',function(){
    const btnGuardaBase = document.querySelector('#btn-agregado');
    // // //ASOCIAR UNA FUNCION AL EVENTO CLICK DEL BOTON
    btnGuardaBase.addEventListener('click', guardar_base());
    muestraProductos();
});
   