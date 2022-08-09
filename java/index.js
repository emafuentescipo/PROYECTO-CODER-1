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


let saludo = document.getElementById("saludos");

let seccion = prompt("Ingresa la seccion deseada");

if(seccion === "premium"){
  saludo.innerHTML = "<h1>Bienvenido perrunos humanos</h1>";
}else if(seccion === "ayuda"){
  saludo.innerHTML = "<h1>Bienvenido a los perrunos humanos interesados</h1>";
}else{
  saludo.innerHTML = "<h1>Bienvenido a nuestra tienda</h1>";
}

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const DateTime = luxon.DateTime;
const now = DateTime.now();
console.log(now.setLocale('es').toLocaleString(DateTime.DATE_FULL));

const lista = document.getElementById("listado");
fetch("./data/data.json")
.then(response => response.json())
.then(productos => {
  productos.forEach(producto => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h4>${producto.nombre}</h4>
      <p>${producto.precio}</p>
      <p>Código: ${producto.id}</p>
      <hr />
    `;
    lista.append(li);
  });
});