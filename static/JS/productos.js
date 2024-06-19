class Producto{

    constructor(id,producto,precio,categoria,imagen){
        this.id=id;
        this.producto=producto;
        this.precio=precio;
        this.categoria=categoria;
        this.imagen=imagen;
    }
}

const cocina1 = new Producto(1,'mesada',150000,'cocina','https://images.pexels.com/photos/4253292/pexels-photo-4253292.jpeg');  // solo se creo para hacer pruebas
const cocina2 = new Producto(2,'anafes',300856,'cocina','https://images.pexels.com/photos/6937479/pexels-photo-6937479.jpeg');   // solo se creo para hacer pruebas
let productossss=[cocina1,cocina2];   //solo por ahora, hago que el servidor me trae estos datos ya cargados

console.log(productossss)

function muestraProductos(){
    const tbModificacion = document.querySelector('#tb-modificaciones');  //BUSQUE EL ELEMENTO HTML donde quiero insertar los productos

    // construllo lo que me voy a tbody en formato string
    productossss.forEach(prod => {
        const tr = `
                    <tr>
                        <td>${prod.producto}</td>
                        <td>${prod.precio}</td>
                        <td>${prod.categoria}</td>
                        <td>
                            <img src="${prod.imagen}" alt="${prod.producto}" width="80px" height="129px">
                        </td>
                        <td>
                            <button class="boton-borrar">BORRAR</button>
                            <button class="boton-modificar">MODIFICAR</button>
                        </td>
                    </tr> 
        `;
        tbModificacion.insertAdjacentHTML('beforeend',tr);
    });

    // para uno solo
    // const tr = `      
    //             <tr>
    //                 <td>${productossss.producto}</td>
    //                 <td>${productossss.precio}</td>
    //                 <td>${productossss.categoria}</td>
    //                 <td>
    //                     <img src = "${productossss.imagen}" alt="${productossss.producto}" width="30%">
    //                 </td>
    //                 <td>
    //                     <button class="boton-borrar">BORRAR</button>
    //                 </td>
    //             </tr>
    // `;
    // tbModificacion.insertAdjacentHTML("beforeend", tr);

}

muestraProductos();