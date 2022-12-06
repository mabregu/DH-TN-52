// if ((clase == 3 || clase > 2) && clase < 1) {
//   console.log("Hola estamos en la clase " + clase + " aqui sigo poniendo cositas...");
// } else if (clase <= 3) {
//     console.log("hacemos otra cosa");
// } else {
//     console.log("Aqui cualquier cosa...");
// }

// el if ternario son 3 partes
// let result = !(4 < 0) ? "Es mayor" : "No es mayor";
// console.log(result);

let clase = 1;
switch (clase) {
  case 1:
    console.log("entro en el 1er caso");
    break;

  case 6:
    console.log("entro en el 2do caso");
    break;
  case 4:
    console.log("entro en el 3er caso");
    break;
  default:
    console.log("caso no contemplado");
    break;
}
