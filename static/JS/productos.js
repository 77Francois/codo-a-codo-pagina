class Producto{

    constructor(id,producto,precio,categoria,imagen){
        this.id=id;
        this.producto=producto;
        this.precio=precio;
        this.categoria=categoria;
        this.imagen=imagen
    }
}

const cocina1 = new Producto(1,'mesada',150000,'cocina','https://images.pexels.com/photos/4253292/pexels-photo-4253292.jpeg');
let productossss=[cocina1];
console.log(productossss)