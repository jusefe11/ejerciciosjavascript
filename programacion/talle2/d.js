function  preciofinal(a,b) {

      const x=100-b;

      const y= (a*x)/100;
    return y;
  }
  
// Aquí interactuamos con el HTML

function preciofinal1(){

    const producto = document.getElementById("producto");
    const la1 = producto.value;
    const  descuento  = document.getElementById("descuento");
    const la2 = descuento.value;

    
    const r = preciofinal(la1, la2);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + r;
   
    
    }
  