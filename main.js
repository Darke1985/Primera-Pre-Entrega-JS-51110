let producto1 = "Hamburguesa";
let producto2 = "Empanadas";
let producto3 = "Sandwchis";
let producto4 = "Coca-Cola";
let producto5 = "Sprite";
let precio1 = 1500;
let precio2 = 1000;
let precio3 = 2000;
let precio4 = 800;
let precio5 = 850;

function mostrarMenu(){
    console.log("PRODUCTOS DISPONIBLES:");
    console.log("1. " + producto1 +": " + precio1 + "ARS");
    console.log("2. " + producto2 +": " + precio2 + "ARS");
    console.log("3. " + producto3 +": " + precio3 + "ARS");
    console.log("4. " + producto4 +": " + precio4 + "ARS");
    console.log("5. " + producto5 +": " + precio5 + "ARS");
}
mostrarMenu()

function obtenerSeleccion() {
    let seleccion = prompt("Por favor, seleccione un producto (ingrese el número correspondiente) \n 1. Hamburguesa\n 2. Empanadas\n 3. Sandwchis\n 4. Coca-Cola\n 5. Sprite\n Escriba 'ya' para completar su orden");
        while (seleccion !== "1" && seleccion !== "2" && seleccion !== "3" && seleccion !== "4" && seleccion !== "5" && seleccion !== "ya") {
        seleccion = prompt("Selección inválida. Por favor, seleccione un producto (ingrese el número correspondiente), o escriba 'ya' si ha terminado:");
        }
        return seleccion; 
}

obtenerSeleccion()

let seleccion = obtenerSeleccion();
//let total = 0;

while (seleccion !== "ya") {
    switch (seleccion) {
      case "1":
        console.log("Usted a seleccionado " + producto1 + ":" + precio1 + "ARS" );
        //total += producto1.precio;
        break;
      case "2":
        console.log("Usted a seleccionado " + producto2 + ":" + precio2 + "ARS" );

        //total += producto2.precio;
        break;
      case "3":
        console.log("Usted a seleccionado " + producto3 + ":" + precio3 + "ARS" );

        //total += producto3.precio;
        break;
      case "4":
        console.log("Usted a seleccionado " + producto4 + ":" + precio4 + "ARS" );

        //total += producto4.precio;
        break;
      case "5":
        console.log("Usted a seleccionado " + producto5 + ":" + precio5 + "ARS" );

        //total += producto5.precio;
        break;  
    }
    seleccion = obtenerSeleccion();
  }