import Animal from './Animal.js';
import Perro from "./Perro.js";

let perro = new Perro('Firulais', 'Perro', 'Marroncito', 'Callejero');
let ave = new Animal('Piolin', 'Ave', 'Amarillo')

console.log(perro);
console.log("el perrito se llama", perro.getName());

console.log('-----------------');

console.log(ave.getName())

console.log(ave.setName('Pajaro loco'));