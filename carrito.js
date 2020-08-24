class Prenda{
    constructor(talle,color,precio){
        this.talle = talle;
        this.color = color;
        this.precio = precio;
        
    }
}


let camiseta = new Prenda ("S","blanca",12.99);
let vestido_jean = new Prenda ("M","jean", 23.99);
let vestido_amarillo = new Prenda ("M","amarillo", 25.50);
let vestido_lunares = new Prenda("S","Negro", 18.99);
let vestido_camisero = new Prenda("S","beige", 15.99);
let vestido_blanco = new Prenda("S","blanco", 13.50);

let carrito_compras = new Array;



function comprar_camiseta(){

    carrito_compras.push(camiseta);
  
    alert ("Has agregado a tu carrito una camiseta blanca: € " + camiseta.precio);
}



function comprar_vestido_jean(){

    carrito_compras.push(vestido_jean);
    
    alert( "Has agregado a tu carrito un vestido de Jean: € " + vestido_jean.precio);
}



function comprar_vestido_amarillo(){

        carrito_compras.push(vestido_amarillo);

    alert("Has agregado a tu carrito un vestido: € " + vestido_amarillo.precio);
}



function comprar_vestido_lunares(){
  
    carrito_compras.push(vestido_lunares);
 
    alert("Has agregado a tu carrito un vestido a lunares: € " + vestido_lunares.precio);
}



function comprar_vestido_camisero(){

        carrito_compras.push(vestido_camisero);

    alert("Has agregado a tu carrito un vestido camisero: € " + vestido_camisero.precio);
}



function comprar_vestido_blanco(){

        carrito_compras.push(vestido_blanco);
    
    alert("Has agregado a tu carrito un vestido blanco: € " + vestido_blanco.precio);
}



function carrito_final(){
    
    let items ="";
    let compra_final =0;
    
    for(let i = 0; i < carrito_compras.length; i++){
        
        items+= "Talla: " + carrito_compras[i].talle + "," + "Color: " + carrito_compras[i].color + "," + carrito_compras[i].precio + "\n";
        compra_final+= carrito_compras[i].precio;
    }
    
    //alert("Tienes en tu carrito: " + "\n" + "\n" + items + "\n" + "El total de tu compra es de €: " + Math.round(compra_final));
    $('#ventanaModal').modal();
}



    $(function(){

        $('#ventanaCarrito').on('click',function(){
            $('#ventanaModal').modal();
        });
    });

