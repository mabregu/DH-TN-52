let active = true;
active = false;
console.log("active", active);

let age: number = 25;
age = 10;
// age = "34"; // Error

let name2: string = "Rocio";

console.log(name2);

type Person = {
    name: string;
    age?: number; // ? este es opcional
};
let persona2 = "peep"

let colores: string[] = [];
colores = [
    persona2
];