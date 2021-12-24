// Código del cuadrado
console.group("Cuadrados");
function perimetroCuadrado(lado) {
  return lado * 4;
}

function areacuadrado(lado) {
  return lado * lado;
}
console.groupEnd();


// Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(l1, l2, b) {
  x = parseFloat(l1) + parseFloat(l2)  + parseFloat(b)
  return x;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.groupEnd();

// Aquí interactuamos con el HTML


function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}


function calcularPerimetrotriangulo(){

  const l1 = document.getElementById("lado1");
  const l2 = document.getElementById("lado2");
  const b  = document.getElementById("base");
  
  const la1 = l1.value;
  const la2 = l2.value;
  const ba  = b.value;
  const perimetro = perimetroTriangulo(la1,la2,ba);
 
 
  alert (perimetro);
  
  }

