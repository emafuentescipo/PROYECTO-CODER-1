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