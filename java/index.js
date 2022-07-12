function cotizadorServicio(){
    let servicioPerro= prompt("seleccione que servicio de perro desea alquilar, Servicio bajo escriba A, Servicio medio escriba B").toLowerCase();
    let valorBajo=3000;
    let valorMedio=5000;
    if (servicioPerro == "a" || servicioPerro== "b"){
        let diasAlquiler = Number  (prompt("cuantos dias quiere alquilar el perro:"));
    
            if (servicioPerro =="a"){
                
            let resultado=  (valorBajo * diasAlquiler);
            alert(`El valor del alquiler de un perro Servicio bajo por ${diasAlquiler} dias(s) es: ${resultado}$`);
            }
            else if(servicioPerro == "b"){
                let resultado=  (valorMedio * diasAlquiler);
                alert(`El valor del alquiler de un perro Servicio medio por ${diasAlquiler} dias(s) es: ${resultado}$`);;
            }
    }
         else  {
                alert("Por favor vuelva a seleccionar un servicio de perros");
            }
    }
    cotizadorServicio();


class Producto{
    constructor(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.vendido = false;
  }
  vender(){
    this.vendido = true;
  }
}
let productos = [];

productos.push(new Producto("serviciobase", 3000));
productos.push(new Producto("serviciointermedio", 3500));
productos.push(new Producto("serviciofull", 5000));

for(const item of productos){
    if(item.nombre === "serviciofull"){
        item.vender()
    }
    
  }

console.log(productos);



